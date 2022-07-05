/* eslint-disable @typescript-eslint/no-unused-vars */
// next
// components
import LogoOmmar from '@components/LogoOmmar';
// hooks
import useOffSetTop from '@hooks/useOffSetTop';
import useResponsive from '@hooks/useResponsive';
import { AppBar, Container, Divider, Grid, Stack, Toolbar, Box } from '@mui/material';
// @mui
import { styled, useTheme } from '@mui/material/styles';
// utils
import cssStyles from '@utils/cssStyles';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
// config
import { HEADER } from '../../theme/sizes';
import navConfig from './MenuConfig';
//
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import NextLink from 'next/link';
// ----------------------------------------------------------------------

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER.MOBILE_HEIGHT,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('md')]: {
    minHeight: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8,
}));

// ----------------------------------------------------------------------

export default function MainHeader({ imgLogo }: { imgLogo?: string }) {
  const isOffset = useOffSetTop(HEADER.MOBILE_HEIGHT - 32);

  const { t } = useTranslation();

  const theme = useTheme();

  const { pathname } = useRouter();

  const isDesktop = useResponsive('up', 'md');

  const isHome = pathname === '/';

  return (
    <AppBar
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
      }}
    >
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            ...cssStyles(theme).bgBlur(),
            height: { md: HEADER.MAIN_DESKTOP_HEIGHT - 16 },
            transition: theme.transitions.create(['height', 'background-color'], {
              easing: theme.transitions.easing.easeInOut,
              duration: theme.transitions.duration.shorter,
            }),
          }),
        }}
      >
        <Stack
          sx={{ width: '100%' }}
          direction="column"
          divider={<Divider orientation="horizontal" flexItem />}
          data-cy="org.home-page.menu.navbar"
        >
          <Container
            maxWidth="lg"
            sx={{
              py: 1,
              ...(isOffset && {
                py: 1,
              }),
            }}
          >
            <Grid container justifyContent="space-between" alignItems="center">
              {/* <LogoOmmar
                href="/"
                sx={{
                  filter: 'drop-shadow(0rem 0rem 0.5rem rgba(255, 255, 255))',
                  cursor: 'pointer',
                }}
              /> */}
              <NextLink href="/">
                <Box
                  component="img"
                  src={imgLogo}
                  sx={{
                    width: 120,
                    height: 40,
                    filter: 'drop-shadow(0rem 0rem 0.5rem rgba(255, 255, 255))',
                    cursor: 'pointer',
                  }}
                  data-cy="org.home-page.logo"
                />
              </NextLink>
              {isDesktop && (
                <Grid item>
                  <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
                </Grid>
              )}

              {!isDesktop && (
                <>
                  <Grid item>
                    <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
                  </Grid>
                </>
              )}
            </Grid>
          </Container>
        </Stack>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
