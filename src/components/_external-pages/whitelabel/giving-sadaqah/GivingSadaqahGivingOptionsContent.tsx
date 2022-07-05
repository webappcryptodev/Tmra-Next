/* eslint-disable @typescript-eslint/no-unused-vars */
// material
// components
import { MotionInView, varFadeInUp } from '@components/animate';
import Page from '@components/Page';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMoreOutlined';
import { useTranslation } from 'next-i18next';
import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

export default function GivingSadaqahGivingOptionsContent() {
  const { t } = useTranslation();
  const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

  const blogsList = [
    {
      title: 'Choose a Specific Fund or Cause',
      descriptions: [
        'Give Education is the primary reason that Giving Sadaqah exists. However, we also have special appeals running all the time in parallel that could really benefit from your help. Please contact us to find out more',
        'Your use of this website and any dispute arising out of such use of the website is subject to the laws of England, Northern Ireland, Scotland and Wales.',
      ],
    },
    {
      title: 'Give a One-Time Gift',
      descriptions: [
        'A one-time gift, in particular, can benefit special projects such as digging a well, creating a microfinance instrument, buying equipment, furniture or fittings for our schools and mosques, etc. In particular, your annual zakat contribution can be used for such purposes to excellent effect.',
      ],
    },
    {
      title: 'Create a Local Fund',
      descriptions: [
        'Please contact us if you know of or have a particular cause in mind that may benefit from our assistance. Areas that we cover are limited to educational and similar activities that empower local communities to stand on their own feet.',
      ],
    },
    {
      title: 'Volunteer with Us',
      descriptions: [
        'We are always on the look-out for a helping hand. If you have skills as diverse as IT to gardening, and would like to used them to make a world a better place, please get in touch!',
      ],
    },
    {
      title: 'Sponsor a Program',
      descriptions: [
        'Within the general remit of education, you may propose to us a program that you would like to sponsor. Alternatively, contact us to sponsor our special appeals that we have running round the year.',
      ],
    },
    {
      title: 'Start a Fund',
      descriptions: [
        'Similar to sponsoring a program, you may propose to start a fund for a specific appeal to do with education, empowerment, or the general betterment of someone. Please note that such proposals are subject to legal audit before being approved.',
      ],
    },
  ];

  const blogsList2 = [
    {
      title: 'WITH CASH',
      descriptions: [
        'Please contact or visit us if you would like to make a cash donation. Please do not send any cash through postal services.',
      ],
    },
    {
      title: 'BY CHEQUE',
      descriptions: ['All cheques should be made out to “Giving Sadaqah” and drawn on a UK bank.'],
    },
    {
      title: 'GIVE ONLINE',
      descriptions: [
        'You can make an online donation at any time using your credit or debit card by clicking on the donate button',
      ],
    },
  ];

  return (
    <RootStyle
      title={`Giving Sadaqah | Giving Options`}
      favicon={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${publicRuntimeConfig.bunny.storage.prefix}organization-cms/62414373cf00cca3a830814a/GS-Logo_OriginalAdjustNoOrg-120y.png`}
      id="move_top"
    >
      <Container maxWidth="lg" sx={{ pt: 12 }} id="our_story">
        <MotionInView variants={varFadeInUp}>
          <Typography
            variant="h2"
            sx={{
              mb: 1,
              textAlign: 'center',
              color: 'primary.main',
            }}
            data-cy="org.givingoptions-page.h2.giving-options"
          >
            Giving Options
          </Typography>
        </MotionInView>
      </Container>
      <Container maxWidth="lg" sx={{ py: 3 }} id="gallery">
        <MotionInView variants={varFadeInUp}>
          <Grid container spacing={4}>
            {blogsList.map((item, key) => (
              <Grid item key={key} lg={12} md={12} sm={12} xs={12}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon color="primary" />}
                    aria-controls={`panel${key}-content`}
                    id={`panel${key}-header`}
                  >
                    <Typography variant="h4" color="primary.main">
                      {item.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack direction="column" spacing={3}>
                      {item.descriptions.map((desc, key) => (
                        <Typography key={key} variant="body1" color="text.secondary">
                          {desc}
                        </Typography>
                      ))}
                    </Stack>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>
        </MotionInView>
      </Container>
      <Container maxWidth="lg" sx={{ py: 3 }} id="gallery">
        <MotionInView variants={varFadeInUp}>
          <Grid container spacing={4}>
            {blogsList2.map((item, key) => (
              <Grid item key={key} lg={4} md={4} sm={12} xs={12}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon color="primary" />}
                    aria-controls={`panel${key}-content`}
                    id={`panel${key}-header`}
                  >
                    <Typography variant="h4" color="primary.main">
                      {item.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack direction="column" spacing={3}>
                      {item.descriptions.map((desc, key) => (
                        <Typography key={key} variant="body1" color="text.secondary">
                          {desc}
                        </Typography>
                      ))}
                    </Stack>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
