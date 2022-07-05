import React from 'react';
import { MotionInView, varFadeInRight, varWrapEnter, varFadeInUp } from '@components/animate';
import Page from '@components/Page';
// components
import {
  Grid,
  Typography,
  Box,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMoreOutlined';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { CampaignInfo, Appearance } from '@modules/fundraising/Campaign';
import { OrganizationInfoFragment } from '@generated/graphql';
import { getLandingMainPaths } from '@routes/paths';
import { getAccentColor, getButtonColor } from '@utils/theme-colors';
import { useTheme } from '@mui/material';
import { accordionClasses } from '@mui/material/Accordion';

import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(10),
  },
  paddingBottom: theme.spacing(4),
}));

const HeroRootStyle = styled(motion.div)(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url(/static/overlay.svg)',
  position: 'relative',
  height: 400,
  [theme.breakpoints.up('md')]: {
    padding: 0,
  },
}));

const HeroContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  width: '100%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}));

const AccordionStyle = styled(Accordion)(({ theme }) => {
  return {
    [`&.${accordionClasses.root}`]: {
      borderRadius: 0,
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px',
      backgroundColor: '#f6f6f6',
      boxShadow: 'none',
      '& .Mui-expanded': {
        margin: `${theme.spacing(2)},${theme.spacing(0)}`,
      },
      // '& .MuiOutlinedInput-root': {
      //   '&.Mui-focused fieldset': {
      //     // borderColor: '#3fd6eb',
      //     // color: '#3fd6eb',
      //     borderColor: color,
      //     color: color,
      //   },
      // },
    },
  };
});

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

export default function IqamGlobalFAQContent({
  campaigns,
  organization,
  appearance,
}: {
  campaigns?: CampaignInfo[];
  organization?: OrganizationInfoFragment | null;
  appearance?: Appearance | null;
}) {
  const { t } = useTranslation();
  const theme = useTheme();

  const FAQs = [
    {
      title: 'Integrated management systems?',
      descriptions: [
        'We believe that quality is the focal point of our success stories. In order to achieve this goal and provide full confidence to our customers, we provide complete confidence to customers through an integrated management system.',
      ],
    },
    {
      title: 'COMING SOON',
      descriptions: ['Coming Soon'],
    },
    {
      title: 'COMING SOON',
      descriptions: ['Coming Soon'],
    },
    {
      title: 'COMING SOON',
      descriptions: ['Coming Soon'],
    },
    {
      title: 'COMING SOON',
      descriptions: ['Coming Soon'],
    },
    {
      title: 'COMING SOON',
      descriptions: ['Coming Soon'],
    },
    {
      title: 'COMING SOON',
      descriptions: ['Coming Soon'],
    },
  ];

  return (
    <RootStyle
      title={`Ommar | FAQ`}
      id="move_top"
      sx={{ backgroundColor: '#FCFCFC' }}
      favicon={
        organization?.favicon
          ? `${publicRuntimeConfig.bunny.cdn.urlMedia}/${organization?.favicon}`
          : null
      }
    >
      <HeroRootStyle
        initial="initial"
        animate="animate"
        variants={varWrapEnter}
        sx={{
          backgroundImage: `url(${publicRuntimeConfig.bunny.cdn.urlMedia}/${publicRuntimeConfig.bunny.storage.prefix}/organization-cms/61b4794cfe52d41f557f1acc/slider-01-1214006594212724383.png)`,
          height: 400,
        }}
        id="hero_content"
      >
        <Box
          sx={{
            backgroundColor: '#112f54',
            position: 'absolute',
            left: 0,
            top: 0,
            opacity: 0.5,
            width: '100%',
            height: '100%',
          }}
        ></Box>
        <Container maxWidth="lg" sx={{ position: 'relative', height: '100%' }}>
          <HeroContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography
                variant="h1"
                sx={{
                  color: 'common.black',
                  fontWeight: 'fontWeightMedium',
                }}
              >
                Frequently Asked Questions
              </Typography>
            </motion.div>
          </HeroContentStyle>
        </Container>
      </HeroRootStyle>
      <Container maxWidth="lg" sx={{ py: 3 }} id="gallery">
        <MotionInView variants={varFadeInUp}>
          <Grid container columnSpacing={6}>
            {FAQs.map((item, key) => (
              <Grid item key={key} lg={6} md={6} sm={12} xs={12}>
                <AccordionStyle>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'common.black' }} />}
                    aria-controls={`panel${key}-content`}
                    id={`panel${key}-header`}
                    sx={{ flexGrow: 1, display: 'flex' }}
                  >
                    <Typography variant="h6" color="common.black">
                      {item.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack direction="column" spacing={3}>
                      {item.descriptions.map((desc, key) => (
                        <Typography
                          key={key}
                          variant="body2"
                          color="text.secondary"
                          sx={{ borderRight: `2px solid ${getButtonColor(appearance)}` }}
                        >
                          {desc}
                        </Typography>
                      ))}
                    </Stack>
                  </AccordionDetails>
                </AccordionStyle>
              </Grid>
            ))}
          </Grid>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
