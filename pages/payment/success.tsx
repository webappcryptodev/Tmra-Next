//
import { MotionInView, varFadeInUp } from '@components/animate';
// components
import Page from '@components/Page';
// layouts
import LogoOnlyLayout from '@layouts/LogoOnlyLayout';
import { Box, Button, Container, Typography } from '@mui/material';
// material
import { styled } from '@mui/material/styles';
// routes
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import getConfig from 'next/config';
import RouterLink from 'next/link';
import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react';
import RuntimeConfigs from '@utils/runtime-configs';
import { getOrganizationFromRequest } from '@utils/whitelabel';
import {
  OrganizationHomePageProps,
  getOrganizationHomePageProps,
} from '@components/_external-pages/whitelabel/OrganizationHomePage';
import NextLink from 'next/link';
import axios from 'axios';
import { app } from '@redux/slices/auth/realm';
// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
}));

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: '100%',
  position: 'absolute',
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(5, 5, 0),
  },
}));

// ----------------------------------------------------------------------

export default function PaymentSuccess({
  organizationRes,
  appearanceRes,
}: OrganizationHomePageProps) {
  const { t } = useTranslation();
  const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;
  const router = useRouter();
  const { session_id, organizationId } = router.query;
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [customerDetails, setCustomerDetails] = useState<{
    address: {
      city?: string | null;
      country?: string | null;
      line1?: string | null;
      line2?: string | null;
      postal_code?: string | null;
      state?: string | null;
    };
    email: string | null;
    name: string | null;
    phone: string | null;
    tax_exempt: string | null;
    tax_ids: string[] | null;
  } | null>(null);

  const path1 = 'https://0pnncvgvzj.execute-api.ap-south-1.amazonaws.com/dev/v1';
  const path2 = 'https://api.stripe.com/v1';

  useEffect(() => {
    app.currentUser?.functions
      .callFunction('findOnePaymentGateway', {
        organizationId,
      })
      .then(res => {
        setAccessToken(res.apiKey);
      })
      .catch(err => console.log(err.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // call api to update and save donation transactions
  if (session_id && organizationId && accessToken) {
    axios
      .get(
        path1 +
          '/stripe/callback/success?session_id=' +
          session_id +
          '&organizationId=' +
          organizationId,
      )
      .then(res => {
        //console.debug(`GET ${path1} => Response:`, res.data);
        if (res.status === 200) {
          // get customer profile (name) from Stripe session
          axios
            .get(path2 + '/checkout/sessions/' + session_id, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            })
            .then(res => {
              if (res.status === 200) {
                setCustomerDetails(res.data.customer_details);
              } else {
                router.push('/');
              }
            })
            .catch(err => {
              console.debug(err.message);
              router.push('/');
            });
        } else {
          router.push('/');
        }
      })
      .catch(err => {
        console.debug(err.message);
        router.push('/');
      });
  }

  if (organizationRes?.data?._id === '62414373cf00cca3a830814a') {
    return (
      <RootStyle
        title={`Giving Sadaqah | Payment Success`}
        favicon={
          appearanceRes?.data?.nonprofitAppearance?.favIcon
            ? `${publicRuntimeConfig.bunny.cdn.urlMedia}/${appearanceRes?.data?.nonprofitAppearance?.favIcon}`
            : null
        }
        id="move_top"
      >
        <HeaderStyle>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <NextLink href="/" passHref>
              <Box
                component="img"
                src={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${appearanceRes?.data?.nonprofitAppearance?.logo}`}
                sx={{
                  width: 100,
                  height: 50,
                  mr: 4,
                  filter: 'drop-shadow(0rem 0rem 0.5rem rgba(255, 255, 255))',
                  cursor: 'pointer',
                }}
                data-cy="org.home-page.logo"
              />
            </NextLink>
          </Box>
        </HeaderStyle>
        <Container maxWidth="lg" sx={{ pt: 6, pb: 4 }} id="giving_options">
          <MotionInView variants={varFadeInUp}>
            <Box sx={{ textAlign: 'center' }}>
              <Box
                component="img"
                src={'/static/illustrations/payment-success.png'}
                sx={{ mb: 5, mx: 'auto', height: 300 }}
              />

              <Typography variant="h3" gutterBottom>
                جَزَاكُمُ اللهُ خَيْرًا
              </Typography>

              <Typography variant="h3" gutterBottom>
                Dear, {customerDetails && customerDetails.name}
              </Typography>

              <Typography>
                Alhamdulillah, your donation has been sent. May our deeds be accepted by Allah. ️
                آمِيْن
              </Typography>

              <RouterLink href="/">
                <Button size="large" variant="contained" sx={{ mt: 5 }}>
                  Go to Homepage
                </Button>
              </RouterLink>
            </Box>
          </MotionInView>
        </Container>
      </RootStyle>
    );
  }
  return (
    <RootStyle title={`Payment Success | ${t('app.name')}`}>
      <LogoOnlyLayout />

      <Container></Container>
    </RootStyle>
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
