// material
// import {
//   AboutHero,
//   AboutWhat,
//   AboutTeam,
//   AboutVision,
//   AboutTestimonials
// } from '../components/_external-pages/about';
import { varFadeInRight, varWrapEnter } from '@components/animate';
import Page from '@components/Page';
import { client } from '@contexts/RealmUrqlContext';
import {
  FindManyOrganizationsByFeaturedDocument,
  FindManyOrganizationsByFeaturedQuery,
} from '@generated/graphql';
// components
import MainLayout from '@layouts/main';
import OrganizationCard from '@modules/org/components/OrganizationCard';
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { getLandingMainPaths } from '@routes/paths';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';
import { gql } from 'urql';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

const HeroRootStyle = styled(motion.div)(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  // backgroundImage: 'url(/static/overlay.svg), url(/static/about/hero.jpg)',
  backgroundImage: 'url(/static/overlay.svg)',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 560,
    padding: 0,
  },
}));

const HeroContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    position: 'absolute',
    bottom: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

export default function CustomersLandingPage({
  organizationsRes,
}: {
  organizationsRes: { data: FindManyOrganizationsByFeaturedQuery | null; error: string | null };
}) {
  const { t } = useTranslation();
  const router = useRouter();
  const paths = getLandingMainPaths();
  console.debug('Fetched organizations', organizationsRes.data?.organizations?.length);
  return (
    <MainLayout campaignDetails={false}>
      <RootStyle title={`${t('menu.customers')} | ${t('app.name')}`} id="move_top">
        <HeroRootStyle initial="initial" animate="animate" variants={varWrapEnter}>
          <Container maxWidth="lg" sx={{ position: 'relative', height: '100%' }}>
            <HeroContentStyle>
              <motion.div variants={varFadeInRight}>
                <Typography
                  variant="h1"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 'fontWeightMedium',
                  }}
                >
                  {t('menu.customers')}
                </Typography>
              </motion.div>

              <motion.div variants={varFadeInRight}>
                <Typography
                  variant="h4"
                  sx={{
                    mt: 5,
                    color: 'common.white',
                    fontWeight: 'fontWeightMedium',
                  }}
                >
                  Organizations who have trusted us
                </Typography>
              </motion.div>
            </HeroContentStyle>
          </Container>
        </HeroRootStyle>
        {organizationsRes.error && (
          <div>Error FindManyOrganizationsByFeaturedQuery: {organizationsRes.error}</div>
        )}
        {organizationsRes.data && (
          <Container maxWidth="lg">
            <Grid container spacing={3} sx={{ py: 4 }}>
              {organizationsRes.data.organizations?.map((org, index) => (
                <OrganizationCard key={org?._id} organization={org!} index={index} />
              ))}
            </Grid>
          </Container>
        )}
      </RootStyle>
    </MainLayout>
  );
}

export async function getServerSideProps({ query, locale }) {
  console.debug('Find featured organizations');
  const organizationsRes = await client
    .query<FindManyOrganizationsByFeaturedQuery>(FindManyOrganizationsByFeaturedDocument)
    .toPromise();
  return {
    props: {
      organizationsRes: {
        data: organizationsRes.data ?? null,
        error: organizationsRes.error?.message ?? null,
      },
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  };
}
