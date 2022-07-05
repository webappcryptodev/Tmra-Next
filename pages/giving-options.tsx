/* eslint-disable @typescript-eslint/no-unused-vars */
// material
import Page from '@components/Page';
import GivingSadaqahGivingOptionsContent from '@components/_external-pages/whitelabel/giving-sadaqah/GivingSadaqahOptionsContent';
import GivingSadaqahLayout from '@layouts/givingsadaqah';
import config from '@configuration';
// components
import MainLayout from '@layouts/main';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GenericPageProps, getOrganizationFromRequest } from '@utils/whitelabel';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';

import {
  OrganizationHomePageProps,
  getOrganizationHomePageProps,
} from '@components/_external-pages/whitelabel/OrganizationHomePage';
// import {
//   AboutHero,
//   AboutWhat,
//   AboutTeam,
//   AboutVision,
//   AboutTestimonials
// } from '../components/_external-pages/about';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function GivingOptionsPage({
  organizationRes,
  appearanceRes,
}: OrganizationHomePageProps) {
  const { t } = useTranslation();
  const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

  if (organizationRes?.data?._id === '62414373cf00cca3a830814a') {
    return (
      <GivingSadaqahLayout
        backgroundColor="transparent"
        secondColor="secondary.main"
        imgLogoUrl={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${appearanceRes?.data?.nonprofitAppearance?.logo}`}
        homeURL="/"
        organization={organizationRes?.data}
      >
        <GivingSadaqahGivingOptionsContent
          organization={organizationRes?.data}
          appearance={appearanceRes?.data?.nonprofitAppearance}
        />
      </GivingSadaqahLayout>
    );
  }

  return (
    <MainLayout campaignDetails={false}>
      <RootStyle title={`${t('menu.terms')} | ${t('app.name')}`}>
        <Container maxWidth="lg" sx={{ pb: 5 }}>
          No Content
        </Container>
      </RootStyle>
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps<OrganizationHomePageProps> = async ({
  locale,
  req,
  res,
}) => {
  const organization = await getOrganizationFromRequest(req);
  const organizationHomePageProps = await getOrganizationHomePageProps({
    organizationId: organization?.id,
  });
  res.statusCode = organizationHomePageProps?.statusCode;

  return {
    props: {
      ...(await serverSideTranslations(locale!)),
      // Will be passed to the page component as props
      ...organizationHomePageProps,
    },
  };
};
