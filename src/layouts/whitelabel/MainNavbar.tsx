import config from '@configuration';
// next
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// material
import { styled } from '@mui/material/styles';
import { Box, Button, AppBar, Toolbar, Container, Badge, IconButton, Link } from '@mui/material';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
// Icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// components
// import Logo from '@components/Logo';
import { MHidden } from '@components/@material-extend';
//
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import navConfig from './MenuConfig';
import LanguagePopover from '@layouts/dashboard/LanguagePopover';
import { useTranslation } from 'next-i18next';
import { useAppSelector } from '@redux/hooks';
import { selectCartItems } from '@redux/slices/cart/cartSlice';
import React from 'react';
import { getLandingMainPaths } from '@routes/paths';
import { Icon } from '@iconify/react';
import logInFill from '@iconify/icons-eva/log-in-fill';
import AccountPopover from '../dashboard/AccountPopover';

// ----------------------------------------------------------------------

const landingMainPaths = getLandingMainPaths();

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('md')]: {
    height: APP_BAR_DESKTOP,
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

const SignInLinkStyle = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.common.white,
  display: 'flex',
  cursor: 'pointer',
  alignItems: 'center',
  marginLeft: theme.spacing(2),
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shortest,
  }),
  '&:hover': {
    opacity: 0.48,
    textDecoration: 'none',
  },
}));

const signInMenu = [
  {
    titleKey: 'Sign in',
    key: 'menu.sign-in',
    path: landingMainPaths.signIn,
    icon: <Icon icon={logInFill} width={22} height={22} />,
    enabled: true,
  },
];

// ----------------------------------------------------------------------

export type MenuItemProps = {
  key: string;
  titleKey: string;
  path: string;
  spyTo?: string;
  icon?: JSX.Element;
  enabled: boolean;
  children?: {
    subheaderKey: string;
    items: {
      enabled: boolean;
      key: string;
      titleKey: string;
      path: string;
    }[];
  }[];
};

export type MenuProps = {
  isOffset: boolean;
  isHome: boolean;
  isWhiteLabel: boolean;
  navConfig: MenuItemProps[];
};

export default function MainNavbar({ backgroundColor, isWhiteLabel, logoUrl, secondColor }) {
  const { t } = useTranslation();
  const isOffset = useOffSetTop(100);
  const { pathname } = useRouter();
  const isHome = pathname === '/';
  const currentUser = useAppSelector(state => state.currentUser);
  const cartsData = useAppSelector(selectCartItems);

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: isWhiteLabel ? backgroundColor : 'transparent' }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            bgcolor: backgroundColor,
            height: { md: APP_BAR_DESKTOP - 16 },
          }),
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'unset',
            }}
          >
            <NextLink href="#" passHref>
              <Box
                component="img"
                src={logoUrl}
                sx={{
                  width: 50,
                  height: 50,
                  mr: 4,
                  filter: 'drop-shadow(0rem 0rem 0.5rem rgba(255, 255, 255))',
                  cursor: 'pointer',
                }}
              />
            </NextLink>
            <MHidden width="mdDown">
              <MenuDesktop
                isOffset={isOffset}
                isHome={isHome}
                navConfig={navConfig}
                isWhiteLabel={isWhiteLabel}
              />
            </MHidden>
            {/* <Button style={{ backgroundColor: secondColor }} variant="contained">
              {t('fundraising.campaign.donate_now')}
            </Button> */}
          </Box>
          {/* <Box sx={{ flexGrow: 1 }} /> */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            {config.fundraising.campaign.multipleCheckout && (
              <NextLink href="/cart">
                <IconButton
                  aria-label="cart"
                  sx={{
                    mr: 1,
                    ...(isHome && { color: 'common.white' }),
                    ...(isOffset && { color: isWhiteLabel ? 'common.white' : 'text.primary' }),
                    color: isWhiteLabel ? 'common.white' : 'text.primary',
                  }}
                >
                  <Badge badgeContent={cartsData.length} color="secondary">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </NextLink>
            )}
            <LanguagePopover />
            {!currentUser.id ? (
              <MHidden width="mdDown">
                <SignInLinkStyle href={landingMainPaths.signIn}>Sign In</SignInLinkStyle>
              </MHidden>
            ) : (
              <MHidden width="mdDown">
                <Box marginLeft={2}>
                  <AccountPopover />
                </Box>
              </MHidden>
            )}
            <MHidden width="mdUp">
              <MenuMobile
                isOffset={isOffset}
                isHome={isHome}
                navConfig={!currentUser.id ? [...navConfig, ...signInMenu] : [...navConfig]}
                isWhiteLabel={isWhiteLabel}
              />
            </MHidden>
          </Box>
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
