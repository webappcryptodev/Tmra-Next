/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { capitalCase } from 'change-case';
import RouterLink from 'next/link';
import { useTranslation } from 'next-i18next';
import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';
// material
import { styled } from '@mui/material/styles';
import { Box, Card, Stack, Tooltip, Container, Typography, Link, Grid } from '@mui/material';
// routes
import { getLandingMainPaths } from '@routes/paths';
// hooks
import useAuth from '@hooks/useAuth';
import axios from 'axios';
// layouts
import AuthLayout from '@layouts/AuthLayout';
import GivingSadaqahLayout from '@layouts/givingsadaqah';
// components
import Page from '@components/Page';
import { MHidden } from '@components/@material-extend';
import { LoginForm } from '@components/authentication/login';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { IPropsLoginOrganization } from 'src/models/Organization';
import LanguagePopover from '@layouts/dashboard/LanguagePopover';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const GSLoginRootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(4),
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

export default function Login() {
  const { method } = useAuth();
  const landingMainPaths = getLandingMainPaths();
  const { t } = useTranslation();
  const [orgId, setOrgId] = useState<string | null>(null);
  const [organizationData, setOrganizationData] = useState<IPropsLoginOrganization | null>(null);

  useEffect(() => {
    const path = `${publicRuntimeConfig.tmra.raise.url}`;
    const organizationId = localStorage.getItem('organizationId')!;
    setOrgId(organizationId);

    if (organizationId) {
      axios
        .get(`${path}/orgs/${organizationId}`)
        .then(res => {
          if (res.status === 200) {
            setOrganizationData(res.data.organization);
          }
        })
        .catch(err => {
          console.log(err.message);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (orgId === '62414373cf00cca3a830814a') {
    return (
      <GivingSadaqahLayout
        backgroundColor="transparent"
        secondColor="secondary.main"
        imgLogoUrl={
          'https://media.tmra.io/tmra/production/organization-cms/62414373cf00cca3a830814a/givingsadaqah-giving%20sadaqah.webp'
        }
        homeURL="/org/givingsadaqah"
        organization={organizationData}
      >
        <GSLoginRootStyle
          title={`Login Page - Giving Sadaqah | ${t('app.name')}`}
          favicon={
            organizationData
              ? `${publicRuntimeConfig.bunny.cdn.urlMedia}/${organizationData?.favicon}`
              : 'https://media.tmra.io/tmra/production/giving-sadaqah-62414373cf00cca3a830814a-780k.webp'
          }
          id="move_top"
        >
          <Container maxWidth="lg" sx={{ py: 4 }}>
            <Grid container spacing={{ xs: 2, md: 4 }}>
              <Grid item sm={5}>
                <MHidden width="mdDown">
                  <Box component={Card} sx={{ p: 4, mt: 2 }}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      component="div"
                      sx={{ mb: 4 }}
                    >
                      <RouterLink href={landingMainPaths.root} passHref>
                        <Box
                          component="img"
                          src="https://media.tmra.io/tmra/production/organization-cms/62414373cf00cca3a830814a/givingsadaqah-giving%20sadaqah.webp"
                          sx={{
                            width: 100,
                            height: 50,
                            mr: 4,
                            filter: 'drop-shadow(0rem 0rem 0.5rem rgba(255, 255, 255))',
                            cursor: 'pointer',
                          }}
                          data-cy="org.home-page.logo"
                        />
                      </RouterLink>
                      <LanguagePopover />
                    </Stack>
                    <Typography variant="h3" sx={{ mt: 6, mb: 3, textAlign: 'center' }}>
                      Welcome to Giving Sadaqah
                    </Typography>
                    <img
                      src="/static/illustrations/islamic-community-mobile-application-vector-concept.svg"
                      alt="login"
                    />
                  </Box>
                </MHidden>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ maxWidth: 480, mx: 'auto' }}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{
                      my: { xs: 4, md: 8 },
                    }}
                  >
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h4" gutterBottom>
                        Giving Sadaqah
                      </Typography>
                    </Box>

                    <Tooltip title={capitalCase(method)}>
                      <Box
                        component="img"
                        src={`/static/auth/ic_${method}.png`}
                        sx={{ width: 32, height: 32 }}
                      />
                    </Tooltip>
                  </Stack>
                  <LoginForm />
                </Box>

                <MHidden width="smUp">
                  <Typography variant="body2" align="center" sx={{ mt: 4 }}>
                    <Link variant="subtitle2" component={RouterLink} href={landingMainPaths.join}>
                      {t('menu.start-free')}
                    </Link>
                  </Typography>
                </MHidden>
              </Grid>
            </Grid>
          </Container>
        </GSLoginRootStyle>
      </GivingSadaqahLayout>
    );
  }

  return (
    <RootStyle title={`${t('menu.sign-in')} | ${t('app.name')}`}>
      <AuthLayout>
        <Link
          underline="none"
          variant="subtitle2"
          component={RouterLink}
          href={landingMainPaths.join}
        >
          {t('menu.start-free')}
        </Link>
      </AuthLayout>

      <MHidden width="mdDown">
        <SectionStyle>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            {t('pages.login.welcome')}
          </Typography>
          <img
            src="/static/illustrations/islamic-community-mobile-application-vector-concept.svg"
            alt="login"
            style={{ padding: '2rem' }}
          />
        </SectionStyle>
      </MHidden>

      <Container maxWidth="sm">
        <ContentStyle>
          <Stack direction="row" alignItems="center" sx={{ mb: 5 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h4">{t('app.name')}</Typography>
            </Box>

            <Tooltip title={capitalCase(method)}>
              <Box
                component="img"
                src={`/static/auth/ic_${method}.png`}
                sx={{ width: 32, height: 32 }}
              />
            </Tooltip>
          </Stack>

          <LoginForm />

          <MHidden width="smUp">
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              {/* Don&apos;t have an account?&nbsp; */}
              <Link variant="subtitle2" component={RouterLink} href={landingMainPaths.join}>
                {t('menu.start-free')}
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
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
