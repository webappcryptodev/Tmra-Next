import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import flashFill from '@iconify/icons-eva/flash-fill';
// next
import NextLink from 'next/link';
// material
import { styled } from '@mui/material/styles';
import { Box, Link, Stack, Button, Container, Typography } from '@mui/material';
// routes
import { PATH_DASHBOARD } from 'src/routes/paths';
//
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight } from '../../animate';
import { useTranslation } from 'next-i18next';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}));

const ContentStyle = styled(props => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left',
  },
}));

const HeroOverlayStyle = styled(motion.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

const HeroImgStyle = styled(motion.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  // margin: 'auto',
  objectFit: 'cover',
  objectPosition: 'right center',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    // width: '100%',
    // height: 'auto',
    // right: '8%',
    // width: 'auto',
    // height: '48vh',
  },
}));
const HeroImgRtlStyle = styled(motion.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  // margin: 'auto',
  objectFit: 'cover',
  objectPosition: 'left center',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    // width: '100%',
    // height: 'auto',
    // right: '8%',
    // width: 'auto',
    // height: '48vh',
  },
}));

// ----------------------------------------------------------------------

export default function LandingHero(): JSX.Element {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        {/* <HeroOverlayStyle
          alt="overlay"
          src="/static/overlay.svg"
          variants={varFadeIn}
        /> */}

        {!isRtl && (
          <HeroImgStyle
            alt="hero"
            src="/static/home/young-pretty-muslim-business-woman-in-white-hijab-medium.jpg"
            variants={varFadeInUp}
          />
        )}
        {isRtl && (
          <HeroImgRtlStyle
            alt="hero"
            src="/static/home/young-pretty-muslim-business-woman-in-white-hijab-medium.jpg"
            variants={varFadeInUp}
          />
        )}

        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography
                variant="h1"
                sx={{
                  color: 'common.white',
                  filter: 'drop-shadow(0rem 0rem 1rem rgba(0, 0, 0, 1.0))',
                }}
              >
                {t('app.hero.title')}
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Typography
                sx={{
                  color: 'common.white',
                  filter: 'drop-shadow(0rem 0rem 1rem rgba(0, 0, 0, 1.0))',
                }}
              >
                {t('app.hero.summary')}
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <NextLink href={PATH_DASHBOARD.root}>
                <Button
                  size="large"
                  variant="contained"
                  startIcon={<Icon icon={flashFill} width={20} height={20} />}
                >
                  {t('app.hero.cta_start_free')}
                </Button>
              </NextLink>
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
