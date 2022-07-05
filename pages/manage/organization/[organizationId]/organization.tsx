/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import HeaderBreadcrumbs from '@components/HeaderBreadcrumbs';
import { useFindOneOrganizationByIdQuery } from '@generated/graphql';
import OrgDashboardLayout from '@layouts/dashboard/OrgDashboardLayout';
import { LoadingButton } from '@mui/lab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {
  Alert,
  Card,
  Container,
  Skeleton,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { app } from '@redux/slices/auth/realm';
import { getOrgDashboardPaths } from '@routes/paths';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
// components
import Page from 'src/components/Page';
// hooks
import useSettings from 'src/hooks/useSettings';
import { gql, useMutation, useQuery } from 'urql';

// ----------------------------------------------------------------------

const getEssential = gql`
  query getEssential($_id: ObjectId!) {
    organization(query: { _id: $_id }) {
      _id
      username
      name
      organizationBankAccountName
      organizationBankAccountNumber
      organizationProfile
      phoneNumber
      licenseNumber
      orgObjective
      instagram
      youtube
      linkedin
      twitter
      facebook
      impact1Amount
      impact1Title
      impact2Amount
      impact2Title
      impact3Amount
      impact3Title
    }
  }
`;

const updateNonprofit = gql`
  mutation updateNonprofit(
    $name: String!
    $username: String!
    $_id: ObjectId!
    $organizationProfile: String!
    $licenseNumber: String!
    $orgObjective: String
  ) {
    updateOneOrganization(
      query: { _id: $_id }
      set: {
        username: $username
        name: $name
        licenseNumber: $licenseNumber
        orgObjective: $orgObjective
        organizationProfile: $organizationProfile
      }
    ) {
      name
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
    $name: String!
    $profilePicture: String!
    $ownerRealmId: ObjectId!
    $ownerUserId: String!
    $fullName: String!
    $email: String!
  ) {
    insertOneOrganizationTeam(
      data: {
        name: $name
        profilePicture: $profilePicture
        ownerRealmId: $ownerRealmId
        ownerUserId: $ownerUserId
        fullName: $fullName
        email: $email
      }
    ) {
      _id
      ownerUserId
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
const updateSocmed = gql`
  mutation updateNonprofit(
    $instagram: String!
    $youtube: String!
    $twitter: String!
    $linkedin: String!
    $facebook: String
    $_id: ObjectId!
  ) {
    updateOneOrganization(
      query: { _id: $_id }
      set: {
        linkedin: $linkedin
        facebook: $facebook
        twitter: $twitter
        youtube: $youtube
        instagram: $instagram
      }
    ) {
      ownerUserId
    }
  }
`;
const updateImpact = gql`
  mutation updateNonprofit(
    $_id: ObjectId!
    $impact1Title: String!
    $impact1Amount: String!
    $impact2Title: String!
    $impact2Amount: String!
    $impact3Title: String!
    $impact3Amount: String!
  ) {
    updateOneNonprofit(
      query: { _id: $_id }
      set: {
        impact1Title: $impact1Title
        impact1Amount: $impact1Amount
        impact2Title: $impact2Title
        impact2Amount: $impact2Amount
        impact3Title: $impact3Title
        impact3Amount: $impact3Amount
      }
    ) {
      _id
    }
  }
`;

interface CustomFile extends File {
  path?: string;
  preview?: string;
}

interface OrganizationValues {
  username: string;
  name: string;
  licenseNumber: string;
  orgObjective: string;
  organizationProfile: string;
  // nonprofitType: string;
  commissioner: string;
  fullName: string;
  emailAddress: string;
  aboutPhoto: CustomFile | null;
  facebook: string;
  instagram: string;
  twitter: string;
  youtube: string;
  linkedin: string;
  amount1: string;
  amount2: string;
  amount3: string;
  title1: string;
  title2: string;
  title3: string;
  heading: string;
  bodyText: string;
}
type AlertColor = 'success' | 'info' | 'warning' | 'error';
export default function OrgDashboardOverview() {
  const { themeStretch } = useSettings();
  const router = useRouter();
  const [value, setValues] = React.useState('1');
  const [loading, setLoading] = React.useState(false);
  const [isField, setField] = React.useState(false);
  const { handleSubmit, control, reset, setValue, getValues } = useForm<OrganizationValues>({
    defaultValues: {
      username: '',
      name: '',
      licenseNumber: '',
      orgObjective: '',
      organizationProfile: '',
      // nonprofitType: 'education',
      commissioner: '',
      fullName: '',
      emailAddress: '',
      aboutPhoto: null,
      facebook: '',
      instagram: '',
      twitter: '',
      youtube: '',
      linkedin: '',
      amount1: '',
      amount2: '',
      amount3: '',
      title1: '',
      title2: '',
      title3: '',
      heading: '',
      bodyText: '',
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
      setValue('aboutPhoto', acceptedFiles[0]);
      // {
      //   ...file[0],
      //   // preview: URL.createObjectURL(file),
      // });
    },
    [setValue],
  );
  const [updateNonprofitResult, updateOneNonprofit] = useMutation(updateNonprofit);
  const [insertTeamResult, insertOneTeam] = useMutation(insertTeam);
  const [uploadImageResult, UploadOneImage] = useMutation(uploadImage);
  const [updateTeamResult, updateOneTeam] = useMutation(updateTeam);
  const [deleteTeamResult, deleteOneTeam] = useMutation(deleteTeamQ);
  const [updateSocmedResult, updateOneSocmed] = useMutation(updateSocmed);
  const [updateImpactResult, updateOneImpact] = useMutation(updateImpact);

  const [organizationRes] = useFindOneOrganizationByIdQuery({
    variables: { id: router.query.organizationId },
  });

  const [nonprofitRes, reexecuteQuery] = useQuery<{
    organization: {
      _id: string;
      username: string;
      name: string;
      licenseNumber: string;
      orgObjective: string;
      organizationProfile: string;
      facebook: string;
      instagram: string;
      twitter: string;
      youtube: string;
      linkedin: string;
      impact1Title: string;
      impact2Title: string;
      impact3Title: string;
      impact1Amount: string;
      impact2Amount: string;
      impact3Amount: string;
    };
  }>({
    query: getEssential,
    variables: { _id: router.query.organizationId, ownerUserId: app.currentUser?.profile.ssoId },
  });
  const refresh = () => {
    reexecuteQuery({ requestPolicy: 'network-only' });
  };
  const { data, fetching, error } = nonprofitRes;
  useEffect(() => {
    if (data && fetching === false && isField === false) {
      reset({
        username: data.organization.username,
        name: data.organization.name,
        licenseNumber: data.organization.licenseNumber,
        orgObjective: data.organization.orgObjective,
        organizationProfile: data.organization.organizationProfile,
        facebook: data.organization.facebook,
        instagram: data.organization.instagram,
        youtube: data.organization.youtube,
        twitter: data.organization.twitter,
        linkedin: data.organization.linkedin,
        amount1: data.organization.impact1Amount,
        amount2: data.organization.impact2Amount,
        amount3: data.organization.impact3Amount,
        title1: data.organization.impact1Title,
        title2: data.organization.impact2Title,
        title3: data.organization.impact3Title,
      });
      setField(true);
    }
  }, [data, fetching, reset, isField]);
  console.log('nonprofit:', data);
  const paths = getOrgDashboardPaths(router.query.organizationId! as string);
  const { t } = useTranslation();
  const handleClose = () => {
    setNotif({ open: false, type: 'success', message: '' });
  };

  const handleOrganization = async (e: any) => {
    e.preventDefault();
    console.log(e);
    setLoading(true);
    const variables = {
      username: e.target[0].value,
      name: e.target[2].value,
      organizationProfile: e.target[4].value,
      _id: router.query.organizationId,
      licenseNumber: e.target[7].value,
      orgObjective: e.target[9].value,
    };
    console.log('variable', variables);
    try {
      const resp = await updateOneNonprofit(variables);
      if (resp.error) {
        if (resp.error.message) {
          if (resp.error.message.includes('username dup key')) {
            setNotif({
              open: true,
              type: 'error',
              message: 'Username already exist, please change it.',
            });
            throw new Error('Username already exist, please change it.');
          } else {
            setNotif({
              open: true,
              type: 'error',
              message: resp.error.message,
            });
            throw new Error(resp.error.message);
          }
        }
      }
      refresh();
      setNotif({
        open: true,
        type: 'success',
        message: 'Organization is Updated',
      });
    } catch (err) {
      setNotif({
        open: true,
        type: 'error',
        message: JSON.stringify(err),
      });
    }
    setLoading(false);
  };

  const handleSocmed = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    console.log(e);
    const variables = {
      _id: router.query.organizationId,
      instagram: e.target[2].value,
      youtube: e.target[6].value,
      facebook: e.target[0].value,
      linkedin: e.target[8].value,
      twitter: e.target[4].value,
    };
    try {
      const updateSocialMedia = await updateOneSocmed(variables);
      if (updateSocialMedia.error) {
        if (updateSocialMedia.error.message) {
          setNotif({
            open: true,
            type: 'error',
            message: updateSocialMedia.error.message,
          });
          throw new Error(updateSocialMedia.error.message);
        }
      }
      setNotif({ open: true, type: 'success', message: 'Social media updated' });
    } catch (err) {
      setNotif({
        open: true,
        type: 'error',
        message: JSON.stringify(err),
      });
    }

    setLoading(false);
  };

  const handleImpact = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const variables = {
      _id: router.query.organizationId,
      impact1Title: e.target[0].value,
      impact1Amount: e.target[2].value,
      impact2Title: e.target[4].value,
      impact2Amount: e.target[6].value,
      impact3Title: e.target[8].value,
      impact3Amount: e.target[10].value,
    };
    try {
      const updateImpactR = await updateOneImpact(variables);
      console.log('update impact result', updateImpactR);
      if (updateImpactR.error) {
        if (updateImpactR.error.message) {
          setNotif({
            open: true,
            type: 'error',
            message: updateImpactR.error.message,
          });
          throw new Error(updateImpactR.error.message);
        }
      }
      setNotif({
        open: true,
        type: 'success',
        message: 'Organization impact updated',
      });
    } catch (err) {
      setNotif({
        open: true,
        type: 'error',
        message: JSON.stringify(err),
      });
    }
    setLoading(false);
  };

  const handleAbout = async (e: any) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <OrgDashboardLayout organization={organizationRes?.data?.organization}>
      <Page title={`Nonprofit Organization - ${data?.organization?.username ?? '...'} | Tmra`}>
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
              <HeaderBreadcrumbs
                heading={t('Organization')}
                links={[{ name: t('Edit organization') }]}
              />
              <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList
                      variant="scrollable"
                      scrollButtons="auto"
                      allowScrollButtonsMobile
                      onChange={handleChange}
                    >
                      <Tab label="Organization" value="1" />
                      <Tab label="Social Media" value="2" />
                      <Tab label="Impact" value="3" />
                      {/* <Tab label="About" value="4" /> */}
                    </TabList>
                  </Box>
                  <TabPanel sx={{ marginTop: 3 }} value="1">
                    <Card sx={{ p: 5 }}>
                      <Typography sx={{ marginBottom: 2 }} variant="h4" color="#637381">
                        Your organization info
                      </Typography>
                      {/* {loading === false ?  */}
                      <form onSubmit={handleOrganization}>
                        <Stack spacing={3}>
                          {/* <LabelStyle>Title</LabelStyle> */}
                          <Controller
                            name="username"
                            control={control}
                            render={({ field, fieldState }) => (
                              <TextField
                                fullWidth
                                label={t('Organization username')}
                                {...field}
                                error={Boolean(fieldState.invalid && fieldState.error)}
                              />
                            )}
                          />
                          <Controller
                            name="name"
                            control={control}
                            render={({ field, fieldState }) => (
                              <TextField
                                fullWidth
                                label={t('Organization name')}
                                {...field}
                                error={Boolean(fieldState.invalid && fieldState.error)}
                              />
                            )}
                          />

                          <Controller
                            name="organizationProfile"
                            control={control}
                            render={({ field, fieldState }) => (
                              <TextField
                                fullWidth
                                multiline
                                label={t('Organization profile')}
                                {...field}
                                error={Boolean(fieldState.invalid && fieldState.error)}
                              />
                            )}
                          />
                          <Controller
                            name="licenseNumber"
                            control={control}
                            render={({ field, fieldState }) => (
                              <TextField
                                fullWidth
                                label={t('License number')}
                                {...field}
                                error={Boolean(fieldState.invalid && fieldState.error)}
                              />
                            )}
                          />
                          <Controller
                            name="orgObjective"
                            control={control}
                            render={({ field, fieldState }) => (
                              <TextField
                                fullWidth
                                label={t('Objectives of the Organization')}
                                {...field}
                                error={Boolean(fieldState.invalid && fieldState.error)}
                              />
                            )}
                          />
                          {/* <Controller
                            name="nonprofitType"
                            control={control}
                            render={({ field, fieldState }) => (
                              <FormControl sx={{ marginTop: 2, marginBottom: 2, width: '100%' }}>
                                <InputLabel id="nonprofitType">Nonprofit Categories</InputLabel>
                                <Select
                                  labelId="nonprofitType"
                                  label={t('Nonprofit Categories')}
                                  {...field}
                                  error={Boolean(fieldState.invalid && fieldState.error)}
                                >
                                  <MenuItem value="education">Education</MenuItem>
                                  <MenuItem value="communityService">Community Service</MenuItem>
                                  <MenuItem value="orphanCare">Orphan Care</MenuItem>
                                </Select>
                              </FormControl>
                            )}
                          /> */}
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
                    {/* :( <CircularProgress />)} */}
                  </TabPanel>
                  <TabPanel sx={{ marginTop: 3 }} value="2">
                    <Card sx={{ p: 5 }}>
                      <Typography sx={{ marginBottom: 3 }} variant="h4" color="#637381">
                        Your organization social media url
                      </Typography>
                      {/* {loading === false ?  */}
                      <form onSubmit={handleSocmed}>
                        <Stack spacing={3}>
                          <Controller
                            name="facebook"
                            control={control}
                            render={({ field, fieldState }) => (
                              <TextField
                                fullWidth
                                label={t('Facebook')}
                                {...field}
                                error={Boolean(fieldState.invalid && fieldState.error)}
                              />
                            )}
                          />
                          <Controller
                            name="instagram"
                            control={control}
                            render={({ field, fieldState }) => (
                              <TextField
                                fullWidth
                                label={t('Instagram')}
                                {...field}
                                error={Boolean(fieldState.invalid && fieldState.error)}
                              />
                            )}
                          />
                          <Controller
                            name="twitter"
                            control={control}
                            render={({ field, fieldState }) => (
                              <TextField
                                fullWidth
                                label={t('Twitter')}
                                {...field}
                                error={Boolean(fieldState.invalid && fieldState.error)}
                              />
                            )}
                          />
                          <Controller
                            name="youtube"
                            control={control}
                            render={({ field, fieldState }) => (
                              <TextField
                                fullWidth
                                label={t('Youtube')}
                                {...field}
                                error={Boolean(fieldState.invalid && fieldState.error)}
                              />
                            )}
                          />
                          <Controller
                            name="linkedin"
                            control={control}
                            render={({ field, fieldState }) => (
                              <TextField
                                fullWidth
                                label={t('Linkedin')}
                                {...field}
                                error={Boolean(fieldState.invalid && fieldState.error)}
                              />
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
                          Update
                        </LoadingButton>
                      </form>
                    </Card>
                  </TabPanel>
                  <TabPanel sx={{ marginTop: 3 }} value="3">
                    <Card sx={{ p: 5 }}>
                      <Typography sx={{ marginBottom: 2 }} variant="h4" color="#637381">
                        Your organization impact section
                      </Typography>
                      {/* {loading === false ?  */}
                      <form onSubmit={handleImpact}>
                        <Stack spacing={3}>
                          <Controller
                            name="title1"
                            control={control}
                            render={({ field, fieldState }) => (
                              <TextField
                                fullWidth
                                label={t('Title (1)')}
                                {...field}
                                error={Boolean(fieldState.invalid && fieldState.error)}
                              />
                            )}
                          />
                          <Controller
                            name="amount1"
                            control={control}
                            render={({ field, fieldState }) => (
                              <TextField
                                fullWidth
                                label={t('Amount (1)')}
                                {...field}
                                error={Boolean(fieldState.invalid && fieldState.error)}
                              />
                            )}
                          />
                          <Controller
                            name="title2"
                            control={control}
                            render={({ field, fieldState }) => (
                              <TextField
                                fullWidth
                                label={t('Title (2)')}
                                {...field}
                                error={Boolean(fieldState.invalid && fieldState.error)}
                              />
                            )}
                          />
                          <Controller
                            name="amount2"
                            control={control}
                            render={({ field, fieldState }) => (
                              <TextField
                                fullWidth
                                label={t('Amount (2)')}
                                {...field}
                                error={Boolean(fieldState.invalid && fieldState.error)}
                              />
                            )}
                          />
                          <Controller
                            name="title3"
                            control={control}
                            render={({ field, fieldState }) => (
                              <TextField
                                fullWidth
                                label={t('Title (3)')}
                                {...field}
                                error={Boolean(fieldState.invalid && fieldState.error)}
                              />
                            )}
                          />
                          <Controller
                            name="amount3"
                            control={control}
                            render={({ field, fieldState }) => (
                              <TextField
                                fullWidth
                                label={t('Amount (3)')}
                                {...field}
                                error={Boolean(fieldState.invalid && fieldState.error)}
                              />
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
                          Update
                        </LoadingButton>
                      </form>
                    </Card>
                  </TabPanel>
                </TabContext>
              </Box>
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
