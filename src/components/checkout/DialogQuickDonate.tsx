/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// component
import { varWrapEnter } from '@components/animate';
// Icon
import { Close } from '@mui/icons-material';
// @mui
import {
  Collapse,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  InputAdornment,
  styled,
  Typography,
  Box,
} from '@mui/material';
import axios from 'axios';
//
import { motion } from 'framer-motion';
import { toInteger } from 'lodash';
import { useTranslation } from 'next-i18next';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import RuntimeConfigs from '@utils/runtime-configs';

import { Appearance } from '@modules/fundraising/Campaign';
import { ButtonStyle, CssTextField, AmountButtonStyle } from './CheckoutQuickDonate';

import { useAppSelector } from '@redux/hooks';
import { DonorForm } from '../../../pages/charity/more-info';
import { CustomCircularProgress } from './CheckoutQuickDonate';

import { getCookie, checkCookies } from 'cookies-next';

// ----------------------------------------------------------------------

const IllustrationImgStyle = styled('img')(() => ({
  width: 146,
  height: 106,
  margin: 'auto',
}));

// ----------------------------------------------------------------------

interface IQuickDonateDialogProps {
  organizationId?: string | null;
  open: boolean;
  onClose: (open: boolean) => void;
  scrollType?: any;
  dataUrlTemplate?: string;
  appearance?: Appearance | null;
  amount?: number;
}

// ----------------------------------------------------------------------

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

export default function DialogQuickDonate({
  organizationId,
  open,
  scrollType,
  onClose,
  appearance,
  amount,
}: IQuickDonateDialogProps) {
  const { t } = useTranslation();
  const router = useRouter();
  const currentUser = useAppSelector(state => state.currentUser);

  const [isLoading, setLoading] = useState(false);
  const [donateValue, setDonateValue] = useState<number | 0>(0);
  const [disabled, setDisabled] = useState(true);
  const [nextStep, setNextStep] = useState(false);

  let userInfo: any = {};
  if (checkCookies('userInfo')) {
    const tempUserInfo = getCookie('userInfo');
    if (tempUserInfo) userInfo = JSON.parse(tempUserInfo as string);
  }

  useEffect(() => {
    if (open && amount) {
      setDonateValue(amount);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, amount]);

  useEffect(() => {
    if (userInfo?.id) {
      submitPayment(null);
    } else setNextStep(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  const submitPayment = async (requestObj: any) => {
    if (typeof window !== 'undefined') {
      const path = `${publicRuntimeConfig.tmra.raise.url}/stripe/request`;
      const payload: any = {
        organizationId: organizationId,
        campaignId: '6299ed6a9f1ad428563563ed',
        success_url: `${window.location.origin}/payment/success?session_id={CHECKOUT_SESSION_ID}&organizationId=${organizationId}`,
        cancel_url: `${window.location.origin}${router.asPath}`,
        quantity: Number(donateValue),
        price: 'price_1L6S60HUWfuuNMSQKWefP6HW',
      };
      if (userInfo?.id) payload.donorId = userInfo?.id;
      else if (requestObj?.donorId) payload.donorId = requestObj?.donorId;

      if (payload) {
        setLoading(true);

        await axios
          .post(path, payload)
          .then(res => {
            if (res.data && res.data.statusCode === 200) {
              if (res.data?.stripeResponse?.url) {
                handleClosePopup();
                window.location.href = res.data?.stripeResponse?.url;
              }
            }
          })
          .catch(err => {
            console.debug(err);
            handleClosePopup();
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        router.push('/');
      }
    }
  };

  const handleClosePopup = () => {
    onClose(true);
    setDonateValue(0);
    setDisabled(true);
    setNextStep(false);
  };

  return (
    <motion.div variants={varWrapEnter}>
      <Dialog
        open={open}
        maxWidth={nextStep ? 'lg' : 'xs'}
        onClose={handleClosePopup}
        scroll={scrollType}
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
          {isLoading && (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{ width: 400, height: 500 }}
            >
              <CustomCircularProgress size={50} thickness={5} appearance={appearance} />
            </Box>
          )}
          {!nextStep && !isLoading && (
            <Collapse orientation="vertical" in={!nextStep}>
              <IllustrationImgStyle
                src={`/static/illustrations/quick_donation.png`}
                alt="SVG-Illustration"
              />
              <Typography
                id="scroll-dialog-description"
                variant="subtitle1"
                sx={{ textAlign: 'center', mt: 3, mb: 1 }}
              >
                Enter amount you want to donate
              </Typography>
              <CssTextField
                appearance={appearance}
                sx={{ width: '100%', fontSize: '50px', mt: 2 }}
                fullWidth
                type="number"
                color="primary"
                value={donateValue}
                onKeyDown={e => {
                  const prevent = ['e', 'E', '+', '-', '.', ','];
                  prevent.includes(e.key) && e.preventDefault();
                }}
                onChange={e => {
                  if (e.target.value === '0') {
                    e.target.value = '';
                    setDisabled(true);
                  }
                  if (e.target.value === '') {
                    setDonateValue(0);
                    setDisabled(true);
                  } else {
                    setDonateValue(toInteger(e.target.value));
                    setDisabled(false);
                  }
                }}
                InputProps={{
                  inputProps: { min: 1 },
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />
              <Grid container alignItems="center" spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={6}>
                  <AmountButtonStyle
                    appearance={appearance}
                    variant="outlined"
                    fullWidth
                    onClick={() => {
                      setDonateValue(10);
                      setDisabled(false);
                    }}
                  >
                    $10
                  </AmountButtonStyle>
                </Grid>
                <Grid item xs={6}>
                  <AmountButtonStyle
                    appearance={appearance}
                    variant="outlined"
                    fullWidth
                    onClick={() => {
                      setDonateValue(15);
                      setDisabled(false);
                    }}
                  >
                    $15
                  </AmountButtonStyle>
                </Grid>
                <Grid item xs={6}>
                  <AmountButtonStyle
                    appearance={appearance}
                    variant="outlined"
                    fullWidth
                    onClick={() => {
                      setDonateValue(20);
                      setDisabled(false);
                    }}
                  >
                    $20
                  </AmountButtonStyle>
                </Grid>
                <Grid item xs={6}>
                  <AmountButtonStyle
                    appearance={appearance}
                    variant="outlined"
                    fullWidth
                    onClick={() => {
                      setDonateValue(25);
                      setDisabled(false);
                    }}
                  >
                    $25
                  </AmountButtonStyle>
                </Grid>
              </Grid>
              <ButtonStyle
                appearance={appearance}
                variant="contained"
                onClick={() => {
                  if (donateValue > 0) {
                    setNextStep(true);
                  }
                }}
                fullWidth
                disabled={disabled}
                sx={{ mt: 2 }}
              >
                Donate {`$${donateValue}`}
              </ButtonStyle>
            </Collapse>
          )}
          {nextStep && (
            <Collapse orientation="vertical" in={nextStep}>
              <DonorForm
                customAction={data => {
                  setNextStep(false);
                  const obj: any = {};
                  obj.donorId = data?._id;
                  submitPayment(obj);
                }}
                paymentRequestObject={null}
              />
            </Collapse>
          )}
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
