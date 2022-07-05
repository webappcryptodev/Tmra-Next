/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  MotionInView,
  varFadeInRight,
  varFadeInUp,
  varWrapEnter,
  varFadeInDown,
} from '@components/animate';
import Page from '@components/Page';
// components
import IqamLayout from '@layouts/iqamglobal';
import {
  Grid,
  Typography,
  Stack,
  Box,
  Card,
  Divider,
  Button,
  CardContent,
  Snackbar,
  Alert,
} from '@mui/material';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import React from 'react';
import config from '@configuration';
import Image from '@components/Image';
//
// import NotificationLabel from './NotificationLabel';
import CampaignInsights from './CampaignInsights';
// import CarouselBanner from './CarouselBanner';

//
import { CampaignInfo, Appearance } from '@modules/fundraising/Campaign';
import { GetOrganizationAppearanceQuery, OrganizationInfoFragment } from '@generated/graphql';
import { getLandingMainPaths } from '@routes/paths';
import { getAccentColor, getButtonColor } from '@utils/theme-colors';
import CampaignCard from './CampaignCard';
import { useTheme } from '@mui/material';
import CampaignList from '@components/fundraising/CampaignList';
import CheckoutQuickDonate, { QuickDonateRef } from '@components/checkout/CheckoutQuickDonate';

import { useRouter } from 'next/router';
import { scroller } from 'react-scroll';
import axios from 'axios';
import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';
import { app } from '@redux/slices/auth/realm';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(10),
  },
  paddingBottom: theme.spacing(4),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

// ----------------------------------------------------------------------

function CampaignsSection({
  campaignCategory,
  hasProgress,
  hasCounter,
  hasRemainingAmount,
  campaigns,
  fetching,
  organizationData,
  appearance,
  setCopiedStatus,
}: {
  campaigns?: CampaignInfo[];
  campaignCategory: string;
  hasProgress?: boolean;
  hasCounter?: boolean;
  hasRemainingAmount?: boolean;
  fetching: boolean;
  organizationData?: OrganizationInfoFragment | null | undefined;
  appearance?: Appearance | null;
  setCopiedStatus?: (isCopied: boolean) => void;
}) {
  const { t } = useTranslation();
  const paths = getLandingMainPaths();

  const [isShowAlert, setShowAlert] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  const postPayment = async (campaign, amount) => {
    try {
      const path = `${publicRuntimeConfig.tmra.fund.url}/v1/paytabs/request`;

      const paymentData = {
        organizationId: organizationData?._id,
        campaignId: campaign._id,
        campaignTitle: campaign.title,
        amount: amount.toString(),
        userId: app.currentUser!.id,
        type: 'item',
        currency: campaign.currencyCode,
      };
      const { data } = await axios.post(path, paymentData);
      window.open(data.data.redirect_url, '_blank');
    } catch (error: any) {
      let errMsg = 'Sorry! but something went wrong.';
      if (error.response) {
        if (error.response.data && error.response.data.message) {
          errMsg = error.response.data.message;
        }
      }
      setErrorMessage(errMsg);
      setShowAlert(true);
    }
  };

  const onCloseAlert = () => {
    setShowAlert(false);
    setErrorMessage('');
  };

  return (
    <Container maxWidth="lg" id="campaign">
      <Snackbar
        open={isShowAlert}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={2000}
        onClose={onCloseAlert}
      >
        <Alert onClose={onCloseAlert} severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
      <Box sx={{ my: 3 }}>
        {/* <Stack spacing={3} direction="row" justifyContent="space-between" sx={{ mb: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            {t(campaignCategory)}
          </Typography>
        </Stack> */}
        <ContentStyle sx={{ p: 2, mx: -2 }}>
          <CampaignList
            fetching={false}
            error={null}
            campaigns={campaigns}
            donateArea="visible"
            appearance={appearance}
            multipleCheckout={false}
            hrefFunc={campaign => paths.campaignDetail(organizationData!.username!, campaign._id!)}
            // hasMap={true}
            hasProgress={true}
            // hasShare={true}
            // hasGift={true}
            hasInputAmount={true}
            hasRemainingAmount={true}
            // hasCart={true}
            hasCollectedAmount={true}
            customDonateAction={(campaign, amount) => postPayment(campaign, amount)}
            setCopiedStatus={val => setCopiedStatus && setCopiedStatus(val)}
          />
        </ContentStyle>
      </Box>
    </Container>
  );
}

function MainOurStory({ appearance }: { appearance?: GetOrganizationAppearanceQuery | null }) {
  const { t } = useTranslation();
  const paths = getLandingMainPaths();
  const theme = useTheme();
  const story = [
    {
      title: '01',
      description: appearance?.nonprofitAppearance?.detailStory1,
    },
    {
      title: '02',
      description: appearance?.nonprofitAppearance?.detailStory2,
    },
    {
      title: '03',
      description: appearance?.nonprofitAppearance?.detailStory3,
    },
  ];
  return (
    <>
      <Container maxWidth="lg" sx={{ pt: 6 }} id="our_story">
        <MotionInView variants={varFadeInRight}>
          <Grid container alignItems="center">
            <Grid item>
              <Typography
                variant="h3"
                sx={{
                  color: getAccentColor(appearance?.nonprofitAppearance),
                }}
              >
                {t('whitelabel.story.heading')}
              </Typography>
            </Grid>
            <Divider
              flexItem
              sx={{
                backgroundColor: getAccentColor(appearance?.nonprofitAppearance),
                width: '0.5rem',
                mx: '1rem',
              }}
            />
            <Grid item>
              <Typography variant="body2">
                {appearance?.nonprofitAppearance?.ourStory ?? ''}
              </Typography>
            </Grid>
          </Grid>
        </MotionInView>
        <Grid container alignItems="start" spacing={3} sx={{ py: 2 }}>
          {story.map((value, index) => (
            <Grid key={index} item xs={12} md={4}>
              <MotionInView variants={varFadeInUp}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography
                      variant="h6"
                      paragraph
                      sx={{
                        mb: '0px',
                        color: getAccentColor(appearance?.nonprofitAppearance),
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography variant="body2" sx={{ my: '1rem' }}>
                      {value.description}
                    </Typography>
                    {/* <Button
                      variant="contained"
                      style={{
                        backgroundColor: getButtonColor(appearance?.nonprofitAppearance),
                      }}
                    >
                      {t('whitelabel.story.readStory')}
                    </Button> */}
                  </CardContent>
                </Card>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

function MainWhyUs({ appearance }: { appearance?: GetOrganizationAppearanceQuery | null }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const whyUs = [
    {
      title: '01',
      description: appearance?.nonprofitAppearance?.whySupportUs1,
    },
    {
      title: '02',
      description: appearance?.nonprofitAppearance?.whySupportUs2,
    },
    {
      title: '03',
      description: appearance?.nonprofitAppearance?.whySupportUs3,
    },
  ];
  return (
    <>
      <Container maxWidth="lg" sx={{ py: 4, overflowX: 'hidden' }} id="why_us">
        <MotionInView variants={varFadeInRight}>
          <Grid container alignItems="center">
            <Grid item>
              <Typography
                variant="h3"
                sx={{
                  color: getAccentColor(appearance?.nonprofitAppearance),
                }}
              >
                {t('whitelabel.why.us')}
              </Typography>
            </Grid>
            <Divider
              flexItem
              sx={{
                backgroundColor: getAccentColor(appearance?.nonprofitAppearance),
                width: '0.5rem',
                mx: '1rem',
              }}
            />
            <Grid item>
              <Typography variant="body2">
                {appearance?.nonprofitAppearance?.whyShouldWe ?? ''}
              </Typography>
            </Grid>
          </Grid>
        </MotionInView>
        <Grid container alignItems="start" spacing={4} sx={{ py: '2rem' }}>
          {whyUs.map((value, index) => (
            <Grid key={index} item xs={12} md={4}>
              <MotionInView variants={varFadeInUp}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography
                      variant="h5"
                      paragraph
                      sx={{
                        color: getAccentColor(appearance?.nonprofitAppearance),
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography variant="body2" sx={{ my: '1rem' }}>
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

// ----------------------------------------------------------------------

export default function IqamGlobalHomePage({
  campaigns,
  organization,
  appearance,
}: {
  campaigns?: CampaignInfo[];
  organization?: OrganizationInfoFragment | null;
  appearance?: GetOrganizationAppearanceQuery | null;
}) {
  const { t } = useTranslation();
  const router = useRouter();
  const quickDonateRef = React.useRef<QuickDonateRef>(null);

  const [isCopied, setCopied] = React.useState(false);
  const [isLoading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const { asPath } = router;
    if (asPath && asPath.indexOf('#') > -1) {
      const hash = asPath.split('#');
      if (hash.length && hash[1]) {
        setTimeout(() => {
          scroller.scrollTo(hash[1], {
            offset: -100,
          });
        }, 1000);
      }
    }
  }, [router]);

  const checkoutQuickDonateAction = async data => {
    if (data && data.amount && Number(data.amount) > 0) {
      setLoading(true);
      const path = `${publicRuntimeConfig.tmra.fund.url}/v1/paytabs/request`;
      const payload = {
        organizationId: organization?._id,
        campaignId: '',
        campaignTitle: '',
        amount: data.amount.toString(),
        userId: app.currentUser!.id,
        type: 'item',
      };

      const response = await axios.post(path, payload);
      setLoading(false);
      if (quickDonateRef.current) {
        quickDonateRef.current.setPaytabsUrl(response.data.data.redirect_url);
        quickDonateRef.current.setTransRef(response.data.data.tran_ref);
      }
    }
  };

  return (
    <IqamLayout
      organization={organization}
      imgLogoUrl={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${appearance?.nonprofitAppearance?.logo}`}
    >
      <CheckoutQuickDonate
        ref={quickDonateRef}
        isLoading={isLoading}
        appearance={appearance?.nonprofitAppearance}
        donateAction={data => checkoutQuickDonateAction(data)}
      />
      <RootStyle
        title={`Ommar | ${t('app.name')}`}
        id="move_top"
        sx={{ backgroundColor: '#FCFCFC' }}
        favicon={
          organization?.favicon
            ? `${publicRuntimeConfig.bunny.cdn.urlMedia}/${organization?.favicon}`
            : null
        }
      >
        {appearance?.nonprofitAppearance?.mainImageUrl && (
          <Image
            src={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${appearance?.nonprofitAppearance?.mainImageUrl}`}
            alt="banner"
          />
        )}
        {(appearance?.nonprofitAppearance?.detailStory1 ||
          appearance?.nonprofitAppearance?.detailStory2 ||
          appearance?.nonprofitAppearance?.detailStory3) && (
          <MainOurStory appearance={appearance} />
        )}
        {appearance?.nonprofitAppearance?.videoUrl && (
          <Container maxWidth="lg" sx={{ pt: 3 }} id="thumbnail_cover">
            <MotionInView variants={varFadeInUp}>
              <iframe
                style={{ borderRadius: '1rem', minHeight: '535px' }}
                width="100%"
                height="100%"
                src={appearance?.nonprofitAppearance?.videoUrl}
                frameBorder="0"
                allowFullScreen={false}
              />
            </MotionInView>
          </Container>
        )}
        <CampaignsSection
          campaignCategory="Campaigns"
          fetching={false}
          hasProgress={true}
          hasRemainingAmount={true}
          organizationData={organization}
          campaigns={campaigns}
          setCopiedStatus={val => setCopied(val)}
          appearance={appearance?.nonprofitAppearance}
        />
        <CampaignInsights
          totalAmount="1200"
          totalCount="112"
          totalDonors="150"
          totalCampaign="24"
          fetching={false}
        />
        {(appearance?.nonprofitAppearance?.whySupportUs1 ||
          appearance?.nonprofitAppearance?.whySupportUs2 ||
          appearance?.nonprofitAppearance?.whySupportUs3) && <MainWhyUs appearance={appearance} />}
        {appearance?.nonprofitAppearance?.secondaryImage && (
          <MotionInView variants={varFadeInUp}>
            <Image
              src={appearance?.nonprofitAppearance?.secondaryImage}
              alt={appearance?.organization?.username}
            />
          </MotionInView>
        )}
        <Snackbar
          open={isCopied}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          autoHideDuration={2000}
          onClose={() => setCopied(false)}
        >
          <Alert onClose={() => setCopied(false)} severity="success">
            Copied
          </Alert>
        </Snackbar>
      </RootStyle>
    </IqamLayout>
  );
}
