import * as Yup from 'yup';
import { Form, FormikProvider, useFormik } from 'formik';
// material
import { TextField, Alert, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// hooks
import useAuth from '@hooks/useAuth';
import useIsMountedRef from '@hooks/useIsMountedRef';
import { useTranslation } from 'next-i18next';
import { gql, useMutation } from 'urql';

// ----------------------------------------------------------------------

const forgotPassword = gql`
  mutation forgotPass($email: String!) {
    forgotPassword(input: { email: $email }) {
      success {
        message
      }
    }
  }
`;

type InitialValues = {
  email: string;
  afterSubmit?: string;
};

type ResetPasswordFormProps = {
  onSent: VoidFunction;
  onGetEmail: (value: string) => void;
};

export default function ResetPasswordForm({ onSent, onGetEmail }: ResetPasswordFormProps) {
  const [resultForgotPass, forgotPass] = useMutation(forgotPassword);
  const { resetPassword } = useAuth();
  const isMountedRef = useIsMountedRef();
  const { t } = useTranslation();

  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
  });

  const formik = useFormik<InitialValues>({
    initialValues: {
      email: '',
    },
    validationSchema: ResetPasswordSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        // resetPassword?.(values.email);
        const variables = {
          email: values.email,
        };
        const forgotResp = await forgotPass(variables);
        if (forgotResp.data.forgotPassword.success.message !== 'success') {
          setErrors({ afterSubmit: forgotResp.data.forgotPassword.success.message });
          setSubmitting(false);
        } else {
          if (isMountedRef.current) {
            onSent();
            onGetEmail(formik.values.email);
            setSubmitting(false);
          }
        }
      } catch (error) {
        console.error(error);
        if (isMountedRef.current) {
          setErrors({ afterSubmit: JSON.stringify(error) });
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
