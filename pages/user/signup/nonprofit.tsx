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
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// routes
import { getLandingMainPaths } from '@routes/paths';
// hooks
import useAuth from '@hooks/useAuth';
// layouts
import AuthLayout from '@layouts/AuthLayout';
// components
import Page from '@components/Page';
import { MHidden, MIconButton } from '@components/@material-extend';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { Form, FormikProvider, useFormik } from 'formik';
import { gql, useMutation } from 'urql';
import { signInToRealm } from '@redux/slices/auth/authSlice';
import { app } from '@redux/slices/auth/realm';

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
const insertNonprofitGQL = gql`
  mutation insertnonprofit($ownerUserId: String!) {
    insertOneOrganization(data: { ownerUserId: $ownerUserId }) {
      _id
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
  afterSubmit?: string;
};
export default function SignUpNonprofit() {
  const { method } = useAuth();
  const landingMainPaths = getLandingMainPaths();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [showPassword, setShowPassword] = React.useState(false);
  const [resultRegister, insertAuth] = useMutation(createauthUser);
  const [resultInsertUser, insertUser] = useMutation(createUser);
  const [resultInsertNonprofit, insertNonprofit] = useMutation(insertNonprofitGQL);

  const { t } = useTranslation();
  const signUpSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik<InitialValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: signUpSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      let variables = {};
      // try {
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
            // password: values.password,
            type: 'nonprofit',
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
          };
          const insertOneNonprofit = await insertNonprofit(variables);
          console.log(insertOneNonprofit);
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
  const paths = getLandingMainPaths();
  return (
    <RootStyle title={`${t('menu.register')} | ${t('app.name')}`}>
      <AuthLayout>
        {/* Don&apos;t have an account? &nbsp; */}
        <Link
          underline="none"
          variant="subtitle2"
          component={RouterLink}
          href={landingMainPaths.signIn}
        >
          {t('menu.sign-in')}
        </Link>
        {/* <LanguagePopover /> */}
      </AuthLayout>

      <MHidden width="mdDown">
        <SectionStyle>
          <Typography variant="h4" sx={{ px: 5, mt: 10, mb: 2 }}>
            {t('pages.user.signup.nonprofit.title')}
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
                </Grid>
                <TextField
                  fullWidth
                  autoComplete="username"
                  type="email"
                  label={t('pages.login.email.placeholder')}
                  {...getFieldProps('email')}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />

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
              <Link variant="subtitle2" component={RouterLink} href={landingMainPaths.signIn}>
                {t('menu.sign-in')}
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  };
}
