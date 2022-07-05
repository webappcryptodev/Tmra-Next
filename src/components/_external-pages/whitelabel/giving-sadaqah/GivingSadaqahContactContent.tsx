import { MotionInView, varFadeInUp } from '@components/animate';
import Page from '@components/Page';
import { Box, Button, Grid, Stack, TextField, Typography, IconButton } from '@mui/material';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';
import getConfig from 'next/config';
import React from 'react';
import RuntimeConfigs from '@utils/runtime-configs';

import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import { MIconButton } from '@components/@material-extend';
import { useSnackbar } from 'notistack';
import { Icon } from '@iconify/react';
import closeFill from '@iconify/icons-eva/close-fill';

// ----------------------------------------------------------------------

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

const CoverImgStyle = styled('img')(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '1rem',
}));

// ----------------------------------------------------------------------

export default function GivingSadaqahContactContent({ organization, appearance }) {
  const { t } = useTranslation();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [isLoading, setLoading] = React.useState(false);

  const { handleSubmit, control } = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      help_message: '',
    },
  });

  const onSubmit = async values => {
    setLoading(true);
    try {
      const payload = {
        organizationId: organization._id,
        name: values.fullname,
        email: values.email,
        help_message: values.help_message,
      };
      const { data } = await axios.post(
        `${publicRuntimeConfig.tmra.raise.url}/contacts/send`,
        payload,
      );
      setLoading(false);
      if (data) {
        enqueueSnackbar('Your information has been sent.', {
          variant: 'success',
          action: key => (
            <MIconButton size="small" onClick={() => closeSnackbar(key)}>
              <Icon icon={closeFill} />
            </MIconButton>
          ),
        });
      }
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        enqueueSnackbar(
          error.response?.data.message ? error.response.data.message : error.response?.data,
          {
            variant: 'error',
            action: key => (
              <MIconButton size="small" onClick={() => closeSnackbar(key)}>
                <Icon icon={closeFill} />
              </MIconButton>
            ),
          },
        );
      } else {
        console.log('error', error);
        enqueueSnackbar(JSON.stringify(error), {
          variant: 'error',
          action: key => (
            <MIconButton size="small" onClick={() => closeSnackbar(key)}>
              <Icon icon={closeFill} />
            </MIconButton>
          ),
        });
      }
    }
  };

  return (
    <RootStyle
      title={`Giving Sadaqah | Contact Us`}
      favicon={
        appearance?.favIcon
          ? `${publicRuntimeConfig.bunny.cdn.urlMedia}/${appearance?.favIcon}`
          : null
      }
      id="move_top"
    >
      <Container maxWidth="lg" sx={{ pt: 4, pb: 3 }} id="obligation">
        <MotionInView variants={varFadeInUp}>
          <Typography
            variant="h2"
            sx={{
              mb: 1,
              textAlign: 'center',
              color: 'primary.main',
            }}
            data-cy="contacts.contact-us.get-in-touch"
          >
            Get in Touch!
          </Typography>
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <Grid container spacing={3}>
            <Grid item lg={6} md={6} sm={12} xs={12} display="flex" alignItems="center">
              <Typography
                sx={{
                  mx: 'auto',
                  maxWidth: 630,
                  color: 'text.secondary',
                }}
              >
                We welcome all enquiries. In the first instance, please contact us using the email
                form on this page. We aim to respond as soon as possible, and always within 24 hours
                of receiving an enquiry.
                <br></br>
                <br></br>Or, if you’re in London, feel free to drop into our offices, as shown on
                the map below.
              </Typography>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack direction="column" spacing={2}>
                  <Controller
                    name="fullname"
                    control={control}
                    render={({ field, fieldState }) => (
                      <TextField
                        label="Your Fullname"
                        data-cy="contacts.contact-us.label.first-name"
                        {...field}
                        error={Boolean(fieldState.invalid && fieldState.error)}
                      />
                    )}
                  />
                  <Controller
                    name="email"
                    control={control}
                    render={({ field, fieldState }) => (
                      <TextField
                        label="Your Email"
                        data-cy="contacts.contact-us.label.email"
                        {...field}
                        error={Boolean(fieldState.invalid && fieldState.error)}
                      />
                    )}
                  />
                  <Controller
                    name="help_message"
                    control={control}
                    render={({ field, fieldState }) => (
                      <TextField
                        label="How we can help you"
                        multiline
                        rows={5}
                        data-cy="contacts.contact-us.label.email"
                        {...field}
                        error={Boolean(fieldState.invalid && fieldState.error)}
                      />
                    )}
                  />
                  <Button
                    disabled={isLoading}
                    type="submit"
                    color="primary"
                    variant="contained"
                    data-cy="contacts.contact-us.button.submit"
                  >
                    Submit
                  </Button>
                </Stack>
              </form>
            </Grid>
          </Grid>
        </MotionInView>
      </Container>

      <Container maxWidth="lg" sx={{ py: 4 }} id="image_cover">
        <MotionInView variants={varFadeInUp}>
          <iframe
            style={{ borderRadius: '1rem', minHeight: '320px' }}
            width="100%"
            height="100%"
            src="https://maps.google.de/maps?hl=en&q=Giving Sadaqa, High Street Harlesden, London, Britania Raya&ie=UTF8&t=&z=17&iwloc=B&output=embed"
            frameBorder="0"
            allowFullScreen={false}
          />
        </MotionInView>
      </Container>

      <Container maxWidth="lg" sx={{ py: 4 }} id="image_cover">
        <MotionInView variants={varFadeInUp}>
          <Grid container spacing={4}>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box display="flex" flexDirection="column">
                <Typography variant="h4" mb={2} data-cy="contacts.contact-us.want-to-volunteer">
                  Want to Volunteer?
                </Typography>
                <Typography
                  variant="body1"
                  mb={1}
                  component="a"
                  href="mailto:volunteers@divicharity.com"
                  color="primary.main"
                  sx={{ textDecoration: 'none' }}
                  data-cy="contacts.contact-us.email-volunteer"
                >
                  volunteers@GivingSadaqah.org
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box display="flex" flexDirection="column">
                <Typography variant="h4" mb={2} data-cy="contacts.contact-us.want-tobe-partner">
                  Want to Partner with Us?
                </Typography>
                <Typography
                  variant="body1"
                  mb={1}
                  component="a"
                  href="mailto:volunteers@divicharity.com"
                  color="primary.main"
                  sx={{ textDecoration: 'none' }}
                  data-cy="contacts.contact-us.email-partner"
                >
                  partners@GivingSadaqah.org
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box display="flex" flexDirection="column">
                <Typography variant="h4" mb={2} data-cy="contacts.contact-us.make-donation">
                  Want to make a Donation?
                </Typography>
                <Typography variant="body1" mb={1} color="text.secondary">
                  You can donate donate directly from the link below.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  component="a"
                  href="https://givingsadaqah.tmra.io/charity/amount?cid=1"
                  target="_blank"
                  data-cy="contacts.contact-us.button.donate-now"
                >
                  Donate Now
                </Button>
              </Box>
            </Grid>
          </Grid>
        </MotionInView>
      </Container>

      <Container maxWidth="lg" sx={{ py: 4 }} id="image_cover">
        <MotionInView variants={varFadeInUp}>
          <Typography
            variant="h2"
            sx={{
              mb: 1,
              textAlign: 'center',
              color: 'primary.main',
            }}
            data-cy="contacts.contact-us.h2.touch-involved"
          >
            Get in Touch. Get Involved.
          </Typography>
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <Typography
            sx={{
              mb: 6,
              mx: 'auto',
              maxWidth: 630,
              color: 'text.secondary',
              textAlign: 'center',
            }}
          >
            It is always a pleasure to hear from you. Please do not hesitate to contact us.
          </Typography>
        </MotionInView>
        <MotionInView variants={varFadeInUp}>
          <Grid container spacing={4}>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Stack display="flex" direction="row" alignItems="center" spacing={2}>
                <IconButton
                  sx={{ color: 'primary.main' }}
                  component="a"
                  href="mailto:volunteers@divicharity.com"
                >
                  <Icon icon="akar-icons:location" />
                </IconButton>
                <Typography
                  variant="body1"
                  mb={1}
                  component="a"
                  href="mailto:volunteers@divicharity.com"
                  color="primary.main"
                  sx={{ textDecoration: 'none' }}
                  data-cy="contacts.contact-us.address"
                >
                  64 High Street Harlesden,<br></br> London NW10 4SJ
                </Typography>
              </Stack>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Stack display="flex" direction="row" alignItems="center" spacing={2}>
                <IconButton
                  sx={{ color: 'primary.main' }}
                  component="a"
                  href="mailto:volunteers@divicharity.com"
                >
                  <Icon icon="bxs:phone-call" />
                </IconButton>
                <Typography
                  variant="body1"
                  mb={1}
                  component="a"
                  href="mailto:volunteers@divicharity.com"
                  color="primary.main"
                  sx={{ textDecoration: 'none' }}
                  data-cy="contacts.contact-us.phone"
                >
                  +44 (0)800 020 9500
                </Typography>
              </Stack>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box display="flex" flexDirection="column">
                <Button
                  variant="contained"
                  color="primary"
                  component="a"
                  href="https://givingsadaqah.tmra.io/charity/amount?cid=1"
                  target="_blank"
                  data-cy="contacts.contact-us.button.make-donation"
                >
                  Make a Donation
                </Button>
              </Box>
            </Grid>
          </Grid>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
