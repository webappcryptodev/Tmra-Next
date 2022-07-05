/* eslint-disable @typescript-eslint/no-unused-vars */
// material
import Page from '@components/Page';
import GivingSadaqahLayout from '@layouts/givingsadaqah';
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
// import './i118n';

// interface Lngs {
//   en: { nativeName: string };
//   de: { nativeName: string };
// }

const RootStyle = styled(Page)(({ theme }) => ({
  // paddingTop: theme.spacing(8),
  // [theme.breakpoints.up('md')]: {
  //   paddingTop: theme.spacing(11),
  // },
}));

export default function Zakat({ organization }: GenericPageProps) {
  const { t, i18n } = useTranslation();
  const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

  const [amount, setAmount] = useState([
    { type: 'money', amt: 0, isAdded: false },
    { type: 'silver', amt: 0, isAdded: false },
    { type: 'gold', amt: 0, isAdded: false },
    { type: 'stocks', amt: 0, isAdded: false },
    { type: 'mutual', amt: 0, isAdded: false },
  ]);

  if (organization?.id === '62414373cf00cca3a830814a') {
    return (
      <GivingSadaqahLayout
        backgroundColor="transparent"
        secondColor="secondary.main"
        imgLogoUrl={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${publicRuntimeConfig.bunny.storage.prefix}organization-cms/62414373cf00cca3a830814a/GS-Logo_OriginalAdjustNoOrg-120y.png`}
        homeURL="/"
        organization={organization}
      >
        <Box sx={{ mt: 4, mb: 8 }}>
          <RootStyle title={`${t('menu.zakat')} | ${t('app.name')}`}>
            <Container maxWidth="lg">
              <h1>{t('menu.zakat')}</h1>
              <Box sx={{ my: 1 }}>
                <MenuTab handleAmount={setAmount} amount={amount} />
              </Box>
            </Container>
          </RootStyle>
        </Box>
      </GivingSadaqahLayout>
    );
  }

  return (
    <RootStyle title={`${t('menu.zakat')} | ${t('app.name')}`}>
      <Container maxWidth="lg">
        <h1>{t('menu.zakat')}</h1>
        <p>Hello World</p>
        <Box sx={{ my: 1 }}>
          <MenuTab handleAmount={setAmount} amount={amount} />
        </Box>
      </Container>
    </RootStyle>
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
