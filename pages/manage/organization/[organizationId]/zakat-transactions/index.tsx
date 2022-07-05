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

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TableMoreMenu from '@components/table/TableMoreMenu';
import createAvatar from '@utils/createAvatar';
import moment from 'moment';
import { motion } from 'framer-motion';
import { varWrapEnter } from '@components/animate';
import { Close } from '@mui/icons-material';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import axios from 'axios';
import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';
import { useAppSelector } from '@redux/hooks';
import generateErrorMessage from '@utils/errorMessage';
import { LoadingButton } from '@mui/lab';
import * as XLSX from 'xlsx';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'transactionId', label: 'Person', align: 'left', width: 250 },
  { id: 'createdAt', label: 'Transaction Date', align: 'left' },
  { id: 'amount', label: 'Amount', align: 'center', width: 140 },
  { id: 'status', label: 'Status', align: 'left' },
  // { id: '' },
];

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;
const fileExtension = '.xlsx';

// ----------------------------------------------------------------------
const ZakatTransactionTableRow = ({ actions, row, selected, onSelectRow }) => {
  const theme = useTheme();
  const { name, transactionId, createdAt, amount, status } = row;
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
      <TableCell>{moment(createdAt).format('DD MMM YYYY')}</TableCell>
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
const TopToolbar = ({
  filterStartDate,
  filterEndDate,
  setFilterStartDate,
  setFilterEndDate,
  exportXLS,
  isLoading,
  onFilterName,
  filterName,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack
        spacing={2}
        direction={{ xs: 'column', md: 'row' }}
        justifyContent={{ xs: 'flex-start', md: 'space-between' }}
        sx={{ py: 2.5, px: 3 }}
      >
        <Stack spacing={2} direction={{ xs: 'column', md: 'row' }}>
          <DatePicker
            label="Start date"
            value={filterStartDate}
            onChange={setFilterStartDate}
            inputFormat="dd/MM/yyyy"
            renderInput={params =>
              isLoading ? (
                <Box sx={{ height: 56, width: 160 }}>
                  <Skeleton width="100%" height="100%" />
                </Box>
              ) : (
                <TextField
                  {...params}
                  fullWidth
                  sx={{
                    maxWidth: { md: 200 },
                  }}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        {params?.InputProps?.endAdornment}
                        {filterStartDate ? (
                          <IconButton
                            sx={{ alignSelf: { xs: 'center', md: 'center' }, order: 2 }}
                            onClick={() => {
                              setFilterStartDate(null);
                            }}
                          >
                            <Iconify icon={'carbon:close-filled'} />
                          </IconButton>
                        ) : null}
                      </Stack>
                    ),
                  }}
                />
              )
            }
          />
          <DatePicker
            label="End date"
            value={filterEndDate}
            onChange={setFilterEndDate}
            inputFormat="dd/MM/yyyy"
            shouldDisableDate={date => moment(date).isBefore(filterStartDate)}
            renderInput={params =>
              isLoading ? (
                <Box sx={{ height: 56, width: 160 }}>
                  <Skeleton width="100%" height="100%" />
                </Box>
              ) : (
                <TextField
                  {...params}
                  fullWidth
                  sx={{
                    maxWidth: { md: 200 },
                  }}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        {params?.InputProps?.endAdornment}
                        {filterEndDate ? (
                          <IconButton
                            sx={{ alignSelf: { xs: 'center', md: 'center' }, order: 2 }}
                            onClick={() => {
                              setFilterEndDate(null);
                            }}
                          >
                            <Iconify icon={'carbon:close-filled'} />
                          </IconButton>
                        ) : null}
                      </Stack>
                    ),
                  }}
                />
              )
            }
          />
          {isLoading ? (
            <Box sx={{ height: 56, width: 160 }}>
              <Skeleton width="100%" height="100%" />
            </Box>
          ) : (
            <TextField
              fullWidth
              value={filterName}
              onChange={event => onFilterName(event.target.value)}
              placeholder="Search donor or invoice number..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Iconify
                      icon={'eva:search-fill'}
                      sx={{ color: 'text.disabled', width: 20, height: 20 }}
                    />
                  </InputAdornment>
                ),
                endAdornment: filterName ? (
                  <IconButton
                    sx={{ alignSelf: { xs: 'center', md: 'center' }, order: 2 }}
                    onClick={() => {
                      onFilterName('');
                    }}
                  >
                    <Iconify icon={'carbon:close-filled'} />
                  </IconButton>
                ) : null,
              }}
            />
          )}
        </Stack>
        <Tooltip title="Export as XLSX">
          <IconButton
            sx={{ color: 'black', alignSelf: { xs: 'baseline', md: 'center' } }}
            onClick={exportXLS}
          >
            <Iconify icon={'eva:download-outline'} />
          </IconButton>
        </Tooltip>
      </Stack>
    </LocalizationProvider>
  );
};
const CurrentBalanceCard = ({ isLoading, organization, totalRecieve }) => {
  const { i18n } = useTranslation();
  const currencyFormat = new Intl.NumberFormat(i18n.language, {
    style: 'currency',
    currency: organization?.defaultCurrency ?? 'USD',
    minimumFractionDigits: 0,
  });
  return (
    <Grid container sx={{ justifyContent: 'center' }}>
      <Grid item xs={12} md={6}>
        {isLoading ? (
          <Box sx={{ height: '150px' }}>
            <Skeleton sx={{ height: '100%' }} />
          </Box>
        ) : (
          <Card sx={{ display: 'flex', flexDirection: 'column', p: 3, mb: 4 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="subtitle2" paragraph>
                Total Receive
              </Typography>
              <Typography variant="h2" gutterBottom>
                {currencyFormat.format(totalRecieve)}
              </Typography>
            </Box>
            {/* <Stack direction="column" spacing={1.5}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', flex: 1 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  Total Receive
                </Typography>
                <Typography variant="subtitle2">{currencyFormat.format(totalRecieve)}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', flex: 1 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  Total Expenses
                </Typography>
                <Typography variant="subtitle2">-{currencyFormat.format(0)}</Typography>
              </Box>
            </Stack> */}
          </Card>
        )}
      </Grid>
    </Grid>
  );
};
const AddExpensesPopup = ({ open, handleClosePopup, getData, setNotif }) => {
  const router = useRouter();
  const currentUser = useAppSelector(state => state.currentUser);

  const [errorMessage, setErrorMessage] = useState('');

  const addExpenseSchema = Yup.object().shape({
    createdDate: Yup.date()
      .default(() => new Date())
      .required('Created date is required'),
    expenseDate: Yup.date()
      .nullable()
      .transform((curr, orig) => (orig === '' ? null : curr))
      .required('Expense date is required')
      .typeError('Expense date must be a valid date'),
    amount: Yup.string()
      .required('Amount of expense is required')
      .matches(/^[1-9]\d*$/, 'Amount of expense must be a valid number'),
    description: Yup.string().nullable(),
    transactionId: Yup.string().required('Transaction ID References is required'),
  });

  const defaultValues = {
    createdDate: new Date(),
    expenseDate: null,
    amount: '',
    description: '',
    transactionId: '',
  };

  const methods = useForm({
    resolver: yupResolver(addExpenseSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async values => {
    try {
      const variables = {
        amount: values.amount,
        createdBy: router.query.organizationId,
        referenceId: values.transactionId,
        expenseDate: moment(values.expenseDate).format('DD-MM-YYYY'),
        description: values.description,
      };

      const response = await axios.post(
        `${publicRuntimeConfig.tmra.raise.url}/zakat/expense/create`,
        variables,
      );
      if (response.data) {
        setNotif({ open: true, type: 'success', message: 'Expense successfully created' });
      }
    } catch (error: any) {
      setNotif({ open: true, type: 'error', message: generateErrorMessage(error) });
    } finally {
      handleClosePopup();
      reset();
      getData();
    }
  };
  return (
    <motion.div variants={varWrapEnter}>
      <Dialog
        open={open}
        fullWidth
        maxWidth="xs"
        onClose={() => {
          handleClosePopup();
          reset();
        }}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title" sx={{ textAlign: 'right' }}>
          <IconButton
            size="small"
            aria-label="close"
            onClick={() => {
              handleClosePopup();
              reset();
            }}
            sx={{
              color: theme => theme.palette.grey[500],
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {errorMessage && (
            <Box sx={{ mb: 3 }}>
              <Alert severity="error">Error: </Alert>
            </Box>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3} direction="column">
              <Controller
                name="createdDate"
                control={control}
                render={({ field, fieldState }) => (
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Created Date"
                      {...field}
                      disabled
                      inputFormat="dd/MM/yyyy"
                      renderInput={params => (
                        <TextField
                          {...params}
                          fullWidth
                          disabled
                          sx={{
                            maxWidth: { md: 160 },
                          }}
                          helperText={fieldState?.error?.message}
                          error={Boolean(fieldState.invalid && fieldState.error)}
                        />
                      )}
                    />
                  </LocalizationProvider>
                )}
              />
              <Controller
                name="expenseDate"
                control={control}
                render={({ field, fieldState }) => (
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Expense Date"
                      disablePast
                      inputFormat="dd/MM/yyyy"
                      {...field}
                      renderInput={params => (
                        <TextField
                          {...params}
                          fullWidth
                          sx={{
                            maxWidth: { md: 160 },
                          }}
                          helperText={fieldState?.error?.message}
                          error={Boolean(fieldState.invalid && fieldState.error)}
                        />
                      )}
                    />
                  </LocalizationProvider>
                )}
              />
              <Controller
                name="transactionId"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    fullWidth
                    label="Transaction ID References"
                    helperText={fieldState?.error?.message}
                    error={Boolean(fieldState.invalid && fieldState.error)}
                    {...field}
                  />
                )}
              />
              <Controller
                name="amount"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    fullWidth
                    label="Amount"
                    helperText={fieldState?.error?.message}
                    error={Boolean(fieldState.invalid && fieldState.error)}
                    {...field}
                  />
                )}
              />
              <Controller
                name="description"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    fullWidth
                    label="Description"
                    multiline
                    rows={5}
                    helperText={fieldState?.error?.message}
                    error={Boolean(fieldState.invalid && fieldState.error)}
                    {...field}
                  />
                )}
              />
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                Create Expense
              </LoadingButton>
            </Stack>
          </form>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default function ZakatTransaction() {
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
  } = useTable({ defaultOrderBy: 'createdAt', defaultRowsPerPage: 10 });

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

  const [allData, setAllData] = useState<any[]>([]);

  const [recieveData, setRecieveData] = useState<any[]>([]);

  const [expensesData, setExpensesData] = useState<any[]>([]);

  const [isLoadingData, setLoadingData] = useState<boolean>(false);

  const [isLoadingSummary, setLoadingSummary] = useState<boolean>(false);

  const [totalRecieve, setTotalRecieve] = useState<number>(0);

  const [filterStartDate, setFilterStartDate] = useState<Date | null>(null);

  const [filterEndDate, setFilterEndDate] = useState<Date | null>(null);

  const [tableHeader, setTableHeader] = useState<any[]>(TABLE_HEAD);

  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const [filterName, setFilterName] = useState('');

  const { currentTab: filterStatus, onChangeTab: onFilterStatus } = useTabs('all');

  // useEffect(() => {
  //   if (filterStatus === 'all') {
  //     getAllDatas();
  //   } else if (filterStatus === 'recieve') {
  //     getRecieveDatas();
  //   } else if (filterStatus === 'expenses') {
  //     getExpenseDatas();
  //   }
  // }, [filterStatus]);

  useEffect(() => {
    getSummary();
    // getAllDatas();
    getRecieveDatas();
    // getExpenseDatas();
  }, []);

  useEffect(() => {
    if (filterStatus === 'all') setTableData(allData);
  }, [allData, filterStatus]);

  useEffect(() => {
    if (filterStatus === 'recieve') setTableData(recieveData);
  }, [recieveData, filterStatus]);

  useEffect(() => {
    if (filterStatus === 'expenses') setTableData(expensesData);
  }, [expensesData, filterStatus]);

  const handleClose = () => {
    setNotif({ open: false, type: '', message: '' });
  };

  const handleClosePopup = () => {
    setOpenModal(false);
    getExpenseDatas();
  };

  const onChangeTabPanel = (event, value) => {
    setPage(0);
    onFilterStatus(event, value);
    if (value === 'all' || value === 'expenses') {
      setTableHeader(prevState => prevState.filter(x => x.id !== 'status'));
    } else {
      setTableHeader(prevState => [...prevState, { id: 'status', label: 'Status', align: 'left' }]);
    }
  };

  const getAllDatas = async () => {
    setLoadingData(true);
    try {
      const response = await axios.get(
        `${publicRuntimeConfig.tmra.raise.url}/zakat/transactionAll?organizationId=${router.query.organizationId}`,
      );
      if (response.data) {
        const temp = response.data.map(x => ({
          amount: Number(x?.amount),
          createdAt: x?.expenseDate ? moment(x?.expenseDate, 'DD-MM-YYYY') : moment(x?.createdAt),
          name: x?.donorName ? x.donorName : x?.organizationName ? x.organizationName : '',
          transactionId: x?.transactionId ? x.transactionId : x?.referenceId ? x.referenceId : '',
        }));
        setAllData(temp);
      }
    } catch (error) {
      setNotif({ open: true, type: 'error', message: generateErrorMessage(error) });
    } finally {
      setLoadingData(false);
    }
  };

  const getRecieveDatas = async () => {
    setLoadingData(true);
    try {
      const response = await axios.get(
        `${publicRuntimeConfig.tmra.raise.url}/zakat/transactionList?organizationId=${router.query.organizationId}`,
      );
      if (response.data) {
        const temp = response.data.map(x => ({
          amount: Number(x?.amount),
          createdAt: x?.createdAt,
          name: x?.donorName ? x.donorName : '',
          transactionId: x?.transaction_id ? x.transaction_id : x?._id ? x?._id : '',
          status: x?.donationStatus,
        }));
        setRecieveData(temp);
        setTableData(temp);
      }
    } catch (error) {
      setNotif({ open: true, type: 'error', message: generateErrorMessage(error) });
    } finally {
      setLoadingData(false);
    }
  };

  const getExpenseDatas = async () => {
    setLoadingData(true);
    try {
      const response = await axios.get(
        `${publicRuntimeConfig.tmra.raise.url}/zakat/expense/list?organizationId=${router.query.organizationId}`,
      );
      if (response.data && response.data.length > 0) {
        const temp = response.data.map(x => ({
          amount: Number(x?.amount),
          createdAt: moment(x?.expenseDate, 'DD-MM-YYYY'),
          name: x?.organizationName,
          transactionId: x?.referenceId,
        }));
        setExpensesData(temp);
      }
    } catch (error) {
      setNotif({ open: true, type: 'error', message: generateErrorMessage(error) });
    } finally {
      setLoadingData(false);
    }
  };

  const getSummary = async () => {
    try {
      setLoadingSummary(true);
      const { data } = await axios.get(
        `${publicRuntimeConfig.tmra.raise.url}/zakat/getSummary?organizationId=${router.query.organizationId}`,
      );
      if (data && data.total_receive) {
        setTotalRecieve(Number(data.total_receive));
      }
    } catch (error) {
      setNotif({ open: true, type: 'error', message: generateErrorMessage(error) });
    } finally {
      setLoadingSummary(false);
    }
  };

  const handleDeleteRow = (id: string) => {
    const deleteRow = tableData.filter(row => row.id !== id);
    setSelected([]);
    setTableData(deleteRow);
  };

  const handleDeleteRows = (selected: string[]) => {
    const deleteRows = tableData.filter(row => !selected.includes(row.id));
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

  const exportToXLS = () => {
    if (dataFiltered.length) {
      const xlsHeader = ['No', 'Person', 'Transaction Date', 'Amount'];
      let fileName = 'All_Transactions';
      if (filterStatus === 'recieve') {
        fileName = 'Recieved_Transactions';
        xlsHeader.push('Status');
      } else if (filterStatus === 'expenses') {
        fileName = 'Expenses_Transactions';
      }
      fileName += `_${moment().format('DD-MM-YY-HH:mm:ss')}`;
      const temp = dataFiltered.map((x, idx) => {
        const obj = {
          No: idx + 1,
          'Transaction ID': x.transactionId,
          Person: x.name,
          'Transaction Date': moment(x.createdAt).format('DD MMM YYYY'),
          Amount: x.amount,
        };
        if (x.status) {
          obj['Status'] = x.status;
        }
        return obj;
      });
      const worksheet = XLSX.utils.json_to_sheet(temp);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      XLSX.writeFile(workbook, `${fileName}${fileExtension}`);
    }
  };

  const isNotFound = !dataFiltered.length;

  const TABS = [
    // { value: 'all', label: 'All', color: 'info', count: allData.length },
    { value: 'recieve', label: 'Receive', color: 'success', count: recieveData.length },
    // { value: 'expenses', label: 'Expenses', color: 'error', count: expensesData.length },
  ] as const;

  return (
    <OrgDashboardLayout organization={data?.organization}>
      <Page title={`Nonprofit Organization - ${data?.organization?.name ?? '...'} | Tmra`}>
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <AddExpensesPopup
            open={isOpenModal}
            handleClosePopup={handleClosePopup}
            getData={getExpenseDatas}
            setNotif={setNotif}
          />
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
            heading="Zakat Transactions"
            links={[{ name: t('core.menu.overview') }, { name: 'Zakat Transactions' }]}
            // action={
            //   <Button
            //     variant="contained"
            //     startIcon={<Iconify icon="akar-icons:plus" />}
            //     onClick={() => setOpenModal(true)}
            //   >
            //     Create Expenses
            //   </Button>
            // }
          />
          <CurrentBalanceCard
            isLoading={isLoadingSummary || fetching}
            organization={data?.organization}
            totalRecieve={totalRecieve}
          />
          <Card>
            <Tabs
              allowScrollButtonsMobile
              variant="scrollable"
              scrollButtons="auto"
              value={filterStatus}
              onChange={onChangeTabPanel}
              sx={{ px: 2, bgcolor: 'background.neutral' }}
            >
              {TABS.map(tab => (
                <Tab
                  disableRipple
                  key={tab.value}
                  value={tab.value}
                  label={
                    <Stack spacing={1} direction="row" alignItems="center">
                      <div>{tab.label}</div> <Label color={tab.color}> {tab.count} </Label>
                    </Stack>
                  }
                />
              ))}
            </Tabs>

            <Divider />

            <TopToolbar
              filterStartDate={filterStartDate}
              setFilterStartDate={val => setFilterStartDate(val)}
              filterEndDate={filterEndDate}
              setFilterEndDate={val => setFilterEndDate(val)}
              isLoading={fetching}
              exportXLS={exportToXLS}
              onFilterName={handleFilterName}
              filterName={filterName}
            />
            <Scrollbar>
              <TableContainer sx={{ minWidth: 800, position: 'relative' }}>
                {/* {selected.length > 0 && (
                <TableSelectedActions
                  dense={dense}
                  numSelected={selected.length}
                  rowCount={tableData.length}
                  onSelectAllRows={checked =>
                    onSelectAllRows(
                      checked,
                      tableData.map(row => row.id),
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
              )} */}
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
                        tableData.map(row => row.id),
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
                          <ZakatTransactionTableRow
                            key={x?.id}
                            row={x}
                            selected={selected.includes(x.id as string)}
                            onSelectRow={() => onSelectRow(x.id as string)}
                            actions={
                              <>
                                <MenuItem
                                  onClick={() => {
                                    handleDeleteRow(x.id);
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
          item.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
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
