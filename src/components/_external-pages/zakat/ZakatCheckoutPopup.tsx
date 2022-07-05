import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Grid,
  Stack,
  Typography,
  Card,
  CardContent,
  Divider,
  Box,
} from '@mui/material';
import { Close } from '@mui/icons-material';

import { Appearance } from '@modules/fundraising/Campaign';
import { startCase, camelCase } from 'lodash';

interface Props {
  open: boolean;
  onClose: () => void;
  total: number;
  appearance?: Appearance | null;
  currencyCode?: string;
  amountArr: any[];
}

const ZakatCheckoutPopup: React.FC<Props> = ({
  open,
  onClose,
  appearance,
  total,
  currencyCode,
  amountArr,
}) => {
  const { t } = useTranslation();

  const handleClosePopup = () => {
    onClose();
  };

  const renderLabel = type => {
    let label = '';
    switch (type) {
      case 'money':
        label = `${currencyCode ?? 'SAR'} cash amount`;
        break;
      case 'silver':
        label = 'grames of silver';
        break;
      case 'gold':
        label = 'grames of gold';
        break;
      case 'stocks':
        label = `${currencyCode ?? 'SAR'} Net stocks value`;
        break;
      case 'mutual':
        label = `${currencyCode ?? 'SAR'} Net stocks value`;
        break;
      default:
        break;
    }
    return label;
  };

  const renderGoldResults = () => {
    const find = amountArr.findIndex(x => x.type === 'gold');
    if (find > -1) {
      if (
        amountArr[find].custom &&
        Array.isArray(amountArr[find].custom) &&
        amountArr[find].custom.length > 0
      ) {
        return (
          <>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography>
                {`${amountArr[find].custom.reduce(
                  (a, { value }) => a + Number(value),
                  0,
                )} grames of total`}
              </Typography>
              <Typography>
                Sub total -{' '}
                <b>
                  {amountArr[find].custom.reduce((a, { amt }) => a + Number(amt), 0)}{' '}
                  <sup>{currencyCode ?? 'SAR'}</sup>
                </b>
              </Typography>
            </Box>
            {amountArr[find].custom.map((x, key) => (
              <Box
                key={key}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: 1,
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'lightgray',
                  borderRadius: 1,
                  alignItems: 'center',
                  marginY: 1,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography>{`${x.value} grames (${x.carat} Carat)`}</Typography>
                </Box>
                <Typography>
                  <b>
                    {x.amt} <sup>{currencyCode ?? 'SAR'}</sup>
                  </b>
                </Typography>
              </Box>
            ))}
          </>
        );
      }
    }
  };

  const renderStockResults = () => {
    const find = amountArr.findIndex(x => x.type === 'stocks');
    if (find > -1) {
      if (
        amountArr[find].custom &&
        Array.isArray(amountArr[find].custom) &&
        amountArr[find].custom.length > 0
      ) {
        return (
          <Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: { xs: 'unset', md: 'center' },
                justifyContent: { xs: 'flex-start', md: 'flex-end' },
                flexDirection: { xs: 'column', md: 'row' },
              }}
            >
              <Typography>
                Sub total -{' '}
                <b>
                  {amountArr[find].custom.reduce((a, { amt }) => a + Number(amt), 0)}{' '}
                  <sup>{currencyCode ?? 'SAR'}</sup>
                </b>
              </Typography>
            </Box>
            {amountArr[find].custom.map((x, key) => (
              <Box
                key={key}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: 1,
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'lightgray',
                  borderRadius: 1,
                  alignItems: 'center',
                  marginY: 1,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ display: 'flex', alignItems: 'baseline' }}>
                    <b>{`${x.name} `}</b>
                    <p style={{ color: '#999', marginLeft: '4px' }}>
                      {`(${Number(x.value)} * ${Number(x.number)}) = ${Math.round(
                        Number(x.value * x.number),
                      )} `}
                      <sup>{currencyCode ?? 'SAR'}</sup>
                    </p>
                  </Typography>
                </Box>
                <Typography>
                  <b>
                    {x.amt} <sup>{currencyCode ?? 'SAR'}</sup>
                  </b>
                </Typography>
              </Box>
            ))}
          </Box>
        );
      }
    }
  };

  return (
    <>
      <Dialog
        open={open}
        maxWidth="lg"
        fullWidth
        onClose={handleClosePopup}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title" sx={{ textAlign: 'right' }}>
          <IconButton
            size="small"
            aria-label="close"
            onClick={handleClosePopup}
            sx={{
              color: theme => theme.palette.grey[500],
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Stack spacing={3} direction="column">
                <Stack spacing={1} direction="column" display="flex" alignItems="center">
                  <Typography variant="h4">Your Total Zakat</Typography>
                  <Typography variant="h2">
                    {total} <sup>{currencyCode ?? 'SAR'}</sup>
                  </Typography>
                </Stack>
                <Card variant="outlined" sx={{ px: 2 }}>
                  <CardContent sx={{ px: 0 }}>
                    <Stack spacing={1.5} direction="column">
                      {amountArr
                        .filter(x => Number(x.amt) > 0)
                        .map((item, key) => (
                          <Box key={key}>
                            <Box display="flex" flexDirection="column">
                              <Typography variant="h5">{`${startCase(
                                camelCase(item.type),
                              )} Zakat`}</Typography>
                              {item.type === 'gold' ? (
                                <Box>{renderGoldResults()}</Box>
                              ) : item.type === 'stocks' ? (
                                <Box>{renderStockResults()}</Box>
                              ) : (
                                <Stack
                                  display="flex"
                                  direction="row"
                                  justifyContent="space-between"
                                >
                                  <Typography>{`${item.value} ${renderLabel(
                                    item.type,
                                  )}`}</Typography>
                                  <Typography>
                                    Sub total -{' '}
                                    <b>
                                      {item.amt} <sup>{currencyCode ?? 'SAR'}</sup>
                                    </b>
                                  </Typography>
                                </Stack>
                              )}
                            </Box>
                            {key < amountArr.filter(x => Number(x.amt) > 0).length - 1 && (
                              <Divider sx={{ marginTop: 1.5 }} />
                            )}
                          </Box>
                        ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}></Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ZakatCheckoutPopup;
