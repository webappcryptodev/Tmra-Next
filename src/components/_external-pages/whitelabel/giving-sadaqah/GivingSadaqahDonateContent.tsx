import { MotionInView, varFadeInUp } from '@components/animate';
import Page from '@components/Page';
import ExpandMoreIcon from '@mui/icons-material/ExpandMoreOutlined';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Stack,
  Typography,
} from '@mui/material';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';
import getConfig from 'next/config';
import React from 'react';
import RuntimeConfigs from '@utils/runtime-configs';
import { Icon } from '@iconify/react';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

export default function GivingSadaqahBlogContent({ organization, appearance }) {
  const { t } = useTranslation();

  return (
    <RootStyle
      title={`Giving Sadaqah | Donate`}
      favicon={
        appearance?.favIcon
          ? `${publicRuntimeConfig.bunny.cdn.urlMedia}/${appearance?.favIcon}`
          : null
      }
      id="move_top"
    >
      <Container maxWidth="lg" sx={{ pt: 9 }} id="about_donate">
        <MotionInView variants={varFadeInUp}>
          <Typography
            variant="h2"
            sx={{
              mb: 1,
              textAlign: 'center',
              color: 'primary.main',
            }}
          >
            About Your Donations, Where & How They are used
          </Typography>
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <Stack direction="column" spacing={1}>
            <Typography color="text.secondary">
              Your donation for education will help fund our education-related programmes such as
              the following:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon sx={{ mr: 1 }}>
                  <Icon icon="bi:dot" width={32} height={32} />
                </ListItemIcon>
                <ListItemText>
                  <Typography color="text.secondary">
                    Our existing schools and orphanages in Somalia, or new ones we will launch in
                    other countries
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ mr: 1 }}>
                  <Icon icon="bi:dot" width={32} height={32} />
                </ListItemIcon>
                <ListItemText>
                  <Typography color="text.secondary">
                    Our newer projects such as establishing vocational training centres in deprived
                    areas
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ mr: 1 }}>
                  <Icon icon="bi:dot" width={32} height={32} />
                </ListItemIcon>
                <ListItemText>
                  <Typography color="text.secondary">
                    Fund Qur’anic reading classes for those who cannot do so.
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
            <Typography color="text.secondary">
              Your donations are automatically channelled to the most important cause we support at
              that time. However, you are welcome to instruct us to use your contribution towards a
              specific cause by emailing us on:{' '}
              <Typography component="a" href="mailto:allocate@GivingSadaqah.org">
                allocate@GivingSadaqah.org
              </Typography>
              {'.'}
            </Typography>
            <Typography color="text.secondary">
              We accept all payment method for donations (Visa, Mastercard, Debit, Credit card), and
              our payment processing system is managed by{' '}
              <Typography component="a" href="https://stripe.com/" target="_blank">
                Stripe
              </Typography>
              {'.'}
            </Typography>
          </Stack>
        </MotionInView>
      </Container>
      <Container maxWidth="lg" sx={{ pt: 6, mb: 6 }} id="about_donate">
        <MotionInView variants={varFadeInUp}>
          <Typography
            variant="h2"
            sx={{
              mb: 1,
              textAlign: 'center',
              color: 'primary.main',
            }}
          >
            Commitment to Transparency
          </Typography>
        </MotionInView>
        <MotionInView variants={varFadeInUp}>
          <Grid container spacing={4}>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  src={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${publicRuntimeConfig.bunny.storage.prefix}/organization-cms/62414373cf00cca3a830814a/qatar-currency-symbol-animation.gif`}
                  alt="debit_trans"
                />
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box display="flex" flexDirection="column" justifyContent="center">
                <Typography color="text.secondary" mt={2}>
                  To meet both the legal and moral obligations of transparency, PDF files of our
                  audited accounts are made available here. Please contact us if you would like to
                  view older accounts.
                </Typography>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon color="primary" />}
                    aria-controls={`panel1a-content`}
                    id={`panel1a-header`}
                  >
                    <Typography variant="body1" color="primary.main">
                      LAST FIVE YEARS OF OUR AUDITED ACCOUNTS
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack direction="column" spacing={3}>
                      Coming Soon.
                    </Stack>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Grid>
          </Grid>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
