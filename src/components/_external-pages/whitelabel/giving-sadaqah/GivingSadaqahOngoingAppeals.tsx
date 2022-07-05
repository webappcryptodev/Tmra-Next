/* eslint-disable @typescript-eslint/no-unused-vars */
import { MotionInView, varFadeInUp } from '@components/animate';
// import Page from '@components/Page';
// components
import { Grid, Typography, Stack, Box, Divider, Button } from '@mui/material';
import Container from '@mui/material/Container';
// import { styled } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';
import React from 'react';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMoreOutlined';
import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';

// ----------------------------------------------------------------------

// const RootStyle = styled(Page)(({ theme }) => ({
//   paddingTop: theme.spacing(8),
//   [theme.breakpoints.up('md')]: {
//     paddingTop: theme.spacing(11),
//   },
// }));

// ----------------------------------------------------------------------

export default function GivingSadaqahOngoingAppealsContent({ organization, appearance }) {
  const { t } = useTranslation();
  const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

  const [expanded, setExpanded] = React.useState<boolean | string>(false);

  const campaignsList = [
    {
      title: 'Ongoing Campaign 1 : Digging Wells',
      subtitle: 'Water is Life!',
      desc: 'Giving Sadaqah is always looking for funds to dig wells in remote areas of the Somali countryside. At the moment, we have an urgent need to dig a well at Gargaar. Typically, we require about £2500 to be able to dig a well that is self-sustaining.',
      videoURL: 'https://www.youtube.com/embed/gkRHePh_2Ts',
      donate_link: 'https://givingsadaqah.tmra.io/charity/amount?cid=1',
    },
    {
      title: 'Ongoing Campaign 2 : Providing Microfinance Loans',
      subtitle: 'Microfinance loans to assist the needy',
      desc: 'It is amazing what the needy can accomplish with amounts that may appear to be paltry to the rest of us. We help people with that little nudge that they need in life to be able to stand on their own feet. Typically, we require about £400 to kickstart someone’s regular livelihood that enables them to live a normal life',
      videoURL: 'https://www.youtube.com/embed/gkRHePh_2Ts',
      donate_link: 'https://givingsadaqah.tmra.io/charity/amount?cid=1',
    },
  ];

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box id="move_top">
      <Container maxWidth="lg" sx={{ mb: 6 }} id="cause_support">
        <MotionInView variants={varFadeInUp}>
          <Typography
            variant="h2"
            sx={{
              mb: 1,
              textAlign: 'center',
              color: 'primary.main',
            }}
            data-cy="org.ongoingappeals-page.h2.causes"
          >
            THE CAUSES WE SUPPORT
          </Typography>
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <Stack direction="column" spacing={2}>
            <Typography variant="body1" color="text.secondary">
              We support a variety of causes to help the poor. Some are ongoing, such as our drive
              to raise money for digging wells in water-stressed areas, and microfinance for lending
              to poor and single-parent families. Other drives are periodic and time-limited: for
              instance we will raise money for a specific case of an individual or group whose
              suffering may be alleviated, or their dreams realised, by your generous contributions.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              On this page, you will find campaigns that we run for such types of causes.
            </Typography>
          </Stack>
        </MotionInView>
      </Container>

      <Container maxWidth="lg" sx={{ pb: 6, mb: 3 }} id="cause_support">
        <MotionInView variants={varFadeInUp}>
          {campaignsList.map((campaign, key) => (
            <Box key={key}>
              <Grid container spacing={4} sx={{ marginY: 6 }}>
                <Grid item lg={5} md={6} sm={12} xs={12}>
                  <Box sx={{ paddingTop: '56.25%', position: 'relative', width: '100%' }}>
                    <iframe
                      style={{
                        borderRadius: '1rem',
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                      }}
                      src={campaign.videoURL}
                      frameBorder="0"
                      allowFullScreen={false}
                    />
                  </Box>
                </Grid>
                <Grid item lg={7} md={6} sm={12} xs={12}>
                  <Stack direction="column" spacing={1}>
                    <Typography variant="h3" color="primary.main">
                      {campaign.title}
                    </Typography>
                    <Typography variant="h5" color="text.primary">
                      {campaign.subtitle}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                      {campaign.desc}
                    </Typography>
                    <Button
                      variant="contained"
                      component="a"
                      href={campaign.donate_link}
                      sx={{ mt: 4, width: '200px' }}
                      data-cy="org.ongoingappeals-page.button.donate"
                    >
                      Donate to This Campaign
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
              <Divider />
            </Box>
          ))}
        </MotionInView>
      </Container>
    </Box>
  );
}
