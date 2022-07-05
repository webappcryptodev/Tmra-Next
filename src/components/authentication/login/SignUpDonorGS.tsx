/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Yup from 'yup';
import RouterLink from 'next/link';
import { useTranslation } from 'next-i18next';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import closeFill from '@iconify/icons-eva/close-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { useSnackbar } from 'notistack';
// material
import {
  Stack,
  Link,
  Alert,
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
// components
// import Page from '@components/Page';
import { MHidden, MIconButton } from '@components/@material-extend';
import React from 'react';
import { Form, FormikProvider, useFormik } from 'formik';
import { gql, useMutation } from 'urql';
import dataCountry from 'src/components/_external-pages/gift/phone_prefix.json';
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
export default function SignUpDonorGS() {
  const { method } = useAuth();
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
  const paths = getLandingMainPaths();
  return (
    <>
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

          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
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
          <Link variant="subtitle2" component={RouterLink} href={paths.signIn}>
            {t('menu.sign-in')}
          </Link>
        </Typography>
      </MHidden>
    </>
  );
}
