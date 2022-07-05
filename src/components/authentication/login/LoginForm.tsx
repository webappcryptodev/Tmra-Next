/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Yup from 'yup';
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import RouterLink from 'next/link';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import closeFill from '@iconify/icons-eva/close-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// material
import { Link, Stack, Alert, TextField, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// routes
import { getLandingMainPaths } from '@routes/paths';
// hooks
import useAuth from '@hooks/useAuth';
import useIsMountedRef from '@hooks/useIsMountedRef';
//
import { MIconButton } from '@components/@material-extend';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { signIn } from '@redux/slices/auth/authSlice';
import { useDispatch } from 'react-redux';
import { app } from '@redux/slices/auth/realm';

// ----------------------------------------------------------------------

interface WithMessage {
  message: string;
}

type InitialValues = {
  email: string;
  password: string;
  remember: boolean;
  afterSubmit?: string;
};

export default function LoginForm() {
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useDispatch();
  const redirectToDashboard = async ({
    userId,
  }: // redirect,
  {
    userId: any;
    // redirect: string;
  }) => {
    /* "/start" will redirect to Nonprofit Dashboard or Donor dashboard depending on whether user can manage any nonprofit */
    console.debug('Listing managed nonprofits for', userId, '...');
    const managedNonprofits = await app.currentUser?.functions.callFunction(
      'listManagedNonprofits',
      {
        userId,
      },
    );
    console.log('Managed nonprofits for', userId, ':', managedNonprofits);
    if (managedNonprofits?.length > 0) {
      if (managedNonprofits[0].name === null) {
        //first registration go to onboarding page
        const dashboardPath = `/onboarding/organization/${managedNonprofits[0]._id}`;
        console.debug('User is a Nonprofit Manager, redirecting to', dashboardPath);
        console.log('go to onboarding', managedNonprofits[0].organizationName);
        router.push(dashboardPath);
      } else {
        //onboarding completed, go to dashboard path
        const dashboardPath = `/manage/organization/${managedNonprofits[0]._id}`;
        console.debug('User is a Nonprofit Manager, redirecting to', dashboardPath);
        console.log('go to dashboard', managedNonprofits[0].organizationName);

        //intentionally for Popover navigation
        localStorage.setItem('organizationId', managedNonprofits[0]._id);
        // localStorage.setItem('managedNonprofitsId', managedNonprofits[0]._id);
        router.push(dashboardPath);
      }
    }
    if (managedNonprofits?.length < 1) {
      const dashboardPath = '/my';
      console.debug('User is a regular donor, redirecting to', dashboardPath);
      // localStorage.setItem('managedNonprofitsId', managedNonprofits[0]._id);
      router.push(dashboardPath);
    }
  };
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik<InitialValues>({
    initialValues: {
      email: '',
      password: '',
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      try {
        // await login(values.email, values.password);
        await signIn(values.email, values.password, dispatch);
        console.log('here 1');
        enqueueSnackbar('Login success!', {
          variant: 'success',
          action: key => (
            <MIconButton size="small" onClick={() => closeSnackbar(key)}>
              <Icon icon={closeFill} />
            </MIconButton>
          ),
        });
        if (isMountedRef.current) {
          setSubmitting(false);
        }
        await redirectToDashboard({ userId: app.currentUser?.profile.ssoId });
        // router.push('/my');
      } catch (error) {
        resetForm({ values: { ...values, password: '' } });
        // if (isMountedRef.current) {
        setSubmitting(false);
        //setErrors({ afterSubmit: JSON.stringify(error) });
        // }
        //console.log('here 1111', error.message);
        enqueueSnackbar((error as WithMessage).message, {
          variant: 'error',
          action: key => (
            <MIconButton size="small" onClick={() => closeSnackbar(key)}>
              <Icon icon={closeFill} />
            </MIconButton>
          ),
        });
      }
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword(show => !show);
  };
  const paths = getLandingMainPaths();

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}

          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label={t('pages.login.email.placeholder')}
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
            data-cy="authentication.login.field.email"
          />

          <TextField
            data-cy="authentication.login.field.password"
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label={t('pages.login.password.placeholder')}
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleShowPassword}
                    edge="end"
                    data-cy="authentication.login.show-password"
                  >
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
          data-cy="authentication.login.forgot-password"
        >
          {/* <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
            label="Remember me"
          /> */}

          <Link component={RouterLink} variant="subtitle2" href={paths.resetPassword}>
            {t('pages.login.forgotPassword')}
          </Link>
          <Link
            component={RouterLink}
            variant="subtitle2"
            href={paths.signup}
            data-cy="authentication.login.sign-up-donor"
          >
            {t('pages.user.signup.as.donor')}
          </Link>
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          data-cy="authentication.login.button.sign-in"
        >
          {t('menu.sign-in')}
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
