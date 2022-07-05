import { Link as ScrollLink } from 'react-scroll';
import { Icon } from '@iconify/react';
import googleFill from '@iconify/icons-eva/google-fill';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
// next
import NextLink from 'next/link';
// material
import { styled, useTheme } from '@mui/material/styles';
import { Grid, Link, Stack, Divider, Container, Typography, IconButton, Box } from '@mui/material';
//
// import Logo from '@components/Logo';
import { useTranslation } from 'next-i18next';
import { getLandingMainPaths } from '@routes/paths';
import config from '@configuration';

// ----------------------------------------------------------------------

const paths = getLandingMainPaths();

const LINKS = [
  {
    headline: 'Organization',
    headlineKey: 'menu.organization',
    children: [{ name: 'menu.about', href: paths.about, enabled: true }],
  },
  {
    headline: 'Legal',
    headlineKey: 'menu.legal',
    children: [
      { name: 'menu.terms', href: paths.terms, enabled: true },
      { name: 'menu.privacy', href: paths.privacy, enabled: true },
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
    ],
  },
];

const SOCIALS = [
  { name: 'Facebook', icon: facebookFill, enabled: true },
  { name: 'Google', icon: googleFill, enabled: false },
  { name: 'Linkedin', icon: linkedinFill, enabled: false },
  { name: 'Twitter', icon: twitterFill, enabled: false },
  { name: 'Instagram', icon: 'ant-design:instagram-filled', enabled: true },
];

const RootStyle = styled('div')(() => ({
  position: 'relative',
}));

// ----------------------------------------------------------------------

export default function MainFooter({ backgroundColorProps, imgLogo }): JSX.Element {
  const { t } = useTranslation();
  const theme = useTheme();
  const textColor = backgroundColorProps
    ? theme.palette.primary.contrastText
    : theme.palette.text.primary;

  return (
    <RootStyle
      sx={{
        bgcolor: backgroundColorProps,
        color: textColor,
      }}
    >
      <Divider />
      <Container maxWidth="lg" sx={{ pt: 8, pb: 8 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid item xs={8} md={3}>
            <ScrollLink to="move_top" spy smooth>
              <Box
                component="img"
                src={`${imgLogo}`}
                sx={{
                  width: 50,
                  height: 50,
                  mb: 1,
                  mx: { xs: 'auto', md: 'inherit' },
                  filter: 'drop-shadow(0rem 0rem 0.5rem rgba(255, 255, 255))',
                }}
              />
            </ScrollLink>
            <Typography variant="body2" sx={{ pr: { md: 5 } }}>
              {t('pages.home.hero01.heading')}
            </Typography>
            <Stack
              spacing={1.5}
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ mt: 3, mb: { xs: 5, md: 0 } }}
            >
              {SOCIALS.filter(social => social.enabled).map(social => (
                <IconButton key={social.name} color="inherit" sx={{ p: 1, cursor: 'pointer' }}>
                  <Icon icon={social.icon} width={16} height={16} />
                </IconButton>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={8}>
            <Stack
              spacing={5}
              direction={{ xs: 'column', md: 'row' }}
              justifyContent="space-around"
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
      </Container>
    </RootStyle>
  );
}
