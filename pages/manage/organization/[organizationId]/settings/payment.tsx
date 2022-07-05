import HeaderBreadcrumbs from '@components/HeaderBreadcrumbs';
import OrgDashboardLayout from '@layouts/dashboard/OrgDashboardLayout';
import {
  Alert,
  Card,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
  Snackbar,
  Stack,
  TextField,
} from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { getOrgDashboardPaths } from '@routes/paths';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
// components
import Page from 'src/components/Page';
// hooks
import useSettings from 'src/hooks/useSettings';
import { gql, useQuery, useMutation } from 'urql';
import { LoadingButton } from '@mui/lab';
import { Controller, useForm } from 'react-hook-form';
import { useFindOneOrganizationByIdQuery } from '@generated/graphql';

const getPaymentMethod = gql`
  query getPayment($id: ObjectId!) {
    organization(query: { _id: $id }) {
      _id
      paypalClientId
      defaultCurrency
      xenditMode
      username
      name
    }
    nonprofitSecret(query: { organizationId: $id }) {
      xenditLivePrivateKey
      xenditLivePublicKey
      xenditTestPrivateKey
      xenditTestPublicKey
      xenditTestCallbackToken
      xenditLiveCallbackToken
    }
  }
`;

const updateUtility = gql`
  mutation updateNonprofit($defaultCurrency: String!, $_id: ObjectId!) {
    updateOneOrganization(query: { _id: $_id }, set: { defaultCurrency: $defaultCurrency }) {
      _id
      defaultCurrency
    }
  }
`;

const updateNonprofit = gql`
  mutation updateNonprofit($paypalClientId: String!, $_id: ObjectId!) {
    updateOneOrganization(query: { _id: $_id }, set: { paypalClientId: $paypalClientId }) {
      _id
      paypalClientId
    }
  }
`;

const insertXendit = gql`
  mutation updateXendit(
    $xenditMode: String!
    $xenditLivePrivateKey: String!
    $xenditLivePublicKey: String!
    $xenditTestPrivateKey: String!
    $xenditTestPublicKey: String!
    $xenditLiveCallbackToken: String!
    $xenditTestCallbackToken: String!
    $_id: ObjectId!
  ) {
    updateOneOrganization(query: { _id: $_id }, set: { xenditMode: $xenditMode }) {
      _id
    }
    insertOneNonprofitSecret(
      data: {
        organizationId: $_id
        xenditLivePrivateKey: $xenditLivePrivateKey
        xenditLivePublicKey: $xenditLivePublicKey
        xenditTestPrivateKey: $xenditTestPrivateKey
        xenditTestPublicKey: $xenditTestPublicKey
        xenditLiveCallbackToken: $xenditLiveCallbackToken
        xenditTestCallbackToken: $xenditTestCallbackToken
      }
    ) {
      _id
    }
  }
`;

const updateXendit = gql`
  mutation updateXendit(
    $xenditMode: String!
    $xenditLivePrivateKey: String!
    $xenditLivePublicKey: String!
    $xenditTestPrivateKey: String!
    $xenditTestPublicKey: String!
    $xenditLiveCallbackToken: String!
    $xenditTestCallbackToken: String!
    $_id: ObjectId!
  ) {
    updateOneOrganization(query: { _id: $_id }, set: { xenditMode: $xenditMode }) {
      _id
    }
    updateOneNonprofitSecret(
      query: { organizationId: $_id }
      set: {
        xenditLivePrivateKey: $xenditLivePrivateKey
        xenditLivePublicKey: $xenditLivePublicKey
        xenditTestPrivateKey: $xenditTestPrivateKey
        xenditTestPublicKey: $xenditTestPublicKey
        xenditLiveCallbackToken: $xenditLiveCallbackToken
        xenditTestCallbackToken: $xenditTestCallbackToken
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

interface AppearanceValues {
  currency: string;
  paypalClientId: string;
  xenditMode: string;
  xenditLivePrivateKey: string;
  xenditLivePublicKey: string;
  xenditTestPrivateKey: string;
  xenditTestPublicKey: string;
  xenditTestCallbackToken: string;
  xenditLiveCallbackToken: string;
}

export default function OrgDashboardOverview() {
  const { themeStretch } = useSettings();
  const router = useRouter();
  const [value, setValues] = React.useState('1');
  const [loading, setLoading] = React.useState(false);
  const [isField, setField] = React.useState(false);
  const { handleSubmit, control, reset, setValue, getValues } = useForm<AppearanceValues>({
    defaultValues: {
      currency: 'SAR',
      paypalClientId: '',
      xenditMode: 'TEST',
      xenditLivePrivateKey: '',
      xenditLivePublicKey: '',
      xenditTestPrivateKey: '',
      xenditTestPublicKey: '',
      xenditTestCallbackToken: '',
      xenditLiveCallbackToken: '',
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
  const [resultUpdateCurrency, updateOneCurrency] = useMutation(updateUtility);
  const [resultUpdateNonprofit, updateOneNonprofit] = useMutation(updateNonprofit);
  const [resultUpdateXendit, updateOneXendit] = useMutation(updateXendit);
  const [, insertOneXendit] = useMutation(insertXendit);
  const [nonprofitRes, reexecuteQuery] = useQuery<{
    organization: {
      _id: string;
      paypalClientId: string;
      defaultCurrency: string;
      xenditMode: string;
      username: string;
      name: string;
    };
    nonprofitSecret: {
      xenditLivePrivateKey: string;
      xenditLivePublicKey: string;
      xenditTestPrivateKey: string;
      xenditTestPublicKey: string;
      xenditTestCallbackToken: string;
      xenditLiveCallbackToken: string;
    };
    // user: { firstname: string; lastname: string };
  }>({
    query: getPaymentMethod,
    variables: { id: router.query.organizationId },
  });
  const refresh = () => {
    reexecuteQuery({ requestPolicy: 'network-only' });
  };
  const { data, fetching, error } = nonprofitRes;
  console.log('organization', data);
  useEffect(() => {
    if (data && fetching === false && isField === false) {
      reset({
        currency: data.organization.defaultCurrency,
        paypalClientId: data.organization.paypalClientId,
        xenditMode: data.organization.xenditMode,
        xenditLivePrivateKey: data.nonprofitSecret ? data.nonprofitSecret.xenditLivePrivateKey : '',
        xenditLivePublicKey: data.nonprofitSecret ? data.nonprofitSecret.xenditLivePublicKey : '',
        xenditTestPrivateKey: data.nonprofitSecret ? data.nonprofitSecret.xenditTestPrivateKey : '',
        xenditTestPublicKey: data.nonprofitSecret ? data.nonprofitSecret.xenditTestPublicKey : '',
        xenditTestCallbackToken: data.nonprofitSecret
          ? data.nonprofitSecret.xenditTestCallbackToken
          : '',
        xenditLiveCallbackToken: data.nonprofitSecret
          ? data.nonprofitSecret.xenditLiveCallbackToken
          : '',
      });
      setField(true);
    }
  }, [data, fetching, reset, isField]);
  console.log('nonprofit:', data);
  const paths = getOrgDashboardPaths(router.query.organizationId! as string);
  const { t } = useTranslation();
  const handleClose = () => {
    setNotif({ open: false, type: '' });
  };

  const [organizationRes] = useFindOneOrganizationByIdQuery({
    variables: { id: router.query.organizationId },
  });

  const handleUtility = async (e: any) => {
    e.preventDefault();
    console.log(e);
    setLoading(true);
    const variables = {
      _id: router.query.organizationId,
      defaultCurrency: e.target[0].value,
    };
    console.log('variable', variables);
    const resp = await updateOneCurrency(variables);
    if (resp) {
      refresh();
      setNotif({
        open: true,
        type: 'Utility is Updated',
      });
    } else {
      setNotif({ open: false, type: '' });
    }
    setLoading(false);
  };

  const handlePaypal = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    console.log(e);
    const variables = {
      _id: router.query.organizationId,
      paypalClientId: e.target[0].value,
    };
    const resp = await updateOneNonprofit(variables);
    if (resp) {
      setNotif({ open: true, type: 'Paypal settings is updated' });
    }
    setLoading(false);
  };

  const handleXendit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (data?.nonprofitSecret) {
      const variables = {
        _id: router.query.organizationId,
        xenditMode: e.target[0].value,
        xenditLivePrivateKey: e.target[2].value,
        xenditLivePublicKey: e.target[4].value,
        xenditTestPrivateKey: e.target[6].value,
        xenditTestPublicKey: e.target[8].value,
        xenditTestCallbackToken: e.target[10].value,
        xenditLiveCallbackToken: e.target[12].value,
      };
      const resp = await updateOneXendit(variables);
      console.log('update impact result', resp);
      if (resp) {
        setNotif({
          open: true,
          type: 'Xendit settings is updated',
        });
      }
    } else {
      const variables = {
        _id: router.query.organizationId,
        xenditMode: e.target[0].value,
        xenditLivePrivateKey: e.target[2].value,
        xenditLivePublicKey: e.target[4].value,
        xenditTestPrivateKey: e.target[6].value,
        xenditTestPublicKey: e.target[8].value,
        xenditTestCallbackToken: e.target[10].value,
        xenditLiveCallbackToken: e.target[12].value,
      };
      const resp = await insertOneXendit(variables);
      console.log('update impact result', resp);
      if (resp) {
        setNotif({
          open: true,
          type: 'Xendit settings is updated',
        });
      }
    }

    setLoading(false);
    // console.log(e.target[0].value);
  };

  const handleAbout = async (e: any) => {
    e.preventDefault();
    console.log(e);
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
                <Alert onClose={handleClose} severity="success">
                  {notif.type}
                </Alert>
              </Snackbar>
              <HeaderBreadcrumbs
                heading={t('Settings')}
                links={[{ name: t('Settings') }, { name: t('Payment') }]}
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
                      <Tab label="Utility" value="1" />
                      <Tab label="Paypal" value="2" />
                      <Tab label="Xendit" value="3" />
                      {/* <Tab label="About" value="4" /> */}
                    </TabList>
                  </Box>
                  <TabPanel sx={{ marginTop: 3 }} value="1">
                    <Card sx={{ p: 5 }}>
                      {/* {loading === false ?  */}
                      <form onSubmit={handleUtility}>
                        <Stack spacing={3}>
                          <Controller
                            name="currency"
                            control={control}
                            render={({ field, fieldState }) => (
                              <FormControl sx={{ marginTop: 2, marginBottom: 2, width: '100%' }}>
                                <InputLabel id="Currency">Currency</InputLabel>
                                <Select
                                  labelId="Currency"
                                  label={t('Currency')}
                                  {...field}
                                  error={Boolean(fieldState.invalid && fieldState.error)}
                                >
                                  <MenuItem value="SAR">SAR</MenuItem>
                                  <MenuItem value="EUR">EUR</MenuItem>
                                  <MenuItem value="USD">USD</MenuItem>
                                </Select>
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
                          Update
                        </LoadingButton>
                      </form>
                    </Card>
                    {/* :( <CircularProgress />)} */}
                  </TabPanel>
                  <TabPanel sx={{ marginTop: 3 }} value="2">
                    <Card sx={{ p: 5 }}>
                      <form onSubmit={handlePaypal}>
                        <Stack spacing={3}>
                          <Controller
                            name="paypalClientId"
                            control={control}
                            render={({ field, fieldState }) => (
                              <TextField
                                fullWidth
                                label={t('Paypal client id')}
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
                      <form onSubmit={handleXendit}>
                        <Stack spacing={3}>
                          <Controller
                            name="xenditMode"
                            control={control}
                            render={({ field, fieldState }) => (
                              <FormControl sx={{ marginTop: 2, marginBottom: 2, width: '100%' }}>
                                <InputLabel>Xendit mode</InputLabel>
                                <Select
                                  label={t('Xendit mode')}
                                  {...field}
                                  error={Boolean(fieldState.invalid && fieldState.error)}
                                >
                                  <MenuItem value="TEST">TEST</MenuItem>
                                  <MenuItem value="LIVE">LIVE</MenuItem>
                                </Select>
                              </FormControl>
                            )}
                          />
                          <Controller
                            name="xenditLivePrivateKey"
                            control={control}
                            render={({ field, fieldState }) => (
                              <TextField
                                fullWidth
                                label={t('Xendit live private key')}
                                {...field}
                                error={Boolean(fieldState.invalid && fieldState.error)}
                              />
                            )}
                          />
                          <Controller
                            name="xenditLivePublicKey"
                            control={control}
                            render={({ field, fieldState }) => (
                              <TextField
                                fullWidth
                                label={t('Xendit live public key')}
                                {...field}
                                error={Boolean(fieldState.invalid && fieldState.error)}
                              />
                            )}
                          />
                          <Controller
                            name="xenditLiveCallbackToken"
                            control={control}
                            render={({ field, fieldState }) => (
                              <TextField
                                fullWidth
                                label={t('Xendit live callback token')}
                                {...field}
                                error={Boolean(fieldState.invalid && fieldState.error)}
                              />
                            )}
                          />
                          <Controller
                            name="xenditTestPrivateKey"
                            control={control}
                            render={({ field, fieldState }) => (
                              <TextField
                                fullWidth
                                label={t('Xendit test private key')}
                                {...field}
                                error={Boolean(fieldState.invalid && fieldState.error)}
                              />
                            )}
                          />
                          <Controller
                            name="xenditTestPublicKey"
                            control={control}
                            render={({ field, fieldState }) => (
                              <TextField
                                fullWidth
                                label={t('Xendit test public key')}
                                {...field}
                                error={Boolean(fieldState.invalid && fieldState.error)}
                              />
                            )}
                          />
                          <Controller
                            name="xenditTestCallbackToken"
                            control={control}
                            render={({ field, fieldState }) => (
                              <TextField
                                fullWidth
                                label={t('Xendit test callback token')}
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
