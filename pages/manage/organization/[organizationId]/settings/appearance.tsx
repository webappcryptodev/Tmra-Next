import HeaderBreadcrumbs from '@components/HeaderBreadcrumbs';
import OrgDashboardLayout from '@layouts/dashboard/OrgDashboardLayout';
import { Alert, Container, Skeleton, Snackbar } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
// components
import Page from 'src/components/Page';

// hooks
import useSettings from 'src/hooks/useSettings';
import { gql, useQuery, useMutation } from 'urql';
import { useFindOneOrganizationByIdQuery } from '@generated/graphql';
import Utility from './appearance/utility';
import Landing from './appearance/landing';
import FavIcon from './appearance/favicon';

const getAppearance = gql`
  query getAppearance($_id: ObjectId!) {
    nonprofitAppearance(query: { _id: $_id }) {
      _id
      primaryColor
      secondaryColor
      logo
      mainImageUrl
      secondaryImage
      eventImagesUrl1
      eventImagesUrl2
      eventImagesUrl3
      detailStory1
      detailStory2
      detailStory3
      videoUrl
      whySupportUs1
      whySupportUs2
      whySupportUs3
      favIcon
    }
    organization(query: { _id: $_id }) {
      _id
      username
      name
    }
  }
`;

export default function OrgDashboardOverview() {
  // const axios = require('axios');
  const { themeStretch } = useSettings();
  const router = useRouter();
  const [value, setValues] = React.useState('1');

  const [organizationRes] = useFindOneOrganizationByIdQuery({
    variables: { id: router.query.organizationId },
  });

  const [notif, setNotif] = React.useState({
    open: false,
    type: '',
  });
  const { open } = notif;
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValues(newValue);
  };

  const [nonprofitRes, reexecuteQuery] = useQuery<{
    organization: {
      _id: string;
      paypalClientId: string;
      defaultCurrency: string;
      xenditMode: string;
      username: string;
      name: string;
    };
    // user: { firstname: string; lastname: string };
  }>({
    query: getAppearance,
    variables: { _id: router.query.organizationId },
  });
  const { data, fetching, error } = nonprofitRes;

  const { t } = useTranslation();
  const handleClose = () => {
    setNotif({ open: false, type: '' });
  };

  return (
    <OrgDashboardLayout organization={organizationRes?.data?.organization}>
      <Page title={`Nonprofit Organization - ${data?.organization?.name ?? '...'} | Tmra`}>
        <Container maxWidth={themeStretch ? false : 'xl'}>
          {data?.organization ? (
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
                heading={t('Settings')}
                links={[{ name: t('Settings') }, { name: t('Appearance') }]}
              />
              <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList
                      variant="scrollable"
                      scrollButtons="auto"
                      allowScrollButtonsMobile
                      onChange={handleChange}
                    >
                      <Tab label="Utility" value="1" />
                      <Tab label="Landing page" value="2" />
                      <Tab label="Fav icon" value="3" />
                      {/* <Tab label="About" value="4" /> */}
                    </TabList>
                  </Box>
                  <TabPanel sx={{ marginTop: 3 }} value="1">
                    <Utility />
                    {/* :( <CircularProgress />)} */}
                  </TabPanel>
                  <TabPanel sx={{ marginTop: 3 }} value="2">
                    <Landing />
                  </TabPanel>
                  <TabPanel sx={{ marginTop: 3 }} value="3">
                    <FavIcon />
                  </TabPanel>
                </TabContext>
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
