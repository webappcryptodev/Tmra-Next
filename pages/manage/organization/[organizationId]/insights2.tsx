import HeaderBreadcrumbs from '@components/HeaderBreadcrumbs';
import OrgDashboardLayout from '@layouts/dashboard/OrgDashboardLayout';
import { Card, Container, Grid, LinearProgress, Skeleton, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
// components
import Page from 'src/components/Page';
// hooks
import useSettings from 'src/hooks/useSettings';
import { gql, useQuery, useMutation } from 'urql';
import { app } from '@redux/slices/auth/realm';
import { toInteger } from 'lodash';
import { useFindOneOrganizationByIdQuery } from '@generated/graphql';

// ----------------------------------------------------------------------

const getEssential = gql`
  query getEssential($_id: ObjectId!) {
    organization(query: { _id: $_id }) {
      _id
      name
      organizationBankAccountName
      organizationBankAccountNumber
      idNumberCard
      comissioner
      phoneNumber
      licenseNumber
      orgObjective
      nonprofitType
      instagram
      youtube
      linkedin
      twitter
      facebook
      impact1Amount
      impact1Title
      impact2Amount
      impact2Title
      impact3Amount
      impact3Title
    }
    campaigns(query: { organizationId: $_id }) {
      _id
      campaignDescription
      campaignImage
      title
      islamCharityType
      ownerRealmId
      ownerUserId
      amountTarget
      amountProgress
    }
  }
`;

export default function OrgDashboardInsights() {
  const { themeStretch } = useSettings();
  const router = useRouter();
  const [value, setValues] = React.useState('1');
  const [loading, setLoading] = React.useState(false);
  const [isField, setField] = React.useState(false);
  const [notif, setNotif] = React.useState({
    open: false,
    type: '',
  });
  const [donorLists, setDonorLists] = React.useState<any[] | null>(null);
  const { open } = notif;
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValues(newValue);
  };
  const { t } = useTranslation();
  const [organizationRes] = useFindOneOrganizationByIdQuery({
    variables: { id: router.query.organizationId },
  });

  const [nonprofitRes, reexecuteQuery] = useQuery<{
    organization: {
      _id: string;
      username: string;
      name: string;
      licenseNumber: string;
      orgObjective: string;
      nonprofitType: string;
      comissioner: string;
      facebook: string;
      instagram: string;
      twitter: string;
      youtube: string;
      linkedin: string;
      impact1Title: string;
      impact2Title: string;
      impact3Title: string;
      impact1Amount: string;
      impact2Amount: string;
      impact3Amount: string;
    };
    campaigns: [
      {
        _id: string;
        campaignDescription: string;
        campaignImage: string;
        title: string;
        islamCharityType: string;
        ownerRealmId: string;
        ownerUserId: string;
        amountTarget: string;
        amountProgress: string;
      },
    ];
  }>({
    query: getEssential,
    variables: {
      _id: router.query.organizationId,
    },
  });
  const refresh = () => {
    reexecuteQuery({ requestPolicy: 'network-only' });
  };
  const { data, fetching, error } = nonprofitRes;

  useEffect(() => {
    if (fetching === true && donorLists === null) {
      app.currentUser?.functions
        .callFunction('nonprofitDonorsInsight', { organizationId: router.query.organizationId })
        .then(donorlist => {
          setDonorLists(donorlist);
        });
    }
  }, [fetching, setDonorLists]);
  // if (fetching) {
  //   return <>loading..</>;
  // }
  console.log('donor list', donorLists);
  console.log('data insight', data);
  let totalDonation = 0;
  if (data?.campaigns) {
    for (let i = 0; i < data.campaigns.length; i++) {
      totalDonation = toInteger(totalDonation) + toInteger(data.campaigns[i].amountProgress);
    }
  }
  console.log(totalDonation);

  return (
    <OrgDashboardLayout organization={organizationRes?.data?.organization}>
      <Page title={`Nonprofit Organization - ${data?.organization?.name ?? '...'} | Tmra`}>
        <Container maxWidth={themeStretch ? false : 'xl'}>
          {data?.organization ? (
            <>
              <HeaderBreadcrumbs heading={t('Insights')} links={[{ name: t('Quick stats') }]} />
              <Grid container spacing={2}>
                <Grid item md={3} sm={6} xs={12}>
                  <Card>
                    <div style={{ padding: 20 }}>
                      <Typography sx={{ marginBottom: 2 }} variant="button" color="#637381">
                        Total donations
                      </Typography>
                      <Typography variant="body1" color="black">
                        {totalDonation}
                      </Typography>
                    </div>
                  </Card>
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                  <Card>
                    <div style={{ padding: 20 }}>
                      <Typography sx={{ marginBottom: 2 }} variant="button" color="#637381">
                        Beneficiaries reached
                      </Typography>
                      <Typography variant="body1" color="black">
                        0
                      </Typography>
                    </div>
                  </Card>
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                  <Card>
                    <div style={{ padding: 20 }}>
                      <Typography sx={{ marginBottom: 2 }} variant="button" color="#637381">
                        New Donors this month
                      </Typography>
                      <Typography variant="body1" color="black">
                        0
                      </Typography>
                    </div>
                  </Card>
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                  <Card>
                    <div style={{ padding: 20 }}>
                      <Typography sx={{ marginBottom: 2 }} variant="button" color="#637381">
                        Returning Clients
                      </Typography>
                      <Typography variant="body1" color="black">
                        0
                      </Typography>
                    </div>
                  </Card>
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                  <Card>
                    <div style={{ padding: 20 }}>
                      <Typography sx={{ marginBottom: 2 }} variant="button" color="#637381">
                        Campaign overview
                      </Typography>
                      <Grid container spacing={2} sx={{ marginTop: 1 }}>
                        {data.campaigns.map((result: any) => (
                          <>
                            <Grid
                              item
                              xs={3}
                              sx={{
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                              }}
                            >
                              <Typography variant="caption" color="black">
                                {result.title}
                              </Typography>
                            </Grid>
                            <Grid item xs={3}>
                              <Typography variant="caption" color="black">
                                {result.islamCharityType}
                              </Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <LinearProgress
                                variant="determinate"
                                value={
                                  result.amountProgress >= result.amountTarget
                                    ? 100
                                    : result.amountProgress > 0
                                    ? (result.amountProgress * 100) / result.amountTarget
                                    : 0
                                }
                                sx={{ m: 2 }}
                              />
                            </Grid>
                            <Grid item xs={2}>
                              <Typography variant="caption" color="black">
                                {result.amountProgress >= result.amountTarget
                                  ? 100
                                  : result.amountProgress > 0
                                  ? `${(
                                      (result.amountProgress * 100) /
                                      result.amountTarget
                                    ).toFixed(2)}%`
                                  : 0}
                              </Typography>
                            </Grid>
                          </>
                        ))}
                      </Grid>
                    </div>
                  </Card>
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                  <Card>
                    <div style={{ padding: 20 }}>
                      <Typography sx={{ marginBottom: 2 }} variant="button" color="#637381">
                        Donors
                      </Typography>
                      <Grid container spacing={2} sx={{ marginTop: 1 }}>
                        {donorLists &&
                          donorLists.length > 0 &&
                          donorLists.map((resultDonor: any) => (
                            <>
                              <Grid
                                item
                                xs={6}
                                sx={{
                                  textOverflow: 'ellipsis',
                                  whiteSpace: 'nowrap',
                                  overflow: 'hidden',
                                }}
                              >
                                <Typography variant="caption" color="black">
                                  {resultDonor.name}
                                </Typography>
                              </Grid>
                              <Grid
                                item
                                xs={6}
                                sx={{
                                  textOverflow: 'ellipsis',
                                  whiteSpace: 'nowrap',
                                  overflow: 'hidden',
                                }}
                              >
                                <Typography variant="caption" color="black">
                                  {resultDonor.country}
                                </Typography>
                              </Grid>
                            </>
                          ))}
                      </Grid>
                    </div>
                  </Card>
                </Grid>
              </Grid>
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
