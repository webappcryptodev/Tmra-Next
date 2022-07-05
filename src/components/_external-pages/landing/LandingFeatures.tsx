// material
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Card, Container, Typography, useMediaQuery } from '@mui/material';
//
import { varFadeInUp, MotionInView, varFadeInDown } from '../../animate';
import { useTranslation } from 'next-i18next';
// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: '/static/icons/landing/home/5929214_avatar_doctor_health_hospital_man_icon.svg',
    titleKey: 'pages.home.hero02-sub-1',
    descriptionKey: 'pages.home.hero02-sub-1.desc',
  },
  {
    icon: '/static/icons/landing/home/7709125_donation_charity_donate_islam_icon.svg',
    titleKey: 'pages.home.hero02-sub-2',
    descriptionKey: 'pages.home.hero02-sub-2.desc',
  },
  {
    icon: '/static/icons/landing/home/4698588_call_communication_help_service_support_icon.svg',
    titleKey: 'pages.home.hero02-sub-3',
    descriptionKey: 'pages.home.hero02-sub-3.desc',
  },
];

const shadowIcon = (color: string) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15),
  },
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity: number) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    maxWidth: 380,
    minHeight: 500,
    margin: 'auto',
    textAlign: 'center',
    padding: theme.spacing(4, 3, 4, 3),
    boxShadow: `-40px 40px 80px 0 ${shadowCard(0.48)}`,
    [theme.breakpoints.up('md')]: {
      boxShadow: 'none',
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    '&.cardLeft': {
      [theme.breakpoints.up('md')]: { marginTop: -40 },
    },
    '&.cardCenter': {
      [theme.breakpoints.up('md')]: {
        marginTop: -80,
        backgroundColor: theme.palette.background.paper,
        boxShadow: `-40px 40px 80px 0 ${shadowCard(0.4)}`,
        '&:before': {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          content: "''",
          margin: 'auto',
          position: 'absolute',
          width: 'calc(100% - 40px)',
          height: 'calc(100% - 40px)',
          borderRadius: theme.shape.borderRadiusMd,
          backgroundColor: theme.palette.background.paper,
          boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`,
        },
      },
    },
  };
});

const CardIconStyle = styled('img')(({ theme }) => ({
  width: 100,
  height: 100,
  margin: 'auto',
  marginBottom: theme.spacing(4),
  filter: shadowIcon(theme.palette.primary.main),
}));

// ----------------------------------------------------------------------

export default function LandingFeatures(): JSX.Element {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const { t } = useTranslation();

  return (
    <RootStyle sx={{ pb: 5 }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 10, md: 25 } }}>
          {/* <MotionInView variants={varFadeInUp}>
            <Typography
              component="p"
              variant="overline"
              sx={{ mb: 2, color: 'text.secondary', textAlign: 'center' }}
            >
              Minimal
            </Typography>
          </MotionInView> */}
          <MotionInView variants={varFadeInDown}>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>
              {t('pages.home.hero02.heading')}
            </Typography>
          </MotionInView>
        </Box>

        <Grid container spacing={isDesktop ? 10 : 5}>
          {CARDS.map((card, index) => (
            <Grid key={card.titleKey} item xs={12} md={4}>
              <MotionInView variants={varFadeInUp}>
                <CardStyle className={''}>
                  <CardIconStyle
                    src={card.icon}
                    alt={t(card.titleKey)}
                    sx={{
                      filter: theme => shadowIcon(theme.palette.info.main),
                    }}
                  />
                  <Typography variant="h5" paragraph>
                    {t(card.titleKey)}
                  </Typography>
                  <Typography sx={{ color: isLight ? 'text.secondary' : 'common.white' }}>
                    {t(card.descriptionKey)}
                  </Typography>
                </CardStyle>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
}
