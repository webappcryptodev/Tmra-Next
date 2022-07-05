import config from '@configuration';
// next
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// material
import { styled } from '@mui/material/styles';
import { Box, Button, AppBar, Toolbar, Container, Badge, IconButton } from '@mui/material';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
// Icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// components
import Logo from '../../components/Logo';
import Label from '../../components/Label';
import { MHidden } from '../../components/@material-extend';
//
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import navConfig from './MenuConfig';
import LanguagePopover from '@layouts/dashboard/LanguagePopover';
import { useAppSelector } from '@redux/hooks';
import { selectCartItems } from '@redux/slices/cart/cartSlice';
import React from 'react';

// ----------------------------------------------------------------------

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

// ----------------------------------------------------------------------

export type MenuItemProps = {
  key: string;
  titleKey: string;
  path: string;
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
  navConfig: MenuItemProps[];
};

export default function MainNavbar() {
  const isOffset = useOffSetTop(100);
  const { pathname } = useRouter();
  const isHome = pathname === '/';
  const currentUser = useAppSelector(state => state.currentUser);
  const cartsData = useAppSelector(selectCartItems);

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            bgcolor: 'background.default',
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
          <NextLink href="/" passHref>
            <Logo
              sx={{
                filter: 'drop-shadow(0rem 0rem 0.5rem rgba(255, 255, 255))',
                cursor: 'pointer',
              }}
            />
          </NextLink>

          {/* <Label color="info" sx={{ ml: 1 }}>
            Next Ts v2.6.0
          </Label> */}
          <Box sx={{ flexGrow: 1 }} />
          <MHidden width="mdDown">
            <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          </MHidden>

          {/* <Button
            variant='contained'
            target='_blank'
            href='https://material-ui.com/store/items/minimal-dashboard/'
          >
            Purchase Now
          </Button> */}
          {config.fundraising.campaign.multipleCheckout && (
            <NextLink href="/cart">
              <IconButton
                aria-label="cart"
                sx={{
                  mr: 3,
                  ...(isHome && { color: 'common.white' }),
                  ...(isOffset && { color: 'text.primary' }),
                }}
              >
                <Badge badgeContent={cartsData.length} color="primary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </NextLink>
          )}
          {!currentUser.id && <LanguagePopover />}
          <MHidden width="mdUp">
            <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          </MHidden>
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
