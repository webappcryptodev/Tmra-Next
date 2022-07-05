import { useState } from 'react';
import RouterLink from 'next/link';
// material
import { styled } from '@mui/material/styles';
import { Box, Button, Container, Typography } from '@mui/material';
// layouts
import LogoOnlyLayout from '@layouts/LogoOnlyLayout';
// routes
import { getLandingMainPaths } from '@routes/paths';
// components
import Page from '@components/Page';
import { ResendEmailVerif } from '@components/authentication/resend-email-verif';
import { ResetPasswordForm } from '@components/authentication/reset-password';
//
import { SentIcon } from '@assets';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function ResendVerif() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const { t } = useTranslation();
  const paths = getLandingMainPaths();

  return (
    <RootStyle title={`${t('pages.login.forgotPassword')} | ${t('app.name')}`}>
      <LogoOnlyLayout />

      <Container>
        <Box sx={{ maxWidth: 480, mx: 'auto' }}>
          {!sent ? (
            <>
              <Typography variant="h3" paragraph>
                {t('Resend Email Verification')}
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 5 }}>
                {t(
                  'Please enter the email address associated with your account. We will email you a link to verify your account',
                )}
              </Typography>

              <ResendEmailVerif
                onSent={() => setSent(true)}
                onGetEmail={value => setEmail(value)}
              />

              <RouterLink href={paths.signIn}>
                <Button fullWidth size="large" sx={{ mt: 1 }}>
                  {t('menu.sign-in')}
                </Button>
              </RouterLink>
            </>
          ) : (
            <Box sx={{ textAlign: 'center' }}>
              <SentIcon sx={{ mb: 5, mx: 'auto', height: 160 }} />

              <Typography variant="h3" gutterBottom>
                Request sent successfully
              </Typography>
              <Typography>
                We have sent a verification email to &nbsp;
                <strong>{email}</strong>
                <br />
                Please check your email.
              </Typography>

              <RouterLink href={paths.signIn}>
                <Button size="large" variant="contained" sx={{ mt: 5 }}>
                  {t('menu.sign-in')}
                </Button>
              </RouterLink>
            </Box>
          )}
        </Box>
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
