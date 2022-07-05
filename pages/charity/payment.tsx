/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { GenericPageProps, getOrganizationFromRequest } from '@utils/whitelabel';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import getConfig from 'next/config';
// utils
import RuntimeConfigs from '@utils/runtime-configs';
// material
import {
  useTheme,
  styled,
  Typography,
  Container,
  Grid,
  Stack,
  Box,
  MenuItem,
  FormControlLabel,
  Checkbox,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
// components
import Page from '@components/Page';
// layouts
import GivingSadaqahLayout from '@layouts/givingsadaqah';
// motion
import { motion } from 'framer-motion';
import { MotionContainer, varFadeIn } from '@components/animate';
//
import axios from 'axios';

import {
  OrganizationHomePageProps,
  getOrganizationHomePageProps,
} from '@components/_external-pages/whitelabel/OrganizationHomePage';

// ----------------------------------------------------------------------

const VALUE_GIVING = [
  {
    value: 'yes',
    label: 'Yes',
  },
  {
    value: 'no',
    label: 'No',
  },
];

const VALUE_UK_TAX = [
  {
    value: 'yes',
    label: 'Yes',
  },
  {
    value: 'no',
    label: 'No',
  },
];

const VALUE_DONATION_SOURCE = [
  {
    value: 'yes',
    label: 'Yes',
  },
  {
    value: 'no',
    label: 'No',
  },
];

const VALUE_PROCEEDS = [
  {
    value: 'yes',
    label: 'Yes',
  },
  {
    value: 'no',
    label: 'No',
  },
];

const VALUE_RECEIVE_BENEFIT = [
  {
    value: 'yes',
    label: 'Yes',
  },
  {
    value: 'no',
    label: 'No',
  },
];

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

interface IStripePaymentReqData {
  organizationId?: string | null;
  success_url?: string | null;
  cancel_url?: string | null;
  price?: string | null;
  quantity?: string | null;
  amount?: number | 0;
}

// ----------------------------------------------------------------------

export default function GivingSadaqahMoreInfoAmountPage({
  organizationRes,
  appearanceRes,
}: OrganizationHomePageProps) {
  const theme = useTheme();
  const { t } = useTranslation();
  const router = useRouter();
  const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;
  const [loading, setLoading] = useState(false);

  const [stripePaymentReqData, setStripePaymentReqData] = useState<IStripePaymentReqData | null>(
    null,
  );

  const [valueGiving, setValueGiving] = useState<string>('yes');
  const [valueUkTax, setValueUkTax] = useState<string>('yes');
  const [valueDonationSource, setValueDonationSource] = useState<string>('yes');
  const [valueProceeds, setValueProceeds] = useState<string>('no');
  const [valueReceiveBenefit, setValueReceiveBenefit] = useState<string>('no');

  const submitRequest = async () => {
    const path = `${publicRuntimeConfig.tmra.raise.url}/stripe/request`;
    const payload = stripePaymentReqData;

    if (payload) {
      setLoading(true);
      console.debug(`POST ${path} ... Payload:`, payload);

      axios
        .post(path, payload)
        .then(res => {
          console.debug(`POST ${path} => Response:`, res.data);
          if (res.data && res.data.statusCode === 200) {
            if (res.data?.stripeResponse?.url) {
              window.location.href = res.data?.stripeResponse?.url;
              localStorage.removeItem('stripe-payment');
            } else {
              router.push('/');
            }
          } else {
            router.push('/');
          }
        })
        .catch(err => {
          console.debug(err);
          router.push('/');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    const paymentRequest = JSON.parse(localStorage.getItem('stripe-payment')!);

    if (organizationRes?.data?._id !== '62414373cf00cca3a830814a') {
      router.push('/');
    }

    if (!paymentRequest) {
      router.push('/');
    }

    setStripePaymentReqData(paymentRequest);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GivingSadaqahLayout
      backgroundColor="transparent"
      secondColor="secondary.main"
      imgLogoUrl={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${appearanceRes?.data?.nonprofitAppearance?.logo}`}
      homeURL="/"
      organization={organizationRes?.data}
    >
      <RootStyle
        title={`Payment Giving Sadaqah | ${t('app.name')}`}
        favicon={
          appearanceRes?.data?.nonprofitAppearance?.favIcon
            ? `${publicRuntimeConfig.bunny.cdn.urlMedia}/${appearanceRes?.data?.nonprofitAppearance?.favIcon}`
            : null
        }
      >
        <Container maxWidth="lg">
          <MotionContainer initial="initial" open>
            <Stack
              direction="column"
              alignItems="start"
              justifyContent="center"
              spacing={2}
              component={Box}
              sx={{ pt: 4, pb: 6, textAlign: 'left', maxWidth: '75%', mx: 'auto' }}
            >
              <motion.div variants={varFadeIn}>
                <Typography variant="h3">Gift Aid</Typography>
                <Typography variant="body2">
                  Gift Aid allows charities to claim an extra <strong>25p</strong> from the UK
                  government for every
                  <strong> $1</strong> you give.
                </Typography>
              </motion.div>
              <motion.div variants={varFadeIn}>
                <Typography variant="body1" sx={{ color: theme.palette.primary.main }}>
                  Your charity could get{' '}
                  <strong>
                    ${(stripePaymentReqData?.amount ? stripePaymentReqData?.amount * 25 : 0) / 100}
                  </strong>{' '}
                  extra from your <strong>${stripePaymentReqData?.amount}</strong> donation, at no
                  cost to you.
                </Typography>
              </motion.div>
              <Box sx={{ width: '100%', py: 2 }}>
                <Grid container justifyContent="start" alignItems="center" spacing={2}>
                  <Grid item xs={12}>
                    <motion.div variants={varFadeIn}>
                      <Typography variant="body1" sx={{ textAlign: 'left', fontWeight: 600 }}>
                        Do you want to Gift Aid to Giving Sadaqah?
                      </Typography>
                    </motion.div>
                  </Grid>
                  {VALUE_GIVING.map((option, i) => (
                    <Grid item xs={2} key={i}>
                      <motion.div variants={varFadeIn}>
                        <MenuItem
                          selected={option.value === valueGiving}
                          onClick={() => {
                            setValueGiving(option.value);
                          }}
                          sx={{
                            borderRadius: 1,
                            justifyContent: 'center',
                            border: `1px solid ${theme.palette.primary.main}`,
                            '&.Mui-selected': {
                              bgcolor: theme.palette.primary.main,
                              color: theme.palette.primary.contrastText,
                              '&:hover': {
                                bgcolor: theme.palette.primary.main,
                                color: theme.palette.primary.contrastText,
                              },
                            },
                          }}
                          data-cy={`payment-stripe.stripe-donation.button.gift-aid-${option.value}`}
                        >
                          <Typography variant="body1">{option.label}</Typography>
                        </MenuItem>
                      </motion.div>
                    </Grid>
                  ))}
                  {valueGiving === 'no' ||
                  valueUkTax === 'no' ||
                  valueDonationSource === 'no' ||
                  valueProceeds === 'yes' ||
                  valueReceiveBenefit === 'yes' ? (
                    <Grid item xs={12}>
                      <motion.div variants={varFadeIn}>
                        <Box
                          sx={{
                            p: 2,
                            mt: 1,
                            borderRadius: 1,
                            bgcolor: theme.palette.error.lighter,
                            color: theme.palette.error.main,
                          }}
                        >
                          <Typography variant="body1" sx={{ textAlign: 'left' }}>
                            Sorry, your donation is not eligible for Gift Aid
                          </Typography>
                        </Box>
                      </motion.div>
                    </Grid>
                  ) : (
                    <></>
                  )}
                  <Grid item xs={12}>
                    <motion.div variants={varFadeIn}>
                      <Typography variant="body1" sx={{ textAlign: 'left', fontWeight: 800 }}>
                        Please read through the following statements and select the appropriate
                        answers.
                      </Typography>
                    </motion.div>
                  </Grid>
                  <Grid item xs={12}>
                    <motion.div variants={varFadeIn}>
                      <Typography
                        variant="body1"
                        sx={{ textAlign: 'left', fontWeight: 600, pt: 1 }}
                      >
                        I am a UK tax payer *
                      </Typography>
                    </motion.div>
                  </Grid>
                  {VALUE_UK_TAX.map((option, i) => (
                    <Grid item xs={2} key={i}>
                      <motion.div variants={varFadeIn}>
                        <MenuItem
                          selected={option.value === valueUkTax}
                          onClick={() => {
                            setValueUkTax(option.value);
                          }}
                          sx={{
                            borderRadius: 1,
                            justifyContent: 'center',
                            border: `1px solid ${theme.palette.primary.main}`,
                            '&.Mui-selected': {
                              bgcolor: theme.palette.primary.main,
                              color: theme.palette.primary.contrastText,
                              '&:hover': {
                                bgcolor: theme.palette.primary.main,
                                color: theme.palette.primary.contrastText,
                              },
                            },
                          }}
                          data-cy={`payment-stripe.stripe-donation.button.uk-tax-${option.value}`}
                        >
                          <Typography variant="body1">{option.label}</Typography>
                        </MenuItem>
                      </motion.div>
                    </Grid>
                  ))}
                  <Grid item xs={12}>
                    <motion.div variants={varFadeIn}>
                      <Typography
                        variant="body1"
                        sx={{ textAlign: 'left', fontWeight: 600, pt: 1 }}
                      >
                        This donation is my own money. It has not come from anyone else. *
                      </Typography>
                    </motion.div>
                  </Grid>
                  {VALUE_DONATION_SOURCE.map((option, i) => (
                    <Grid item xs={2} key={i}>
                      <motion.div variants={varFadeIn}>
                        <MenuItem
                          selected={option.value === valueDonationSource}
                          onClick={() => {
                            setValueDonationSource(option.value);
                          }}
                          sx={{
                            borderRadius: 1,
                            justifyContent: 'center',
                            border: `1px solid ${theme.palette.primary.main}`,
                            '&.Mui-selected': {
                              bgcolor: theme.palette.primary.main,
                              color: theme.palette.primary.contrastText,
                              '&:hover': {
                                bgcolor: theme.palette.primary.main,
                                color: theme.palette.primary.contrastText,
                              },
                            },
                          }}
                          data-cy={`payment-stripe.stripe-donation.button.source-${option.value}`}
                        >
                          <Typography variant="body1">{option.label}</Typography>
                        </MenuItem>
                      </motion.div>
                    </Grid>
                  ))}
                  <Grid item xs={12}>
                    <motion.div variants={varFadeIn}>
                      <Typography
                        variant="body1"
                        sx={{ textAlign: 'left', fontWeight: 600, pt: 1 }}
                      >
                        This donation is the proceeds from the sale of goods or provision of
                        service. *
                      </Typography>
                    </motion.div>
                  </Grid>
                  {VALUE_PROCEEDS.map((option, i) => (
                    <Grid item xs={2} key={i}>
                      <motion.div variants={varFadeIn}>
                        <MenuItem
                          selected={option.value === valueProceeds}
                          onClick={() => {
                            setValueProceeds(option.value);
                          }}
                          sx={{
                            borderRadius: 1,
                            justifyContent: 'center',
                            border: `1px solid ${theme.palette.primary.main}`,
                            '&.Mui-selected': {
                              bgcolor: theme.palette.primary.main,
                              color: theme.palette.primary.contrastText,
                              '&:hover': {
                                bgcolor: theme.palette.primary.main,
                                color: theme.palette.primary.contrastText,
                              },
                            },
                          }}
                          data-cy={`payment-stripe.stripe-donation.button.source-${option.value}`}
                        >
                          <Typography variant="body1">{option.label}</Typography>
                        </MenuItem>
                      </motion.div>
                    </Grid>
                  ))}
                  <Grid item xs={12}>
                    <motion.div variants={varFadeIn}>
                      <Typography
                        variant="body1"
                        sx={{ textAlign: 'left', fontWeight: 600, pt: 1 }}
                      >
                        I am receiving a benefit from this donation. *
                      </Typography>
                    </motion.div>
                  </Grid>
                  {VALUE_RECEIVE_BENEFIT.map((option, i) => (
                    <Grid item xs={2} key={i}>
                      <motion.div variants={varFadeIn}>
                        <MenuItem
                          selected={option.value === valueReceiveBenefit}
                          onClick={() => {
                            setValueReceiveBenefit(option.value);
                          }}
                          sx={{
                            borderRadius: 1,
                            justifyContent: 'center',
                            border: `1px solid ${theme.palette.primary.main}`,
                            '&.Mui-selected': {
                              bgcolor: theme.palette.primary.main,
                              color: theme.palette.primary.contrastText,
                              '&:hover': {
                                bgcolor: theme.palette.primary.main,
                                color: theme.palette.primary.contrastText,
                              },
                            },
                          }}
                          data-cy={`payment-stripe.stripe-donation.button.source-${option.value}`}
                        >
                          <Typography variant="body1">{option.label}</Typography>
                        </MenuItem>
                      </motion.div>
                    </Grid>
                  ))}
                  <Grid item xs={12}>
                    <motion.div variants={varFadeIn}>
                      <Typography variant="body1" sx={{ textAlign: 'left' }}>
                        I understand that if I pay less Income Tax and/or Capital Gains Tax in the
                        current tax year than the amount of Gift Aid claimed on all my donations it
                        is my responsibility to pay any difference.
                      </Typography>
                    </motion.div>
                  </Grid>
                  <Grid item xs={12}>
                    <motion.div variants={varFadeIn}>
                      <Typography variant="body1" sx={{ textAlign: 'left', pt: 1 }}>
                        Please notify the Charity/CASC if you:
                      </Typography>
                    </motion.div>
                    <motion.div variants={varFadeIn}>
                      <List dense={true}>
                        <ListItem
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'start',
                            alignItems: 'start',
                          }}
                        >
                          <ListItemText>
                            <Typography variant="body1" sx={{ textAlign: 'left' }}>
                              1. want to cancel this declaration
                            </Typography>
                          </ListItemText>
                          <ListItemText>
                            <Typography variant="body1" sx={{ textAlign: 'left' }}>
                              2. change your name or home address
                            </Typography>
                          </ListItemText>
                          <ListItemText>
                            <Typography variant="body1" sx={{ textAlign: 'left' }}>
                              3. no longer pay sufficient tax on your income and/or capital gains
                            </Typography>
                          </ListItemText>
                        </ListItem>
                      </List>
                    </motion.div>
                  </Grid>
                  <Grid item xs={12}>
                    <motion.div variants={varFadeIn}>
                      <Typography variant="body1" sx={{ textAlign: 'left' }}>
                        If you pay Income Tax at the higher or additional rate and want to receive
                        the additional tax relief due to you, you must include all your Gift Aid
                        donations on your Self-Assessment tax return or ask HM Revenue and Customs
                        to adjust your tax code.
                      </Typography>
                    </motion.div>
                  </Grid>
                </Grid>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  spacing={2}
                  component={Box}
                  sx={{ pt: 5 }}
                >
                  <motion.div variants={varFadeIn}>
                    <Button
                      variant="outlined"
                      size="large"
                      data-cy="payment-stripe.stripe-donation.button.back-2"
                      onClick={() => router.back()}
                    >
                      {t('common.back')}
                    </Button>
                  </motion.div>
                  <motion.div variants={varFadeIn}>
                    <Button
                      variant="contained"
                      size="large"
                      data-cy="payment-stripe.stripe-donation.button.donate-now"
                      onClick={submitRequest}
                      disabled={loading}
                    >
                      {t('fundraising.campaign.donate_now')}
                    </Button>
                  </motion.div>
                </Stack>
              </Box>
            </Stack>
          </MotionContainer>
        </Container>
      </RootStyle>
    </GivingSadaqahLayout>
  );
}

export const getServerSideProps: GetServerSideProps<OrganizationHomePageProps> = async ({
  locale,
  req,
  res,
}) => {
  const organization = await getOrganizationFromRequest(req);
  const organizationHomePageProps = await getOrganizationHomePageProps({
    organizationId: organization?.id,
  });
  res.statusCode = organizationHomePageProps?.statusCode;

  return {
    props: {
      ...(await serverSideTranslations(locale!)),
      // Will be passed to the page component as props
      ...organizationHomePageProps,
    },
  };
};
