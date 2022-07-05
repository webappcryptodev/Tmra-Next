import { Icon } from '@iconify/react';
import { useState, useEffect, ReactNode } from 'react';
import menu2Fill from '@iconify/icons-eva/menu-2-fill';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
// next
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// material
import { alpha, styled } from '@mui/material/styles';
import {
  Box,
  List,
  Drawer,
  Collapse,
  LinkProps,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItemButtonProps,
  Divider,
  Avatar,
  Typography,
} from '@mui/material';
// components
import Logo from '../../components/Logo';
import NavSection from '../../components/NavSection';
import Scrollbar from '../../components/Scrollbar';
import { MIconButton } from '../../components/@material-extend';
//
import { MenuProps, MenuItemProps } from './MainNavbar';
import { useTranslation } from 'next-i18next';
import { useAppSelector, useAppDispatch } from '@redux/hooks';
import { startSignOut } from '../../redux/slices/auth/authSlice';

import logOutFill from '@iconify/icons-eva/log-out-fill';
import homeFill from '@iconify/icons-eva/home-fill';
import settings2Fill from '@iconify/icons-eva/settings-2-fill';
import { ManagedOrganization } from '../../layouts/dashboard/AccountPopover';
import { app } from '@redux/slices/auth/realm';
// ----------------------------------------------------------------------

const ICON_SIZE = 22;
const ITEM_SIZE = 48;
const PADDING = 2.5;

const MENU_OPTIONS = [
  {
    label: 'Overview',
    icon: homeFill,
    linkTo: '/',
  },
  // {
  //   label: 'Profile',
  //   icon: personFill,
  //   linkTo: '#',
  // },
  {
    label: 'Settings',
    icon: settings2Fill,
    linkTo: '#',
  },
];

type StyleProps = LinkProps & ListItemButtonProps;

interface ListItemStyleProps extends StyleProps {
  component?: ReactNode;
  to?: string;
  end?: boolean;
}

const ListItemStyle = styled(ListItemButton)<ListItemStyleProps>(({ theme }) => ({
  ...theme.typography.body2,
  height: ITEM_SIZE,
  textTransform: 'capitalize',
  paddingLeft: theme.spacing(PADDING),
  paddingRight: theme.spacing(2.5),
  color: theme.palette.text.secondary,
}));

// ----------------------------------------------------------------------

type MenuMobileItemProps = {
  item: MenuItemProps;
  isOpen: boolean;
  isActive: boolean;
  isWhiteLabel: boolean;
  onOpen: VoidFunction;
};

function MenuMobileItem({ item, isOpen, isActive, onOpen }: MenuMobileItemProps) {
  const { titleKey, path, icon, children } = item;
  const { t } = useTranslation();

  if (children) {
    return (
      <>
        <ListItemStyle onClick={onOpen}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText disableTypography primary={t(item.key)} />
          <Box
            component={Icon}
            icon={isOpen ? arrowIosDownwardFill : arrowIosForwardFill}
            sx={{ width: 16, height: 16, ml: 1 }}
          />
        </ListItemStyle>

        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <Box sx={{ display: 'flex', flexDirection: 'column-reverse' }}>
            <NavSection
              navConfig={children}
              sx={{
                '& .MuiList-root:last-of-type .MuiListItemButton-root': {
                  height: 200,
                  backgroundSize: '92%',
                  backgroundPosition: 'center',
                  bgcolor: 'background.neutral',
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: 'url(/static/illustrations/illustration_dashboard.png)',
                  '& > *:not(.MuiTouchRipple-root)': { display: 'none' },
                },
                '& .MuiListSubheader-root': {
                  pl: PADDING,
                  display: 'flex',
                  alignItems: 'center',
                  '&:before': {
                    ml: '6px',
                    mr: '22px',
                    width: 8,
                    height: 2,
                    content: "''",
                    borderRadius: 2,
                    bgcolor: 'currentColor',
                  },
                },
                '& .MuiListItemButton-root': {
                  pl: PADDING,
                  '&:before': { display: 'none' },
                  '&.active': { color: 'primary.main', bgcolor: 'transparent' },
                },
                '& .MuiListItemIcon-root': {
                  width: ICON_SIZE,
                  height: ICON_SIZE,
                  '&:before': {
                    width: 4,
                    height: 4,
                    content: "''",
                    borderRadius: '50%',
                    bgcolor: 'currentColor',
                  },
                },
              }}
            />
          </Box>
        </Collapse>
      </>
    );
  }

  return (
    <NextLink key={titleKey} href={path}>
      <ListItemStyle
        sx={{
          ...(isActive && {
            color: 'info.main',
            fontWeight: 'fontWeightMedium',
            bgcolor: theme =>
              alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
          }),
        }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText disableTypography primary={t(item.key)} />
      </ListItemStyle>
    </NextLink>
  );
}

export default function MenuMobile({ isOffset, isHome, navConfig, isWhiteLabel }: MenuProps) {
  const currentUser = useAppSelector(state => state.currentUser);
  const auth = useAppSelector(state => state.auth);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { pathname } = router;
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [managedOrganizations, setManagedOrganizations] = useState<ManagedOrganization[]>([]);

  useEffect(() => {
    if (drawerOpen) {
      handleDrawerClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const fetchManagedNonprofits = async () => {
      console.debug('Listing managed nonprofits for', app.currentUser?.profile.ssoId, '...');
      if (currentUser?.id) {
        try {
          const res = await app.currentUser?.functions?.callFunction('listManagedNonprofits', {
            userId: app.currentUser?.profile.ssoId,
          });
          console.debug('Managed nonprofits for', app.currentUser?.profile.ssoId, ':', res);
          setManagedOrganizations(res);
        } catch (e) {
          console.error('Cannot fetch managed organizations:', e);
          alert(`Cannot fetch managed organizations: ${e}`);
        }
      }
    };

    if (managedOrganizations.length === 0 && currentUser?.id) {
      fetchManagedNonprofits();
    }
  }, []);

  if (managedOrganizations && managedOrganizations?.length >= 1) {
    MENU_OPTIONS[0].linkTo = `/manage/organization/${managedOrganizations[0]._id}`;
    MENU_OPTIONS[1].linkTo = `/manage/organization/${managedOrganizations[0]._id}/settings/appearance`;
  }
  if (managedOrganizations && managedOrganizations?.length < 1) {
    MENU_OPTIONS[0].linkTo = `/my`;
    MENU_OPTIONS[1].linkTo = `/my/settings`;
  }

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const signOut = async () => {
    // localStorage.clear();
    await startSignOut(auth.refreshToken, dispatch, router.push.bind(router));
    // await app.currentUser?.logOut();
  };

  return (
    <>
      <MIconButton
        onClick={handleDrawerOpen}
        sx={{
          ml: 1,
          ...(isHome && { color: 'common.white' }),
          ...(isOffset && { color: isWhiteLabel ? 'common.white' : 'text.primary' }),
        }}
        data-cy="org.home-page.button.hamburger"
      >
        <Icon icon={menu2Fill} />
      </MIconButton>

      <Drawer
        open={drawerOpen}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { pb: 5, width: 260 } }}
      >
        <Scrollbar>
          <Box sx={{ display: 'inline-flex' }}>
            <NextLink href="/">
              <Logo sx={{ mx: PADDING, my: 3 }} />
            </NextLink>
          </Box>

          <List disablePadding>
            {currentUser.id && (
              <>
                <Box display="flex" alignItems="center" paddingX={2.5}>
                  <Avatar src={currentUser?.imageUrl} alt="photoURL" />
                  <Box sx={{ my: 1.5, px: 2.5 }}>
                    <Typography variant="subtitle1" noWrap>
                      {currentUser?.fullName}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                      {currentUser?.email}
                    </Typography>
                  </Box>
                </Box>
                {MENU_OPTIONS.map((option, key) => (
                  <ListItemStyle key={key} onClick={() => router.push(option.linkTo)}>
                    <ListItemIcon>
                      {<Icon icon={option.icon} width={ICON_SIZE} height={ICON_SIZE} />}
                    </ListItemIcon>
                    <ListItemText disableTypography primary={option.label} />
                  </ListItemStyle>
                ))}
                <Divider variant="middle" />
              </>
            )}
            {navConfig
              .filter(link => link.enabled)
              .map(link => (
                <MenuMobileItem
                  key={link.titleKey}
                  item={link}
                  isOpen={open}
                  onOpen={handleOpen}
                  isActive={pathname === link.path}
                  isWhiteLabel={isWhiteLabel}
                />
              ))}
            {currentUser.id && (
              <ListItemStyle onClick={() => signOut()}>
                <ListItemIcon>
                  {<Icon icon={logOutFill} width={ICON_SIZE} height={ICON_SIZE} />}
                </ListItemIcon>
                <ListItemText disableTypography primary="Sign Out" />
              </ListItemStyle>
            )}
          </List>
        </Scrollbar>
      </Drawer>
    </>
  );
}
