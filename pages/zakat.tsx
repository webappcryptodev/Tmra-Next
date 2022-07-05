/* eslint-disable @typescript-eslint/no-unused-vars */
// material
import Page from '@components/Page';
import GivingSadaqahLayout from '@layouts/givingsadaqah';
import IqamGlobalLayout from '@layouts/iqamglobal';
import MenuTab from '@components/_external-pages/zakat/MenuTab';
import { config } from '@configuration';
// components
import MainLayout from '@layouts/main';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { GenericPageProps, getOrganizationFromRequest } from '@utils/whitelabel';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useState } from 'react';
import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';

import {
  OrganizationHomePageProps,
  getOrganizationHomePageProps,
} from '@components/_external-pages/whitelabel/OrganizationHomePage';
// import './i118n';

// interface Lngs {
//   en: { nativeName: string };
//   de: { nativeName: string };
// }

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

export default function Zakat({ organizationRes, appearanceRes }: OrganizationHomePageProps) {
  const { t, i18n } = useTranslation();
  const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

  const [amount, setAmount] = useState([
    { type: 'money', amt: 0, value: 0, isAdded: false },
    { type: 'silver', amt: 0, value: 0, isAdded: false },
    {
      type: 'gold',
      amt: 0,
      value: 0,
      isAdded: false,
      carat: '',
      custom: [],
    },
    { type: 'stocks', amt: 0, value: 0, isAdded: false, custom: [] },
    { type: 'mutual', amt: 0, value: 0, isAdded: false },
  ]);

  if (organizationRes?.data?._id === '62414373cf00cca3a830814a') {
    return (
      <GivingSadaqahLayout
        backgroundColor="transparent"
        secondColor="secondary.main"
        imgLogoUrl={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${appearanceRes?.data?.nonprofitAppearance?.logo}`}
        homeURL="/"
        organization={organizationRes?.data}
      >
        <Box sx={{ mt: 4, mb: 8 }}>
          <RootStyle
            title={`${t('menu.zakat')} | ${t('app.name')}`}
            favicon={
              appearanceRes?.data?.nonprofitAppearance?.favIcon
                ? `${publicRuntimeConfig.bunny.cdn.urlMedia}/${appearanceRes?.data?.nonprofitAppearance?.favIcon}`
                : null
            }
          >
            <Container maxWidth="lg">
              <h1>{t('menu.zakat')}</h1>
              <Box sx={{ my: 1 }}>
                <MenuTab
                  handleAmount={setAmount}
                  amount={amount}
                  appearance={appearanceRes?.data?.nonprofitAppearance}
                  organization={organizationRes?.data}
                />
              </Box>
            </Container>
          </RootStyle>
        </Box>
      </GivingSadaqahLayout>
    );
  }

  if (organizationRes?.data?._id === '61b4794cfe52d41f557f1acc') {
    return (
      <IqamGlobalLayout
        organization={organizationRes?.data}
        imgLogoUrl={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${appearanceRes?.data?.nonprofitAppearance?.logo}`}
      >
        <Box sx={{ mt: 4, mb: 8 }}>
          <RootStyle
            title={`Ommar | ${t('menu.zakat')}`}
            favicon={
              organizationRes?.data?.favicon
                ? `${publicRuntimeConfig.bunny.cdn.urlMedia}/${organizationRes?.data?.favicon}`
                : null
            }
          >
            <Container maxWidth="lg">
              <h1>{t('menu.zakat')}</h1>
              <Box sx={{ my: 1 }}>
                <MenuTab
                  handleAmount={setAmount}
                  amount={amount}
                  appearance={appearanceRes?.data?.nonprofitAppearance}
                  organization={organizationRes?.data}
                />
              </Box>
            </Container>
          </RootStyle>
        </Box>
      </IqamGlobalLayout>
    );
  }

  return (
    <MainLayout campaignDetails={false}>
      <RootStyle title={`${t('menu.zakat')} | ${t('app.name')}`}>
        <Container maxWidth="lg">
          <h1>{t('menu.zakat')}</h1>
          <Box sx={{ my: 1 }}>
            <MenuTab handleAmount={setAmount} amount={amount} />
          </Box>
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
