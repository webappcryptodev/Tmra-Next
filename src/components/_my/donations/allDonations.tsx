/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import bookFill from '@iconify/icons-eva/book-fill';
import diagonalArrowLeftDownFill from '@iconify/icons-eva/diagonal-arrow-left-down-fill';
import diagonalArrowRightUpFill from '@iconify/icons-eva/diagonal-arrow-right-up-fill';
import downloadFill from '@iconify/icons-eva/download-fill';
import heartFill from '@iconify/icons-eva/heart-fill';
import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill';
import printerFill from '@iconify/icons-eva/printer-fill';
import shareFill from '@iconify/icons-eva/share-fill';
import trash2Outline from '@iconify/icons-eva/trash-2-outline';
import { Icon, IconifyIcon } from '@iconify/react';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
// material
import { useTheme } from '@mui/material/styles';
import { sentenceCase } from 'change-case';
import getSymbolFromCurrency from 'currency-symbol-map';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import getConfig from 'next/config';
import React, { useRef, useState } from 'react';
import RuntimeConfigs from '@utils/runtime-configs';
// utils
import { fCurrency } from '../../../utils/formatNumber';
import { MIconButton } from '../../@material-extend';
//
import Label from '../../Label';
import Scrollbar from '../../Scrollbar';

// ----------------------------------------------------------------------
dayjs.extend(localizedFormat);

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

// ----------------------------------------------------------------------

type AvatarIconProps = {
  icon: IconifyIcon;
};

function AvatarIcon({ icon }: AvatarIconProps) {
  return (
    <Avatar
      sx={{
        width: 48,
        height: 48,
        color: 'text.secondary',
        bgcolor: 'background.neutral',
      }}
    >
      <Icon icon={icon} width={24} height={24} />
    </Avatar>
  );
}

// type TransitionsProps = {
//   id: string;
//   name: string | null;
//   avatar: string | null;
//   type: 'Expenses' | 'Income' | string;
//   message: string;
//   category: string;
//   date: string | number | Date;
//   status: string;
//   amount: number | string;
// };

type MoreMenuButtonProps = {
  onDownload: VoidFunction;
  onPrint: VoidFunction;
  onShare: VoidFunction;
  onDelete: VoidFunction;
};

function MoreMenuButton({ onDownload, onPrint, onShare, onDelete }: MoreMenuButtonProps) {
  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <>
        <MIconButton ref={menuRef} size="large" onClick={handleOpen}>
          <Icon icon={moreVerticalFill} width={20} height={20} />
        </MIconButton>
      </>

      <Menu
        open={open}
        anchorEl={menuRef.current}
        onClose={handleClose}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' },
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={onDownload}>
          <Icon icon={downloadFill} width={20} height={20} />
          <Typography variant="body2" sx={{ ml: 2 }}>
            Download
          </Typography>
        </MenuItem>
        <MenuItem onClick={onPrint}>
          <Icon icon={printerFill} width={20} height={20} />
          <Typography variant="body2" sx={{ ml: 2 }}>
            Print
          </Typography>
        </MenuItem>
        <MenuItem onClick={onShare}>
          <Icon icon={shareFill} width={20} height={20} />
          <Typography variant="body2" sx={{ ml: 2 }}>
            Share
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={onDelete} sx={{ color: 'error.main' }}>
          <Icon icon={trash2Outline} width={20} height={20} />
          <Typography variant="body2" sx={{ ml: 2 }}>
            Delete
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
}

interface donation_logs {
  _id?: string;
  amount?: string;
  createdAt?: string;
  campaignId?: {
    title?: string;
    islamCharityType?: string;
    images?: string[];
  };
  currency?: string;
  donationStatus?: string;
  organizationName?: string;
}

interface donorListProps {
  donation_logs: donation_logs[] | undefined;
}

interface type {
  type: string;
}

function renderAvatar(transitions: donation_logs) {
  if (transitions?.campaignId?.islamCharityType === 'Books') {
    return <AvatarIcon icon={bookFill} />;
  }
  if (transitions?.campaignId?.islamCharityType === 'Beauty & Health') {
    return <AvatarIcon icon={heartFill} />;
  }
  return transitions?.campaignId?.images ? (
    <Avatar
      alt={transitions?.campaignId?.islamCharityType}
      src={publicRuntimeConfig.bunny.cdn.urlMedia + '/' + transitions?.campaignId?.images[0]}
      sx={{ width: 48, height: 48, boxShadow: theme => theme.customShadows.z8 }}
    />
  ) : (
    <Avatar
      alt={transitions._id}
      src="/static/placeholder/basic.png"
      sx={{ width: 48, height: 48, boxShadow: theme => theme.customShadows.z8 }}
    />
  );
}

export default function BankingRecentTransitions(data: donorListProps) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = useState(false);
  const [rowId, setRowId] = useState('');
  const [rowDate, setRowDate] = useState('');
  const [rowAmount, setRowAmount] = useState('');
  const [rowDonationStatus, setRowDonationStatus] = useState('');
  const [rowCampaignId, setRowCampaignId] = useState('');
  const [rowCurrency, setRowCurrency] = useState('');

  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const handleClickDownload = () => {};
  const handleClickPrint = () => {};
  const handleClickShare = () => {};
  const handleClickDelete = () => {};

  function handleClickOpen(row: donation_logs) {
    setOpen(true);
    setRowId(row._id!);
    setRowDate(row.createdAt!);
    setRowAmount(row.amount!);
    setRowDonationStatus(row.donationStatus!);
    setRowCampaignId(row.campaignId!.title!);
    setRowCurrency(row.currency!);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const emptyRows =
    page > 0
      ? Math.max(
          0,
          (1 + page) * rowsPerPage - (data?.donation_logs ? data?.donation_logs?.length : 0),
        )
      : 0;

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
      <Card>
        <CardHeader title="List Donations" sx={{ mb: 3 }} />
        <Scrollbar>
          <TableContainer sx={{ minWidth: 720 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Description</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {data.donation_logs &&
                  (rowsPerPage > 0
                    ? data.donation_logs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : data.donation_logs
                  ).map(row => (
                    <TableRow
                      key={row?._id}
                      onClick={() => handleClickOpen(row)}
                      sx={{ cursor: 'pointer' }}
                    >
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Box sx={{ position: 'relative' }}>
                            {renderAvatar(row)}
                            <Box
                              sx={{
                                right: 0,
                                bottom: 0,
                                width: 18,
                                height: 18,
                                display: 'flex',
                                borderRadius: '50%',
                                position: 'absolute',
                                alignItems: 'center',
                                color: 'common.white',
                                bgcolor: 'error.main',
                                justifyContent: 'center',
                                ...(row.campaignId!.islamCharityType === 'Income' && {
                                  bgcolor: 'success.main',
                                }),
                              }}
                            >
                              <Icon
                                icon={
                                  row.campaignId!.islamCharityType === 'Income'
                                    ? diagonalArrowLeftDownFill
                                    : diagonalArrowRightUpFill
                                }
                                width={16}
                                height={16}
                              />
                            </Box>
                          </Box>
                          <Box sx={{ ml: 2 }}>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              {row.campaignId!.title
                                ? row.campaignId!.title
                                : "Let's build house in Paradise by build Mosque!"}
                            </Typography>
                            <Typography variant="subtitle2">
                              {row.campaignId!.islamCharityType
                                ? row.campaignId!.islamCharityType
                                : ['WAQF', 'Books', 'Beauty & Health'][
                                    (Math.random() * ['WAQF', 'Books', 'Beauty & Health'].length) |
                                      0
                                  ]}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Typography variant="subtitle2">
                          {dayjs(row.createdAt!).format('ll')}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {dayjs(row.createdAt!).format('LT')}
                        </Typography>
                      </TableCell>

                      <TableCell>
                        {fCurrency(row.amount!, getSymbolFromCurrency(row.currency!))}
                      </TableCell>
                      <TableCell>
                        <Label
                          variant={isLight ? 'ghost' : 'filled'}
                          color={
                            row.donationStatus! === 'success'
                              ? 'completed' && 'success'
                              : row.donationStatus! === 'PENDING'
                              ? 'in_progress' && 'warning'
                              : row.donationStatus! === 'SUCCESS'
                              ? 'completed' && 'success'
                              : row.donationStatus! === 'PAID'
                              ? 'completed' && 'success'
                              : 'error'
                            // (rowrow..donationStatus! === 'completed' && 'success') ||
                            // (rowrow..donationStatus! === 'in_progress' && 'warning') ||
                            // 'error'
                          }
                        >
                          {row.donationStatus! && sentenceCase(row.donationStatus!)}
                        </Label>
                      </TableCell>

                      <TableCell align="right">
                        <MoreMenuButton
                          onDownload={handleClickDownload}
                          onPrint={handleClickPrint}
                          onShare={handleClickShare}
                          onDelete={handleClickDelete}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    colSpan={12}
                    count={data.donation_logs ? data.donation_logs.length : -1}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    SelectProps={{
                      inputProps: {
                        'aria-label': 'rows per page',
                      },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="sm"
            sx={{
              '& .MuiDialog-paper': {
                minWidth: '363px',
              },
            }}
          >
            <DialogTitle
              id="alert-dialog-title"
              sx={{
                bgcolor: '#f5f5f5',
                borderBottom: '1px solid #e8e8e8',
              }}
            >
              <Typography variant="h5" component="p" sx={{ fontWeight: 600, mb: 1.5 }}>
                {'Detail Transaction'}
              </Typography>
            </DialogTitle>
            <DialogContent>
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                component="div"
                spacing={2}
                sx={{ mt: 3 }}
              >
                <Box sx={{ width: '100%' }}>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    ID Transaction
                  </Typography>
                  <DialogContentText id="alert-dialog-description">{rowId}</DialogContentText>
                </Box>
                <Box sx={{ width: '100%' }}>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    Date
                  </Typography>
                  <DialogContentText id="alert-dialog-description">
                    {dayjs(rowDate).format('LLL')}
                  </DialogContentText>
                </Box>
                <Stack direction="row" component="div" spacing={{ xs: 3, md: 6 }}>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Amount
                    </Typography>
                    <DialogContentText id="alert-dialog-description">
                      {fCurrency(rowAmount, getSymbolFromCurrency(rowCurrency))}
                    </DialogContentText>
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Status
                    </Typography>
                    <Label
                      variant={isLight ? 'ghost' : 'filled'}
                      color={
                        rowDonationStatus === 'success'
                          ? 'completed' && 'success'
                          : rowDonationStatus === 'PENDING'
                          ? 'in_progress' && 'warning'
                          : rowDonationStatus === 'SUCCESS'
                          ? 'completed' && 'success'
                          : rowDonationStatus === 'PAID'
                          ? 'completed' && 'success'
                          : 'error'
                      }
                    >
                      {rowDonationStatus && sentenceCase(rowDonationStatus)}
                    </Label>
                  </Box>
                </Stack>
                <Box sx={{ width: '100%' }}>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    Description
                  </Typography>
                  <DialogContentText id="alert-dialog-description">
                    {rowCampaignId}
                  </DialogContentText>
                </Box>
              </Stack>
            </DialogContent>
            <DialogActions
              sx={{
                bgcolor: '#f5f5f5',
                borderTop: '1px solid #e8e8e8',
                py: 0.5,
              }}
            >
              <Button onClick={handleClose} autoFocus>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </Scrollbar>
      </Card>
    </>
  );
}
