/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';
import * as Yup from 'yup';
import { capitalCase } from 'change-case';
import RouterLink from 'next/link';
import { useTranslation } from 'next-i18next';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import closeFill from '@iconify/icons-eva/close-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { useSnackbar } from 'notistack';
// material
import { styled } from '@mui/material/styles';
import {
  Box,
  Card,
  Stack,
  Link,
  Alert,
  Tooltip,
  Container,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// routes
import { getLandingMainPaths } from '@routes/paths';
// hooks
import useAuth from '@hooks/useAuth';
// layouts
import AuthLayout from '@layouts/AuthLayout';
import GivingSadaqahLayout from '@layouts/givingsadaqah';
// components
import Page from '@components/Page';
import { MHidden, MIconButton } from '@components/@material-extend';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Form, FormikProvider, useFormik } from 'formik';
import { gql, useMutation } from 'urql';
import dataCountry from 'src/components/_external-pages/gift/phone_prefix.json';
import { signInToRealm } from '@redux/slices/auth/authSlice';
import { app } from '@redux/slices/auth/realm';
import { IPropsLoginOrganization } from 'src/models/Organization';
import LanguagePopover from '@layouts/dashboard/LanguagePopover';
import SignUpDonorGS from '@components/authentication/login/SignUpDonorGS';

// ----------------------------------------------------------------------

const createauthUser = gql`
  mutation insertuser(
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
    $passwordchange: Boolean!
  ) {
    insertFusionAuthUser(
      input: {
        firstName: $firstname
        lastName: $lastname
        email: $email
        password: $password
        passwordChangeRequired: $passwordchange
      }
    ) {
      result {
        error {
          message {
            message0
            message1
            message2
            message3
          }
        }
        registration {
          applicationId
          id
          insertInstant
          lastLoginInstant
          lastUpdateInstant
          usernameStatus
          verified
        }
        token
        user {
          active
          connectorId
          email
          firstName
          id
          insertInstant
          lastLoginInstant
          lastName
          lastUpdateInstant
          passwordChangeRequired
          passwordLastUpdateInstant
          tenantId
          twoFactorDelivery
          twoFactorEnabled
          usernameStatus
          verified
        }
      }
    }
  }
`;
const createUser = gql`
  mutation createUser(
    $firstname: String!
    $lastname: String!
    $email: String!
    $type: String!
    $_id: String!
  ) {
    insertOneUser(
      data: { firstname: $firstname, lastname: $lastname, email: $email, type: $type, _id: $_id }
    ) {
      _id
      firstname
      lastname
      email
      type
    }
  }
`;
const insertDonor = gql`
  mutation insertDonor(
    $state: String!
    $country: String!
    $gender: String!
    $mobile: String!
    $address: String!
    $ownerRealmId: ObjectId!
    $ownerUserId: String!
  ) {
    insertOneDonor(
      data: {
        country: $country
        state: $state
        mobile: $mobile
        ownerRealmId: $ownerRealmId
        ownerUserId: $ownerUserId
        address: $address
        gender: $gender
      }
    ) {
      ownerRealmId
      ownerUserId
    }
  }
`;
const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}));

const GSLoginRootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(4),
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------
type InitialValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  country: string;
  state: string;
  address: string;
  phoneCode: string;
  phoneNumber: string;
  afterSubmit?: string;
};

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

export default function SignUpDonor() {
  const { method } = useAuth();
  const landingMainPaths = getLandingMainPaths();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [showPassword, setShowPassword] = React.useState(false);
  const [resultRegister, insertAuth] = useMutation(createauthUser);
  const [resultInsertUser, insertUser] = useMutation(createUser);
  const [resultInsertDonor, insertOneDonor] = useMutation(insertDonor);

  const { t } = useTranslation();
  const signUpSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    country: Yup.string().required('Country is required'),
    state: Yup.string().required('State is required'),
    address: Yup.string().required('Address is required'),
    phoneCode: Yup.string().required('Phone code is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
  });

  const formik = useFormik<InitialValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      country: '',
      state: '',
      address: '',
      phoneCode: '+7 840',
      phoneNumber: '',
    },
    validationSchema: signUpSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      let variables = {};
      console.log(values);
      variables = {
        firstname: values.firstName,
        lastname: values.lastName,
        email: values.email,
        password: values.password,
        passwordchange: false,
      };
      const registerFA = await insertAuth(variables);
      console.log(registerFA);
      if (registerFA.data.insertFusionAuthUser.result.registration !== null) {
        try {
          variables = {
            firstname: values.firstName,
            lastname: values.lastName,
            email: values.email,
            type: 'donor',
            _id: registerFA.data.insertFusionAuthUser.result.user.id,
          };
          const insertTheUser = await insertUser(variables);
          console.log('insert user to database result', insertTheUser);
          const { token } = registerFA.data.insertFusionAuthUser.result;
          const loginUser = await signInToRealm(
            registerFA.data.insertFusionAuthUser.result.user.id,
            token,
          );
          variables = {
            ownerUserId: registerFA.data.insertFusionAuthUser.result.user.id,
            ownerRealmId: app.currentUser!.id,
            state: values.state,
            country: values.country,
            mobile: values.phoneCode.replace('+', '') + values.phoneNumber,
            address: values.address,
            gender: '',
          };
          const insertDonor = await insertOneDonor(variables);
          enqueueSnackbar('Registration success, Please verify your email', {
            variant: 'success',
            action: key => (
              <MIconButton size="small" onClick={() => closeSnackbar(key)}>
                <Icon icon={closeFill} />
              </MIconButton>
            ),
          });
        } catch (error) {
          resetForm({ values: { ...values, password: '' } });
          setSubmitting(false);
          setErrors({ afterSubmit: JSON.stringify(error) });
        }
      } else {
        for (let i = 0; i < 4; i++) {
          if (registerFA.data.insertFusionAuthUser.result.error.message['message' + i] !== null) {
            resetForm({ values: { ...values, password: '' } });
            setSubmitting(false);
            setErrors({
              afterSubmit: registerFA.data.insertFusionAuthUser.result.error.message['message' + i],
            });
          }
        }
      }
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword(show => !show);
  };

  const [orgId, setOrgId] = useState<string | null>(null);
  const [organizationData, setOrganizationData] = useState<IPropsLoginOrganization | null>(null);

  useEffect(() => {
    const path = `${publicRuntimeConfig.tmra.raise.url}`;
    const organizationId = localStorage.getItem('organizationId')!;
    setOrgId(organizationId);

    if (organizationId) {
      axios
        .get(`${path}/orgs/${organizationId}`)
        .then(res => {
          if (res.status === 200) {
            setOrganizationData(res.data.organization);
          }
        })
        .catch(err => {
          console.log(err.message);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (orgId && orgId === '62414373cf00cca3a830814a') {
    return (
      <GivingSadaqahLayout
        backgroundColor="transparent"
        secondColor="secondary.main"
        imgLogoUrl={
          'https://media.tmra.io/tmra/production/organization-cms/62414373cf00cca3a830814a/givingsadaqah-giving%20sadaqah.webp'
        }
        homeURL="/org/givingsadaqah"
        organization={organizationData}
      >
        <GSLoginRootStyle
          title={`Sign Up Page - Giving Sadaqah | ${t('app.name')}`}
          favicon={
            organizationData
              ? `${publicRuntimeConfig.bunny.cdn.urlMedia}/${organizationData?.favicon}`
              : 'https://media.tmra.io/tmra/production/giving-sadaqah-62414373cf00cca3a830814a-780k.webp'
          }
          id="move_top"
        >
          <Container maxWidth="lg" sx={{ py: 4 }}>
            <Grid container spacing={{ xs: 2, md: 4 }}>
              <Grid item sm={5}>
                <MHidden width="mdDown">
                  <Box component={Card} sx={{ p: 4, mt: 2 }}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      component="div"
                      sx={{ mb: 4 }}
                    >
                      <RouterLink href={landingMainPaths.root} passHref>
                        <Box
                          component="img"
                          src="https://media.tmra.io/tmra/production/organization-cms/62414373cf00cca3a830814a/givingsadaqah-giving%20sadaqah.webp"
                          sx={{
                            width: 100,
                            height: 50,
                            mr: 4,
                            filter: 'drop-shadow(0rem 0rem 0.5rem rgba(255, 255, 255))',
                            cursor: 'pointer',
                          }}
                          data-cy="org.home-page.logo"
                        />
                      </RouterLink>
                      <LanguagePopover />
                    </Stack>
                    <Typography variant="h3" sx={{ mt: 6, mb: 3, textAlign: 'center' }}>
                      Welcome to Giving Sadaqah
                    </Typography>
                    <img
                      src="/static/illustrations/islamic-community-mobile-application-vector-concept.svg"
                      alt="login"
                    />
                  </Box>
                </MHidden>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ maxWidth: 480, mx: 'auto' }}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{
                      my: { xs: 4, md: 8 },
                    }}
                  >
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h4">Giving Sadaqah</Typography>
                    </Box>

                    <Tooltip title={capitalCase(method)}>
                      <Box
                        component="img"
                        src={`/static/auth/ic_${method}.png`}
                        sx={{ width: 32, height: 32 }}
                      />
                    </Tooltip>
                  </Stack>
                  <SignUpDonorGS />
                </Box>

                <MHidden width="smUp">
                  <Typography variant="body2" align="center" sx={{ mt: 4 }}>
                    <Link component={RouterLink} href={landingMainPaths.join}>
                      {t('menu.start-free')}
                    </Link>
                  </Typography>
                </MHidden>
              </Grid>
            </Grid>
          </Container>
        </GSLoginRootStyle>
      </GivingSadaqahLayout>
    );
  } else {
    return (
      <RootStyle title={`${t('menu.register')} | ${t('app.name')}`}>
        <AuthLayout>
          {/* Don&apos;t have an account? &nbsp; */}
          <Link component={RouterLink} href={landingMainPaths.signIn}>
            {t('menu.sign-in')}
          </Link>
          {/* <LanguagePopover /> */}
        </AuthLayout>

        <MHidden width="mdDown">
          <SectionStyle>
            <Typography variant="h4" sx={{ px: 5, mt: 10, mb: 2 }}>
              {t('pages.login.welcome')}
            </Typography>
            <Typography variant="body2" sx={{ px: 5, mb: 5 }}>
              {t('pages.user.signup.nonprofit.subtitle')}
            </Typography>
            <img
              src="/static/illustrations/islamic-community-mobile-application-vector-concept.svg"
              alt="login"
              style={{ padding: '2rem' }}
            />
          </SectionStyle>
        </MHidden>

        <Container maxWidth="sm">
          <ContentStyle>
            <Stack direction="row" alignItems="center" sx={{ mb: 5 }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h4" gutterBottom>
                  {t('app.name')}
                </Typography>
                {/* <Typography sx={{ color: 'text.secondary' }}>Enter your details below.</Typography> */}
              </Box>

              <Tooltip title={capitalCase(method)}>
                <Box
                  component="img"
                  src={`/static/auth/ic_${method}.png`}
                  sx={{ width: 32, height: 32 }}
                />
              </Tooltip>
            </Stack>

            {/* <LoginForm /> */}
            <FormikProvider value={formik}>
              <Form autoComplete="off" onSubmit={handleSubmit}>
                {errors.afterSubmit && (
                  <Alert sx={{ mb: 3 }} severity="error">
                    {errors.afterSubmit}
                  </Alert>
                )}
                <Stack spacing={3}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label={t('pages.user.signup.nonprofit.firstName.label')}
                        {...getFieldProps('firstName')}
                        error={Boolean(touched.firstName && errors.firstName)}
                        helperText={touched.firstName && errors.firstName}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label={t('pages.user.signup.nonprofit.lastName.label')}
                        {...getFieldProps('lastName')}
                        error={Boolean(touched.lastName && errors.lastName)}
                        helperText={touched.lastName && errors.lastName}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        autoComplete="username"
                        type="email"
                        label={t('pages.login.email.placeholder')}
                        {...getFieldProps('email')}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        autoComplete="current-password"
                        type={showPassword ? 'text' : 'password'}
                        label={t('pages.login.password.placeholder')}
                        {...getFieldProps('password')}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton onClick={handleShowPassword} edge="end">
                                <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        error={Boolean(touched.password && errors.password)}
                        helperText={touched.password && errors.password}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label={t('pages.register.country')}
                        {...getFieldProps('country')}
                        error={Boolean(touched.country && errors.country)}
                        helperText={touched.country && errors.country}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label={t('pages.register.state')}
                        {...getFieldProps('state')}
                        error={Boolean(touched.state && errors.state)}
                        helperText={touched.state && errors.state}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label={t('pages.register.address')}
                        {...getFieldProps('address')}
                        error={Boolean(touched.address && errors.address)}
                        helperText={touched.address && errors.address}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <FormControl sx={{ width: '100%' }}>
                        <InputLabel id="nonprofitType">Code</InputLabel>
                        <Select
                          labelId="nonprofitType"
                          label={t('Code')}
                          {...getFieldProps('phoneCode')}
                          error={Boolean(touched.phoneCode && errors.phoneCode)}
                          // helperText={touched.state && errors.state}
                        >
                          {dataCountry.countries.map(country => (
                            <MenuItem key={country.name} value={country.code}>
                              {country.code}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={9}>
                      <TextField
                        fullWidth
                        type="number"
                        label={t('pages.register.phone-number')}
                        {...getFieldProps('phoneNumber')}
                        error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                        helperText={touched.phoneNumber && errors.phoneNumber}
                      />
                    </Grid>
                  </Grid>
                </Stack>

                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ my: 2 }}
                >
                  <LoadingButton
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                  >
                    {t('menu.register')}
                  </LoadingButton>
                </Stack>
              </Form>
            </FormikProvider>

            <MHidden width="smUp">
              <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                {/* Don&apos;t have an account?&nbsp; */}
                <Link component={RouterLink} href={landingMainPaths.signIn}>
                  {t('menu.sign-in')}
                </Link>
              </Typography>
            </MHidden>
          </ContentStyle>
        </Container>
      </RootStyle>
    );
  }
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  };
}
