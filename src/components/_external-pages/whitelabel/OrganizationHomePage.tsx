import { MotionInView, varFadeInRight, varFadeInUp, varWrapEnter } from '@components/animate';
import CampaignList from '@components/fundraising/CampaignList';
import Page from '@components/Page';
// material
import {
  MainCharityNumbers,
  MainImage,
  MainOurStory,
  MainWhyUs,
} from '@components/_external-pages/whitelabel';
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
// components
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
import React, { useEffect } from 'react';
import RuntimeConfigs from '@utils/runtime-configs';
import { CombinedError } from 'urql';
import GivingSadaqahHomeContent from './giving-sadaqah/GivingSadaqahHomeContent';
import IqamGlobalHomePage from './iqamglobal/IqamGlobalHomeContent';

// ----------------------------------------------------------------------

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

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

export interface OrganizationHomePageProps {
  organizationRes: { data: OrganizationInfoFragment | null; error: string | null };
  appearanceRes: { data: GetOrganizationAppearanceQuery | null; error: string | null };
  campaignsRes: { data: FindManyCampaignsByOrganizationIdQuery | null; error: string | null };
  statusCode: number;
}

export default function OrganizationHomePage({
  organizationRes,
  appearanceRes,
  campaignsRes,
}: OrganizationHomePageProps) {
  const { t } = useTranslation();
  const router = useRouter();
  const paths = getLandingMainPaths();
  console.debug(
    'Fetched organization by username ',
    router.query.organizationUsername,
    ':',
    organizationRes.data,
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const coverUrl = organizationRes.data?.aboutPicture
    ? `${publicRuntimeConfig.bunny.cdn.urlMedia}/${organizationRes.data?.aboutPicture}?w=640`
    : undefined;

  useEffect(() => {
    const organizationName = router.query.organizationUsername;
    const orgResdata = organizationRes.data?.username;

    organizationName
      ? localStorage.setItem('organizationCampaign', JSON.stringify(organizationName))
      : localStorage.setItem('organizationCampaign', JSON.stringify(orgResdata));

    //setOrganizationId
    localStorage.setItem('organizationId', organizationRes?.data?._id);
  }, [
    organizationRes.data?._id,
    organizationRes.data?.username,
    router.query.organizationUsername,
  ]);

  const hasThemeColor = {
    ...organizationRes.data,
    defaultThemeColor: '', // add default theme color properties for the organization database
  };

  // implement for some organization username
  if (hasThemeColor.username === 'duniaanakalam') {
    hasThemeColor.defaultThemeColor = 'warning.main';
  } else if (hasThemeColor.username === 'iqamglobal') {
    hasThemeColor.defaultThemeColor = 'error.main';
  }

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

  // WORKAROUND: Temporary treatment to deliver prod before Ramadhan 2022
  if (organizationRes.data?.username === 'givingsadaqah') {
    return (
      <GivingSadaqahHomeContent
        campaigns={campaignsRes.data?.campaigns?.map(it => it!)}
        organization={organizationRes.data}
        appearance={appearanceRes.data?.nonprofitAppearance}
      />
    );
  }

  // for Iqam Global
  if (organizationRes.data?.username === 'iqamglobal') {
    return (
      <IqamGlobalHomePage
        campaigns={campaignsRes.data?.campaigns?.map(it => it!)}
        organization={organizationRes.data}
        appearance={appearanceRes.data}
      />
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
        {appearanceRes.data?.nonprofitAppearance?.mainImageUrl && (
          <HeroRootStyle
            initial="initial"
            animate="animate"
            variants={varWrapEnter}
            sx={{
              backgroundImage: appearanceRes.data?.nonprofitAppearance?.mainImageUrl
                ? `url(/static/overlay.svg), url(${appearanceRes.data?.nonprofitAppearance?.mainImageUrl})`
                : 'url(/static/overlay.svg)',
            }}
            id="hero_content"
          >
            <Container maxWidth="lg" sx={{ position: 'relative', height: '100%' }}>
              <HeroContentStyle>
                <motion.div variants={varFadeInRight}>
                  <Typography
                    variant="h1"
                    sx={{
                      color: getAccentColor(appearanceRes.data?.nonprofitAppearance),
                      fontWeight: 'fontWeightMedium',
                    }}
                  >
                    {organizationRes.data?.name}
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
                    {organizationRes.data?.organizationProfile}
                  </Typography>
                </motion.div>
              </HeroContentStyle>
            </Container>
          </HeroRootStyle>
        )}

        {(appearanceRes.data?.nonprofitAppearance?.detailStory1 ||
          appearanceRes.data?.nonprofitAppearance?.detailStory2 ||
          appearanceRes.data?.nonprofitAppearance?.detailStory3) && (
          <MainOurStory appearance={appearanceRes.data?.nonprofitAppearance} />
        )}
        {appearanceRes.data?.nonprofitAppearance?.mainImageUrl && (
          <MainImage image={appearanceRes.data?.nonprofitAppearance?.mainImageUrl} />
        )}
        {appearanceRes.data?.nonprofitAppearance?.videoUrl && (
          <Container maxWidth="lg" sx={{ pt: 3 }} id="thumbnail_cover">
            <MotionInView variants={varFadeInUp}>
              <iframe
                style={{ borderRadius: '1rem', minHeight: '535px' }}
                width="100%"
                height="100%"
                src={appearanceRes.data?.nonprofitAppearance?.videoUrl}
                frameBorder="0"
                allowFullScreen={false}
              />
            </MotionInView>
          </Container>
        )}
        <Container maxWidth="lg" sx={{ pt: 3 }} id="campaign_cards">
          <MotionInView variants={varFadeInUp}>
            <ContentStyle sx={{ p: 2, mx: -2 }}>
              <CampaignList
                fetching={false}
                error={campaignsRes.error}
                campaigns={campaignsRes.data?.campaigns?.map(it => it!)}
                donateArea="hidden"
                appearance={appearanceRes.data?.nonprofitAppearance ?? undefined}
                hrefFunc={campaign =>
                  paths.campaignDetail(organizationRes.data!.username!, campaign._id!)
                }
                hasMap={false}
                hasProgress={true}
                hasShare={true}
                hasGift={false}
                hasInputAmount={true}
                hasRemainingAmount={true}
                hasCart={true}
                hasCollectedAmount={true}
              />
            </ContentStyle>
          </MotionInView>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item sx={{ pt: 4 }}>
              <MotionInView variants={varFadeInUp}>
                <Button
                  variant="outlined"
                  size="large"
                  style={{
                    color: '#fff',
                    borderColor: getButtonColor(appearanceRes.data?.nonprofitAppearance),
                    backgroundColor: getButtonColor(appearanceRes.data?.nonprofitAppearance),
                  }}
                >
                  {t('whitelabel.button.explore')}
                </Button>
              </MotionInView>
            </Grid>
          </Grid>
        </Container>
        <MainCharityNumbers
          defaultCurrency={organizationRes?.data?.defaultCurrency}
          appereance={appearanceRes.data?.nonprofitAppearance}
        />
        {(appearanceRes.data?.nonprofitAppearance?.whySupportUs1 ||
          appearanceRes.data?.nonprofitAppearance?.whySupportUs2 ||
          appearanceRes.data?.nonprofitAppearance?.whySupportUs3) && (
          <MainWhyUs appearance={appearanceRes.data?.nonprofitAppearance} />
        )}

        {appearanceRes.data?.nonprofitAppearance?.secondaryImage && (
          <MainImage image={appearanceRes.data?.nonprofitAppearance?.secondaryImage} />
        )}
        {/* {appearanceRes.data?.nonprofitAppearance?.peopleSay && (
          <MainTestimonials appearance={appearanceRes.data?.nonprofitAppearance} />
        )} */}
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
}): Promise<OrganizationHomePageProps> {
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
