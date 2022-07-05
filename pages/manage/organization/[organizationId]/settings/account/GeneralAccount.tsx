/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-useless-escape */
import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
import { useCallback } from 'react';
// @mui
import {
  Box,
  Grid,
  Card,
  Stack,
  Typography,
  TextField,
  FormHelperText,
  Skeleton,
  MenuItem,
  Select,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// utils
import { fData } from 'src/utils/formatNumber';
import { UploadAvatar } from 'src/components/upload';
import { Controller, useForm } from 'react-hook-form';

import { useRouter } from 'next/router';
import axios from 'axios';
import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';
import { getNames } from 'country-list';
import { useUploadImageMutation } from '@generated/graphql';
import generateErrorMessage from '@utils/errorMessage';
import { useAppSelector, useAppDispatch } from '@redux/hooks';
import { getOrganizationData, resetError } from '@redux/slices/organization/organizationSlice';

// ----------------------------------------------------------------------

type FormValuesProps = {
  name: string;
  email: string;
  photoURL: File | any;
  phoneNumber: string | null;
  country: string | null;
  address: string | null;
  state: string | null;
  city: string | null;
  zipCode: string | null;
  about: string | null;
};

export default function AccountGeneral() {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

  const [, uploadImage] = useUploadImageMutation();

  const currentUser = useAppSelector(state => state.currentUser);
  const organization = useAppSelector(state => state.organization);

  const { organizationData, isError, isLoading, errorMessage } = organization;

  const UpdateUserSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
    email: Yup.string().required('Email is required').email('Must be a valid email'),
    phoneNumber: Yup.string().required('Phone number is required'),
    zipCode: Yup.string().matches(/^[0-9]*$/, 'Must be a valid Zip Code'),
  });

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(UpdateUserSchema),
    defaultValues: {
      name: organizationData?.name || '',
      email: organizationData?.contactEmail || '',
      photoURL: organizationData?.aboutPicture || '',
      phoneNumber: organizationData?.contactPhone || '',
      country: organizationData?.country || '',
      address: organizationData?.address || '',
      state: organizationData?.state || '',
      city: organizationData?.city || '',
      zipCode: organizationData?.zipCode || '',
      about: organizationData?.aboutHeading || '',
    },
  });

  const {
    setValue,
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = methods;

  useEffect(() => {
    dispatch(resetError());
    dispatch(getOrganizationData(router.query.organizationId as string));
  }, []);

  useEffect(() => {
    if (isError && errorMessage) {
      enqueueSnackbar('Failed to get data: ' + errorMessage, { variant: 'error' });
    }
  }, [isError, errorMessage]);

  useEffect(() => {
    if (organizationData) {
      reset({
        name: organizationData?.name || '',
        email: organizationData?.contactEmail || '',
        photoURL: organizationData?.aboutPicture
          ? organizationData?.aboutPicture.indexOf('http') > -1
            ? `${organizationData?.aboutPicture}`
            : `${publicRuntimeConfig.bunny.cdn.urlMedia}/${organizationData?.aboutPicture}`
          : '',
        phoneNumber: organizationData?.contactPhone || '',
        country: organizationData?.country || '',
        address: organizationData?.address || '',
        state: organizationData?.state || '',
        city: organizationData?.city || '',
        zipCode: organizationData?.zipCode || '',
        about: organizationData?.aboutHeading || '',
      });
    }
  }, [organizationData]);

  const getBase64 = async file => {
    const src = await new Promise<string>(resolve => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const encoded = reader.result!.toString().replace(/^data:(.*,)?/, '');
        resolve(encoded);
      };
    });
    return src;
  };

  const onSubmit = async (data: FormValuesProps) => {
    try {
      const { name, email, address, about, city, country, zipCode, state, phoneNumber } = data;
      const variables: any = {
        name,
        contactEmail: email,
        contactPhone: phoneNumber,
        aboutBody: organizationData.aboutBody,
      };
      if (data.address) variables.address = address;
      if (data.zipCode) variables.zipCode = zipCode;
      if (data.country) variables.country = country;
      if (data.state) variables.state = state;
      if (data.city) variables.city = city;
      if (data.about) variables.aboutHeading = about;

      if (data?.photoURL?.name) {
        const imageExtension = `.${data?.photoURL?.name.split('.').pop()}`;
        const imageUrl = await getBase64(data?.photoURL);
        const imageName = `${data?.photoURL?.name?.replace(imageExtension, '')}` || '';
        const uploadImageOrgVars = {
          imageUrl,
          imageName,
          imagePrefix: `organization-cms/${router.query.organizationId}/`,
          fullName: organizationData?.username,
          imageExtension,
          currentPhoto: organizationData?.aboutPicture ?? '',
        };
        const uploadedImage = await uploadImage(uploadImageOrgVars);
        if (uploadedImage.data?.uploadImage) {
          variables.aboutPicture = uploadedImage.data.uploadImage!.path!;
          await axios.patch(`${publicRuntimeConfig.tmra.raise.url}/users/updateUserProfile`, {
            imageUrl: uploadedImage.data.uploadImage!.path!,
            userId: currentUser?.id,
          });
        } else {
          console.error(
            'Error uploading image',
            data?.photoURL?.name,
            ':',
            uploadedImage.error?.message,
          );
          alert(`Error uploading image ${imageName}`);
          return;
        }
      }

      await axios.patch(
        `${publicRuntimeConfig.tmra.raise.url}/orgs/${router.query.organizationId}`,
        variables,
      );
      enqueueSnackbar('Successfully update your account', { variant: 'success' });
      dispatch(getOrganizationData(router.query.organizationId as string));
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Failed to update your account: ' + generateErrorMessage(error), {
        variant: 'error',
      });
    }
  };

  const handleDrop = useCallback(
    acceptedFiles => {
      const file = acceptedFiles[0];

      if (file) {
        setValue(
          'photoURL',
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        );
      }
    },
    [setValue],
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ py: 10, px: 3, textAlign: 'center' }}>
            <Controller
              name="photoURL"
              control={control}
              render={({ field, fieldState: { error } }) => {
                const checkError = !!error && !field.value;
                return isLoading ? (
                  <>
                    <Box display="flex" justifyContent="center" flexDirection="row">
                      <Skeleton variant="circular" width={150} height={150} />
                    </Box>
                    <Skeleton />
                    <Skeleton />
                  </>
                ) : (
                  <div>
                    <UploadAvatar
                      error={checkError}
                      file={field.value}
                      accept="image/*"
                      maxSize={3145728}
                      onDrop={handleDrop}
                      caption={
                        <Typography
                          variant="caption"
                          sx={{
                            mt: 2,
                            mx: 'auto',
                            display: 'block',
                            textAlign: 'center',
                            color: 'text.secondary',
                          }}
                        >
                          Allowed *.jpeg, *.jpg, *.png, *.gif
                          <br /> max size of {fData(3145728)}
                        </Typography>
                      }
                    />
                    {checkError && (
                      <FormHelperText error sx={{ px: 2, textAlign: 'center' }}>
                        {error.message}
                      </FormHelperText>
                    )}
                  </div>
                );
              }}
            />
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Box
              sx={{
                display: 'grid',
                rowGap: isLoading ? 0 : 3,
                columnGap: 2,
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
              }}
            >
              <Controller
                name="name"
                control={control}
                render={({ field, fieldState }) =>
                  isLoading ? (
                    <Box sx={{ height: '56px' }}>
                      <Skeleton width="100%" height="100%" />
                    </Box>
                  ) : (
                    <TextField
                      fullWidth
                      label="Name"
                      {...field}
                      error={Boolean(fieldState.invalid && fieldState.error)}
                      helperText={fieldState?.error?.message}
                    />
                  )
                }
              />
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) =>
                  isLoading ? (
                    <Box sx={{ height: '56px' }}>
                      <Skeleton width="100%" height="100%" />
                    </Box>
                  ) : (
                    <TextField
                      fullWidth
                      label="Email"
                      {...field}
                      error={Boolean(fieldState.invalid && fieldState.error)}
                      helperText={fieldState?.error?.message}
                    />
                  )
                }
              />
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field, fieldState }) =>
                  isLoading ? (
                    <Box sx={{ height: '56px' }}>
                      <Skeleton width="100%" height="100%" />
                    </Box>
                  ) : (
                    <TextField
                      fullWidth
                      label="Phone Number"
                      {...field}
                      error={Boolean(fieldState.invalid && fieldState.error)}
                      helperText={fieldState?.error?.message}
                    />
                  )
                }
              />
              <Controller
                name="address"
                control={control}
                render={({ field, fieldState }) =>
                  isLoading ? (
                    <Box sx={{ height: '56px' }}>
                      <Skeleton width="100%" height="100%" />
                    </Box>
                  ) : (
                    <TextField
                      fullWidth
                      label="Address"
                      {...field}
                      error={Boolean(fieldState.invalid && fieldState.error)}
                      helperText={fieldState?.error?.message}
                    />
                  )
                }
              />
              <Controller
                name="country"
                control={control}
                render={({ field, fieldState }) =>
                  isLoading ? (
                    <Box sx={{ height: '56px' }}>
                      <Skeleton width="100%" height="100%" />
                    </Box>
                  ) : (
                    <Select
                      label="Country"
                      sx={{ width: '100%' }}
                      {...field}
                      placeholder="Country"
                      error={Boolean(fieldState.invalid && fieldState.error)}
                    >
                      <MenuItem value="none" selected>
                        Country
                      </MenuItem>
                      {getNames().map(item => (
                        <MenuItem key={item} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                  )
                }
              />
              <Controller
                name="state"
                control={control}
                render={({ field, fieldState }) =>
                  isLoading ? (
                    <Box sx={{ height: '56px' }}>
                      <Skeleton width="100%" height="100%" />
                    </Box>
                  ) : (
                    <TextField
                      fullWidth
                      label="State/Region"
                      {...field}
                      error={Boolean(fieldState.invalid && fieldState.error)}
                      helperText={fieldState?.error?.message}
                    />
                  )
                }
              />
              <Controller
                name="city"
                control={control}
                render={({ field, fieldState }) =>
                  isLoading ? (
                    <Box sx={{ height: '56px' }}>
                      <Skeleton width="100%" height="100%" />
                    </Box>
                  ) : (
                    <TextField
                      fullWidth
                      label="City"
                      {...field}
                      error={Boolean(fieldState.invalid && fieldState.error)}
                      helperText={fieldState?.error?.message}
                    />
                  )
                }
              />
              <Controller
                name="zipCode"
                control={control}
                render={({ field, fieldState }) =>
                  isLoading ? (
                    <Box sx={{ height: '56px' }}>
                      <Skeleton width="100%" height="100%" />
                    </Box>
                  ) : (
                    <TextField
                      fullWidth
                      label="Zip Code"
                      {...field}
                      error={Boolean(fieldState.invalid && fieldState.error)}
                      helperText={fieldState?.error?.message}
                    />
                  )
                }
              />
            </Box>

            <Stack spacing={3} alignItems="flex-end" sx={{ mt: isLoading ? 0 : 3 }}>
              <Controller
                name="about"
                control={control}
                render={({ field, fieldState }) =>
                  isLoading ? (
                    <Box sx={{ height: '125px', width: '100%' }}>
                      <Skeleton width="100%" height="100%" />
                    </Box>
                  ) : (
                    <TextField
                      fullWidth
                      label="About"
                      multiline
                      rows={4}
                      {...field}
                      error={Boolean(fieldState.invalid && fieldState.error)}
                      helperText={fieldState?.error?.message}
                    />
                  )
                }
              />
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                Save Changes
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </form>
  );
}
