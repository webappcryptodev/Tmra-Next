/* eslint-disable @typescript-eslint/no-unused-vars */
import { capitalCase } from 'change-case';
import HeaderBreadcrumbs from '@components/HeaderBreadcrumbs';
import OrgDashboardLayout from '@layouts/dashboard/OrgDashboardLayout';
import { Alert, Container, Skeleton, Snackbar } from '@mui/material';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
// components
import Page from 'src/components/Page';
import Iconify from 'src/components/Iconify';
import useTabs from 'src/hooks/useTabs';
// import GeneralAccount from './account/GeneralAccount';
import ChangePassword from './account/ChangePassword';
// import ChangeCurrency from './account/ChangeCurrency';
import { useFindOneOrganizationByIdQuery } from '@generated/graphql';

// hooks
import useSettings from 'src/hooks/useSettings';

export default function AccountSettingsPassword() {
  // const axios = require('axios');
  const { themeStretch } = useSettings();
  const { currentTab, onChangeTab } = useTabs('reset_password');
  const router = useRouter();
  const { t } = useTranslation();

  const ACCOUNT_TABS = [
    {
      value: 'reset_password',
      icon: <Iconify icon={'eva:lock-fill'} width={20} height={20} />,
      component: <ChangePassword />,
    },
  ];

  const [notif, setNotif] = React.useState({
    open: false,
    type: '',
  });
  const { open } = notif;

  const [organizationRes] = useFindOneOrganizationByIdQuery({
    variables: { id: router.query.organizationId },
  });

  const handleClose = () => {
    setNotif({ open: false, type: '' });
  };

  return (
    <OrgDashboardLayout organization={organizationRes?.data?.organization}>
      <Page
        title={`Nonprofit Organization - ${
          organizationRes?.data?.organization?.name ?? '...'
        } | Tmra`}
      >
        <Container maxWidth={themeStretch ? false : 'xl'}>
          {organizationRes?.data?.organization ? (
            <>
              <Snackbar
                open={open}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity="success">
                  {notif.type}
                </Alert>
              </Snackbar>
              <HeaderBreadcrumbs
                heading={t('Reset Password')}
                links={[{ name: t('Settings') }, { name: 'Reset Password' }]}
              />
              <Box sx={{ width: '100%', typography: 'body1' }}>
                <Tabs
                  allowScrollButtonsMobile
                  variant="scrollable"
                  scrollButtons="auto"
                  value={currentTab}
                  onChange={onChangeTab}
                >
                  {ACCOUNT_TABS.map(tab => (
                    <Tab
                      disableRipple
                      key={tab.value}
                      label={capitalCase(tab.value)}
                      icon={tab.icon}
                      value={tab.value}
                    />
                  ))}
                </Tabs>

                <Box sx={{ mb: 5 }} />

                {ACCOUNT_TABS.map(tab => {
                  const isMatched = tab.value === currentTab;
                  return isMatched && <Box key={tab.value}>{tab.component}</Box>;
                })}
              </Box>
            </>
          ) : (
            <Skeleton variant="rectangular" height={200} />
          )}
        </Container>
      </Page>
    </OrgDashboardLayout>
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
