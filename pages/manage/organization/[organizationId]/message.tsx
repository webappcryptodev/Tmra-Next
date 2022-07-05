import HeaderBreadcrumbs from '@components/HeaderBreadcrumbs';
import { useFindOneOrganizationByIdQuery } from '@generated/graphql';
import OrgDashboardLayout from '@layouts/dashboard/OrgDashboardLayout';
import { Button, Card, Container, Skeleton, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { app } from '@redux/slices/auth/realm';
import { getOrgDashboardPaths } from '@routes/paths';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import getConfig from 'next/config';
import RouterLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
// components
import Page from 'src/components/Page';
// hooks
import useSettings from 'src/hooks/useSettings';
import RuntimeConfigs from '@utils/runtime-configs';
import { gql, useMutation, useQuery } from 'urql';

// ----------------------------------------------------------------------

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

const getEssential = gql`
  query getEssential($organizationId: ObjectId!, $_id: String!) {
    nonprofit(query: { _id: $organizationId }) {
      _id
      username
      organizationName
    }
    campaigns(query: { organizationId: $organizationId }) {
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

const updateTeam = gql`
  mutation updateTeam($_id: ObjectId!, $profilePicture: String!) {
    updateOneOrganizationTeam(query: { _id: $_id }, set: { profilePicture: $profilePicture }) {
      _id
      profilePicture
    }
  }
`;
const insertTeam = gql`
  mutation insertTeam(
    $organizationName: String!
    $profilePicture: String!
    $ownerRealmId: ObjectId!
    $ownerUserId: String!
    $fullName: String!
    $email: String!
  ) {
    insertOneOrganizationTeam(
      data: {
        organizationName: $organizationName
        profilePicture: $profilePicture
        ownerRealmId: $ownerRealmId
        ownerUserId: $ownerUserId
        fullName: $fullName
        email: $email
      }
    ) {
      _id
      ownerRealmId
      ownerUserId
      fullName
      email
    }
  }
`;
const deleteTeamQ = gql`
  mutation deleteTeam($_id: ObjectId!) {
    deleteOneOrganizationTeam(query: { _id: $_id }) {
      _id
      fullName
      email
    }
  }
`;
const uploadImage = gql`
  mutation upImage(
    $imageName: String!
    $imageUrl: String!
    $imagePrefix: String!
    $imageExtension: String!
    $fullName: String!
    $currentPhoto: String!
  ) {
    uploadImage(
      input: {
        imageUrl: $imageUrl
        imageName: $imageName
        imagePrefix: $imagePrefix
        imageExtension: $imageExtension
        fullName: $fullName
        currentPhoto: $currentPhoto
      }
    ) {
      response
      path
    }
  }
`;

interface CustomFile extends File {
  path?: string;
  preview?: string;
}

interface OrganizationValues {
  organizationName: string;
  licenseNumber: string;
  orgObjective: string;
  nonprofitType: string;
  commissioner: string;
  fullName: string;
  emailAddress: string;
  memberPhoto: CustomFile | null;
}

export default function OrgDashboardMessage() {
  const { themeStretch } = useSettings();
  const router = useRouter();
  const [value, setValues] = React.useState('1');
  const [loading, setLoading] = React.useState(false);
  const [isField, setField] = React.useState(false);
  const { handleSubmit, control, reset, setValue, getValues } = useForm<OrganizationValues>({
    defaultValues: {
      fullName: '',
      emailAddress: '',
      memberPhoto: null,
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
  const [insertTeamResult, insertOneTeam] = useMutation(insertTeam);
  const [uploadImageResult, UploadOneImage] = useMutation(uploadImage);
  const [updateTeamResult, updateOneTeam] = useMutation(updateTeam);
  const [deleteTeamResult, deleteOneTeam] = useMutation(deleteTeamQ);
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
    variables: { organizationId: router.query.organizationId, _id: app.currentUser?.profile.ssoId },
  });
  const refresh = () => {
    reexecuteQuery({ requestPolicy: 'network-only' });
  };
  const { data, fetching, error } = nonprofitRes;
  console.log('nonprofit:', data);
  const paths = getOrgDashboardPaths(router.query.organizationId! as string);
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
    { field: 'campaignName', headerName: 'Campaign name', width: 200 },
    {
      field: 'action',
      headerName: 'Action',
      width: 250,
      renderCell: (params: GridRenderCellParams) => (
        <>
          <RouterLink href={paths.messagesNew(params.value)} passHref>
            <Button variant="contained" sx={{ marginRight: 2, width: '100%' }}>
              Create report
            </Button>
          </RouterLink>
          <RouterLink href={paths.messagesList(params.value)} passHref>
            <Button variant="outlined" sx={{ width: '100%' }} color="primary">
              Report list
            </Button>
          </RouterLink>
        </>
      ),
    },
  ];

  const rows: any[] = [];
  if (rows.length === 0 && data) {
    for (let i = 0; i < data.campaigns.length; i++) {
      rows.push({
        id: [i],
        campaignImage: `${publicRuntimeConfig.bunny.cdn.urlMedia}/${data.campaigns[i].campaignImage}?width=105&height=105`,
        campaignName: data.campaigns[i].campaignName,
        action: data.campaigns[i]._id,
      });
    }
  }

  return (
    <OrgDashboardLayout organization={organizationRes?.data?.organization}>
      <Page title={`Nonprofit Organization - ${data?.nonprofit?.organizationName ?? '...'} | Tmra`}>
        <Container maxWidth={themeStretch ? false : 'xl'}>
          {data?.nonprofit ? (
            <>
              <HeaderBreadcrumbs
                heading={t('Message')}
                links={[{ name: t('Report management') }]}
              />
              <Card sx={{ p: 5 }}>
                <Typography sx={{ marginBottom: 2 }} variant="h4" color="#637381">
                  {/* Your Campaign */}
                </Typography>
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
