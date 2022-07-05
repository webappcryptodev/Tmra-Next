import HeaderBreadcrumbs from '@components/HeaderBreadcrumbs';
import { useFindOneOrganizationByIdQuery } from '@generated/graphql';
import OrgDashboardLayout from '@layouts/dashboard/OrgDashboardLayout';
import { Alert, Card, Container, Skeleton, Snackbar } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { app } from '@redux/slices/auth/realm';
import { getOrgDashboardPaths } from '@routes/paths';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
// components
import Page from 'src/components/Page';
// hooks
import useSettings from 'src/hooks/useSettings';
import RuntimeConfigs from '@utils/runtime-configs';
import { gql, useQuery } from 'urql';
import PageNotFound from '../../../../../404';

// ----------------------------------------------------------------------

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

const getEssential = gql`
  query getEssential($organizationId: ObjectId!, $_id: String!, $campaignId: ObjectId!) {
    nonprofit(query: { _id: $organizationId }) {
      _id
      username
      organizationName
    }
    campaign(query: { organizationId: $organizationId, _id: $campaignId }) {
      _id
      campaignName
      campaignImage
    }
    user(query: { _id: $_id }) {
      firstname
      lastname
    }
  }
`;

interface CustomFile extends File {
  path?: string;
  preview?: string;
}

interface MessageValues {
  title: string;
  description: string;
  reportPhoto: CustomFile | null;
  sendEmail: boolean;
}

export default function OrgDashboardMessageList() {
  const { themeStretch } = useSettings();
  const router = useRouter();
  const [value, setValues] = React.useState('1');
  const [loading, setLoading] = React.useState(false);
  const [isField, setField] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [reportList, setReportList] = React.useState<any[] | []>([]);
  const { handleSubmit, control, reset, setValue, getValues } = useForm<MessageValues>({
    defaultValues: {
      title: '',
      description: '',
      reportPhoto: null,
      sendEmail: checked,
    },
  });
  const [notif, setNotif] = React.useState({
    open: false,
    type: '',
  });
  const { open } = notif;
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValues(newValue);
  };
  const { t } = useTranslation();

  const [organizationRes] = useFindOneOrganizationByIdQuery({
    variables: { id: router.query.organizationId },
  });

  const [nonprofitRes, reexecuteQuery] = useQuery<{
    nonprofit: {
      _id: string;
      username: string;
      organizationName: string;
      licenseNumber: string;
      orgObjective: string;
      nonprofitType: string;
    };
    campaigns: { _id: string; campaignName: string; campaignImage: string }[];
    user: { firstname: string; lastname: string };
  }>({
    query: getEssential,
    variables: {
      organizationId: router.query.organizationId,
      _id: app.currentUser?.profile.ssoId,
      campaignId: router.query.campaignId,
    },
  });

  const handleDrop = React.useCallback(
    acceptedFiles => {
      setValue('reportPhoto', acceptedFiles[0]);
    },
    [setValue],
  );
  const refresh = () => {
    reexecuteQuery({ requestPolicy: 'network-only' });
  };
  const { data, fetching, error } = nonprofitRes;
  useEffect(() => {
    if (data && fetching === false && reportList.length === 0) {
      app.currentUser?.functions
        .callFunction('getNotificationReportList', { campaignId: router.query.campaignId })
        .then(repList => {
          setReportList(repList);
        });
    }
  }),
    [data, fetching, reportList];

  if (data) {
    if (!data.campaigns) {
      return <PageNotFound />;
    }
  }
  if (fetching === false && !data) {
    return <PageNotFound />;
  }
  console.log(checked);
  console.log('nonprofit:', data);
  console.log('report list:', reportList);
  const paths = getOrgDashboardPaths(router.query.organizationId! as string);

  const handleClose = () => {
    setNotif({ open: false, type: '' });
  };

  const columns: GridColDef[] = [
    {
      field: 'campaignImage',
      headerName: '',
      width: 150,
      renderCell: (params: GridRenderCellParams) => (
        <img
          src={params.value}
          style={{ height: 80 }}
          // style={{ width: 105, height: 50 }}
        />
      ),
    },
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'description', headerName: 'Description', width: 300 },
    { field: 'sendToEmail', headerName: 'Send to email', width: 100 },
  ];

  const rows: any = [];
  if (data && rows.length === 0 && reportList.length > 0) {
    for (let i = 0; i < reportList.length; i++) {
      rows.push({
        id: i,
        campaignImage: `${publicRuntimeConfig.bunny.cdn.urlMedia}/${reportList[i].campaignPhoto}?width=105&height=105`,
        title: reportList[i].title,
        description: reportList[i].description,
        sendToEmail: reportList[i].sendEmail === true ? 'Yes' : 'No',
      });
    }
  }
  console.log(rows);
  return (
    <OrgDashboardLayout organization={organizationRes?.data?.organization}>
      <Page title={`Nonprofit Organization - ${data?.nonprofit?.organizationName ?? '...'} | Tmra`}>
        <Container maxWidth={themeStretch ? false : 'xl'}>
          {data?.nonprofit && data.campaigns ? (
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
                heading={t('Message')}
                links={[{ name: t('Message'), href: paths.messages }, { name: 'Report list' }]}
              />
              <Card sx={{ p: 5 }}>
                {/* <Typography sx={{ marginBottom: 2 }} variant="h4" color="#637381">
                  Your Campaign
                </Typography> */}
                <div style={{ height: 400, width: '100%' }}>
                  <DataGrid
                    rowHeight={100}
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[4]}
                  />
                </div>
              </Card>
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
