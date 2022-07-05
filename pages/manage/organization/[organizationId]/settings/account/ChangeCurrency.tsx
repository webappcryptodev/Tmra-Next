/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
// import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
// form
// import { yupResolver } from '@hookform/resolvers/yup';
// import { Controller, useForm } from 'react-hook-form';
// @mui
import { Stack, Card, Grid, Typography, Switch } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { useRouter } from 'next/router';
// hooks
import getSymbolFromCurrency from 'currency-symbol-map';
import { IPropsLoginOrganization } from 'src/models/Organization';
import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';
import axios from 'axios';

// ----------------------------------------------------------------------

const CURRENCY_VALUE = [
  {
    value: 'GBP',
    label: 'GBP',
    symbol: getSymbolFromCurrency('GBP'),
    active: false,
  },
  {
    value: 'USD',
    label: 'USD',
    symbol: getSymbolFromCurrency('USD'),
    active: false,
  },
  {
    value: 'SAR',
    label: 'SAR',
    symbol: getSymbolFromCurrency('SAR'),
    active: false,
  },
];

// ----------------------------------------------------------------------

export default function AccountChangeCurrency() {
  const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  // const dispatch = useAppDispatch();

  // const auth = useAppSelector(state => state.auth);
  const [organizationData, setOrganizationData] = useState<IPropsLoginOrganization | null>(null);
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const routerQuery = router.query;
      console.log(routerQuery);
      enqueueSnackbar('Your currency successfully changed!', {
        variant: 'success',
      });
      setSubmitting(false);
    } catch (error) {
      enqueueSnackbar('Failed to change your password', { variant: 'error' });
      setSubmitting(false);
      console.error(error);
    }
  };

  useEffect(() => {
    const path = `${publicRuntimeConfig.tmra.raise.url}`;
    const organizationId = router.query.organizationId;

    if (organizationId) {
      axios
        .get(`${path}/orgs/${organizationId}`)
        .then(res => {
          setOrganizationData(res.data.organization);
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  }, [publicRuntimeConfig.tmra.raise.url, router.query.organizationId]);

  if (organizationData) {
    const findCurrency = CURRENCY_VALUE.find(
      item => item.value === organizationData?.defaultCurrency,
    );

    if (findCurrency) {
      findCurrency.active = true;
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card sx={{ p: 3 }}>
            {CURRENCY_VALUE.map(({ value, symbol, active }, i) => (
              <Stack
                key={i}
                spacing={3}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                component="div"
                sx={{ mb: 2.5, '&:last-child': { mb: 0 } }}
              >
                <Typography variant="h6">
                  {value} ({`${symbol}`})
                </Typography>
                <Switch
                  checked={active}
                  size="medium"
                  inputProps={{ 'aria-label': 'checkedValue' }}
                />
              </Stack>
            ))}
            {/* <Stack spacing={3} alignItems="flex-end" component="div">
              <LoadingButton
                type="submit"
                variant="contained"
                loading={isSubmitting}
                sx={{ mt: 2 }}
              >
                Save Changes
              </LoadingButton>
            </Stack> */}
          </Card>
        </Grid>
      </Grid>
    </form>
  );
}
