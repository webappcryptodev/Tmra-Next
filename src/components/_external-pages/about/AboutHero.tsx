import RichTrans from '@modules/app/components/RichTrans';
import { Container, Typography } from '@mui/material';
// material
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import React from 'react';
//
import { varFadeInRight, varWrapEnter } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url(/static/overlay.svg), url(/static/about/hero.jpg)',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 560,
    padding: 0,
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    position: 'absolute',
    bottom: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

export default function AboutHero() {
  const { t } = useTranslation();
  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <Container maxWidth="lg" sx={{ position: 'relative', height: '100%' }}>
        <ContentStyle>
          {/* <TextAnimate text="How It Works" sx={{ color: 'primary.main' }} variants={varFadeInRight} /> */}
          {/* <TextAnimate text="How It Works" sx={{ mr: 2 }} /> */}
          {/* <br />
          <Box sx={{ display: 'inline-flex', color: 'common.white' }}>
            <TextAnimate text="we" sx={{ mr: 2 }} />
            <TextAnimate text="are?" />
          </Box> */}
          <motion.div variants={varFadeInRight}>
            <Typography
              variant="h1"
              sx={{
                color: 'primary.main',
                fontWeight: 'fontWeightMedium',
              }}
            >
              {/* How <AppWordmark /> Works */}
              <RichTrans i18nKey="app.how-it-works.hero.title" />
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
              {/* Let&apos;s work together and
              <br /> make greater social impact with <AppWordmark /> */}
              <RichTrans i18nKey="app.how-it-works.hero.summary" />
            </Typography>
          </motion.div>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
