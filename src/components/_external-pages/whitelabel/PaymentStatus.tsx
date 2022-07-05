/* eslint-disable @typescript-eslint/no-unused-vars */
//
import { CheckOutIllustration } from '@assets';
// components
import Page from '@components/Page';
import { client } from '@contexts/RealmUrqlContext';
//
import {
  FindOneOrganizationByIdDocument,
  FindOneOrganizationByIdQuery,
  FindOneOrganizationByIdQueryVariables,
  FindOneOrganizationByUsernameDocument,
  FindOneOrganizationByUsernameQuery,
  FindOneOrganizationByUsernameQueryVariables,
  GetOrganizationAppearanceDocument,
  GetOrganizationAppearanceQuery,
  GetOrganizationAppearanceQueryVariables,
  OrganizationInfoFragment,
} from '@generated/graphql';
import MainLayout from '@layouts/main';
import WhitelabelLayout from '@layouts/whitelabel';
import { Alert, Box, Button, Container, Typography } from '@mui/material';
// material
import { styled } from '@mui/material/styles';
import { app } from '@redux/slices/auth/realm';
import { useTranslation } from 'next-i18next';
import getConfig from 'next/config';
import RouterLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import RuntimeConfigs from '@utils/runtime-configs';
//
import { CombinedError, gql } from 'urql';

// ----------------------------------------------------------------------

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: theme.spacing(16),
  paddingBottom: theme.spacing(6),
}));

// ----------------------------------------------------------------------

const donationStatus = gql`
  query getDonor($donationId: String!) {
    donation_log(query: { _id: $donationId }) {
      donationStatus
    }
  }
`;

type status = {
  donationStatus: string;
};

export interface IPropsPaymentStatus {
  organizationRes: { data: OrganizationInfoFragment | null; error: string | null };
  appearanceRes: { data: GetOrganizationAppearanceQuery | null; error: string | null };
  statusCode: number;
}

export default function PaymentStatus({
  organizationRes,
  appearanceRes,
}: IPropsPaymentStatus): JSX.Element {
  const [email, setEmail] = useState('');
  // const [sent, setSent] = useState(false);
  const { t } = useTranslation();
  // const paths = getLandingMainPaths();
  const [currentStatus, setStatus] = useState<status | null>(null);
  // const [fetchResult, setFetchResult]: any = useState(null);
  const router = useRouter();
  console.log('router', router.query);
  useEffect(() => {
    if (currentStatus === null) {
      app.currentUser
        ?.callFunction('getPaymentStatus', { orderId: router.query.paymentId })
        .then(result => {
          if (!result || !result.donationStatus) {
            router.push('/404');
          }
          setStatus(result);
        })
        .catch(err => {
          router.push('/404');
          console.log(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setStatus]);
  console.log(currentStatus);

  if (organizationRes.error || appearanceRes.error) {
    return (
      <MainLayout campaignDetails={false}>
        <RootStyle title={`${organizationRes.data?.name} | ${t('app.name')}`} id="move_top">
          {organizationRes.error && (
            <Container maxWidth="lg" sx={{ py: 3 }}>
              <Alert severity="error">Error: {organizationRes.error}</Alert>
            </Container>
          )}
          {appearanceRes.error && (
            <Container maxWidth="lg" sx={{ py: 3 }}>
              <Alert severity="error">Error: {appearanceRes.error}</Alert>
            </Container>
          )}
        </RootStyle>
      </MainLayout>
    );
  }

  return (
    <WhitelabelLayout
      backgroundColor={
        appearanceRes.data?.nonprofitAppearance?.primaryColor
          ? appearanceRes.data?.nonprofitAppearance?.primaryColor
          : 'primary.main'
      }
      secondColor={appearanceRes.data?.nonprofitAppearance?.secondaryColor}
      imgLogoUrl={
        appearanceRes.data?.nonprofitAppearance?.logo &&
        appearanceRes.data?.nonprofitAppearance?.logo != ''
          ? `${publicRuntimeConfig.bunny.cdn.urlMedia}/${appearanceRes.data?.nonprofitAppearance?.logo}`
          : `${publicRuntimeConfig.bunny.cdn.urlMedia}/${organizationRes.data?.favicon}`
      }
    >
      <RootStyle title={`${t('pages.login.forgotPassword')} | ${t('app.name')}`}>
        <Container>
          <Box sx={{ maxWidth: 480, mx: 'auto' }}>
            {currentStatus &&
              (currentStatus.donationStatus === 'success' ||
                currentStatus.donationStatus === 'SUCCESS' ||
                currentStatus.donationStatus === 'PAID') && (
                <Box sx={{ textAlign: 'center' }}>
                  <CheckOutIllustration sx={{ mb: 5, mx: 'auto', height: 160 }} />

                  <Typography variant="h3" gutterBottom>
                    Thank you for donating
                  </Typography>
                  <Typography variant="inherit">
                    <strong>Reference Number</strong>
                  </Typography>
                  <Typography variant="inherit">{router.query.paymentId}</Typography>

                  <RouterLink href={`/customers`}>
                    <Button size="large" variant="contained" sx={{ mt: 5 }}>
                      Back to campaign
                    </Button>
                  </RouterLink>
                </Box>
              )}
          </Box>
        </Container>
      </RootStyle>
    </WhitelabelLayout>
  );
}

export async function getOrganizationHomePageProps({
  organizationUsername,
  organizationId,
}: {
  organizationUsername?: string;
  organizationId?: string;
}): Promise<IPropsPaymentStatus> {
  let statusCode = 200;
  let organizationData: OrganizationInfoFragment | null = null;
  let organizationError: CombinedError | null = null;
  if (organizationId != null) {
    console.info('Find one organization by ID ', organizationId);
    const res = await client
      .query<FindOneOrganizationByIdQuery, FindOneOrganizationByIdQueryVariables>(
        FindOneOrganizationByIdDocument,
        { id: organizationId },
      )
      .toPromise();
    organizationData = res.data?.organization ?? null;
    organizationError = res.error ?? null;
  } else if (organizationUsername != null) {
    console.info('Find one organization by username ', organizationUsername);
    const res = await client
      .query<FindOneOrganizationByUsernameQuery, FindOneOrganizationByUsernameQueryVariables>(
        FindOneOrganizationByUsernameDocument,
        { username: organizationUsername! },
      )
      .toPromise();
    organizationData = res.data?.organization ?? null;
    organizationError = res.error ?? null;
  } else {
    throw new Error('One of organizationId or organizationUsername is required');
  }
  if (!organizationData) {
    statusCode = 404;
    console.error(
      `Error find one organization by username=${organizationUsername} or id=${organizationId}`,
      organizationError?.message,
      organizationError?.networkError?.message,
    );
  }

  const appearanceRes = await client
    .query<GetOrganizationAppearanceQuery, GetOrganizationAppearanceQueryVariables>(
      GetOrganizationAppearanceDocument,
      {
        _id: organizationData?._id ?? '',
      },
    )
    .toPromise();
  if (appearanceRes.error) {
    statusCode = 500;
    console.error(
      `Error get organization appearance for ${organizationData?._id}: ${appearanceRes.error.message}`,
      appearanceRes.error,
    );
  } else {
    console.debug(
      `Got appearance for ${organizationData?._id}. favicon=${appearanceRes.data?.nonprofitAppearance?.favIcon} mainImageUrl=${appearanceRes.data?.nonprofitAppearance?.mainImageUrl} logo=${appearanceRes.data?.nonprofitAppearance?.logo}`,
    );
  }

  return {
    statusCode,
    organizationRes: {
      data: organizationData,
      error: organizationError?.message ?? null,
    },
    appearanceRes: {
      data: appearanceRes.data ?? null,
      error: appearanceRes.error?.message ?? null,
    },
  };
}
