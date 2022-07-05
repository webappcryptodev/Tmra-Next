/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
// material
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Card,
  Table,
  Button,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  CardHeader,
  Typography,
  TableContainer,
  TableFooter,
  TablePagination,
  IconButton,
} from '@mui/material';
import LastPageIcon from '@mui/icons-material/LastPage';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import FirstPageIcon from '@mui/icons-material/FirstPage';

// utils
//
import Scrollbar from '../../Scrollbar';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import dayjs from 'dayjs';
import { ContentCopy } from '@mui/icons-material';
import _mock from '@utils/mock-data';
import { toInteger } from 'lodash';

// ----------------------------------------------------------------------

const mockData = [...Array(5)].map((_, i) => ({
  _id: _mock.id(i),
  referralURL: `https://staging.tmra.io/campaign?id=${_mock.id(i)}`,
  grassPoint: _mock.number.age(i + 5),
  visitorDonations: `${(_mock.number.age(i + 5) * 5) / 10}`,
  numberOfVisits: _mock.number.age(i + 5) * 2,
  campaignName: _mock.text.sentence(i),
  postDate: _mock.time(i),
}));

dayjs.extend(localizedFormat);
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
interface affiliationData {
  affiliationData: {
    _id: string;
    amount: string;
    createdAt: string;
    ownerRealmId: string;
    point: string;
    referralURL: string;
    visitorDonation: string;
    visitorVisit: string;
    currency: string;
    donationStatus: string;
  };
  campaignName: string;
}

interface affiliationProps {
  affiliations: affiliationData[] | undefined;
}
export default function Affiliation(data: affiliationProps) {
  console.log('affiliation component', data);
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const handleClickDownload = () => {};
  const handleClickPrint = () => {};
  const handleClickShare = () => {};
  const handleClickDelete = () => {};
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(
          0,
          (1 + page) * rowsPerPage - (data?.affiliations ? data?.affiliations?.length : 0),
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
        <CardHeader title="Affiliation" sx={{ mb: 3 }} />
        <Scrollbar>
          <TableContainer sx={{ minWidth: 720 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Share link</TableCell>
                  <TableCell>Grass point</TableCell>
                  <TableCell>Visitor donations</TableCell>
                  <TableCell>Number of visits</TableCell>
                  <TableCell>Campaign name</TableCell>
                  <TableCell>Post date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.affiliations
                  ? (rowsPerPage > 0
                      ? data.affiliations.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage,
                        )
                      : data.affiliations
                    ).map(row => (
                      <TableRow key={row.affiliationData._id}>
                        <TableCell>
                          <p></p>
                          <Typography variant="body2">
                            {/* {row.affiliationData.referralURL} */}
                            <Button
                              onClick={() => {
                                navigator.clipboard.writeText(row.affiliationData.referralURL);
                              }}
                            >
                              <ContentCopy />
                            </Button>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {row.affiliationData.point}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {row.affiliationData.visitorDonation +
                              ' ' +
                              getSymbolFromCurrency(row.affiliationData.currency)}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {row.affiliationData.visitorVisit}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {row.campaignName}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="subtitle2">
                            {dayjs(row.affiliationData.createdAt).format('ll')}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {dayjs(row.affiliationData.createdAt).format('LT')}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))
                  : (rowsPerPage > 0
                      ? mockData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      : mockData
                    ).map(row => (
                      <TableRow key={row._id}>
                        <TableCell>
                          <p></p>
                          <Typography variant="body2">
                            {/* {row.affiliationData.referralURL} */}
                            <Button
                              onClick={() => {
                                navigator.clipboard.writeText(row.referralURL);
                              }}
                            >
                              <ContentCopy />
                            </Button>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {row.grassPoint}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {row.visitorDonations + ' ' + getSymbolFromCurrency('USD')}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {row.numberOfVisits}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {row.campaignName}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="subtitle2">
                            {dayjs(row.postDate).format('ll')}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {dayjs(row.postDate).format('LT')}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
              {/* {data.affiliations &&  */}
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    colSpan={12}
                    count={data.affiliations ? data?.affiliations?.length : -1}
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
              {/* } */}
            </Table>
          </TableContainer>
        </Scrollbar>
      </Card>
    </>
  );
}
