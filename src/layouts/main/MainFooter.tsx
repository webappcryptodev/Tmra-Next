import { Icon } from '@iconify/react';
import googleFill from '@iconify/icons-eva/google-fill';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
import { Link as ScrollLink } from 'react-scroll';
// next
import NextLink from 'next/link';
// material
import { styled } from '@mui/material/styles';
import { Grid, Link, Stack, Divider, Container, Typography, IconButton } from '@mui/material';
//
import Logo from '../../components/Logo';
import { useTranslation } from 'next-i18next';
import { getLandingMainPaths } from '@routes/paths';
import config from '@configuration';

// ----------------------------------------------------------------------

const SOCIALS = [
  { name: 'Facebook', icon: facebookFill, enabled: true },
  { name: 'Google', icon: googleFill, enabled: true },
  { name: 'Linkedin', icon: linkedinFill, enabled: true },
  { name: 'Twitter', icon: twitterFill, enabled: true },
];

const paths = getLandingMainPaths();

const LINKS = [
  {
    headline: 'Get Started',
    headlineKey: 'menu.get-started',
    children: [
      { name: 'menu.start-free', href: paths.join, enabled: true },
      { name: 'menu.pricing', href: paths.pricing, enabled: config.main.landing.pricing.enabled },
      { name: 'menu.how-it-works', href: paths.howItWorks, enabled: true },
      {
        name: 'menu.customers',
        href: paths.customers,
        enabled: config.main.landing.customers.enabled,
      },
      { name: 'menu.zakat', href: paths.zakat, enabled: true },
    ],
  },
  {
    headline: 'Nonprofit Fundraising Platform',
    headlineKey: 'menu.platform',
    children: [
      // Hendy's note: disabled for production - please make it feature flag
      { name: 'menu.about', href: paths.about, enabled: config.main.landing.about.enabled },
      { name: 'menu.contact', href: paths.contact, enabled: config.main.landing.contact.enabled },
      {
        name: 'menu.demo-booking',
        href: paths.demoBooking,
        enabled: config.main.landing.demoBooking.enabled,
      },
      { name: 'menu.why-us', href: paths.whyUs, enabled: config.main.landing.whyUs.enabled },
      { name: 'menu.careers', href: 'https://jobs.talentiva.net/company/tmra', enabled: true },
    ],
  },
  {
    headline: 'Support',
    headlineKey: 'menu.support',
    children: [
      { name: 'menu.faq', href: paths.faq, enabled: config.main.landing.faq.enabled },
      { name: 'menu.news', href: paths.news, enabled: config.main.landing.news.enabled },
      { name: 'menu.blog', href: paths.blog, enabled: config.main.landing.blog.enabled },
      { name: 'menu.help', href: paths.help, enabled: config.main.landing.help.enabled },
      { name: 'menu.terms', href: paths.terms, enabled: true },
      { name: 'menu.privacy', href: paths.privacy, enabled: true },
    ],
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.primary.main,
}));

// ----------------------------------------------------------------------

export default function MainFooter(): JSX.Element {
  const { t } = useTranslation();
  return (
    <RootStyle>
      <Divider />
      <Container maxWidth="lg" sx={{ pt: 8, pb: 8 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          {/* <Grid item xs={12} sx={{ mb: 3 }}>
            <ScrollLink to="move_top" spy smooth>
              <Logo sx={{ mx: { xs: 'auto', md: 'inherit' } }} />
            </ScrollLink>
          </Grid> */}
          <Grid item xs={8} md={3}>
            <ScrollLink to="move_top" spy smooth>
              <Logo sx={{ mb: 1, mx: { xs: 'auto', md: 'inherit' } }} />
            </ScrollLink>

            <Typography variant="body2" sx={{ pr: { md: 5 } }}>
              {t('pages.home.hero01.heading')}
            </Typography>

            <Stack
              spacing={1.5}
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
            >
              {SOCIALS.filter(social => social.enabled).map(social => (
                <IconButton key={social.name} color="primary" sx={{ p: 1 }}>
                  <Icon icon={social.icon} width={16} height={16} />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={8}>
            <Stack
              spacing={5}
              direction={{ xs: 'column', md: 'row' }}
              justifyContent="space-between"
            >
              {LINKS.map(list => {
                const { headlineKey, children } = list;
                return (
                  <Stack key={headlineKey} spacing={2}>
                    <Typography component="p" variant="overline">
                      {t(headlineKey)}
                    </Typography>
                    {children
                      .filter(item => item.enabled)
                      .map(link => (
                        <NextLink key={link.name} href={link.href ?? '#'} passHref>
                          <Link color="inherit" variant="body2" sx={{ display: 'block' }}>
                            {t(link.name)}
                          </Link>
                        </NextLink>
                      ))}
                  </Stack>
                );
              })}
            </Stack>
          </Grid>
        </Grid>

        {/* <Typography
          component="p"
          variant="body2"
          sx={{
            mt: 10,
            pb: 5,
            fontSize: 13,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          © 2021. All rights reserved
        </Typography> */}
      </Container>
    </RootStyle>
  );
}
