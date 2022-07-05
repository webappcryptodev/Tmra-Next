import Page from '@components/Page';
import MyDashboardLayout from '@layouts/dashboard/MyDashboardLayout';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home: React.FC = () => {
  const { t } = useTranslation('org');
  // return (
  //     <div
  //         style={{
  //             display: "flex",
  //             flexDirection: "column",
  //             minHeight: "100vh",
  //         }}
  //     >
  //         <Header />
  //         <Main />
  //         <Cards />
  //         <Footer />
  //     </div>
  // );
  return (
    <MyDashboardLayout>
      <Page title="Dashboard | Ommar">
        <Container maxWidth="xl">
          <Box sx={{ pb: 5 }}>
            <Typography variant="h4">
              {t('dashboard.greeting', undefined, { name: 'Mazen' })}
            </Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              {/* <AppWeeklySales /> */}
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              {/* <AppNewUsers /> */}
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              {/* <AppItemOrders /> */}
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              {/* <AppBugReports /> */}
            </Grid>

            <Grid item xs={12} md={6} lg={8}>
              {/* <AppWebsiteVisits /> */}
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              {/* <AppCurrentVisits /> */}
            </Grid>

            <Grid item xs={12} md={6} lg={8}>
              {/* <AppConversionRates /> */}
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              {/* <AppCurrentSubject /> */}
            </Grid>

            <Grid item xs={12} md={6} lg={8}>
              {/* <AppNewsUpdate /> */}
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              {/* <AppOrderTimeline /> */}
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              {/* <AppTrafficBySite /> */}
            </Grid>

            <Grid item xs={12} md={6} lg={8}>
              {/* <AppTasks /> */}
            </Grid>
          </Grid>
        </Container>
      </Page>
    </MyDashboardLayout>
  );
};

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  };
}

export default Home;
