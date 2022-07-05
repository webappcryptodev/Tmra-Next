// material
// components
import Page from '@components/Page';
import GivingSadaqahFAQContent from '@components/_external-pages/whitelabel/giving-sadaqah/GivingSadaqahFAQContent';
import GivingSadaqahLayout from '@layouts/givingsadaqah';
import IqamGlobalLayout from '@layouts/iqamglobal';
import IqamGlobalFAQContent from '@components/_external-pages/whitelabel/iqamglobal/IqamGlobalFAQContent';
import config from '@configuration';
import MainLayout from '@layouts/main';
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

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

export default function GivingSadaqahFAQPage({
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
        <GivingSadaqahFAQContent
          organization={organizationRes?.data}
          appearance={appearanceRes?.data?.nonprofitAppearance}
        />
      </GivingSadaqahLayout>
    );
  }

  if (organizationRes?.data?._id === '61b4794cfe52d41f557f1acc') {
    return (
      <IqamGlobalLayout
        organization={organizationRes?.data}
        imgLogoUrl={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${appearanceRes?.data?.nonprofitAppearance?.logo}`}
      >
        <IqamGlobalFAQContent
          appearance={appearanceRes?.data?.nonprofitAppearance}
          organization={organizationRes?.data}
        />
      </IqamGlobalLayout>
    );
  }

  return (
    <MainLayout campaignDetails={false}>
      <RootStyle title={`${t('menu.about')} | ${t('app.name')}`}>
        {/* <AboutHero />
        <AboutWhat />
        <AboutVision />
        <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 40 }} />
        <AboutTeam />
        <AboutTestimonials /> */}
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
