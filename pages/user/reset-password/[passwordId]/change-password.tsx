import { MIconButton } from '@components/@material-extend';
// components
import Page from '@components/Page';
import useIsMountedRef from '@hooks/useIsMountedRef';
import closeFill from '@iconify/icons-eva/close-fill';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { Icon } from '@iconify/react';
// layouts
import LogoOnlyLayout from '@layouts/LogoOnlyLayout';
import { LoadingButton } from '@mui/lab';
import {
  Alert,
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
// material
import { styled } from '@mui/material/styles';
// routes
import { getLandingMainPaths } from '@routes/paths';
import axios from 'axios';
import { Form, FormikProvider, useFormik } from 'formik';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import getConfig from 'next/config';
import RouterLink from 'next/link';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import RuntimeConfigs from '@utils/runtime-configs';
import * as Yup from 'yup';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
}));

type InitialValues = {
  password: string;
  afterSubmit?: string;
};
// ----------------------------------------------------------------------

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

export default function ResetPassword() {
  const isMountedRef = useIsMountedRef();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const { t } = useTranslation();
  const paths = getLandingMainPaths();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const ResetPasswordSchema = Yup.object().shape({
    password: Yup.string().required('Email is required'),
  });

  const formik = useFormik<InitialValues>({
    initialValues: {
      password: '',
    },
    validationSchema: ResetPasswordSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        const data = {
          password: values.password,
        };
        const resp = await axios.post(
          `${publicRuntimeConfig.tmra.fund.url}/forgot-password/change-password/${router.query.passwordId}`,
          data,
        );
        console.log(resp);
        enqueueSnackbar('Successfully changed password', {
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
        router.push(`/user/login`);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(error);
          if (isMountedRef.current) {
            setErrors({
              afterSubmit: error.response ? error.response.data.body.message : error.message,
            });
            setSubmitting(false);
          }
        } else {
          console.error(error);
          if (isMountedRef.current) {
            setErrors({
              afterSubmit: JSON.stringify(error),
            });
            setSubmitting(false);
          }
        }
      }
    },
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;
  const handleShowPassword = () => {
    setShowPassword(show => !show);
  };
  return (
    <RootStyle title={`${t('Update password')} | ${t('app.name')}`}>
      <LogoOnlyLayout />

      <Container>
        <Box sx={{ maxWidth: 480, mx: 'auto' }}>
          <Typography variant="h3" paragraph>
            {t('Update password')}
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 5 }}>
            {t('Enter your new password.')}
          </Typography>
          <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <Stack spacing={3}>
                {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}

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

                <LoadingButton
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  loading={isSubmitting}
                >
                  {t('Update Password')}
                </LoadingButton>
              </Stack>
            </Form>
          </FormikProvider>
          <RouterLink href={paths.signIn}>
            <Button fullWidth size="large" sx={{ mt: 1 }}>
              {t('common.back')}
            </Button>
          </RouterLink>
        </Box>
      </Container>
    </RootStyle>
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
