/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// @mui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Tab,
  Tabs,
  Card,
  Table,
  Stack,
  Tooltip,
  Divider,
  MenuItem,
  TableBody,
  Container,
  IconButton,
  TableContainer,
  TablePagination,
  Snackbar,
  Alert,
  Skeleton,
  TextField,
  TableRow,
  TableCell,
  Checkbox,
  Typography,
  Link,
  Avatar,
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  AlertColor,
  CircularProgress,
  InputAdornment,
} from '@mui/material';
// hooks
import useTabs from '@hooks/useTabs';
import useSettings from '@hooks/useSettings';
import useTable, { getComparator, emptyRows } from '@hooks/useTable';
// components
import Page from '@components/Page';
import Label from '@components/Label';
import Iconify from '@components/Iconify';
import Scrollbar from '@components/Scrollbar';
import { TableHeadCustom, TableSelectedActions } from '@components/table';
import HeaderBreadcrumbs from '@components/HeaderBreadcrumbs';
import OrgDashboardLayout from '@layouts/dashboard/OrgDashboardLayout';

import { useFindOneOrganizationByIdQuery } from '@generated/graphql';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import TableMoreMenu from '@components/table/TableMoreMenu';
import createAvatar from '@utils/createAvatar';
import moment from 'moment';
import { motion } from 'framer-motion';
import { varWrapEnter } from '@components/animate';
import { Close } from '@mui/icons-material';

import axios from 'axios';
import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';
import generateErrorMessage from '@utils/errorMessage';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Donor', align: 'left' },
  // { id: 'lastName', label: 'Last Name', align: 'left' },
  { id: 'email', label: 'Email', align: 'left' },
  { id: 'mobile', label: 'Phone Number', align: 'left' },
  { id: 'country', label: 'Country', align: 'left' },
  { id: 'amount', label: 'Amount', align: 'left' },
  { id: 'status', label: 'Status', align: 'center' },
  // { id: '' },
];

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

// ----------------------------------------------------------------------
const DonorListTableRow = ({ actions, row, selected, onSelectRow }) => {
  const theme = useTheme();
  const { name, transactionId, createdAt, amount, status, country, email, mobile } = row;
  return (
    <TableRow hover selected={selected}>
      <TableCell padding="checkbox">
        <Checkbox checked={selected} onClick={onSelectRow} />
      </TableCell>
      <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          alt={name}
          color={name ? createAvatar(name).color : 'error'}
          sx={{
            mr: 2,
            fontWeight: theme.typography.fontWeightMedium,
            color: theme.palette[name ? createAvatar(name).color : 'error'].contrastText,
            backgroundColor: theme.palette[name ? createAvatar(name).color : 'error'].main,
          }}
        >
          {name ? createAvatar(name).name : 'n/a'}
        </Avatar>

        <Stack>
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>

          <Link
            noWrap
            variant="body2"
            // onClick={onViewRow}
            sx={{ color: 'text.disabled', cursor: 'pointer' }}
          >
            {transactionId}
          </Link>
        </Stack>
      </TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{mobile}</TableCell>
      <TableCell>{country}</TableCell>
      <TableCell align="left">{amount}</TableCell>
      {status && (
        <TableCell align="center">
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={
              (status === 'SUCCESS' && 'success') ||
              (status === 'PENDING' && 'warning') ||
              (status === 'FAILED' && 'error') ||
              'default'
            }
            sx={{ textTransform: 'capitalize' }}
          >
            {status}
          </Label>
        </TableCell>
      )}
      {/* <TableCell align="right">
        <TableMoreMenu actions={actions} />
      </TableCell> */}
    </TableRow>
  );
};

export default function DonorsList() {
  const router = useRouter();
  const { themeStretch } = useSettings();
  const { t } = useTranslation();

  const {
    dense,
    page,
    order,
    orderBy,
    rowsPerPage,
    setPage,
    //
    selected,
    setSelected,
    onSelectRow,
    onSelectAllRows,
    //
    onSort,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable({ defaultOrderBy: 'createDate', defaultRowsPerPage: 10 });

  const [notif, setNotif] = useState({
    open: false,
    type: 'success',
    message: '',
  });

  const [organizationRes] = useFindOneOrganizationByIdQuery({
    variables: { id: router.query.organizationId },
  });

  const { data, fetching, error } = organizationRes;
  const [tableData, setTableData] = useState<any[]>([]);
  const [isLoadingData, setLoading] = useState<boolean>(false);
  const [filterStartDate, setFilterStartDate] = useState<Date | null>(null);
  const [filterEndDate, setFilterEndDate] = useState<Date | null>(null);
  const [tableHeader, setTableHeader] = useState<any[]>(TABLE_HEAD);
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    getDonorList();
  }, []);

  const getDonorList = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${publicRuntimeConfig.tmra.raise.url}/orgs/donors?organizationId=${router.query.organizationId}`,
      );
      setTableData(
        data.map(x => ({
          _id: x?._id,
          name: `${
            x?.firstName && x?.lastName
              ? `${x?.firstName} ${x?.lastName}`
              : x?.firstName && !x?.lastName
              ? x?.firstName
              : !x?.firstName && x?.lastName
              ? x?.lastName
              : ''
          }`,
          email: x?.email ?? '',
          mobile: x?.mobile ?? '',
          country: x?.country ?? '',
          amount: x?.amount ?? '',
          status: x?.status ?? '',
          transactionId: x?.transactionId ?? '',
        })),
      );
    } catch (error) {
      setNotif({ open: true, type: 'error', message: generateErrorMessage(error) });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setNotif({ open: false, type: '', message: '' });
  };

  const handleDeleteRow = (id: string) => {
    const deleteRow = tableData.filter(row => row._id !== id);
    setSelected([]);
    setTableData(deleteRow);
  };

  const handleDeleteRows = (selected: string[]) => {
    const deleteRows = tableData.filter(row => !selected.includes(row._id));
    setSelected([]);
    setTableData(deleteRows);
  };

  const handleFilterName = (filterName: string) => {
    setFilterName(filterName);
    setPage(0);
  };

  const dataFiltered = applySortFilter({
    tableData,
    comparator: getComparator(order, orderBy),
    filterName,
    filterStartDate,
    filterEndDate,
  });

  const isNotFound = !dataFiltered.length;

  return (
    <OrgDashboardLayout organization={data?.organization}>
      <Page title={`Nonprofit Organization - ${data?.organization?.name ?? '...'} | Tmra`}>
        <Container maxWidth={themeStretch ? false : 'xl'}>
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
          <HeaderBreadcrumbs
            heading="Donors"
            links={[{ name: t('core.menu.overview') }, { name: 'Donors' }]}
          />
          <Card>
            <Scrollbar>
              <TableContainer sx={{ minWidth: 800, position: 'relative' }}>
                {selected.length > 0 && (
                  <TableSelectedActions
                    dense={dense}
                    numSelected={selected.length}
                    rowCount={tableData.length}
                    onSelectAllRows={checked =>
                      onSelectAllRows(
                        checked,
                        tableData.map(row => row._id),
                      )
                    }
                    actions={
                      <Stack spacing={1} direction="row">
                        <Tooltip title="Delete">
                          <IconButton color="primary" onClick={() => handleDeleteRows(selected)}>
                            <Iconify icon={'eva:trash-2-outline'} />
                          </IconButton>
                        </Tooltip>
                      </Stack>
                    }
                  />
                )}
                <Table size={dense ? 'small' : 'medium'}>
                  <TableHeadCustom
                    order={order}
                    orderBy={orderBy}
                    headLabel={tableHeader}
                    rowCount={tableData.length}
                    numSelected={selected.length}
                    onSort={onSort}
                    onSelectAllRows={checked =>
                      onSelectAllRows(
                        checked,
                        tableData.map(row => row._id),
                      )
                    }
                  />
                  <TableBody>
                    {isLoadingData || fetching ? (
                      <TableRow>
                        <TableCell align="center" colSpan={tableHeader.length + 1}>
                          <CircularProgress color="success" />
                        </TableCell>
                      </TableRow>
                    ) : !isLoadingData && dataFiltered.length > 0 ? (
                      dataFiltered
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((x, key) => (
                          <DonorListTableRow
                            key={x?._id}
                            row={x}
                            selected={selected.includes(x._id as string)}
                            onSelectRow={() => onSelectRow(x._id as string)}
                            actions={
                              <>
                                <MenuItem
                                  onClick={() => {
                                    handleDeleteRow(x._id);
                                  }}
                                  sx={{ color: 'error.main' }}
                                >
                                  <Iconify icon={'eva:trash-2-outline'} />
                                  Delete
                                </MenuItem>
                              </>
                            }
                          />
                        ))
                    ) : !isLoadingData && !dataFiltered.length ? (
                      <TableRow>
                        <TableCell
                          align="center"
                          colSpan={tableHeader.length + 1}
                          sx={{ py: 10, typography: 'h6' }}
                        >
                          No Data
                        </TableCell>
                      </TableRow>
                    ) : null}
                  </TableBody>
                </Table>
              </TableContainer>
            </Scrollbar>
            <Box sx={{ position: 'relative' }}>
              <TablePagination
                rowsPerPageOptions={[10, 25]}
                component="div"
                count={dataFiltered.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={onChangePage}
                onRowsPerPageChange={onChangeRowsPerPage}
              />
            </Box>
          </Card>
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

// ----------------------------------------------------------------------

function applySortFilter({
  tableData,
  comparator,
  filterName,
  filterStartDate,
  filterEndDate,
}: {
  tableData: any[];
  comparator: (a: any, b: any) => number;
  filterName: string;
  filterStartDate: Date | null;
  filterEndDate: Date | null;
}) {
  const stabilizedThis = tableData.map((el, index) => [el, index] as const);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  tableData = stabilizedThis.map(el => el[0]);

  if (filterName) {
    tableData = tableData.filter((item: Record<string, any>) => {
      if (item?.transactionId || item?.donorName) {
        return (
          item.transactionId.toLowerCase().indexOf(filterName.toLowerCase()) !== -1 ||
          item.donorName.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
        );
      } else {
        return item;
      }
    });
  }

  if (filterStartDate && filterEndDate) {
    tableData = tableData.filter((item: Record<string, any>) =>
      moment(item.createdAt).isBetween(filterStartDate, filterEndDate, 'days', '[]'),
    );
  }

  return tableData;
}
