/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { MotionInView, varFadeInRight, varFadeInUp, varWrapEnter } from '@components/animate';
import CampaignList from '@components/fundraising/CampaignList';
import Page from '@components/Page';
// material
import { client } from '@contexts/RealmUrqlContext';
import {
  FindManyPublishedCampaignsByOrganizationIdDocument,
  FindManyCampaignsByOrganizationIdQuery,
  FindManyCampaignsByOrganizationIdQueryVariables,
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
import { Alert, Button, Grid, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { getLandingMainPaths } from '@routes/paths';
import { getAccentColor, getButtonColor, getHeaderFooterColor } from '@utils/theme-colors';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import RuntimeConfigs from '@utils/runtime-configs';
import { CombinedError } from 'urql';
import GivingSadaqahLayout from '@layouts/givingsadaqah';

// ----------------------------------------------------------------------

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export interface GivingSadaqahCampaignListProps {
  organizationRes: { data: OrganizationInfoFragment | null; error: string | null };
  appearanceRes: { data: GetOrganizationAppearanceQuery | null; error: string | null };
  campaignsRes: { data: FindManyCampaignsByOrganizationIdQuery | null; error: string | null };
  statusCode: number;
}

export default function GivingSadaqahCampaigns({
  organizationRes,
  appearanceRes,
  campaignsRes,
}: GivingSadaqahCampaignListProps) {
  const router = useRouter();
  const { t } = useTranslation();
  const paths = getLandingMainPaths();

  console.debug(
    'Fetched organization by username ',
    router.query.organizationUsername,
    ':',
    organizationRes.data,
  );

  if (organizationRes.error || campaignsRes.error || appearanceRes.error) {
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
          {campaignsRes.error && (
            <Container maxWidth="lg" sx={{ py: 3 }}>
              <Alert severity="error">Error: {campaignsRes.error}</Alert>
            </Container>
          )}
        </RootStyle>
      </MainLayout>
    );
  }

  if (organizationRes.data?.username === 'givingsadaqah') {
    return (
      <GivingSadaqahLayout
        backgroundColor="transparent"
        secondColor="secondary.main"
        imgLogoUrl={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${appearanceRes?.data?.nonprofitAppearance?.logo}`}
        homeURL="/org/givingsadaqah"
        organization={organizationRes?.data}
      >
        <RootStyle
          title={`Giving Sadaqah - Campaigns | ${t('app.name')}`}
          favicon={
            appearanceRes?.data?.nonprofitAppearance?.favIcon
              ? `${publicRuntimeConfig.bunny.cdn.urlMedia}/${appearanceRes?.data?.nonprofitAppearance?.favIcon}`
              : null
          }
          id="move_top"
        >
          <Container maxWidth="lg" sx={{ py: 3, mb: 4 }}>
            <Typography variant="h3" sx={{ mb: 2 }}>
              {t('menu.campaigns')}
            </Typography>
            <MotionInView variants={varFadeInUp}>
              <CampaignList
                fetching={false}
                error={null}
                campaigns={campaignsRes.data!.campaigns.map(it => it!)}
                donateArea="hidden"
                hasProgress={true}
                hasShare={true}
                hasRemainingAmount={true}
                hasCollectedAmount={true}
                showSeeMore={false}
                appearance={appearanceRes!.data!.nonprofitAppearance}
                // hrefFunc={campaign => 'https://ssl.nochex.com/giving_sadaqah'}
                hrefFunc={campaign =>
                  paths.campaignDetail(organizationRes!.data!._id, campaign._id!)
                }
                customCheckoutAction={campaign => {
                  router.push(`/charity/amount?cid=${campaign?._id}`);
                }}
              />
            </MotionInView>
          </Container>
        </RootStyle>
      </GivingSadaqahLayout>
    );
  }

  return (
    <WhitelabelLayout
      backgroundColor={getHeaderFooterColor(appearanceRes.data?.nonprofitAppearance)}
      secondColor={appearanceRes.data?.nonprofitAppearance?.secondaryColor}
      imgLogoUrl={
        appearanceRes.data?.nonprofitAppearance?.logo &&
        appearanceRes.data?.nonprofitAppearance?.logo != ''
          ? `${publicRuntimeConfig.bunny.cdn.urlMedia}/${appearanceRes.data?.nonprofitAppearance?.logo}`
          : `${publicRuntimeConfig.bunny.cdn.urlMedia}/${organizationRes.data?.favicon}`
      }
    >
      <RootStyle title={`${organizationRes.data?.name} | ${t('app.name')}`} id="move_top">
        {organizationRes.error && (
          <Container maxWidth="lg" sx={{ py: 3 }}>
            <Alert severity="error">Error: {organizationRes.error}</Alert>
          </Container>
        )}
        {campaignsRes.error && (
          <Container maxWidth="lg" sx={{ py: 3 }}>
            <Alert severity="error">Error: {campaignsRes.error}</Alert>
          </Container>
        )}
        <Container maxWidth="lg" sx={{ py: 3 }}>
          <Typography variant="h3">{organizationRes.data?.name}</Typography>
        </Container>
      </RootStyle>
    </WhitelabelLayout>
  );
}

export async function getGivingSadaqahCampaignsProps({
  organizationUsername,
  organizationId,
}: {
  organizationUsername?: string;
  organizationId?: string;
}): Promise<GivingSadaqahCampaignListProps> {
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

  const campaignsRes = await client
    .query<FindManyCampaignsByOrganizationIdQuery, FindManyCampaignsByOrganizationIdQueryVariables>(
      FindManyPublishedCampaignsByOrganizationIdDocument,
      {
        organizationId: organizationData?._id ?? '',
      },
    )
    .toPromise();
  if (campaignsRes.error) {
    statusCode = 500;
    console.error(
      `Error get organization campaigns for ${organizationData?._id}: ${campaignsRes.error.message}`,
      campaignsRes.error,
    );
  } else {
    console.debug(
      `Got campaigns for ${organizationData?._id}. Count: ${campaignsRes.data?.campaigns?.length} campaigns`,
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
    campaignsRes: { data: campaignsRes.data ?? null, error: campaignsRes.error?.message ?? null },
  };
}
