// components
import { UploadSingleFile } from '@components/upload';
import { LoadingButton } from '@mui/lab';
import {
  Alert,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Snackbar,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import { useAppSelector } from '@redux/hooks';
import { app } from '@redux/slices/auth/realm';
import { useTranslation } from 'next-i18next';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import RuntimeConfigs from '@utils/runtime-configs';
// hooks
import { gql, useMutation, useQuery } from 'urql';

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

const getAppearance = gql`
  query getAppearance($_id: ObjectId!) {
    nonprofitAppearance(query: { _id: $_id }) {
      _id
      primaryColor
      secondaryColor
      logo
      themesColor
      usePallete
      headerAndFooter
      accent
      lButton
    }
    organization(query: { _id: $_id }) {
      _id
      username
      name
    }
  }
`;

const insertColor = gql`
  mutation insertColor(
    $_id: ObjectId!
    $ownerUserId: String!
    $ownerRealmId: ObjectId!
    $primaryColor: String!
    $secondaryColor: String!
    $themesColor: String
    $usePallete: Boolean!
    $headerAndFooter: String
    $accent: String
    $lButton: String
  ) {
    insertOneNonprofitAppearance(
      data: {
        _id: $_id
        ownerUserId: $ownerUserId
        ownerRealmId: $ownerRealmId
        primaryColor: $primaryColor
        secondaryColor: $secondaryColor
        themesColor: $themesColor
        usePallete: $usePallete
        headerAndFooter: $headerAndFooter
        accent: $accent
        lButton: $lButton
      }
    ) {
      _id
      ownerRealmId
      primaryColor
      secondaryColor
      headerAndFooter
      accent
      lButton
    }
  }
`;
const updateColor = gql`
  mutation updateColor(
    $_id: ObjectId!
    $primaryColor: String!
    $secondaryColor: String!
    $themesColor: String
    $usePallete: Boolean!
    $headerAndFooter: String
    $accent: String
    $lButton: String
  ) {
    updateOneNonprofitAppearance(
      query: { _id: $_id }
      set: {
        primaryColor: $primaryColor
        secondaryColor: $secondaryColor
        themesColor: $themesColor
        usePallete: $usePallete
        headerAndFooter: $headerAndFooter
        accent: $accent
        lButton: $lButton
      }
    ) {
      _id
      primaryColor
      secondaryColor
      headerAndFooter
      accent
      lButton
    }
  }
`;

const updateLogo = gql`
  mutation updateFavIcon($_id: ObjectId!, $logo: String!) {
    updateOneNonprofitAppearance(query: { _id: $_id }, set: { logo: $logo }) {
      _id
      logo
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
  primaryColor: string;
  secondaryColor: string;
  logo: CustomFile | null;
  themesColor: string | null;
  headerAndFooter: string;
  accent: string;
  lButton: string;
}

export default function AppearanceUtility() {
  const currentUser = useAppSelector(state => state.currentUser);
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [isField, setField] = React.useState(false);
  const { handleSubmit, control, register, reset, setValue, getValues } = useForm<AppearanceValues>(
    {
      defaultValues: {
        primaryColor: '#ffffff',
        secondaryColor: '#ffffff',
        logo: null,
        themesColor: '',
        headerAndFooter: '#ffffff',
        accent: '#ffffff',
        lButton: '#ffffff',
      },
    },
  );
  const [themeColor] = React.useState([
    '#f44336',
    '#e91e63',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#00bcd4',
    '#009688',
    '#4caf50',
    '#8bc34a',
    '#cddc39',
    '#ffeb3b',
    '#ffc107',
    '#ff9800',
    '#795548',
    '#9e9e9e',
    '#607d8b',
  ]);
  const [usePallete, setPallete] = React.useState(false);
  const handlePallte = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPallete(event.target.checked);
  };

  const [resultUpdateColor, updateOneColor] = useMutation(updateColor);
  const [resultInsertColor, insertOneColor] = useMutation(insertColor);
  const [resultUploadImage, UploadOneImage] = useMutation(uploadImage);
  const [resultUpdateLogo, updateOneLogo] = useMutation(updateLogo);
  const [notif, setNotif] = React.useState({
    open: false,
    type: '',
  });
  const { open } = notif;
  const handleDrop = React.useCallback(
    acceptedFiles => {
      setValue('logo', acceptedFiles[0]);
    },
    [setValue],
  );

  const makeid = (length: any) => {
    const result: string[] = [];
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }
    return result.join('');
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
      primaryColor: string;
      secondaryColor: string;
      logo: string;
      themesColor: string;
      usePallete: boolean;
      headerAndFooter: string;
      accent: string;
      lButton: string;
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
  useEffect(() => {
    if (data && fetching === false && isField === false) {
      if (data.nonprofitAppearance) {
        reset({
          primaryColor: data.nonprofitAppearance.primaryColor,
          secondaryColor: data.nonprofitAppearance.secondaryColor,
          themesColor: data.nonprofitAppearance.themesColor,
          headerAndFooter: data.nonprofitAppearance.headerAndFooter,
          accent: data.nonprofitAppearance.accent,
          lButton: data.nonprofitAppearance.lButton,
        });
        setPallete(data.nonprofitAppearance.usePallete);
      }

      setField(true);
    }
  }, [data, fetching, reset, isField]);

  const { t } = useTranslation();
  const handleClose = () => {
    setNotif({ open: false, type: '' });
  };

  const handleUtility = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    let variables = {};
    const rand = makeid(4);
    const fullName = `${`${currentUser.firstName} ${currentUser.lastName}`}`;
    if (data?.nonprofitAppearance) {
      variables = {
        _id: router.query.organizationId,
        primaryColor: e.target[0].value,
        secondaryColor: e.target[2].value,
        themesColor: getValues('themesColor'),
        usePallete: usePallete,
        headerAndFooter: getValues('headerAndFooter'),
        accent: getValues('accent'),
        lButton: getValues('lButton'),
      };
      const updateTheColor = await updateOneColor(variables);
      if (updateTheColor) {
        if (!data.nonprofitAppearance.logo || data.nonprofitAppearance.logo === '') {
          const logo = getValues('logo');
          const imageExtension = `.${logo?.type.split('/').pop()}`;
          const upload = await getBase64(logo);
          const profilePictureName = `${router.query.organizationId}-${rand}` || '';
          variables = {
            imageUrl: upload,
            imageName: profilePictureName,
            imagePrefix: '',
            fullName,
            imageExtension,
            currentPhoto: data.nonprofitAppearance.logo || '',
          };
          const uploadTheImage = await UploadOneImage(variables);
          if (uploadTheImage) {
            variables = {
              _id: router.query.organizationId,
              logo: uploadTheImage.data.uploadImage.path,
            };
            const updateImage = await updateOneLogo(variables);
            if (updateImage) {
              refresh();
              setNotif({
                open: true,
                type: 'Utility is Updated',
              });
            }
          }
        }
        refresh();
        setNotif({
          open: true,
          type: 'Utility is Updated',
        });
      }
    } else {
      variables = {
        _id: router.query.organizationId,
        ownerRealmId: app.currentUser!.id,
        ownerUserId: app.currentUser!.profile.ssoId,
        primaryColor: e.target[0].value,
        secondaryColor: e.target[2].value,
        themesColor: getValues('themesColor'),
        usePallete: usePallete,
        headerAndFooter: getValues('headerAndFooter'),
        accent: getValues('accent'),
        lButton: getValues('lButton'),
      };
      const resp = await insertOneColor(variables);
      if (resp) {
        if (e.target[4].files[0]) {
          const imageExtension = `.${e.target[4].files[0].name.split('.').pop()}`;
          const upload = await getBase64(e.target[4].files[0]);
          const profilePictureName = `${router.query.organizationId}-${rand}` || '';
          variables = {
            imageUrl: upload,
            imageName: profilePictureName,
            imagePrefix: '',
            fullName,
            imageExtension,
            currentPhoto: data?.nonprofitAppearance ? data.nonprofitAppearance.logo : '',
          };
          const uploadTheImage = await UploadOneImage(variables);
          if (uploadTheImage) {
            variables = {
              _id: router.query.organizationId,
              logo: uploadTheImage.data.uploadImage.path,
            };
            const updateImage = await updateOneLogo(variables);
          }
        }
        refresh();
        setNotif({
          open: true,
          type: 'Utility is Updated',
        });
      }
    }
    setLoading(false);
  };

  const deleteImage = async (url: any, type: string) => {
    setLoading(true);
    const resp = await app.currentUser?.callFunction('deleteImageBunny', {
      url: url,
    });
    if (resp) {
      if (type === 'logo') {
        const variables = {
          _id: router.query.organizationId,
          logo: '',
        };
        const updateTheLogo = await updateOneLogo(variables);
        if (updateTheLogo) {
          setNotif({
            open: true,
            type: 'Logo is deleted',
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
        {/* {loading === false ?  */}
        <form onSubmit={handleUtility}>
          <Stack spacing={3}>
            <Grid container spacing={2}>
              {/* <Grid item sm={6} xs={12}>
                <Controller
                  name="primaryColor"
                  control={control}
                  render={({ field, fieldState }) => (
                    <TextField
                      type="color"
                      fullWidth
                      label={t('Primary color')}
                      {...field}
                      error={Boolean(fieldState.invalid && fieldState.error)}
                    />
                  )}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <Controller
                  name="secondaryColor"
                  control={control}
                  render={({ field, fieldState }) => (
                    <TextField
                      type="color"
                      fullWidth
                      label={t('Secondary color')}
                      {...field}
                      error={Boolean(fieldState.invalid && fieldState.error)}
                    />
                  )}
                />
              </Grid> */}

              {data?.nonprofitAppearance && data?.nonprofitAppearance.logo ? (
                <Grid item sm={4} xs={12}>
                  <Card sx={{ width: '100%' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={
                        publicRuntimeConfig.bunny.cdn.urlMedia +
                        '/' +
                        data.nonprofitAppearance.logo +
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
                        Image logo
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ float: 'right' }}>
                      <Button
                        onClick={() => {
                          deleteImage(data.nonprofitAppearance.logo, 'logo');
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
                  name="logo"
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
                          Logo
                        </p>
                      </label>
                      <UploadSingleFile
                        maxSize={3145728}
                        accept="image/*"
                        file={field.value}
                        onDrop={handleDrop}
                        error={Boolean(fieldState.invalid && fieldState.error)}
                      />
                    </FormControl>
                  )}
                />
              )}
              <Controller
                name="themesColor"
                control={control}
                render={({ field, fieldState }) => (
                  <FormControl
                    sx={{ margin: 2, width: '100%' }}
                    error={Boolean(fieldState.invalid && fieldState.error)}
                  >
                    <label htmlFor="contained-button-file">
                      <p
                        style={{
                          display: 'block',
                          color: '#637381',
                          marginBottom: 5,
                        }}
                      >
                        Theme
                      </p>
                    </label>
                    <Grid item sm={12} xs={12}>
                      <RadioGroup
                        name="themesColor"
                        value={usePallete ? field.value : ''}
                        onChange={field.onChange}
                        {...register}
                      >
                        <Grid container spacing={1.5} dir="ltr">
                          {themeColor.map((color, index) => {
                            const isSelected = field.value == color && !usePallete;
                            return (
                              <Grid item xs={4} key={index}>
                                <Paper
                                  variant={isSelected ? 'elevation' : 'outlined'}
                                  sx={{
                                    ...(isSelected && {
                                      bgcolor: alpha(color, 0.12),
                                      border: `solid 2px ${color}`,
                                      boxShadow: `inset 0 4px 8px 0 ${alpha(color, 0.24)}`,
                                    }),
                                  }}
                                >
                                  <CardActionArea sx={{ borderRadius: 1, color: color }}>
                                    <Box
                                      sx={{
                                        height: 48,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                      }}
                                    >
                                      <Box
                                        sx={{
                                          width: 24,
                                          height: 14,
                                          borderRadius: '50%',
                                          bgcolor: color,
                                          transform: 'rotate(-45deg)',
                                          transition: theme =>
                                            theme.transitions.create('all', {
                                              easing: theme.transitions.easing.easeInOut,
                                              duration: theme.transitions.duration.shorter,
                                            }),
                                          ...(isSelected && { transform: 'none' }),
                                        }}
                                      />
                                    </Box>

                                    <FormControlLabel
                                      label=""
                                      value={color}
                                      control={<Radio sx={{ display: 'none' }} />}
                                      sx={{
                                        top: 0,
                                        margin: 0,
                                        width: '100%',
                                        height: '100%',
                                        position: 'absolute',
                                      }}
                                    />
                                  </CardActionArea>
                                </Paper>
                              </Grid>
                            );
                          })}
                        </Grid>
                      </RadioGroup>
                    </Grid>
                  </FormControl>
                )}
              />
              <FormControlLabel
                sx={{ margin: 2, width: '100%' }}
                label="Use my own pallete"
                control={<Switch checked={usePallete} onChange={handlePallte} name="pallete" />}
              />
              {usePallete ? (
                <Grid container spacing={2}>
                  <Grid item sm={4} xs={12}>
                    <Controller
                      name="headerAndFooter"
                      control={control}
                      render={({ field, fieldState }) => (
                        <TextField
                          type="color"
                          fullWidth
                          label={t('Header and Footer')}
                          {...field}
                          error={Boolean(fieldState.invalid && fieldState.error)}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <Controller
                      name="accent"
                      control={control}
                      render={({ field, fieldState }) => (
                        <TextField
                          type="color"
                          fullWidth
                          label={t('Accent')}
                          {...field}
                          error={Boolean(fieldState.invalid && fieldState.error)}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <Controller
                      name="lButton"
                      control={control}
                      render={({ field, fieldState }) => (
                        <TextField
                          type="color"
                          fullWidth
                          label={t('Button')}
                          {...field}
                          error={Boolean(fieldState.invalid && fieldState.error)}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              ) : null}
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
