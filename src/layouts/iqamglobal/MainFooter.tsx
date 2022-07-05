/* eslint-disable @typescript-eslint/no-unused-vars */
import Iconify from '../../components/Iconify';
import { Link as ScrollLink } from 'react-scroll';
// next
import NextLink from 'next/link';
// material
import { styled } from '@mui/material/styles';
import { Grid, Link, Stack, Divider, Container, Typography, Box, Avatar } from '@mui/material';
// components
import LogoOmmar from '@components/LogoOmmar';
import { useTranslation } from 'next-i18next';
// import { Newsletter } from '@components/donor';
// import config from '@configuration';
// colors
import { red, grey } from '@mui/material/colors';
import useResponsive from '@hooks/useResponsive';
//
import { getLandingMainPaths } from '@routes/paths';
import SubscriptionSection from '@components/_external-pages/whitelabel/iqamglobal/SubscriptionSection';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 18,
  height: 18,
};

const paths = getLandingMainPaths();

// ----------------------------------------------------------------------

const SOCIALS = [
  {
    name: 'Facebook',
    icon: <Iconify icon={'eva:facebook-fill'} {...ICON_SIZE} />,
    enabled: true,
    href: 'https://web.facebook.com/IqamDevelopment/?ref=page_internal',
  },
  { name: 'Google', icon: <Iconify icon={'eva:google-fill'} {...ICON_SIZE} />, enabled: false },
  {
    name: 'Whatsapp',
    icon: <Iconify icon={'bi:whatsapp'} {...ICON_SIZE} />,
    enabled: true,
    href: 'https://wa.me/97339913322',
  },
  {
    name: 'Twitter',
    icon: <Iconify icon={'eva:twitter-fill'} {...ICON_SIZE} />,
    enabled: true,
    href: 'https://mobile.twitter.com/iqambh',
  },
];

const LINKS = [
  {
    title: 'Main Links',
    headlineKey: 'menu.main-links',
    children: [
      { title: 'Our Campaigns', name: 'menu.campaigns.our', href: '#', enabled: true },
      { title: 'Blog', name: 'menu.blog', href: '/blog', enabled: true },
    ],
  },
  {
    title: 'For You',
    headlineKey: 'menu.for-you',
    children: [{ title: 'Zakat Calculator', name: 'menu.zakat', href: '/zakat', enabled: true }],
  },
  {
    title: 'Ommar',
    headlineKey: 'menu.ommar',
    children: [
      { title: 'About Us', name: 'menu.about', href: '/about', enabled: true },
      { title: 'Terms of Service', name: 'menu.terms', href: '/terms', enabled: true },
      { title: 'Privacy Policy', name: 'menu.privacy', href: '/privacy', enabled: true },
      { title: 'Contact us', name: 'menu.contact', href: '/contact', enabled: true },
    ],
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

const AvatarCustom = styled(Avatar)(({ theme }) => ({
  cursor: 'pointer',
  backgroundColor: theme.palette.grey[200],
  color: theme.palette.info.main,
  transition: theme.transitions.create(['background-color', 'color'], {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeInOut,
  }),
  '&:hover': {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.common.white,
  },
}));

// ----------------------------------------------------------------------

export default function MainFooter({ imgLogo }: { imgLogo?: string }): JSX.Element {
  const { t } = useTranslation();

  const isDesktop = useResponsive('up', 'sm');

  return (
    <RootStyle>
      <Divider />
      {/* <Newsletter /> */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <SubscriptionSection />
        <Grid
          container
          justifyContent={{ xs: 'flex-start', md: 'space-between' }}
          sx={{ textAlign: 'left', padding: '48px 24px' }}
          data-cy="org.home-page.footer"
        >
          {!isDesktop && (
            <Grid item xs={12} md={6}>
              <Stack
                spacing={5}
                direction="row"
                justifyContent={{ xs: 'center', md: 'space-around' }}
                sx={{ mb: 5 }}
              >
                {LINKS.map(list => {
                  const { headlineKey, children, title } = list;
                  return (
                    <Stack key={headlineKey} spacing={2}>
                      <Typography component="p" variant="overline">
                        {t(headlineKey)}
                      </Typography>
                      {children
                        .filter(item => item.enabled)
                        .map(link => (
                          <NextLink key={link.name} href={link.href ?? '#'} passHref>
                            <Link
                              color="inherit"
                              variant="body2"
                              sx={{ display: 'block', color: 'text.secondary' }}
                            >
                              {t(link.name)}
                            </Link>
                          </NextLink>
                        ))}
                    </Stack>
                  );
                })}
              </Stack>
            </Grid>
          )}
          <Grid item xs={12} sm={8} md={6}>
            <ScrollLink to="move_top" spy smooth>
              {/* <LogoOmmar href="/" sx={{ mb: { md: 2 }, mx: 'inherit', cursor: 'pointer' }} /> */}
              <NextLink href="/">
                <Box
                  component="img"
                  src={imgLogo}
                  sx={{ width: 120, height: 40, mb: { md: 2 }, mx: 'inherit', cursor: 'pointer' }}
                  data-cy="org.home-page.logo"
                />
              </NextLink>
            </ScrollLink>

            <Typography
              variant="body2"
              sx={{
                pr: { md: 20 },
                my: 4,
                color: 'text.secondary',
              }}
            >
              Iqam Development | إقام للتطوير | شركة مهتمة بتطوير المساجد
              <br />A company dedicated to the development and improvement of masajid all around the
              world
            </Typography>

            <Stack
              spacing={3}
              direction="column"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ mb: 4 }}
            >
              <Stack spacing={2} direction="row" justifyContent="flext-start" alignItems="center">
                <Avatar sx={{ backgroundColor: grey[100], p: 1, color: 'info.main' }}>
                  <Iconify icon={'eva:phone-call-outline'} width={24} height={24} />
                </Avatar>
                <Stack
                  spacing={0.25}
                  direction="column"
                  justifyContent="flext-start"
                  alignItems="flex-start"
                  sx={{ textAlign: 'left' }}
                >
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Tel
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: 'text.primary' }}
                    component="a"
                    href="tel://00973 3991 3322"
                  >
                    +973 3991 3322
                  </Typography>
                </Stack>
              </Stack>
              <Stack spacing={2} direction="row" justifyContent="flext-start" alignItems="center">
                <Avatar sx={{ backgroundColor: grey[100], p: 1, color: 'info.main' }}>
                  <Iconify icon={'eva:email-outline'} width={24} height={24} />
                </Avatar>
                <Stack
                  spacing={0.25}
                  direction="column"
                  justifyContent="flext-start"
                  alignItems="flex-start"
                  sx={{ textAlign: 'left' }}
                >
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Mail
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: 'text.primary' }}
                    component="a"
                    href="mailto://pro@iqam.com.sa"
                  >
                    pro@iqam.com.sa
                  </Typography>
                </Stack>
              </Stack>
              <Stack spacing={2} direction="row" justifyContent="flext-start" alignItems="center">
                <Avatar sx={{ backgroundColor: grey[100], p: 1, color: 'info.main' }}>
                  <Iconify icon={'eva:pin-outline'} width={24} height={24} />
                </Avatar>
                <Stack
                  spacing={0.25}
                  direction="column"
                  justifyContent="flext-start"
                  alignItems="flex-start"
                  sx={{ textAlign: 'left' }}
                >
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Address
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.primary' }}>
                    706 Campfire Ave. Meriden, CT 06450
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack spacing={2} direction="row" justifyContent="flex-start" alignItems="center">
              <Stack
                direction={{ xs: 'row' }}
                spacing={2}
                alignItems="center"
                justifyContent={{ xs: 'center' }}
              >
                <Avatar sx={{ backgroundColor: grey[100], p: 1 }}>
                  <Box component="img" src={`/static/payments/visa.png`} />
                </Avatar>
                <Avatar sx={{ backgroundColor: grey[100], p: 1 }}>
                  <Box component="img" src={`/static/payments/paypal.png`} />
                </Avatar>
                <Avatar sx={{ backgroundColor: grey[100], p: 1 }}>
                  <Box component="img" src={`/static/payments/maestro.png`} />
                </Avatar>
              </Stack>
              <Typography variant="body2">Payment options available</Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            {isDesktop && (
              <Stack
                spacing={5}
                direction="row"
                justifyContent={{ xs: 'center', md: 'space-around' }}
              >
                {LINKS.map(list => {
                  const { headlineKey, children, title } = list;
                  return (
                    <Stack key={headlineKey} spacing={2}>
                      <Typography component="p" variant="overline">
                        {t(headlineKey)}
                      </Typography>
                      {children
                        .filter(item => item.enabled)
                        .map(link => (
                          <NextLink key={link.name} href={link.href ?? '#'} passHref>
                            <Link
                              color="inherit"
                              variant="body2"
                              sx={{ display: 'block', color: 'text.secondary' }}
                            >
                              {t(link.name)}
                            </Link>
                          </NextLink>
                        ))}
                    </Stack>
                  );
                })}
              </Stack>
            )}
            <Stack
              spacing={{ xs: 4, md: 2 }}
              direction={{ xs: 'column', md: 'row' }}
              justifyContent={{ xs: 'center', md: 'space-around' }}
              alignItems="center"
              sx={{ mt: 4 }}
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                {SOCIALS.filter(social => social.enabled).map(social => (
                  <NextLink key={social.name} href={social.href ?? '#'} passHref>
                    <AvatarCustom>{social.icon}</AvatarCustom>
                  </NextLink>
                ))}
              </Stack>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                © 2000-2022, All rights reserved.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
