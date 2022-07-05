// material
// components
import Page from '@components/Page';
import {
  AboutHero,
  AboutTeam,
  AboutTestimonials,
  AboutVision,
  AboutWhat,
} from '@components/_external-pages/about';
import MainLayout from '@layouts/main';
import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function HowItWorks() {
  const { t } = useTranslation();
  return (
    <MainLayout campaignDetails={false}>
      <RootStyle title={`${t('menu.how-it-works')} | ${t('app.name')}`}>
        <AboutHero />
        <AboutWhat />
        {/* <AboutVision /> */}
        {/* <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 40 }} /> */}
        {/* <AboutTeam /> */}
        {/* <AboutTestimonials /> */}
      </RootStyle>
    </MainLayout>
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
