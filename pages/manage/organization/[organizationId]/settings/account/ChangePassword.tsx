import React from 'react';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
// @mui
import { Stack, Card, TextField, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import configuration from '@configuration';
import FusionAuthClient from '@fusionauth/typescript-client';
import { app } from '@redux/slices/auth/realm';
import { startSignOut } from '@redux/slices/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

type FormValuesProps = {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

export default function AccountChangePassword() {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const auth = useAppSelector(state => state.auth);

  const [showOldPassword, setShowOldPassword] = React.useState(false);
  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const ChangePassWordSchema = Yup.object().shape({
    oldPassword: Yup.string().required('Old Password is required'),
    newPassword: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('New Password is required'),
    confirmNewPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
  });

  const defaultValues = {
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  };

  const methods = useForm({
    resolver: yupResolver(ChangePassWordSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      const token = `Bearer ${auth.token}`;
      const fusionAuth = new FusionAuthClient(
        token,
        configuration.fusionauth.url,
        configuration.fusionauth.tenantId,
      );
      await fusionAuth.changePasswordByIdentity({
        applicationId: configuration.fusionauth.appId,
        currentPassword: data.oldPassword,
        loginId: app.currentUser?.profile.ssoId as string,
        password: data.confirmNewPassword,
        refreshToken: auth.refreshToken as string,
      });
      reset();
      enqueueSnackbar('Your password successfully changed. Please log in with the new password', {
        variant: 'success',
      });
      setTimeout(() => {
        startSignOut(auth.refreshToken, dispatch, router.push.bind(router));
      }, 1000);
    } catch (error) {
      enqueueSnackbar('Failed to change your password', { variant: 'error' });
      console.error(error);
    }
  };

  return (
    <Card sx={{ p: 3 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} alignItems="flex-end">
          <Controller
            name="oldPassword"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                fullWidth
                label="Old Password"
                type={showOldPassword ? 'text' : 'password'}
                {...field}
                helperText={fieldState?.error?.message}
                error={Boolean(fieldState.invalid && fieldState.error)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowOldPassword(prev => !prev)}>
                        {showOldPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          <Controller
            name="newPassword"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                fullWidth
                label="New Password"
                type={showNewPassword ? 'text' : 'password'}
                {...field}
                helperText={fieldState?.error?.message}
                error={Boolean(fieldState.invalid && fieldState.error)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowNewPassword(prev => !prev)}>
                        {showNewPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          <Controller
            name="confirmNewPassword"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                fullWidth
                label="Confirm New Password"
                type={showConfirmPassword ? 'text' : 'password'}
                {...field}
                helperText={fieldState?.error?.message}
                error={Boolean(fieldState.invalid && fieldState.error)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowConfirmPassword(prev => !prev)}>
                        {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />

          <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
            Save Changes
          </LoadingButton>
        </Stack>
      </form>
    </Card>
  );
}
