/* eslint-disable @typescript-eslint/no-explicit-any */
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
  InputAdornment,
  TextField,
  Button,
  Skeleton,
} from '@mui/material';
// components
import Page from '@components/Page';
import Image from '@components/Image';
// layouts
import GivingSadaqahLayout from '@layouts/givingsadaqah';
import MainLayout from '@layouts/main';
// motion
import { motion } from 'framer-motion';
import { MotionContainer, varFadeIn, varWrapEnter, varFadeInRight } from '@components/animate';
//
import { toString } from 'lodash';
//
import {
  OrganizationHomePageProps,
  getOrganizationHomePageProps,
} from '@components/_external-pages/whitelabel/OrganizationHomePage';
import { useAppSelector } from '@redux/hooks';
import { getCookie, checkCookies } from 'cookies-next';
import { app } from '@redux/slices/auth/realm';
import { CombinedError, gql, useQuery } from 'urql';

// ----------------------------------------------------------------------

const PAYMENT_METHOD = [
  {
    value: 'single',
    title: 'Single',
  },
  {
    value: 'regular',
    title: 'Regular',
  },
];

const VALUE_AMOUNT = [
  {
    value: '5',
    title: '5',
    code: 'price_1KsYXTHUWfuuNMSQxGHC7YnP',
  },
  {
    value: '10',
    title: '10',
    code: 'price_1KsYXTHUWfuuNMSQUfjDrFz5',
  },
  {
    value: '15',
    title: '15',
    code: 'price_1KsYXTHUWfuuNMSQWdaGtVEO',
  },
  {
    value: '20',
    title: '20',
    code: 'price_1KsYXTHUWfuuNMSQwMdqsICi',
  },
  {
    value: '50',
    title: '50',
    code: 'price_1KsYXTHUWfuuNMSQFT1tXthi',
  },
  {
    value: '100',
    title: '100',
    code: 'price_1KsYXTHUWfuuNMSQ1Lp84FWf',
  },
];

// ----------------------------------------------------------------------

const FindOneCampaignByCampaignIdDocument = gql`
  query findOneMCampaignsByOrganizationId($campaignId: ObjectId!) {
    campaign(query: { _id: $campaignId }) {
      _id
      organizationId
      title
      createdAt
      updatedAt
      creatorUserId
      updaterUserId
      description
      images
      coverImage
      coverImageIndex
      islamCharityType
      methods
      currencyCode
      amountTarget
      amountProgress
      campaignDescription
      campaignImage
      campaignName
      campaignType
      organizationId
      ownerUserId
      totalDonation
      donorReached
    }
    campaignActivities(query: { campaignId: $campaignId }, sortBy: DATETIME_DESC) {
      datetime
      avatar
      author
      content
      amount
    }
    campaignNotificationReports(query: { campaignId: $campaignId }) {
      title
      description
      campaignPhoto
    }
  }
`;

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// const TextStyle = styled('div')(() => ({
//   fontWeight: 400,
//   fontSize: 14,
//   color: '#666',
// }));

// const NoContentTextStyle = styled('p')(() => ({
//   fontSize: 16,
//   fontWeight: 400,
//   lineHeight: '24px',
//   textAlign: 'center',
//   color: '#666',
//   padding: '0 15px 20px',
//   margin: '1rem 0',
// }));

const HeroRootStyle = styled(motion.div)(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  // backgroundImage: 'url(/static/overlay.svg), url(/static/about/hero.jpg)',
  backgroundImage: 'url(/static/overlay.svg)',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 560,
    padding: 0,
  },
}));

const HeroContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    position: 'absolute',
    bottom: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

export default function GivingSadaqahAmountPage({
  organizationRes,
  appearanceRes,
}: OrganizationHomePageProps) {
  const theme = useTheme();
  const { t } = useTranslation();
  const router = useRouter();
  const currentUser = useAppSelector(state => state.currentUser);
  const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;
  const [campaignId, setCampaignId] = useState<string | null>(null);
  const [valueMethod, setValueMethod] = useState<string | null>('single');
  const [valueAmount, setValueAmount] = useState<string | '0'>('10');
  const [priceCode, setPriceCode] = useState<string | null>('price_1KsYXTHUWfuuNMSQUfjDrFz5');

  let userInfo: any = {};
  if (checkCookies('userInfo')) {
    const tempUserInfo = getCookie('userInfo');
    if (tempUserInfo) userInfo = JSON.parse(tempUserInfo as string);
  }

  const handleSubmit = () => {
    if (typeof window !== 'undefined') {
      const stripePaymentRequest: any = {
        organizationId: organizationRes?.data?._id,
        campaignId: campaignId,
        donorId: userInfo?.id,
        success_url: `${window.location.origin}/payment/success?session_id={CHECKOUT_SESSION_ID}&organizationId=${organizationRes?.data?._id}`,
        cancel_url: `${window.location.origin}${router.asPath}`,
      };

      if (Number(valueAmount) > 0) {
        stripePaymentRequest.price = priceCode;
        if (priceCode === 'price_1L6S60HUWfuuNMSQKWefP6HW') {
          stripePaymentRequest.quantity = Number(valueAmount);
        } else {
          stripePaymentRequest.quantity = '1';
          stripePaymentRequest.amount = Number(valueAmount);
        }

        localStorage.setItem('stripe-payment', JSON.stringify(stripePaymentRequest));
        if (userInfo && userInfo?.id) {
          router.push('/charity/payment');
        } else {
          router.push('/charity/more-info');
        }
      }
    }
  };

  const [campaignRes, reexecuteQuery] = useQuery<{
    campaign: {
      _id: string;
      title: string | undefined;
      campaignImage: string;
      images: [];
      organizationId: string;
      creatorUserId: string;
      amountProgress: string;
      amountTarget: string;
      description: string;
      currencyCode: string;
      coverImage: string;
      islamCharityType: string;
      campaignDescription: string;
    };
    campaignActivities: {
      datetime: Date;
      avatar: string;
      author: string;
      content: string;
      amount: string;
    }[];
    campaignNotificationReports: {
      title: string;
      description: string;
      campaignPhoto: string;
    }[];
  }>({
    query: FindOneCampaignByCampaignIdDocument,
    variables: {
      campaignId: campaignId,
    },
  });

  const { data, fetching, error } = campaignRes;

  useEffect(() => {
    const query = router.query;

    if (!query.cid) {
      router.push('/');
    } else {
      setCampaignId(query.cid as string);

      if (fetching === false && data) {
        (async function fetchCreator() {
          const resp = await app.currentUser?.callFunction('getNonprofitDataDetailCampaign', {
            organizationId: data.campaign.organizationId,
            creatorUserId: data.campaign.creatorUserId,
            campaignId: data.campaign._id,
          });
          console.log('find creator', data.campaign._id);
          console.log('organizationId', data.campaign.organizationId);
          if (resp) {
            // setCreator(resp);
            console.log('resp', resp);
          }
        })();
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (data) {
    console.log('data campaign', data);
  }

  if (organizationRes?.data?._id === '62414373cf00cca3a830814a') {
    return (
      <GivingSadaqahLayout
        backgroundColor="transparent"
        secondColor="secondary.main"
        imgLogoUrl={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${appearanceRes?.data?.nonprofitAppearance?.logo}`}
        homeURL="/"
        organization={organizationRes?.data}
      >
        <RootStyle
          title={`Amount Charity - ${data?.campaign?.title ?? ''} | ${t('app.name')}`}
          favicon={
            appearanceRes?.data?.nonprofitAppearance?.favIcon
              ? `${publicRuntimeConfig.bunny.cdn.urlMedia}/${appearanceRes?.data?.nonprofitAppearance?.favIcon}`
              : null
          }
        >
          {fetching === false && data ? (
            <>
              <HeroRootStyle
                initial="initial"
                animate="animate"
                variants={varWrapEnter}
                sx={{
                  backgroundImage: `url(/static/overlay.svg), url(${publicRuntimeConfig.bunny.cdn.urlMedia}/${data?.campaign?.coverImage}?w=720)`,
                }}
                id="hero_content"
              >
                <Container maxWidth="lg" sx={{ position: 'relative', height: '100%' }}>
                  <HeroContentStyle>
                    <motion.div variants={varFadeInRight}>
                      <Typography
                        variant="h1"
                        sx={{
                          color: 'primary.main',
                          fontWeight: 'fontWeightMedium',
                        }}
                      >
                        {`${data?.campaign?.title ?? ''}`}
                      </Typography>
                    </motion.div>
                    <motion.div variants={varFadeInRight}>
                      <Typography
                        variant="h4"
                        sx={{
                          mt: 5,
                          color: 'common.white',
                          fontWeight: 'fontWeightMedium',
                        }}
                      >
                        {`${
                          data?.campaign?.campaignDescription ?? 'This is description of campaign'
                        }`}
                      </Typography>
                    </motion.div>
                  </HeroContentStyle>
                </Container>
              </HeroRootStyle>
              <Container maxWidth="lg">
                <MotionContainer initial="initial" open>
                  <Grid
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    container
                    spacing={{ xs: 4, md: 6 }}
                    sx={{ pt: 4, pb: 6 }}
                  >
                    <Grid item xs={12} md={6}>
                      <Box sx={{ my: 4, textAlign: 'left' }}>
                        <Typography variant="h4">{data?.campaign?.title}</Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: 'text.secondary',
                          }}
                        >
                          {`${
                            data?.campaign?.campaignDescription ?? 'This is description of campaign'
                          }`}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MotionContainer initial="initial" open>
                        <Stack
                          direction="column"
                          alignItems="flex-start"
                          justifyContent="center"
                          spacing={2}
                          component={Box}
                          sx={{ my: 4 }}
                        >
                          <motion.div variants={varFadeIn}>
                            <Typography variant="h4" sx={{ textAlign: 'left' }}>
                              Make a Donation
                            </Typography>
                          </motion.div>
                          <motion.div variants={varFadeIn}>
                            <Box
                              sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyItems: 'center',
                                justifyContent: 'center',
                                bgcolor: theme.palette.grey[200],
                                p: 2,
                                borderRadius: 1,
                                minWidth: 'auto',
                              }}
                            >
                              {PAYMENT_METHOD.map(option => (
                                <MenuItem
                                  key={option.value}
                                  selected={option.value === valueMethod}
                                  onClick={() => {
                                    setValueMethod(option.value);
                                  }}
                                  sx={{
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: 1,
                                    '&.Mui-selected': {
                                      bgcolor: theme.palette.primary.main,
                                      color: theme.palette.primary.contrastText,
                                      '&:hover': {
                                        bgcolor: theme.palette.primary.main,
                                        color: theme.palette.primary.contrastText,
                                      },
                                    },
                                    '&:first-child': {
                                      marginRight: 2,
                                    },
                                  }}
                                  data-cy={`payment-stripe.stripe-donation.${option.value}-payment`}
                                >
                                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                    {option.title} Payment
                                  </Typography>
                                </MenuItem>
                              ))}
                            </Box>
                          </motion.div>
                          <motion.div variants={varFadeIn}>
                            <Box sx={{ width: '100%', my: 4 }}>
                              <Grid container spacing={3}>
                                {VALUE_AMOUNT.map(option => (
                                  <Grid item xs={12} sm={6} md={4} key={option.value}>
                                    <MenuItem
                                      selected={option.value === valueAmount}
                                      onClick={() => {
                                        setValueAmount(option.value);
                                        setPriceCode(option.code);
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
                                      data-cy={`payment-stripe.stripe-donation.button.${option.value}pound`}
                                    >
                                      <Typography
                                        variant="body1"
                                        sx={{ fontSize: theme.typography.h3, pt: 1 }}
                                      >
                                        £{option.title}
                                      </Typography>
                                    </MenuItem>
                                  </Grid>
                                ))}
                              </Grid>
                            </Box>
                          </motion.div>
                          <motion.div variants={varFadeIn}>
                            <Typography
                              variant="h4"
                              sx={{ textAlign: 'center', textTransform: 'capitalize' }}
                            >
                              Your {valueMethod} Donation Amount
                            </Typography>
                          </motion.div>
                          <motion.div variants={varFadeIn}>
                            <Grid
                              item
                              xs={12}
                              sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                                width: '100%',
                              }}
                            >
                              <TextField
                                sx={{ width: '100%' }}
                                fullWidth
                                type="number"
                                value={valueAmount}
                                onChange={e => {
                                  setValueAmount(e.target.value);
                                  setPriceCode('price_1L6S60HUWfuuNMSQKWefP6HW');
                                }}
                                InputProps={{
                                  inputProps: { min: 1 },
                                  startAdornment: (
                                    <InputAdornment position="start">GBP</InputAdornment>
                                  ),
                                }}
                                data-cy={`payment-stripe.stripe-donation.label.type-amount`}
                              />
                            </Grid>
                          </motion.div>
                          <motion.div variants={varFadeIn}>
                            <Button
                              variant="contained"
                              fullWidth
                              size="large"
                              sx={{ mt: 1 }}
                              onClick={handleSubmit}
                              data-cy={`payment-stripe.stripe-donation.button.make-donation`}
                            >
                              Make Donation
                            </Button>
                          </motion.div>
                        </Stack>
                      </MotionContainer>
                    </Grid>
                  </Grid>
                </MotionContainer>
              </Container>
            </>
          ) : (
            <Skeleton
              variant="rectangular"
              width="100%"
              sx={{ paddingTop: '50%', borderRadius: 2, mt: 4 }}
            />
          )}
        </RootStyle>
      </GivingSadaqahLayout>
    );
  }

  return (
    <MainLayout campaignDetails={false}>
      <RootStyle title={`Amount Charity | ${t('app.name')}`}>
        <Typography variant="h3">{organizationRes?.data?.name}</Typography>
      </RootStyle>
    </MainLayout>
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
