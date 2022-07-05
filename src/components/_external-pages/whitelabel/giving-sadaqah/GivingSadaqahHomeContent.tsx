/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  MotionInView,
  varFadeInDown,
  varFadeInRight,
  varFadeInUp,
  varWrapEnter,
} from '@components/animate';
import CampaignList from '@components/fundraising/CampaignList';
import Page from '@components/Page';
// components
import GivingSadaqahLayout from '@layouts/givingsadaqah';
// import GivingSadaqahGivingOptionsContent from '@components/_external-pages/whitelabel/giving-sadaqah/GivingSadaqahOptionsContent';
// import GivingSadaqahOngoingAppeals from '@components/_external-pages/whitelabel/giving-sadaqah/GivingSadaqahOngoingAppeals';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import getConfig from 'next/config';
import React from 'react';
import RuntimeConfigs from '@utils/runtime-configs';
import { useRouter } from 'next/router';
import { getLandingMainPaths } from '@routes/paths';
import CheckoutQuickDonate, { QuickDonateRef } from '@components/checkout/CheckoutQuickDonate';
import axios from 'axios';
import { useAppSelector } from '@redux/hooks';
import Iconify from '@components/Iconify';
import { Icon } from '@iconify/react';
import { useSnackbar } from 'notistack';
import { MIconButton } from '@components/@material-extend';

import { getCookie, checkCookies } from 'cookies-next';

// ----------------------------------------------------------------------

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

const CoverImgStyle = styled('img')(() => ({
  width: '100%',
  height: '20rem',
  objectFit: 'cover',
  borderRadius: '1rem',
}));

const CharityContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 456,
  margin: 'auto',
  overflow: 'hidden',
  padding: theme.spacing(5),
  borderRadius: theme.shape.borderRadiusMd,
  backgroundImage: `linear-gradient(135deg,
    ${theme.palette.primary.main} 0%,
    ${theme.palette.primary.darker} 100%)`,
  [theme.breakpoints.up('md')]: {
    maxWidth: '100%',
    padding: theme.spacing(10),
    textAlign: 'center',
  },
}));

const VALUE_AMOUNT = [
  {
    value: 5,
    title: '£5',
    code: 'price_1KsYXTHUWfuuNMSQxGHC7YnP',
  },
  {
    value: 10,
    title: '£10',
    code: 'price_1KsYXTHUWfuuNMSQUfjDrFz5',
  },
  {
    value: 15,
    title: '£15',
    code: 'price_1KsYXTHUWfuuNMSQWdaGtVEO',
  },
  {
    value: 20,
    title: '£20',
    code: 'price_1KsYXTHUWfuuNMSQwMdqsICi',
  },
  {
    value: 50,
    title: '£50',
    code: 'price_1KsYXTHUWfuuNMSQFT1tXthi',
  },
  {
    value: 100,
    title: '£100',
    code: 'price_1KsYXTHUWfuuNMSQ1Lp84FWf',
  },
];

// ----------------------------------------------------------------------

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

export default function GivingSadaqahHomePage({ campaigns, organization, appearance }) {
  const { t } = useTranslation();
  const router = useRouter();
  // const theme = useTheme();
  const paths = getLandingMainPaths();
  const quickDonateRef = React.useRef<QuickDonateRef>(null);
  const currentUser = useAppSelector(state => state.currentUser);

  const [isLoading, setLoading] = React.useState<boolean>(false);
  // const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const InvolvedList = [
    {
      title: 'Volunteer Program',
      description:
        'You can help us with volunteer contributions rather than monetary giving. Often, such assistance is required for a range of our activities, and can take the form of help in administrative to on-the-ground matters.',
    },
    {
      title: 'Sponsor Program',
      description:
        'From time to time, we operate special appeals, which have fixed cost funding requirements. Sponsorship works particularly well with such appeals, which are not only time-limited, but also have clear and observable deliverables.',
    },
    {
      title: 'Charity Fund',
      description:
        'The Charity Fund is the backbone of Giving Sadaqah, and allows us to meet our philanthropic obligations on a weekly basis. Please donate with whatever you can afford. جزاك ا لله خيرآ',
    },
  ];

  const checkoutQuickDonateAction = async data => {
    if (typeof window !== 'undefined') {
      if (data && data.amount && Number(data.amount) > 0) {
        setLoading(true);
        const path = `${publicRuntimeConfig.tmra.raise.url}/stripe/request`;

        let userInfo: any = {};
        if (checkCookies('userInfo')) {
          const tempUserInfo = getCookie('userInfo');
          if (tempUserInfo) userInfo = JSON.parse(tempUserInfo as string);
        }

        const payload: any = {
          campaignId: '6281d5a19c9f37000bbf5c03',
          organizationId: organization?._id,
          success_url: `${window.location.origin}/payment/success?session_id={CHECKOUT_SESSION_ID}&organizationId=${organization?._id}`,
          cancel_url: `${window.location.origin}${router.asPath}`,
          price: data.code,
          quantity: '1',
          amount: data.amount,
        };
        if (userInfo?.id) payload.donorId = userInfo?.id;
        else if (data.donorId) payload.donorId = data.donorId;

        const res = await axios.post(path, payload);
        if (res.data && res.data.statusCode === 200) {
          if (res.data?.stripeResponse?.url) {
            window.location.href = res.data?.stripeResponse?.url;
          }
        }
      }
    }
  };

  return (
    <GivingSadaqahLayout
      backgroundColor="transparent"
      secondColor="secondary.main"
      imgLogoUrl={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${appearance?.logo}`}
      homeURL="/org/givingsadaqah"
      organization={organization}
    >
      <CheckoutQuickDonate
        ref={quickDonateRef}
        isLoading={isLoading}
        hideInputAmount={true}
        appearance={appearance}
        donateAction={data => checkoutQuickDonateAction(data)}
        donationAmountArr={VALUE_AMOUNT}
        currencyCode="£"
      />
      <RootStyle
        title={`Giving Sadaqah | ${t('app.name')}`}
        favicon={
          appearance?.favIcon
            ? `${publicRuntimeConfig.bunny.cdn.urlMedia}/${appearance?.favIcon}`
            : null
        }
        id="move_top"
      >
        <HeroRootStyle
          initial="initial"
          animate="animate"
          variants={varWrapEnter}
          sx={{
            backgroundImage: `url(/static/overlay.svg), url(${publicRuntimeConfig.bunny.cdn.urlMedia}/${publicRuntimeConfig.bunny.storage.prefix}/organization-cms/62414373cf00cca3a830814a/DSC00847.jpeg)`,
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
                  Giving Sadaqah Foundation
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
                  Providing a collective and measured response for those who have suffered and lost
                  everything through natural disasters, calamities, conflict or other misfortunes
                  would be challenging under any situation, and is much less so when faced by real
                  life situations.
                </Typography>
              </motion.div>
            </HeroContentStyle>
          </Container>
        </HeroRootStyle>

        <Container maxWidth="lg" sx={{ pt: 12, pb: 3 }} id="our_mission">
          <MotionInView variants={varFadeInUp}>
            <Typography
              variant="h2"
              sx={{
                mb: 1,
                textAlign: 'center',
                color: 'primary.main',
              }}
            >
              Rebuild lives with Sadaqah
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Grid container spacing={{ lg: 5, md: 4, sm: 3, xs: 3 }}>
              <Grid item lg={7} md={6} sm={12} xs={12}>
                <Typography
                  sx={{
                    mb: 0,
                    mx: 'auto',
                    maxWidth: 630,
                    color: 'text.secondary',
                  }}
                >
                  To rebuild the lives of those affected, the young in particular, requires a
                  collaborative and co-operative approach between donors and those in need, in order
                  to alleviate their poverty and improve their situation. Such an approach permits
                  us to not only assist in the provision of basic necessities such as water, food
                  and shelter, but also to go further and empower individuals so that they may
                  become self-sufficient through education or other small gifts that make a gigantic
                  difference to their lives. Giving Sadaqah is the key to facilitating such vital
                  transformations.
                </Typography>
              </Grid>
              <Grid item lg={5} md={6} sm={12} xs={12}>
                <Stack direction="column">
                  <Typography variant="h4" color="primary.main">
                    Become a Sponsor. Get Involved.
                  </Typography>
                  <Typography color="text.secondary">
                    One of the easiest ways to support our work is to become a sponsor. Sponsors
                    typically donate a fixed amount per month over an agreed period of time. We can
                    provide the relevant charity tax exemption documents in return for your help.
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </MotionInView>
        </Container>

        <Container maxWidth="lg" sx={{ py: 4 }}>
          <MotionInView variants={varFadeInUp}>
            <Typography
              variant="h2"
              sx={{
                mb: 1,
                textAlign: 'center',
                color: 'primary.main',
              }}
            >
              Our Mission
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Typography
              sx={{
                mb: 6,
                mx: 'auto',
                maxWidth: 630,
                color: 'text.secondary',
                textAlign: 'center',
              }}
            >
              To empower communities to rise from the darkness of poverty and to promote sustainable
              change by providing access to education and welfare by giving sadaqah.
            </Typography>
          </MotionInView>
        </Container>

        <Container maxWidth="lg" sx={{ py: 4 }} id="image_cover">
          <MotionInView variants={varFadeInUp}>
            <CoverImgStyle
              src={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${publicRuntimeConfig.bunny.storage.prefix}/organization-cms/62414373cf00cca3a830814a/DSC00847.jpeg`}
            />
          </MotionInView>
        </Container>

        <Container maxWidth="lg" sx={{ pt: 3 }} id="thumbnail_cover">
          <MotionInView variants={varFadeInUp}>
            <iframe
              style={{ borderRadius: '1rem', minHeight: '535px' }}
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/F5bLeUk8gkU"
              frameBorder="0"
              allowFullScreen={false}
            />
          </MotionInView>
        </Container>
        <Container maxWidth="lg" sx={{ pt: 12 }} id="charity_impact">
          <CharityContentStyle>
            <Box sx={{ color: 'common.white' }}>
              <MotionInView variants={varFadeInDown} sx={{ color: 'common.white', mb: 3 }}>
                <Typography variant="h3">
                  Saving Lives and Empowering Families since 2002
                </Typography>
              </MotionInView>
              <MotionInView variants={varFadeInDown}>
                <Grid container spacing={4} alignItems="center" justifyContent="start">
                  <Grid item xs={12} md={4}>
                    <Box>
                      <Typography variant="h2">5000</Typography>
                      <Typography variant="body1">Children Placed</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box>
                      <Typography variant="h2">£100,000</Typography>
                      <Typography variant="body1">Raised</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box>
                      <Typography variant="h2">4</Typography>
                      <Typography variant="body1">Schools Built</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </MotionInView>
            </Box>
          </CharityContentStyle>
        </Container>
        <Container maxWidth="lg" sx={{ pt: 12 }} id="our_raising">
          <MotionInView variants={varFadeInUp}>
            <Typography
              variant="h2"
              sx={{
                mb: 1,
                textAlign: 'center',
                color: 'primary.main',
              }}
            >
              We’ve Raised over £100,000
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Grid container spacing={{ lg: 5, md: 3, sm: 3, xs: 3 }}>
              <Grid item lg={5} md={6} sm={12} xs={12}>
                <img
                  src={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${publicRuntimeConfig.bunny.storage.prefix}/organization-cms/62414373cf00cca3a830814a/charity-20-splash.png`}
                  alt="charity"
                />
              </Grid>
              <Grid item lg={7} md={6} sm={12} xs={12}>
                <Typography
                  sx={{
                    mx: 'auto',
                    maxWidth: 630,
                    color: 'text.secondary',
                    fontWeight: 'normal',
                    fontSize: { lg: '1.5rem', md: '1rem', sm: '1rem', xs: '1rem' },
                  }}
                >
                  We are grateful for our sponsors and donors, who have shown selfless devotion in
                  supporting our causes. In addition to our educational projects, the money has gone
                  into a diverse range of ventures, from micro-finance loans to well-digging in
                  water-stressed areas.
                </Typography>
              </Grid>
            </Grid>
          </MotionInView>
        </Container>
        <Container maxWidth="lg" sx={{ pt: 12 }} id="campaign_cards">
          <MotionInView variants={varFadeInUp}>
            <ContentStyle sx={{ p: 2, mx: -2 }}>
              <CampaignList
                fetching={false}
                error={null}
                campaigns={campaigns}
                donateArea="hidden"
                hasProgress={true}
                hasShare={true}
                hasRemainingAmount={true}
                hasCollectedAmount={true}
                showSeeMore={false}
                appearance={appearance}
                // hrefFunc={campaign => 'https://ssl.nochex.com/giving_sadaqah'}
                hrefFunc={campaign => paths.campaignDetail(organization!.username!, campaign._id!)}
                customCheckoutAction={campaign => {
                  router.push(`/charity/amount?cid=${campaign?._id}`);
                }}
              />
            </ContentStyle>
          </MotionInView>
        </Container>
        <Container maxWidth="lg" sx={{ pt: 12 }} id="helping_children">
          <MotionInView variants={varFadeInUp}>
            <Typography
              variant="h2"
              sx={{
                mb: 1,
                textAlign: 'center',
                color: 'primary.main',
              }}
            >
              Helping Children All Over
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Grid
              container
              spacing={{ lg: 5, md: 3, sm: 3, xs: 3 }}
              flexDirection={{ lg: 'row', md: 'row', sm: 'column-reverse', xs: 'column-reverse' }}
            >
              <Grid item lg={7} md={6} sm={12} xs={12}>
                <Typography
                  sx={{
                    mx: 'auto',
                    maxWidth: 630,
                    color: 'text.secondary',
                    fontWeight: 'normal',
                    fontSize: { lg: '1.5rem', md: '1rem', sm: '1rem', xs: '1rem' },
                  }}
                >
                  Investing in children’s education is the best approach to uplifting them and their
                  families from the bleakness of poverty. We at Giving Sadaqah recognised this at
                  the outset, and set out to build schools first. Today, we support FREE education
                  for 5000 pupils.
                </Typography>
              </Grid>
              <Grid item lg={5} md={6} sm={12} xs={12}>
                <Box sx={{ maxWidth: '500px' }}>
                  <img
                    src={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${publicRuntimeConfig.bunny.storage.prefix}/organization-cms/62414373cf00cca3a830814a/DSC00847.jpeg`}
                    alt="helping_children"
                  />
                </Box>
              </Grid>
            </Grid>
          </MotionInView>
        </Container>
        <Container maxWidth="lg" sx={{ pt: 12 }} id="involved">
          <MotionInView variants={varFadeInUp}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                textAlign: 'center',
                color: 'primary.main',
              }}
            >
              How You Can Get Involved
            </Typography>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              width="100%"
              sx={{ mb: 2 }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 1,
                  textAlign: 'center',
                  color: 'text.secondary',
                }}
              >
                Call 0800 020 9500 to Donate Or Contact Us to get Involved
              </Typography>
            </Box>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Grid container spacing={4} sx={{ py: 4 }}>
              {InvolvedList.map((item, key) => (
                <Grid key={key} item xs={12} md={4}>
                  <MotionInView variants={varFadeInUp}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography
                          variant="h6"
                          paragraph
                          sx={{
                            mb: '0px',
                            color: 'primary.main',
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ my: '1rem' }}>
                          {item.description}
                        </Typography>
                        {key === InvolvedList.length - 1 && (
                          <Button
                            variant="contained"
                            fullWidth
                            sx={{ color: 'common.white' }}
                            onClick={() =>
                              window.open(
                                'https://givingsadaqah.tmra.io/charity/amount?cid=1',
                                '_blank',
                              )
                            }
                            data-cy="fundraising.home-page.button.donate"
                          >
                            Donate Now
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </MotionInView>
                </Grid>
              ))}
            </Grid>
          </MotionInView>
        </Container>
        {/* <Container maxWidth="lg" id="giving_option">
          <MotionInView variants={varFadeInUp}>
            <GivingSadaqahGivingOptionsContent
              organization={organization}
              appearance={appearance}
            />
          </MotionInView>
        </Container> */}
        {/* <Container maxWidth="lg" id="ongoing_appeals">
          <MotionInView variants={varFadeInUp}>
            <GivingSadaqahOngoingAppeals organization={organization} appearance={appearance} />
          </MotionInView>
        </Container> */}
      </RootStyle>
    </GivingSadaqahLayout>
  );
}
