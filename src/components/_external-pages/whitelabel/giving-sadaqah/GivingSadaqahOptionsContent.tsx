/* eslint-disable @typescript-eslint/no-unused-vars */
import { MotionInView, varFadeInUp } from '@components/animate';
import Page from '@components/Page';
// components
import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  styled,
} from '@mui/material';
import Container from '@mui/material/Container';
// import { styled } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMoreOutlined';
import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';

// ----------------------------------------------------------------------
const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

export default function GivingSadaqahOptionsContent({ organization, appearance }) {
  const { t } = useTranslation();
  const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

  const [expanded, setExpanded] = React.useState<boolean | string>(false);

  const givingOptions = [
    {
      dataCy: 'org.givingoptions-page.choose-a-specific-fund',
      title: 'Choose a Specific Fund or Cause',
      desc: 'Give Education is the primary reason that Giving Sadaqah exists. However, we also have special appeals running all the time in parallel that could really benefit from your help. Please contact us to find out more',
    },
    {
      dataCy: 'org.givingoptions-page.give-a-one-time-gift',
      title: 'Give a One-Time Gift',
      desc: 'A one-time gift, in particular, can benefit special projects such as digging a well, creating a microfinance instrument, buying equipment, furniture or fittings for our schools and mosques, etc. In particular, your annual zakat contribution can be used for such purposes to excellent effect.',
    },
    {
      dataCy: 'org.givingoptions-page.local-fund',
      title: 'Create a Local Fund',
      desc: 'Please contact us if you know of or have a particular cause in mind that may benefit from our assistance. Areas that we cover are limited to educational and similar activities that empower local communities to stand on their own feet.',
    },
    {
      dataCy: 'org.givingoptions-page.volunteer-with-us',
      title: 'Volunteer with Us',
      desc: 'We are always on the look-out for a helping hand. If you have skills as diverse as IT to gardening, and would like to used them to make a world a better place, please get in touch!',
    },
    {
      dataCy: 'org.givingoptions-page.sponsor-a-program',
      title: 'Sponsor a Program',
      desc: 'Within the general remit of education, you may propose to us a program that you would like to sponsor. Alternatively, contact us to sponsor our special appeals that we have running round the year.',
    },
    {
      dataCy: 'org.givingoptions-page.start-a-fund',
      title: 'Start a Fund',
      desc: 'Similar to sponsoring a program, you may propose to start a fund for a specific appeal to do with education, empowerment, or the general betterment of someone. Please note that such proposals are subject to legal audit before being approved.',
    },
  ];

  const givingOptionsHorizontal = [
    {
      dataCy: 'org.givingoptions-page.with-cash',
      title: 'WITH CASH',
      desc: (
        <Typography variant="body1" color="text.secondary">
          Please contact or visit us if you would like to make a cash donation. Please do not send
          any cash through postal services.
        </Typography>
      ),
    },
    {
      dataCy: 'org.givingoptions-page.by-cheque',
      title: 'BY CHEQUE',
      desc: (
        <Typography variant="body1" color="text.secondary">
          All cheques should be made out to “Giving Sadaqah” and drawn on a UK bank.
        </Typography>
      ),
    },
    {
      dataCy: 'org.givingoptions-page.give-online',
      title: 'GIVE ONLINE',
      desc: (
        <Typography variant="body1" color="text.secondary">
          {`You can make an online donation at any time using your credit or debit card by clicking `}
          <Typography
            component="a"
            href="https://secure.nochex.com/charity/default.aspx?cID=F50CFBCB189E"
            target="_blank"
          >
            here
          </Typography>
        </Typography>
      ),
    },
  ];

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <RootStyle
      title={`Giving Sadaqah | Giving Options`}
      favicon={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${publicRuntimeConfig.bunny.storage.prefix}organization-cms/62414373cf00cca3a830814a/GS-Logo_OriginalAdjustNoOrg-120y.png`}
      id="move_top"
    >
      <Container maxWidth="lg" sx={{ pt: 6, pb: 6, mb: 6 }} id="giving_options">
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

        <MotionInView variants={varFadeInUp}>
          <Grid container spacing={4} mb={4}>
            {givingOptions.map((option, key) => (
              <Grid item key={key} lg={12}>
                <Accordion
                  expanded={expanded === `panel${key}`}
                  onChange={handleChange(`panel${key}`)}
                  sx={{
                    backgroundColor: `${expanded === `panel${key}` ? 'common.white' : '#f4f4f4'}`,
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'common.black' }} />}
                    aria-controls={`panel${key}-content`}
                    id={`panel${key}-header`}
                    data-cy={option.dataCy}
                  >
                    <Typography
                      variant="subtitle1"
                      color={`${expanded === `panel${key}` ? 'common.black' : '#666'}`}
                    >
                      {option.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1" color="text.secondary">
                      {option.desc}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>
          <Container sx={{ paddingY: 8, borderRadius: 1.25, backgroundColor: '#f4f4f4' }}>
            <Grid container spacing={5}>
              {givingOptionsHorizontal.map((item, key) => (
                <Grid item key={key} lg={4} md={4} sm={12} xs={12}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon color="primary" />}
                      aria-controls={`panel-horizontal${key}-content`}
                      id={`panel-horizontal${key}-header`}
                      data-cy={item.dataCy}
                    >
                      <Typography variant="subtitle1" color="primary.main">
                        {item.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>{item.desc}</AccordionDetails>
                  </Accordion>
                </Grid>
              ))}
            </Grid>
          </Container>
          {/* <Divider variant="middle" /> */}
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
