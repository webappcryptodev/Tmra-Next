/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import CampaignList from '@components/fundraising/CampaignList';
import HeaderBreadcrumbs from '@components/HeaderBreadcrumbs';
import '@formatjs/intl-displaynames/locale-data/ar';
import '@formatjs/intl-displaynames/locale-data/en';
import '@formatjs/intl-displaynames/locale-data/id';
import '@formatjs/intl-displaynames/polyfill';
import {
  useFindOneOrganizationByIdQuery,
  usePurgeCampaignMutation,
  FindManyCampaignsByOrganizationIdQuery,
  FindManyCampaignsByOrganizationIdQueryVariables,
  FindManyCampaignsByOrganizationIdDocument,
} from '@generated/graphql';
import plusFill from '@iconify/icons-eva/plus-fill';
import OrgDashboardLayout from '@layouts/dashboard/OrgDashboardLayout';
import {
  Button,
  Container,
  Skeleton,
  MenuItem,
  Table,
  TableBody,
  TablePagination,
  TableContainer,
  Box,
  Dialog,
  DialogContent,
  Typography,
  Tooltip,
  IconButton,
  Snackbar,
  Alert,
  AlertColor,
  CircularProgress,
  TableRow,
  TableCell,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { getOrgDashboardPaths, getLandingMainPaths } from '@routes/paths';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';
import RouterLink from 'next/link';
// components
import Page from '@components/Page';
import { Icon } from '@iconify/react';

import { client } from '@contexts/RealmUrqlContext';
import useTable, { getComparator } from '@hooks/useTable';
import Iconify from '@components/Iconify';
import { CampaignTableRow, TableHeadCustom, TableSelectedActions } from '@components/table';
import { CampaignInfo } from '@modules/fundraising/Campaign';
import NoCampaignCard from '@components/fundraising/NoCampaignCard';

function CampaignsSection({
  organizationId,
  organizationUsername,
}: {
  organizationId: string;
  organizationUsername?: string | null | undefined;
}) {
  const TABLE_HEAD = [
    { id: 'title', label: 'Campaign Title', align: 'left' },
    { id: 'createdAt', label: 'Create at', align: 'left' },
    { id: 'isPublished', label: 'Status', align: 'center', width: 180 },
    { id: '' },
  ];

  const { t } = useTranslation();
  const theme = useTheme();
  const router = useRouter();

  const {
    page,
    order,
    orderBy,
    rowsPerPage,
    setPage,
    selected,
    setSelected,
    onSelectRow,
    onSelectAllRows,
    onSort,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable({
    defaultOrderBy: 'createdAt',
    defaultOrder: 'desc',
    defaultRowsPerPage: 10,
    defaultCurrentPage: 0,
  });

  const [, purgeCampaign] = usePurgeCampaignMutation();
  const dashboardPaths = getOrgDashboardPaths(organizationId);
  const landingPaths = getLandingMainPaths();

  const [tableData, setTableData] = React.useState<CampaignInfo[]>([]);
  const [isFetching, setFetching] = React.useState<boolean>(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState<boolean>(false);
  const [notif, setNotif] = React.useState({
    open: false,
    type: 'success',
    message: '',
  });

  React.useEffect(() => {
    getCampaignsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCampaignsList = async () => {
    setFetching(true);
    try {
      const campaignsRes = await client
        .query<
          FindManyCampaignsByOrganizationIdQuery,
          FindManyCampaignsByOrganizationIdQueryVariables
        >(FindManyCampaignsByOrganizationIdDocument, {
          organizationId,
        })
        .toPromise();
      if (campaignsRes.error) {
        console.error(
          `Error get organization campaigns for ${organizationId}: ${campaignsRes.error.message}`,
          campaignsRes.error,
        );
      } else if (campaignsRes?.data) {
        setTableData(campaignsRes?.data?.campaigns as CampaignInfo[]);
      }
    } catch (error) {
      setFetching(false);
    } finally {
      setFetching(false);
    }
  };

  const applySortFilter = ({
    tableData,
    comparator,
    filterName,
  }: {
    tableData: CampaignInfo[];
    comparator: (a: any, b: any) => number;
    filterName: string;
  }) => {
    const stabilizedThis = tableData.map((el, index) => [el, index] as const);

    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });

    tableData = stabilizedThis.map(el => el[0]);

    if (filterName) {
      tableData = tableData.filter(
        (item: Record<string, any>) =>
          item.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1,
      );
    }

    return tableData;
  };

  const dataFiltered = applySortFilter({
    tableData,
    comparator: getComparator(order, orderBy),
    filterName: '',
  });

  const deleteCampaign = async () => {
    setDeleteDialogOpen(false);
    try {
      setFetching(true);
      for (const campaignId of selected) {
        const resp = await purgeCampaign({ organizationId, campaignId });
        if (resp.error) {
          setNotif({
            open: true,
            type: 'error',
            message: resp.error?.message ?? 'Something went wrong',
          });
          return;
        } else {
          setNotif({
            open: true,
            type: 'success',
            message: `Success deleting the campaign${selected.length > 1 ? 's' : ''}`,
          });
        }
      }
      setSelected([]);
      getCampaignsList();
    } catch (error: any) {
      setNotif({ open: true, type: 'error', message: error?.message ?? 'Something went wrong' });
    } finally {
      setFetching(false);
    }
  };

  const handleClose = () => {
    setNotif({ open: false, type: '', message: '' });
  };

  if (!isFetching && !dataFiltered.length) {
    return <NoCampaignCard type="Campaign" organizationId={organizationId} />;
  }
  return (
    <>
      <Snackbar
        open={notif.open}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={(notif.type as AlertColor) ?? 'success'}>
          {notif.message}
        </Alert>
      </Snackbar>
      <TableContainer sx={{ minWidth: 800, position: 'relative' }}>
        {selected.length > 0 && (
          <TableSelectedActions
            numSelected={selected.length}
            rowCount={tableData.length}
            onSelectAllRows={checked =>
              onSelectAllRows(checked, tableData.map(row => row?._id) as string[])
            }
            actions={
              <Tooltip title="Delete">
                <IconButton color="primary" onClick={() => setDeleteDialogOpen(true)}>
                  <Iconify icon={'eva:trash-2-outline'} />
                </IconButton>
              </Tooltip>
            }
          />
        )}
        <Table size="medium">
          <TableHeadCustom
            order={order}
            orderBy={orderBy}
            headLabel={TABLE_HEAD}
            rowCount={tableData.length}
            onSort={onSort}
            onSelectAllRows={checked =>
              onSelectAllRows(checked, tableData.map(row => row._id) as string[])
            }
          />
          <TableBody>
            {isFetching ? (
              <TableRow>
                <TableCell align="center" colSpan={TABLE_HEAD.length + 1}>
                  <CircularProgress color="success" />
                </TableCell>
              </TableRow>
            ) : (
              !isFetching &&
              dataFiltered.length > 0 &&
              dataFiltered
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((x, key) => (
                  <CampaignTableRow
                    key={x?._id}
                    row={x}
                    selected={selected.includes(x._id as string)}
                    onSelectRow={() => onSelectRow(x._id as string)}
                    share
                    shareLink={`${window.location.origin}${landingPaths.campaignDetail(
                      organizationUsername!,
                      x._id!,
                    )}`}
                    actions={
                      <>
                        <MenuItem
                          onClick={() => {
                            setSelected([x._id as string]);
                            setDeleteDialogOpen(true);
                          }}
                          sx={{ color: 'error.main' }}
                        >
                          <Iconify icon={'eva:trash-2-outline'} />
                          Delete
                        </MenuItem>
                        <MenuItem onClick={() => router.push(dashboardPaths.campaignsEdit(x._id!))}>
                          <Iconify icon={'eva:edit-fill'} />
                          Edit
                        </MenuItem>
                      </>
                    }
                  />
                ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ position: 'relative' }}>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={dataFiltered.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={onChangePage}
          onRowsPerPageChange={onChangeRowsPerPage}
        />
      </Box>

      <Dialog
        open={deleteDialogOpen}
        onClose={() => {
          setDeleteDialogOpen(false);
          setSelected([]);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          {/* <DialogContentText id="alert-dialog-description">{description}</DialogContentText> */}
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Iconify icon="akar-icons:info-fill" sx={{ width: 50, height: 50 }} />
            <Typography variant="h5" sx={{ flex: 1, marginLeft: 2 }}>
              {`Are you sure you want to delete this campaign${selected?.length > 1 ? 's' : ''}?`}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="flex-end" alignItems="center" mt={1.5}>
            <Button variant="contained" onClick={() => setDeleteDialogOpen(false)} autoFocus>
              No
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => deleteCampaign()}
              sx={{ marginLeft: 1.5 }}
            >
              Yes!
            </Button>
          </Box>
        </DialogContent>
      </Dialog>

      {/* <CampaignList
        fetching={campaignsFetching}
        error={campaignsError?.message}
        campaigns={campaignsData?.campaigns.map(it => it!)}
        donateArea="hidden"
        hrefFunc={campaign => paths.campaignsEdit(campaign._id!)}
      /> */}
    </>
  );
}

export default function CampaignManagePage() {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const organizationId = router.query.organizationId! as string;
  const paths = getOrgDashboardPaths(organizationId);
  const [organizationRes] = useFindOneOrganizationByIdQuery({
    variables: { id: router.query.organizationId },
  });

  if (!organizationRes.data?.organization?._id) {
    return (
      <OrgDashboardLayout organization={organizationRes?.data?.organization}>
        <Skeleton variant="rectangular" height={200} />
      </OrgDashboardLayout>
    );
  }

  return (
    <OrgDashboardLayout organization={organizationRes.data.organization}>
      <Page
        title={`${t('fundraising.campaign.campaigns')} - ${
          organizationRes.data.organization.name ?? '...'
        } | ${t('app.name')}`}
      >
        <Container maxWidth="xl">
          <HeaderBreadcrumbs
            heading={t('fundraising.campaign.campaigns')}
            links={[
              { name: t('core.menu.overview'), href: paths.overview },
              { name: t('fundraising.campaign.campaigns') },
            ]}
            action={
              <RouterLink href={paths.campaignsNew} passHref>
                <Button variant="contained" startIcon={<Icon icon={plusFill} />}>
                  {t('fundraising.campaign.create')}
                </Button>
              </RouterLink>
            }
          />

          <CampaignsSection
            organizationId={organizationId}
            organizationUsername={organizationRes.data?.organization?.username}
          />
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
