//
import { MotivationIllustration, PageNotFoundIllustration } from '@assets';
import LoadingScreen from '@components/LoadingScreen';
// components
import Page from '@components/Page';
// layouts
import LogoOnlyLayout from '@layouts/LogoOnlyLayout';
import { Box, Button, Container, Typography } from '@mui/material';
// material
import { styled } from '@mui/material/styles';
// routes
import { getLandingMainPaths } from '@routes/paths';
import axios from 'axios';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import getConfig from 'next/config';
import RouterLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import RuntimeConfigs from '@utils/runtime-configs';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

export default function VerifEmail() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const { t } = useTranslation();
  const paths = getLandingMainPaths();
  const [fetchResult, setFetchResult]: any = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (fetchResult === null) {
      (async function fetchDonorList() {
        try {
          const resp = await axios.get(
            `${publicRuntimeConfig.tmra.fund.url}/email/verify/${router.query.verifId}`,
          );
          setFetchResult(resp);
        } catch (error: any) {
          setFetchResult(error.response);
        }
      })();
    }
  }, [fetchResult, router]);
  if (fetchResult === null) {
    // return <CircularProgress sx={{
    //   position: 'fixed',
    //   top: '50%',
    //   left: '50%',
    //   marginTop: '-50px',
    //   marginLeft: '-100px'}}/>;
    return <LoadingScreen />;
  }
  return (
    <RootStyle title={`${t('pages.login.forgotPassword')} | ${t('app.name')}`}>
      <LogoOnlyLayout />

      <Container>
        <Box sx={{ maxWidth: 480, mx: 'auto' }}>
          {fetchResult && fetchResult.status !== 200 ? (
            <>
              <Box sx={{ textAlign: 'center' }}>
                <PageNotFoundIllustration sx={{ mb: 5, mx: 'auto', height: 160 }} />

                <Typography variant="h3" gutterBottom>
                  Error!
                </Typography>
                <Typography>
                  {/* <strong>{email}  &nbsp;</strong> */}
                  {fetchResult.data.body.message}
                </Typography>

                <RouterLink href={paths.resendVerif}>
                  <Button size="large" variant="contained" sx={{ mt: 5 }}>
                    {t('Resend Email Verification')}
                  </Button>
                </RouterLink>
              </Box>
            </>
          ) : (
            <Box sx={{ textAlign: 'center' }}>
              <MotivationIllustration sx={{ mb: 5, mx: 'auto', height: 160 }} />

              <Typography variant="h3" gutterBottom>
                Email verification complete
              </Typography>
              <Typography>
                {/* <strong>{email}  &nbsp;</strong> */}
                You can sign-in now.
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
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  };
}
