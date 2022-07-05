import HeaderBreadcrumbs from '@components/HeaderBreadcrumbs';
import { UploadSingleFile } from '@components/upload';
import { useFindOneOrganizationByIdQuery } from '@generated/graphql';
import OrgDashboardLayout from '@layouts/dashboard/OrgDashboardLayout';
import { LoadingButton } from '@mui/lab';
import {
  Alert,
  Card,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Skeleton,
  Snackbar,
  Stack,
  TextField,
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
import PageNotFound from '../../../../../404';

// ----------------------------------------------------------------------

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

const getEssential = gql`
  query getEssential($organizationId: ObjectId!, $_id: String!, $campaignId: ObjectId!) {
    nonprofit(query: { _id: $organizationId }) {
      _id
      username
      organizationName
    }
    campaign(query: { organizationId: $organizationId, _id: $campaignId }) {
      _id
      campaignName
      campaignImage
    }
    user(query: { _id: $_id }) {
      firstname
      lastname
    }
  }
`;
const insertReport = gql`
  mutation insertReport(
    $title: String!
    $description: String!
    $sendEmail: Boolean!
    $nonprofitRealmId: ObjectId!
    $campaignId: ObjectId!
  ) {
    insertOneCampaignNotificationReport(
      data: {
        title: $title
        description: $description
        sendEmail: $sendEmail
        nonprofitRealmId: $nonprofitRealmId
        campaignId: $campaignId
      }
    ) {
      _id
      title
    }
  }
`;
const updateReport = gql`
  mutation updatePicture($_id: ObjectId!, $campaignPhoto: String!) {
    updateOneCampaignNotificationReport(
      query: { _id: $_id }
      set: { campaignPhoto: $campaignPhoto }
    ) {
      _id
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

interface MessageValues {
  title: string;
  description: string;
  reportPhoto: CustomFile | null;
  sendEmail: boolean;
}

export default function OrgDashboardMessageNew() {
  const { themeStretch } = useSettings();
  const router = useRouter();
  const [value, setValues] = React.useState('1');
  const [loading, setLoading] = React.useState(false);
  const [isField, setField] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const { handleSubmit, control, reset, setValue, getValues } = useForm<MessageValues>({
    defaultValues: {
      title: '',
      description: '',
      reportPhoto: null,
      sendEmail: checked,
    },
  });
  const [notif, setNotif] = React.useState({
    open: false,
    type: '',
  });
  const { open } = notif;
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValues(newValue);
  };
  const { t } = useTranslation();
  const [insertReportResult, insertOneCampaignNotificationReport] = useMutation(insertReport);
  const [updateReportResult, updateOneCampaignNotificationReport] = useMutation(updateReport);
  const [uploadImageResult, UploadOneImage] = useMutation(uploadImage);

  const [organizationRes] = useFindOneOrganizationByIdQuery({
    variables: { id: router.query.organizationId },
  });

  const [nonprofitRes, reexecuteQuery] = useQuery<{
    nonprofit: {
      _id: string;
      username: string;
      organizationName: string;
      licenseNumber: string;
      orgObjective: string;
      nonprofitType: string;
    };
    campaigns: { _id: string; campaignName: string; campaignImage: string }[];
    user: { firstname: string; lastname: string };
  }>({
    query: getEssential,
    variables: {
      organizationId: router.query.organizationId,
      _id: app.currentUser?.profile.ssoId,
      campaignId: router.query.campaignId,
    },
  });
  const refresh = () => {
    reexecuteQuery({ requestPolicy: 'network-only' });
  };

  const handleDrop = React.useCallback(
    acceptedFiles => {
      setValue('reportPhoto', acceptedFiles[0]);
    },
    [setValue],
  );

  const { data, fetching, error } = nonprofitRes;
  if (data) {
    if (!data.campaigns) {
      return <PageNotFound />;
    }
  }
  if (fetching === false && !data) {
    return <PageNotFound />;
  }
  console.log(checked);
  console.log('nonprofit:', data);
  const paths = getOrgDashboardPaths(router.query.organizationId! as string);

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
          if (encoded.length % 4 > 0) {
            encoded += '='.repeat(4 - (encoded.length % 4));
          }
          resolve(encoded);
        };
      });
    }
    return src;
  };

  function makeid(length: number) {
    const result: any = [];
    const characters = '0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }
    return result.join('');
  }

  const handleMessage = async (e: any) => {
    e.preventDefault();
    console.log(e);
    let variables = {};
    const rand = makeid(4);
    const fullName = `${`${data?.user.firstname} ${data?.user.lastname}`}`;
    const imageExtension = `.${e.target[5].files[0].name.split('.').pop()}`;
    const upload = await getBase64(e.target[5].files[0]);
    variables = {
      nonprofitRealmId: app.currentUser!.id,
      campaignId: router.query.campaignId,
      title: e.target[0].value,
      description: e.target[2].value,
      sendEmail: checked,
    };
    console.log(variables);
    const resp = await insertOneCampaignNotificationReport(variables);
    if (resp) {
      const profilePictureName =
        `${resp.data.insertOneCampaignNotificationReport._id}-${rand}` || '';
      variables = {
        imageUrl: upload,
        imageName: profilePictureName,
        imagePrefix: 'campaign-report/',
        fullName,
        imageExtension,
        currentPhoto: 'noCurrentPhoto',
      };
      console.log('varaibles that will be inputed =', upload);
      const uploadTheImage = await UploadOneImage(variables);
      if (uploadTheImage) {
        variables = {
          _id: resp.data.insertOneCampaignNotificationReport._id,
          campaignPhoto: uploadTheImage.data.uploadImage.path,
        };
        const updateImage = await updateOneCampaignNotificationReport(variables);
        if (updateImage) {
          if (checked === true) {
            const sendEmail = await app.currentUser?.functions.callFunction('donorReportEmail', {
              campaignId: router.query.campaignId,
              title: e.target[0].value,
              description: e.target[2].value,
              image: `${publicRuntimeConfig.bunny.cdn.urlMedia}/${uploadTheImage.data.uploadImage.path}`,
            });
          }
          setNotif({
            open: true,
            type: 'A report is created',
          });
        }
      }
    }
  };

  return (
    <OrgDashboardLayout organization={organizationRes?.data?.organization}>
      <Page title={`Nonprofit Organization - ${data?.nonprofit?.organizationName ?? '...'} | Tmra`}>
        <Container maxWidth={themeStretch ? false : 'xl'}>
          {data?.nonprofit && data.campaigns ? (
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
              <HeaderBreadcrumbs
                heading={t('Message')}
                links={[
                  { name: t('Messages'), href: paths.messages },
                  { name: t('Create a report') },
                ]}
              />
              <Card sx={{ p: 5 }}>
                {/* <div style={{float:'right',marginBottom:2}}>
              <ArrowBackRounded sx={{}} />
              Back
              </div> */}
                <form onSubmit={handleMessage}>
                  <Stack spacing={3}>
                    <Controller
                      name="title"
                      control={control}
                      render={({ field, fieldState }) => (
                        <TextField
                          fullWidth
                          label={t('Title')}
                          {...field}
                          error={Boolean(fieldState.invalid && fieldState.error)}
                        />
                      )}
                    />
                    <Controller
                      name="description"
                      control={control}
                      render={({ field, fieldState }) => (
                        <TextField
                          multiline
                          fullWidth
                          label={t('Descrciption')}
                          {...field}
                          error={Boolean(fieldState.invalid && fieldState.error)}
                        />
                      )}
                    />
                    <Controller
                      name="reportPhoto"
                      control={control}
                      render={({ field, fieldState }) => (
                        <FormControl sx={{ marginTop: 2, marginBottom: 2, width: '100%' }}>
                          <label htmlFor="contained-button-file">
                            <p style={{ display: 'block', color: '#637381', marginBottom: 5 }}>
                              Report Image
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
                    <Controller
                      name="sendEmail"
                      control={control}
                      render={({ field, fieldState }) => (
                        <FormControl
                          {...field}
                          error={Boolean(fieldState.invalid && fieldState.error)}
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                onChange={() => {
                                  setChecked(!checked);
                                }}
                              />
                            }
                            label="Send email notification to subscribed donors"
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
                    Create report
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
