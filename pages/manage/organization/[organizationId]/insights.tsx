/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Components
import {
  Card,
  Container,
  Grid,
  Typography,
  Box,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Table,
  TableContainer,
  LinearProgress,
  styled,
  Stack,
} from '@mui/material';
// ----------------------------------------------------------------------
// DataGrid Component
import { DataGrid } from '@mui/x-data-grid';
// ----------------------------------------------------------------------

import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';
import { FilterAlt } from '@mui/icons-material';
// import LoadingScreen from '@components/LoadingScreen';
import { useFindOneOrganizationByIdQuery } from '@generated/graphql';
import useSettings from '@hooks/useSettings';
import { IInfoBox } from '@components/info-box/InfoBox.types';
import { IProgressBar } from '@components/progress-bar/ProgressBar.types';
import { IList } from '@components/list/List.types';
import {
  InsightInformationData,
  CampaignOverviewData,
  donorsData,
  PieChartData,
  LineChartData,
} from '@utils/mock-data/insight';
// Hooks
import { gql, useQuery, useMutation } from 'urql';
import { app } from '@redux/slices/auth/realm';
import { toInteger } from 'lodash';
import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';
import axios from 'axios';

// ----------------------------------------------------------------------

const WrapperDataGrid = styled('div')(() => ({
  height: 400,
  width: '100%',
}));

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

const OrgDashboardLayout = dynamic(() => import('@layouts/dashboard/OrgDashboardLayout'), {
  ssr: false,
});
const HeaderBreadcrumbs = dynamic(() => import('@components/HeaderBreadcrumbs'), {
  ssr: false,
});
const Page = dynamic(() => import('@components/Page'), {
  ssr: false,
});
const InfoBox = dynamic(() => import('@components/info-box'), {
  ssr: false,
});
const List = dynamic(() => import('@components/list'), {
  ssr: false,
});
const PieCharts = dynamic(() => import('@components/pie-charts'), {
  ssr: false,
});
const LineCharts = dynamic(() => import('@components/line-charts'), {
  ssr: false,
});
const Filter = dynamic(() => import('@components/filter'), {
  ssr: false,
});
const DataTable = dynamic(() => import('@components/table/Table'), {
  ssr: false,
});

export interface UserListDonors {
  amount?: string | null;
  baseAmount?: string | null;
  country?: string | null;
  currency?: string | null;
  defaultCurrency?: string | null;
  name?: string | null;
  nonprofitOrganizationId?: string | null;
  status?: string | null;
  userId?: string | null;
}

export interface PieChartDatas {
  value: number | 0;
  labels: string | '';
}

const OrgDashboardInsights = () => {
  const theme = useTheme();
  const { themeStretch } = useSettings();
  const router = useRouter();
  const { t } = useTranslation();
  const [userListDonors, setUserListDonors] = React.useState<UserListDonors[] | null>(null);
  const [organizationRes] = useFindOneOrganizationByIdQuery({
    variables: { id: router.query.organizationId },
  });

  const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

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
  const [filterBy, setFilterBy] = useState<string>('');
  const [filterByYear, setFilterByYear] = useState<string>('');
  const [filterByQuarter, setFilterByQuarter] = useState<string>('');
  const [filterByMonth, setFilterByMonth] = useState<string>('');

  // ----------------------------------------------------------------------

  const [totalAmount, setTotalAmount] = React.useState<string>('');
  const [totalCampaign, setTotalCampaign] = React.useState<string>('');
  const [totalReturnDonors, setTotalReturnDonors] = React.useState<string>('');
  const [totalUniqueDonors, setTotalUniqueDonors] = React.useState<string>('');
  // const [pieChart, setPieChart] = React.useState([]);
  const [pieChartValues, setPieChartValues] = React.useState<number[]>([]);
  const [pieChartLabels, setPieChartLabels] = React.useState<string[]>([]);

  // ----------------------------------------------------------------------

  useEffect(() => {
    const path = publicRuntimeConfig.tmra.raise.url;
    const organizationId = router.query.organizationId;

    if (organizationId) {
      axios
        .get(`${path}/orgs/insight?organizationId=${router.query.organizationId}`)
        .then(res => {
          const insightData = res.data;

          if (insightData) {
            const mostPopularProgramsDiagram = insightData?.mostPopularProgramsDiagram;
            const pieLabels = mostPopularProgramsDiagram.map(v => v?.campaignName);
            const pieLabelsData = mostPopularProgramsDiagram.map(v => v?.count);

            setTotalAmount(insightData?.total_donation);
            setTotalCampaign(insightData?.total_program);
            setTotalUniqueDonors(insightData?.total_donor);
            setTotalReturnDonors(insightData?.total_returning_donor);
            setPieChartLabels(pieLabels);
            setPieChartValues(pieLabelsData);
          }
        })
        .catch(err => console.log(err));
    }

    if (fetching === true && userListDonors === null) {
      app.currentUser?.functions
        .callFunction('nonprofitInsightSummary', { organizationId: router.query.organizationId })
        .then(insightLists => {
          setUserListDonors(
            insightLists.filter(
              item =>
                !item.totalAmount &&
                !item.totalCampaign &&
                !item.totalReturnDonors &&
                !item.totalUniqueDonors &&
                !item.piechart,
            ),
          );
        });
    }
  }, [
    fetching,
    publicRuntimeConfig.tmra.raise.url,
    router.query.organizationId,
    setUserListDonors,
    userListDonors,
  ]);

  const columnsDataGrid = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: `${t('orgs.name')}`, width: 200 },
    { field: 'country', headerName: `${t('orgs.country')}`, width: 200 },
  ];

  let donorsDataGrid;

  if (userListDonors) {
    donorsDataGrid = userListDonors.map((item, index) => {
      return {
        id: index + 1,
        name: item.name,
        country: item.country,
      };
    });
  }

  if (fetching) {
    return <>loading..</>;
  }

  return (
    <OrgDashboardLayout organization={organizationRes?.data?.organization}>
      <Page
        title={`Nonprofit Organization - ${
          organizationRes?.data?.organization?.name ?? '...'
        } | ${t('app.name')}`}
      >
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <Stack spacing={2} direction="row" justifyContent="space-between" alignItems="flex-start">
            <HeaderBreadcrumbs
              heading={t('fundraising.menu.insights')}
              links={[{ name: t('orgs.quick_stats') }]}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <Box>
                <FilterAlt />
                <Filter
                  value={filterBy}
                  handleChangeValue={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setFilterBy(event.target.value);
                    setFilterByQuarter('');
                    setFilterByMonth('');
                    setFilterByYear('');
                  }}
                  selectData={[
                    t('orgs.7-days'),
                    t('orgs.quarter'),
                    t('orgs.month'),
                    t('orgs.year'),
                  ]}
                  placeholder={t('orgs.7-days')}
                />
              </Box>
              <Box>
                {filterBy === t('orgs.quarter') && (
                  <Filter
                    value={filterByQuarter}
                    handleChangeValue={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setFilterByQuarter(event.target.value)
                    }
                    selectData={[t('orgs.quarter_1'), t('orgs.quarter_2'), t('orgs.quarter_3')]}
                    placeholder={t('orgs.quarter')}
                  />
                )}
                {filterBy === t('orgs.month') && (
                  <Filter
                    value={filterByMonth}
                    handleChangeValue={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setFilterByMonth(event.target.value)
                    }
                    selectData={[
                      t('orgs.jan'),
                      t('orgs.feb'),
                      t('orgs.mar'),
                      t('orgs.apr'),
                      t('orgs.may'),
                      t('orgs.jun'),
                      t('orgs.jul'),
                      t('orgs.aug'),
                      t('orgs.sep'),
                      t('orgs.oct'),
                      t('orgs.nov'),
                      t('orgs.dec'),
                    ]}
                    placeholder={t('orgs.month')}
                  />
                )}
                {[t('orgs.year'), t('orgs.quarter'), t('orgs.month')].includes(filterBy) && (
                  <Filter
                    value={filterByYear}
                    handleChangeValue={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setFilterByYear(event.target.value)
                    }
                    selectData={['2019', '2020', '2021']}
                    placeholder={t('orgs.year')}
                  />
                )}
              </Box>
            </Box>
          </Stack>
          <Grid container spacing={2}>
            <InfoBox
              title={t('orgs.total_donations')}
              gainAmount={'+2.6%'}
              infoAmount={toInteger(totalAmount)}
              isUp={true}
              chartData={[{ data: [20, 41, 63, 33, 28, 35, 50, 46, 11, 26] }]}
              chartColor={'#00AB55'}
            />
            <InfoBox
              title={t('orgs.total_program')}
              gainAmount={'+2.6%'}
              infoAmount={toInteger(totalCampaign)}
              isUp={true}
              chartData={[{ data: [20, 41, 63, 33, 28, 35, 50, 46, 11, 26] }]}
              chartColor={'#00AB55'}
            />
            <InfoBox
              title={t('orgs.total_donors_person')}
              gainAmount={'+2.6%'}
              infoAmount={toInteger(totalUniqueDonors)}
              isUp={true}
              chartData={[{ data: [20, 41, 63, 33, 28, 35, 50, 46, 11, 26] }]}
              chartColor={'#00AB55'}
            />
            <InfoBox
              title={t('orgs.returning_donors_person')}
              gainAmount={'+2.6%'}
              infoAmount={toInteger(totalReturnDonors)}
              isUp={true}
              chartData={[{ data: [20, 41, 63, 33, 28, 35, 50, 46, 11, 26] }]}
              chartColor={'#00AB55'}
            />

            <Grid item md={3} sm={12} xs={12}>
              <Card>
                <Box sx={{ p: 2 }}>
                  <Typography
                    sx={{ marginBottom: 2 }}
                    variant="button"
                    color={theme.palette.grey[600]}
                  >
                    {t('orgs.most_popular_programs')}
                  </Typography>
                  <PieCharts pieChartData={pieChartValues} labels={pieChartLabels} />
                </Box>
              </Card>
            </Grid>
            <Grid item md={9} sm={12} xs={12}>
              <Card>
                <Box sx={{ padding: '20px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography
                      sx={{ marginBottom: 2 }}
                      variant="button"
                      color={theme.palette.grey[600]}
                    >
                      {t('orgs.total_donations_per_program')}
                    </Typography>
                  </Box>
                  <LineCharts
                    lineChartData={LineChartData}
                    seriesData={2019}
                    categories={[
                      t('orgs.jan'),
                      t('orgs.feb'),
                      t('orgs.mar'),
                      t('orgs.apr'),
                      t('orgs.may'),
                      t('orgs.jun'),
                      t('orgs.jul'),
                      t('orgs.aug'),
                      t('orgs.sep'),
                      t('orgs.oct'),
                      t('orgs.nov'),
                      t('orgs.dec'),
                    ]}
                  />
                </Box>
              </Card>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <Card>
                <Box sx={{ padding: '20px' }}>
                  <Typography
                    sx={{ marginBottom: 2 }}
                    variant="button"
                    color={theme.palette.grey[600]}
                  >
                    {t('orgs.campaign_overview')}
                  </Typography>
                  <Grid container spacing={2} sx={{ marginTop: 1 }}>
                    <TableContainer>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell sx={{ width: '20%' }}>{t('orgs.title')}</TableCell>
                            <TableCell sx={{ width: '20%' }}>{t('orgs.type')}</TableCell>
                            <TableCell sx={{ width: '40%' }}>{t('orgs.progress')}</TableCell>
                            <TableCell sx={{ width: '20%' }} />
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {CampaignOverviewData.map(
                            ({ title, campaignName, value }: IProgressBar, index: number) => (
                              <TableRow key={index}>
                                <TableCell>{title}</TableCell>
                                <TableCell>{campaignName}</TableCell>
                                <TableCell>
                                  <LinearProgress variant="determinate" value={value} />
                                </TableCell>
                                <TableCell>{value}</TableCell>
                              </TableRow>
                            ),
                          )}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Box>
              </Card>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <Card>
                <Box sx={{ padding: '20px' }}>
                  <Typography
                    sx={{ marginBottom: 2 }}
                    variant="button"
                    color={theme.palette.grey[600]}
                  >
                    {t('orgs.donors')}
                  </Typography>
                  <Grid container spacing={2} sx={{ px: 2, mt: 1 }}>
                    <WrapperDataGrid>
                      <DataGrid rows={donorsDataGrid} columns={columnsDataGrid} pageSize={5} />
                    </WrapperDataGrid>
                  </Grid>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Page>
    </OrgDashboardLayout>
  );
};

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}

export default OrgDashboardInsights;
