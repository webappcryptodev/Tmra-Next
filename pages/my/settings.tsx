import LoadingScreen from '@components/LoadingScreen';
import Affiliation from '@components/_my/index/affiliation';
import AllDonations from '@components/_my/donations/allDonations';
// layouts
import MyDashboardLayout from '@layouts/dashboard/MyDashboardLayout';
import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Container,
  FormControl,
  Grid,
  Icon,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
  Snackbar,
  Stack,
  styled,
  TextField,
} from '@mui/material';
import { app } from '@redux/slices/auth/realm';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useEffect } from 'react';
import { PhotoCamera, DeleteForever } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
// components
import Page from 'src/components/Page';
// hooks
import useSettings from 'src/hooks/useSettings';
import { gql, useQuery, useMutation } from 'urql';
import { useAppSelector } from '@redux/hooks';
import Scrollbar from '@components/Scrollbar';
import config from '@configuration';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import dataCountry from 'src/components/_external-pages/gift/phone_prefix.json';
import axios from 'axios';
import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';

// ----------------------------------------------------------------------

const getDonor = gql`
  query getDonor($_id: String!) {
    donor(query: { ownerUserId: $_id }) {
      _id
      country
      address
      state
      profilePic
    }
    user(query: { _id: $_id }) {
      firstname
      lastname
    }
  }
`;

const updatePicture = gql`
  mutation updatePicture($profilePic: String!, $ownerUserId: String!) {
    updateOneDonor(query: { ownerUserId: $ownerUserId }, set: { profilePic: $profilePic }) {
      profilePic
    }
  }
`;

const uploadImage = gql`
  mutation upImage(
    $imageName: String!
    $imageUrl: String!
    $imagePrefix: String!
    $imageExtension: String!
    $fullName: String!
    $currentPhoto: String!
  ) {
    uploadImage(
      input: {
        imageUrl: $imageUrl
        imageName: $imageName
        imagePrefix: $imagePrefix
        imageExtension: $imageExtension
        fullName: $fullName
        currentPhoto: $currentPhoto
      }
    ) {
      response
      path
    }
  }
`;

const updateDonor = gql`
  mutation updateDonor($country: String!, $address: String!, $_id: String!) {
    updateOneDonor(query: { ownerUserId: $_id }, set: { address: $address, country: $country }) {
      email
    }
  }
`;

const updateUser = gql`
  mutation updateUser($lastname: String!, $firstname: String!, $_id: String!) {
    updateOneUser(query: { _id: $_id }, set: { firstname: $firstname, lastname: $lastname }) {
      lastname
      firstname
    }
  }
`;

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

interface DonorValue {
  _id: string;
  firstName: string;
  lastName: string;
  country: string;
  address: string;
}

export default function MySettings() {
  const Input = styled('input')({
    display: 'none',
  });
  const { t } = useTranslation();
  const [loading, setLoading] = React.useState(false);
  const [field, setField] = React.useState(false);
  const [notif, setNotif] = React.useState({
    open: false,
    type: '',
  });
  const handleClose = () => {
    setNotif({ open: false, type: '' });
  };
  const { open } = notif;
  const { handleSubmit, control, reset, setValue, getValues } = useForm<DonorValue>({
    defaultValues: {
      firstName: '',
      lastName: '',
      country: 'Abkhazia',
      address: '',
    },
  });
  const { themeStretch } = useSettings();
  const [updatePictureResult, updateOnePicture] = useMutation(updatePicture);
  const [uploadImageResult, UploadOneImage] = useMutation(uploadImage);
  const [resultUpdateUser, updateOneUser] = useMutation(updateUser);
  const [resultupdateDonor, updateOneDonor] = useMutation(updateDonor);
  const [donorRes, reexecuteQuery] = useQuery<{
    donor: {
      _id: string;
      country: string;
      state: string;
      profilePic: string;
      address: string;
    };
    user: {
      firstname: string;
      lastname: string;
    };
  }>({
    query: getDonor,
    variables: { _id: app.currentUser?.profile.ssoId },
  });
  const refresh = () => {
    reexecuteQuery({ requestPolicy: 'network-only' });
  };
  const { data, fetching, error } = donorRes;
  useEffect(() => {
    if (data && field === false) {
      reset({
        firstName: data.user.firstname,
        lastName: data.user.lastname,
        country: data.donor.country,
        address: data.donor.address,
      });
      setField(true);
    }
  }, [data, field, reset]);
  if (data) {
    console.log('donor', data);
  }

  const getBase64 = async (file: any) => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          let encoded = reader.result!.toString().replace(/^data:(.*,)?/, '');
          // var data = reader.result!.replace;
          if (encoded.length % 4 > 0) {
            encoded += '='.repeat(4 - (encoded.length % 4));
          }
          // var buf = Buffer.from(encoded, 'base64');
          resolve(encoded);
        };
      });
    }

    return src;
  };

  function makeid(length: any) {
    const result: string[] = [];
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }
    return result.join('');
  }

  const uploadAvatar = async (e: any) => {
    setLoading(true);
    console.log('changed', e.target.files[0]);
    const rand = makeid(4);
    const profilePictureName = `${app.currentUser!.id}-${rand}` || '';
    const fullName = `${`${data?.user.firstname} ${data?.user.lastname}`}`;
    const imageExtension = `.${e.target.files[0].name.split('.').pop()}`;
    let variables = {};
    console.log('the values of image =', imageExtension);
    const upload = await getBase64(e.target.files[0]);
    variables = {
      imageUrl: upload,
      imageName: profilePictureName,
      imagePrefix: 'user-profile-photo/',
      fullName,
      imageExtension,
      currentPhoto: data?.donor.profilePic ? data?.donor.profilePic : '',
    };
    console.log('vraibles that will be inputed =', upload);
    const uploadTheImage = await UploadOneImage(variables);
    if (uploadTheImage) {
      variables = {
        ownerUserId: app.currentUser!.profile.ssoId,
        profilePic: uploadTheImage.data.uploadImage.path,
      };
      // update user collection profile

      const updatePicture = await updateOnePicture(variables);
      console.log(
        'path gambar',
        publicRuntimeConfig.bunny.cdn.urlMedia + '/' + uploadTheImage.data.uploadImage.path,
      );
      const resp = await axios.patch(
        `${publicRuntimeConfig.tmra.fund.url}/updateUserProfile`,
        {
          userId: JSON.parse(localStorage.getItem('currentUser') ?? '').id,
          imageUrl:
            publicRuntimeConfig.bunny.cdn.urlMedia + '/' + uploadTheImage.data.uploadImage.path,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log('hasil', resp);
      console.log(updatePicture);
      refresh();
      setNotif({
        open: true,
        type: 'Avatar is changed',
      });
      // window.location.reload();
    }
    console.log('response image =', uploadTheImage.data.uploadImage);
    setLoading(false);
  };

  const handleBio = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    console.log('bio value', e);
    let variables = {};
    variables = {
      _id: app.currentUser?.profile.ssoId,
      country: e.target[4].value,
      address: e.target[6].value,
    };
    const updateDonorBio = await updateOneDonor(variables);
    console.log('update donor result', updateDonorBio);
    if (updateDonorBio) {
      variables = {
        _id: app.currentUser?.profile.ssoId,
        firstname: e.target[0].value,
        lastname: e.target[2].value,
      };
      const updateUserBio = await updateOneUser(variables);
      console.log('update name result', updateUserBio);
      if (updateUserBio) {
        refresh();
        setNotif({
          open: true,
          type: 'Biodata is updated',
        });
      }
    }
    setLoading(false);
  };

  return (
    <MyDashboardLayout>
      <Page title="My Donations | Tmra">
        <Container maxWidth={themeStretch ? false : 'xl'}>
          {/* <Typography variant="h3" component="h1" paragraph>
            Page Five
          </Typography> */}
          {data?.donor ? (
            <>
              <Snackbar
                open={open}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity="success">
                  {notif.type}
                </Alert>
              </Snackbar>
              <Card>
                <CardHeader title="Edit Account" sx={{ mb: 3 }} />
                <Scrollbar>
                  <Input
                    onChange={uploadAvatar}
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <Button sx={{ display: 'block', margin: '0 auto', borderRadius: '50%' }}>
                    <label htmlFor="contained-button-file">
                      <Avatar
                        alt="Remy Sharp"
                        src={publicRuntimeConfig.bunny.cdn.urlMedia + '/' + data.donor.profilePic}
                        sx={{ width: 171, height: 171 }}
                      />
                      <PhotoCamera
                        sx={{
                          right: 10,
                          bottom: 25,
                          width: 18,
                          height: 18,
                          display: 'flex',
                          borderRadius: '50%',
                          position: 'absolute',
                          alignItems: 'center',
                          // color: 'common.white',
                          // bgcolor: 'error.main',
                          justifyContent: 'center',
                        }}
                      />
                    </label>
                  </Button>
                  <div style={{ marginTop: 20 }}></div>
                  <form onSubmit={handleBio}>
                    <Stack spacing={3} sx={{ padding: 5 }}>
                      <Grid key={data.donor._id} container spacing={2}>
                        <Grid item xl={6} lg={6} md={6} sm={4} xs={12}>
                          <Controller
                            name="firstName"
                            control={control}
                            render={({ field, fieldState }) => (
                              <TextField
                                fullWidth
                                label={t('First name')}
                                {...field}
                                error={Boolean(fieldState.invalid && fieldState.error)}
                              />
                            )}
                          />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={4} xs={12}>
                          <Controller
                            name="lastName"
                            control={control}
                            render={({ field, fieldState }) => (
                              <TextField
                                fullWidth
                                label={t('Last name')}
                                {...field}
                                error={Boolean(fieldState.invalid && fieldState.error)}
                              />
                            )}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Controller
                            name="country"
                            control={control}
                            render={({ field, fieldState }) => (
                              <FormControl sx={{ marginTop: 2, marginBottom: 2, width: '100%' }}>
                                <InputLabel id="nonprofitType">Country</InputLabel>
                                <Select
                                  labelId="nonprofitType"
                                  label={t('Country')}
                                  {...field}
                                  error={Boolean(fieldState.invalid && fieldState.error)}
                                >
                                  {dataCountry.countries.map(country => (
                                    <MenuItem key={country.code} value={country.name}>
                                      {country.name}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            )}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Controller
                            name="address"
                            control={control}
                            render={({ field, fieldState }) => (
                              <TextField
                                fullWidth
                                multiline
                                label={t('Address')}
                                {...field}
                                error={Boolean(fieldState.invalid && fieldState.error)}
                              />
                            )}
                          />
                        </Grid>
                      </Grid>
                      <LoadingButton
                        loading={loading}
                        sx={{ marginTop: 2, width: '100%' }}
                        type="submit"
                        variant="outlined"
                        color="primary"
                      >
                        Update biodata
                      </LoadingButton>
                    </Stack>
                  </form>
                </Scrollbar>
              </Card>
            </>
          ) : (
            <Skeleton variant="rectangular" height={200} />
          )}
        </Container>
      </Page>
    </MyDashboardLayout>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  };
}
