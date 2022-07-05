import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { GenericPageProps, getOrganizationFromRequest } from '@utils/whitelabel';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import getConfig from 'next/config';
// utils
import RuntimeConfigs from '@utils/runtime-configs';
// material
import {
  styled,
  Typography,
  Container,
  Grid,
  Stack,
  Box,
  MenuItem,
  FormControlLabel,
  Checkbox,
  TextField,
  Button,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Page from '@components/Page';
// layouts
import GivingSadaqahLayout from '@layouts/givingsadaqah';
// motion
import { motion } from 'framer-motion';
import { MotionContainer, varFadeIn } from '@components/animate';
//
import { toString } from 'lodash';
import { useSnackbar } from 'notistack';
import generateErrorMessage from '@utils/errorMessage';
import axios from 'axios';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

// ----------------------------------------------------------------------

const TITLE_CUST = [
  {
    value: 'Mr',
    label: 'Mr',
  },
  {
    value: 'Mrs',
    label: 'Mrs',
  },
  {
    value: 'Ms',
    label: 'Ms',
  },
  {
    value: 'Miss',
    label: 'Miss',
  },
  {
    value: 'Dr',
    label: 'Dr',
  },
];

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export const DonorForm = ({ paymentRequestObject, customAction }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

  const path = `${publicRuntimeConfig.tmra.raise.url}/donor/anonymous/create`;

  const [isLoading, setLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [tickAnonymous, setTickAnonymous] = useState<boolean | false>(false);
  const [tickSubscribe, setTickSubscribe] = useState<boolean | false>(false);

  const UserInfoSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
    email: Yup.string().required('Email is required').email('Must be a valid email'),
  });

  const methods = useForm({
    resolver: yupResolver(UserInfoSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  const { handleSubmit, control } = methods;

  const handleTickAnonymous = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTickAnonymous(event.target.checked);
  };

  const handleTickSubscribe = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTickSubscribe(event.target.checked);
  };

  const submitForm = async values => {
    setLoading(true);
    try {
      const payload: any = {
        email: values.email,
      };

      const first_name = values.name.split(' ')[0];
      const last_name = values.name.substring(first_name.length).trim();

      payload.firstName = first_name;
      if (last_name) payload.lastName = last_name;

      const { data } = await axios.post(path, payload);
      if (data && data.donor) {
        if (!customAction) {
          if (paymentRequestObject) {
            paymentRequestObject.donorId = data?.donor?._id;
            localStorage.setItem('stripe-payment', JSON.stringify(paymentRequestObject));
          }
          router.push('/charity/payment');
        } else {
          customAction(data?.donor);
        }
      }
    } catch (error) {
      enqueueSnackbar('Failed to create donor: ' + generateErrorMessage(error), {
        variant: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(submitForm)} autoComplete="off">
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        component={Box}
        sx={{ pt: 4, pb: 6 }}
      >
        <motion.div variants={varFadeIn}>
          <Typography variant="h3" sx={{ textAlign: 'center' }}>
            Tell us why you&apos;re donating
          </Typography>
        </motion.div>
        <motion.div variants={varFadeIn}>
          <Typography variant="h4" sx={{ textAlign: 'center' }}>
            Your name and message will only be shared with the charity
          </Typography>
        </motion.div>
        <Box sx={{ maxWidth: '50%', mx: 'auto', py: 2 }}>
          <Grid container justifyContent="start" alignItems="center" spacing={1.5}>
            <Grid item xs={12}>
              <motion.div variants={varFadeIn}>
                <Typography
                  variant="body1"
                  sx={{ textAlign: 'left', fontWeight: 600, marginBottom: 2 }}
                >
                  Your Fullname
                </Typography>
              </motion.div>
            </Grid>
            <Grid container spacing={1.5}>
              <Grid item xs={4}>
                <motion.div variants={varFadeIn}>
                  <TextField
                    sx={{ width: '100%' }}
                    fullWidth
                    id="field-cust-title"
                    name="field-cust-title"
                    select
                    size="small"
                    label="Title"
                    value={title}
                    onChange={e => setTitle(toString(e.target.value))}
                    data-cy="payment-stripe.stripe-donation.field.cust-title"
                  >
                    {TITLE_CUST.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </motion.div>
              </Grid>
              <Grid item xs={8}>
                <motion.div variants={varFadeIn}>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field, fieldState }) => (
                      <TextField
                        placeholder="e.g. John Smith"
                        size="small"
                        fullWidth
                        {...field}
                        error={Boolean(fieldState.invalid && fieldState.error)}
                        helperText={fieldState?.error?.message}
                        data-cy="payment-stripe.stripe-donation.label.cust-name"
                      />
                    )}
                  />
                </motion.div>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <motion.div variants={varFadeIn}>
                <Typography variant="body1" sx={{ textAlign: 'left', fontWeight: 600, mt: 1.5 }}>
                  Your Email
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <motion.div variants={varFadeIn}>
                <Controller
                  control={control}
                  name="email"
                  render={({ field, fieldState }) => (
                    <TextField
                      placeholder="Your Email"
                      size="small"
                      fullWidth
                      {...field}
                      error={Boolean(fieldState.invalid && fieldState.error)}
                      helperText={fieldState?.error?.message}
                    />
                  )}
                />
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <motion.div variants={varFadeIn}>
                <Typography variant="body1" sx={{ textAlign: 'left', fontWeight: 600, mt: 1.5 }}>
                  Your Message (Optional)
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <motion.div variants={varFadeIn}>
                <TextField
                  sx={{ width: '100%' }}
                  fullWidth
                  id="label-cust-message"
                  name="label-cust-message"
                  multiline
                  rows={4}
                  size="small"
                  placeholder="e.g. My donation to a great charity"
                  value={message}
                  onChange={e => setMessage(toString(e.target.value))}
                  data-cy="payment-stripe.stripe-donation.label.cust-message"
                />
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <motion.div variants={varFadeIn}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={tickAnonymous}
                      onChange={handleTickAnonymous}
                      data-cy="payment-stripe.stripe-donation.button.tick-anonymous"
                    />
                  }
                  label="Remain Anonymous"
                />
              </motion.div>
              <motion.div variants={varFadeIn}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={tickSubscribe}
                      onChange={handleTickSubscribe}
                      data-cy="payment-stripe.stripe-donation.button.tick-subscribe"
                    />
                  }
                  label="I would like to opt-in to receive future correspondence (Emails, Newsletters, Events etc) from Giving Sadaqah"
                  sx={{ mt: 1 }}
                />
              </motion.div>
            </Grid>
          </Grid>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
            component={Box}
            sx={{ pt: 4 }}
          >
            <motion.div variants={varFadeIn}>
              <Button
                variant="outlined"
                size="large"
                data-cy="payment-stripe.stripe-donation.button.back-1"
                onClick={() => router.back()}
              >
                {t('common.back')}
              </Button>
            </motion.div>
            <motion.div variants={varFadeIn}>
              <LoadingButton
                variant="contained"
                size="large"
                data-cy="payment-stripe.stripe-donation.button.continue"
                type="submit"
                loading={isLoading}
              >
                Continue
              </LoadingButton>
            </motion.div>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default function GivingSadaqahMoreInfoAmountPage({ organization }: GenericPageProps) {
  const { t } = useTranslation();
  const router = useRouter();
  const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

  const paymentRequest = JSON.parse(localStorage.getItem('stripe-payment')!);

  useEffect(() => {
    if (organization?.id !== '62414373cf00cca3a830814a') {
      router.push('/');
    }

    if (!paymentRequest) {
      router.push('/');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GivingSadaqahLayout
      backgroundColor="transparent"
      secondColor="secondary.main"
      imgLogoUrl={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${publicRuntimeConfig.bunny.storage.prefix}organization-cms/62414373cf00cca3a830814a/GS-Logo_OriginalAdjustNoOrg-120y.png`}
      homeURL="/"
      organization={organization}
    >
      <RootStyle title={`More Info | ${t('app.name')}`}>
        <Container maxWidth="lg">
          <MotionContainer initial="initial" open>
            <DonorForm paymentRequestObject={paymentRequest} customAction={null} />
          </MotionContainer>
        </Container>
      </RootStyle>
    </GivingSadaqahLayout>
  );
}

export const getServerSideProps: GetServerSideProps<GenericPageProps> = async ({ locale, req }) => {
  const organization = await getOrganizationFromRequest(req);
  return {
    props: {
      ...(await serverSideTranslations(locale!)),
      // Will be passed to the page component as props
      organization,
      // TODO: load appearance
      appearance: null,
    },
  };
};
