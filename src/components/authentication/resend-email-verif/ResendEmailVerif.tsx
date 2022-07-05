import useIsMountedRef from '@hooks/useIsMountedRef';
import { LoadingButton } from '@mui/lab';
// material
import { Alert, Stack, TextField } from '@mui/material';
import axios from 'axios';
import { Form, FormikProvider, useFormik } from 'formik';
import { useTranslation } from 'next-i18next';
import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';
import * as Yup from 'yup';

// ----------------------------------------------------------------------

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

type InitialValues = {
  email: string;
  afterSubmit?: string;
};

type ResendEmailVerifProps = {
  onSent: VoidFunction;
  onGetEmail: (value: string) => void;
};

export default function ResendEmailVerif({ onSent, onGetEmail }: ResendEmailVerifProps) {
  const isMountedRef = useIsMountedRef();
  const { t } = useTranslation();

  const ResendEmailVerifSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
  });

  const formik = useFormik<InitialValues>({
    initialValues: {
      email: '',
    },
    validationSchema: ResendEmailVerifSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        const resp = await axios.get(
          `${publicRuntimeConfig.tmra.fund.url}/resend-verify/${values.email}`,
        );
        onSent();
        onGetEmail(formik.values.email);
        setSubmitting(false);
      } catch (error) {
        console.error(error);
        if (isMountedRef.current) {
          if (axios.isAxiosError(error)) {
            setErrors({ afterSubmit: error.response?.data.body.message });
          } else {
            setErrors({ afterSubmit: JSON.stringify(error) });
          }
          setSubmitting(false);
        }
      }
    },
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}

          <TextField
            fullWidth
            {...getFieldProps('email')}
            type="email"
            label={t('pages.login.email.placeholder')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            {t('pages.forgot.reset-email')}
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
