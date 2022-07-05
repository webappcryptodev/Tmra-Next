// components
import { UploadSingleFile } from '@components/upload';
import { LoadingButton } from '@mui/lab';
import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  Snackbar,
  Stack,
  Typography,
} from '@mui/material';
import { app } from '@redux/slices/auth/realm';
import axios from 'axios';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import React from 'react';
import { useAppSelector } from '@redux/hooks';
import { Controller, useForm } from 'react-hook-form';
import RuntimeConfigs from '@utils/runtime-configs';
// hooks
import { gql, useMutation, useQuery } from 'urql';

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

const getAppearance = gql`
  query getAppearance($_id: ObjectId!) {
    nonprofitAppearance(query: { _id: $_id }) {
      _id
      favIcon
    }
    organization(query: { _id: $_id }) {
      _id
      username
      name
    }
  }
`;

const updateFavIcon = gql`
  mutation updateFavIcon($_id: ObjectId!, $favIcon: String!) {
    updateOneNonprofitAppearance(query: { _id: $_id }, set: { favIcon: $favIcon }) {
      _id
      favIcon
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

interface CustomFile extends File {
  path?: string;
  preview?: string;
}

interface AppearanceValues {
  favIcon: CustomFile | null;
}

export default function AppearanceFavIcon() {
  const currentUser = useAppSelector(state => state.currentUser);
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const { handleSubmit, control, register, reset, setValue, getValues } = useForm<AppearanceValues>(
    {
      defaultValues: {
        favIcon: null,
      },
    },
  );

  const [notif, setNotif] = React.useState({
    open: false,
    type: '',
  });
  const { open } = notif;
  const [resultUploadImage, UploadOneImage] = useMutation(uploadImage);
  const [resultUpdateFavIcon, updateOneFavIcon] = useMutation(updateFavIcon);

  const handleDropFavIcon = React.useCallback(
    acceptedFiles => {
      setValue('favIcon', acceptedFiles[0]);
    },
    [setValue],
  );
  const [nonprofitRes, reexecuteQuery] = useQuery<{
    organization: {
      _id: string;
      paypalClientId: string;
      defaultCurrency: string;
      xenditMode: string;
      username: string;
      name: string;
    };
    nonprofitAppearance: {
      favIcon: string;
    };
    // user: { firstname: string; lastname: string };
  }>({
    query: getAppearance,
    variables: { _id: router.query.organizationId },
  });
  const refresh = () => {
    reexecuteQuery({ requestPolicy: 'network-only' });
  };
  const { data, fetching, error } = nonprofitRes;

  const handleClose = () => {
    setNotif({ open: false, type: '' });
  };

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

  const handleFavIcon = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    let variables = {};
    const fullName = `${`${currentUser.firstName} ${currentUser.lastName}`}`;
    const rand = makeid(4);
    if (data?.nonprofitAppearance) {
      const imageExtension = `.${getValues('favIcon')?.name.split('.').pop()}`;
      const upload = await getBase64(getValues('favIcon'));
      const profilePictureName = `${router.query.organizationId}-${rand}` || '';
      variables = {
        imageUrl: upload,
        imageName: profilePictureName,
        imagePrefix: '',
        fullName,
        imageExtension,
        currentPhoto:
          data?.nonprofitAppearance && data.nonprofitAppearance.favIcon
            ? data.nonprofitAppearance.favIcon
            : '',
      };
      const uploadTheImage = await UploadOneImage(variables);
      if (uploadTheImage) {
        variables = {
          _id: router.query.organizationId,
          favIcon: uploadTheImage.data?.uploadImage?.path,
        };
        const updateImage = await updateOneFavIcon(variables);
        setNotif({
          open: true,
          type: 'Fav icon is updated',
        });
        refresh();
      }
    }
    setLoading(false);
    // console.log(e.target[0].value);
  };

  const deleteImage = async (url: any, type: string) => {
    setLoading(true);
    const resp = await app.currentUser?.callFunction('deleteImageBunny', {
      url: url,
    });
    console.log(resp);
    console.log('delete image result', resp);
    if (resp) {
      if (type === 'favIcon') {
        const variables = {
          _id: router.query.organizationId,
          favIcon: '',
        };
        const updateTheImage = await updateOneFavIcon(variables);
        console.log('delete image result', updateTheImage);
        if (updateTheImage) {
          setNotif({
            open: true,
            type: 'Fav icon is deleted',
          });
          refresh();
        }
      }
    }
    setLoading(false);
  };

  return (
    <Stack>
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
      <Card sx={{ p: 5 }}>
        <form onSubmit={handleFavIcon}>
          <Stack spacing={3}>
            <Grid container spacing={2}>
              {data?.nonprofitAppearance && data?.nonprofitAppearance.favIcon ? (
                <Grid item sm={4} xs={12}>
                  <Card sx={{ width: '100%' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={
                        publicRuntimeConfig.bunny.cdn.urlMedia +
                        '/' +
                        data.nonprofitAppearance.favIcon +
                        '?width=500'
                      }
                      alt="member"
                      sx={{ width: '100%', margin: '0 auto' }}
                    />
                    <CardContent>
                      <Typography
                        sx={{
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                        }}
                        gutterBottom
                        variant="h6"
                        component="div"
                      >
                        Fav icon
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ float: 'right' }}>
                      <Button
                        onClick={() => {
                          deleteImage(data.nonprofitAppearance.favIcon, 'favIcon');
                        }}
                        size="small"
                      >
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ) : (
                <Controller
                  name="favIcon"
                  control={control}
                  render={({ field, fieldState }) => (
                    <FormControl sx={{ margin: 2, width: '100%' }}>
                      <label htmlFor="contained-button-file">
                        <p
                          style={{
                            display: 'block',
                            color: '#637381',
                            marginBottom: 5,
                          }}
                        >
                          Fav icon
                        </p>
                      </label>
                      <UploadSingleFile
                        maxSize={3145728}
                        accept="image/*"
                        file={field.value}
                        onDrop={handleDropFavIcon}
                        error={Boolean(fieldState.invalid && fieldState.error)}
                      />
                    </FormControl>
                  )}
                />
              )}
            </Grid>
          </Stack>
          <LoadingButton
            loading={loading}
            sx={{ marginTop: 2, width: '100%' }}
            type="submit"
            variant="outlined"
            color="primary"
          >
            Update
          </LoadingButton>
        </form>
      </Card>
    </Stack>
  );
}
