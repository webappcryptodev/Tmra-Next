import HeaderBreadcrumbs from '@components/HeaderBreadcrumbs';
import { UploadSingleFile } from '@components/upload';
import { useFindOneOrganizationByIdQuery } from '@generated/graphql';
import OrgDashboardLayout from '@layouts/dashboard/OrgDashboardLayout';
import { LoadingButton } from '@mui/lab';
import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  FormControl,
  Grid,
  Skeleton,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { app } from '@redux/slices/auth/realm';
import { getOrgDashboardPaths } from '@routes/paths';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
// components
import Page from 'src/components/Page';
// hooks
import useSettings from 'src/hooks/useSettings';
import RuntimeConfigs from '@utils/runtime-configs';
import { gql, useMutation, useQuery } from 'urql';

// ----------------------------------------------------------------------

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

const getEssential = gql`
  query getEssential($_id: ObjectId!, $ownerUserId: String!) {
    organization(query: { _id: $_id }) {
      _id
      name
      username
      organizationName
    }
    organizationTeams(query: { organizationId: $_id }) {
      _id
      organizationId
      fullName
      email
      profilePicture
      organizationName
    }
    user(query: { _id: $ownerUserId }) {
      firstname
      lastname
    }
  }
`;

const updateTeam = gql`
  mutation updateTeam($_id: ObjectId!, $profilePicture: String!) {
    updateOneOrganizationTeam(query: { _id: $_id }, set: { profilePicture: $profilePicture }) {
      _id
      profilePicture
    }
  }
`;
const insertTeam = gql`
  mutation insertTeam(
    $organizationName: String!
    $organizationId: ObjectId!
    $profilePicture: String!
    $fullName: String!
    $email: String!
  ) {
    insertOneOrganizationTeam(
      data: {
        organizationName: $organizationName
        organizationId: $organizationId
        profilePicture: $profilePicture
        fullName: $fullName
        email: $email
      }
    ) {
      _id
      fullName
      email
    }
  }
`;
const deleteTeamQ = gql`
  mutation deleteTeam($_id: ObjectId!) {
    deleteOneOrganizationTeam(query: { _id: $_id }) {
      _id
      fullName
      email
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

interface OrganizationValues {
  name: string;
  licenseNumber: string;
  orgObjective: string;
  nonprofitType: string;
  commissioner: string;
  fullName: string;
  emailAddress: string;
  memberPhoto: CustomFile | null;
}

type AlertColor = 'success' | 'info' | 'warning' | 'error';

export default function OrgDashboardTeam() {
  const { themeStretch } = useSettings();
  const router = useRouter();
  const [value, setValues] = React.useState('1');
  const [loading, setLoading] = React.useState(false);
  const [isField, setField] = React.useState(false);
  const { handleSubmit, control, reset, setValue, getValues } = useForm<OrganizationValues>({
    defaultValues: {
      fullName: '',
      emailAddress: '',
      memberPhoto: null,
    },
  });
  const [notif, setNotif] = React.useState<{ open: boolean; message: string; type: AlertColor }>({
    open: false,
    message: '',
    type: 'success',
  });
  const { open } = notif;
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValues(newValue);
  };
  const handleDrop = React.useCallback(
    acceptedFiles => {
      setValue('memberPhoto', acceptedFiles[0]);
      // {
      //   ...file[0],
      //   // preview: URL.createObjectURL(file),
      // });
    },
    [setValue],
  );

  const [insertTeamResult, insertOneTeam] = useMutation(insertTeam);
  const [uploadImageResult, UploadOneImage] = useMutation(uploadImage);
  const [updateTeamResult, updateOneTeam] = useMutation(updateTeam);
  const [deleteTeamResult, deleteOneTeam] = useMutation(deleteTeamQ);

  const [organizationRes] = useFindOneOrganizationByIdQuery({
    variables: { id: router.query.organizationId },
  });

  const [nonprofitRes, reexecuteQuery] = useQuery<{
    organization: {
      _id: string;
      username: string;
      name: string;
    };
    organizationTeams: { _id: string; fullName: string; email: string; profilePicture: string }[];
    user: { firstname: string; lastname: string };
  }>({
    query: getEssential,
    variables: { _id: router.query.organizationId, ownerUserId: app.currentUser?.profile.ssoId },
  });
  const refresh = () => {
    reexecuteQuery({ requestPolicy: 'network-only' });
  };
  const { data, fetching, error } = nonprofitRes;
  console.log('nonprofit:', data);
  const paths = getOrgDashboardPaths(router.query.organizationId! as string);
  const { t } = useTranslation();
  const handleClose = () => {
    setNotif({ open: false, message: '', type: 'success' });
  };

  const handleRemoveAll = () => {
    // setValue('memberPhoto', []);
    setValue('memberPhoto', null);
  };
  const handleRemove = (file: File | string) => {
    // const filteredItems = getValues('memberPhoto').filter(_file => _file !== file);
    // setValue('memberPhoto', filteredItems);
    setValue('memberPhoto', null);
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

  const handleTeam = async (e: any) => {
    console.log(e);
    e.preventDefault();
    let variables = {};
    try {
      variables = {
        organizationName: data ? data.organization.name : '',
        organizationId: router.query.organizationId,
        fullName: e.target[0].value,
        email: e.target[2].value,
        profilePicture: 'none',
      };
      const insertTheTeam = await insertOneTeam(variables);
      if (insertTheTeam.error) {
        if (insertTheTeam.error.message) {
          setNotif({
            open: true,
            type: 'error',
            message: insertTheTeam.error.message,
          });
          throw new Error(insertTheTeam.error.message);
        }
      }
      console.log('insert team result=', insertTheTeam);
      const rand = makeid(4);
      const fullName = `${`${data?.user.firstname} ${data?.user.lastname}`}`;
      const imageExtension = `.${e.target[4].files[0].name.split('.').pop()}`;
      const profilePictureName =
        `${insertTheTeam.data.insertOneOrganizationTeam._id}-${rand}` || '';
      const upload = await getBase64(e.target[4].files[0]);
      variables = {
        imageUrl: upload,
        imageName: profilePictureName,
        imagePrefix: 'team-profile-photo/',
        fullName,
        imageExtension,
        currentPhoto: 'noCurrentPhoto',
      };
      const uploadTheImage = await UploadOneImage(variables);
      if (uploadTheImage.error) {
        if (uploadTheImage.error.message) {
          setNotif({
            open: true,
            type: 'error',
            message: uploadTheImage.error.message,
          });
          throw new Error(uploadTheImage.error.message);
        }
      }
      console.log('response image Header =', uploadTheImage);
      variables = {
        _id: insertTheTeam.data.insertOneOrganizationTeam._id,
        profilePicture: uploadTheImage.data.uploadImage.path,
      };
      const updateTeamNow = await updateOneTeam(variables);
      console.log('response update img path =', updateTeamNow);
      setNotif({
        open: true,
        type: 'success',
        message: 'A member is added to the list',
      });
    } catch (err) {
      setNotif({
        open: true,
        type: 'error',
        message: JSON.stringify(err),
      });
    }
    refresh();
  };

  const deleteTeam = async (id: any, url: any) => {
    console.log(url);
    setLoading(true);
    const variables = {
      _id: id,
    };
    try {
      const deleteTheTeam = await deleteOneTeam(variables);
      if (deleteTheTeam.error) {
        if (deleteTheTeam.error.message) {
          setNotif({
            open: true,
            type: 'error',
            message: deleteTheTeam.error.message,
          });
          throw new Error(deleteTheTeam.error.message);
        }
      } else {
        const deleteTeamImage = await app.currentUser?.callFunction('deleteImageBunny', {
          url: url,
        });
        if (deleteTeamImage.response.statusCode === 200) {
          setNotif({
            open: true,
            type: 'success',
            message: 'Successfully deleted a member',
          });
        }
        console.log('delete team result', deleteTheTeam);
        console.log('delete team image result', deleteTeamImage);
      }
    } catch (err) {
      setNotif({
        open: true,
        type: 'error',
        message: JSON.stringify(err),
      });
    }

    refresh();
    setLoading(false);
  };

  return (
    <OrgDashboardLayout organization={organizationRes?.data?.organization}>
      <Page title={`Nonprofit Organization - ${data?.organization?.name ?? '...'} | Tmra`}>
        <Container maxWidth={themeStretch ? false : 'xl'}>
          {data?.organization ? (
            <>
              <Snackbar
                open={open}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity={notif.type}>
                  {notif.message}
                </Alert>
              </Snackbar>
              <HeaderBreadcrumbs heading={t('Users')} links={[{ name: t('Team management') }]} />
              <Card sx={{ p: 5 }}>
                <Typography sx={{ marginBottom: 2 }} variant="h4" color="#637381">
                  Your current team members
                </Typography>
                {data.organizationTeams.length >= 1 && (
                  <Grid container spacing={2}>
                    {data.organizationTeams.map((result: any) => (
                      <Grid key={result.id} item xl={2} lg={3} md={3} sm={4} xs={12}>
                        <Card sx={{ width: '100%' }}>
                          <CardMedia
                            component="img"
                            height="140"
                            image={
                              publicRuntimeConfig.bunny.cdn.urlMedia +
                              '/' +
                              result.profilePicture +
                              '?width=500'
                            }
                            alt="member"
                          />
                          <CardContent>
                            <Typography
                              sx={{
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                              }}
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {result.fullName}
                            </Typography>
                            <Typography
                              sx={{
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                              }}
                              variant="body2"
                              color="text.secondary"
                            >
                              {result.email}
                            </Typography>
                          </CardContent>
                          <CardActions sx={{ float: 'right' }}>
                            <Button
                              onClick={() => {
                                deleteTeam(result._id, result.profilePicture);
                              }}
                              size="small"
                            >
                              Delete
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                )}
                {data.organizationTeams.length === 0 && <p>No team members yet</p>}
                <Typography sx={{ marginTop: 2 }} variant="h4" color="#637381">
                  Add a new team member
                </Typography>
                <form onSubmit={handleTeam}>
                  <Stack spacing={3}>
                    <Controller
                      name="fullName"
                      control={control}
                      render={({ field, fieldState }) => (
                        <TextField
                          fullWidth
                          label={t('Full name')}
                          {...field}
                          error={Boolean(fieldState.invalid && fieldState.error)}
                        />
                      )}
                    />
                    <Controller
                      name="emailAddress"
                      control={control}
                      render={({ field, fieldState }) => (
                        <TextField
                          fullWidth
                          label={t('Email address')}
                          {...field}
                          error={Boolean(fieldState.invalid && fieldState.error)}
                        />
                      )}
                    />
                    <Controller
                      name="memberPhoto"
                      control={control}
                      render={({ field, fieldState }) => (
                        <FormControl sx={{ marginTop: 2, marginBottom: 2, width: '100%' }}>
                          <label htmlFor="contained-button-file">
                            <p style={{ display: 'block', color: '#637381', marginBottom: 5 }}>
                              Add a photo of the team member
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
                  </Stack>
                  <LoadingButton
                    loading={loading}
                    sx={{ marginTop: 2, width: '100%' }}
                    type="submit"
                    variant="outlined"
                    color="primary"
                  >
                    Add Member
                  </LoadingButton>
                </form>
              </Card>
            </>
          ) : (
            <Skeleton variant="rectangular" height={200} />
          )}
        </Container>
      </Page>
    </OrgDashboardLayout>
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
