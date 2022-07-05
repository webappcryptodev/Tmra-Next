import { MotionInView, varFadeInUp } from '@components/animate';
import Page from '@components/Page';
import ExpandMoreIcon from '@mui/icons-material/ExpandMoreOutlined';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import React from 'react';
import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------
const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

export default function GivingSadaqahFAQContent({ organization, appearance }) {
  const blogsList = [
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
    {
      title: 'COMING SOON',
      descriptions: ['Coming Soon'],
    },
  ];

  return (
    <RootStyle
      title={`Giving Sadaqah | FAQ`}
      favicon={
        appearance?.favIcon
          ? `${publicRuntimeConfig.bunny.cdn.urlMedia}/${appearance?.favIcon}`
          : null
      }
      id="move_top"
    >
      <Container maxWidth="lg" sx={{ pt: 12 }} id="obligation">
        <MotionInView variants={varFadeInUp}>
          <Typography
            variant="h2"
            sx={{
              mb: 1,
              textAlign: 'center',
              color: 'primary.main',
            }}
          >
            Frequently Asked Questions
          </Typography>
        </MotionInView>
      </Container>

      <Container maxWidth="lg" sx={{ py: 3 }} id="gallery">
        <MotionInView variants={varFadeInUp}>
          <Grid container spacing={4}>
            {blogsList.map((item, key) => (
              <Grid item key={key} lg={6} md={6} sm={12} xs={12}>
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
