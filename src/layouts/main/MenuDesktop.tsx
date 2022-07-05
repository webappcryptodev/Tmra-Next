import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useState, useEffect, ReactNode } from 'react';
import arrowIosUpwardFill from '@iconify/icons-eva/arrow-ios-upward-fill';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
// next
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// material
import { styled } from '@mui/material/styles';
import {
  Box,
  Link,
  Grid,
  List,
  Stack,
  Popover,
  ListItem,
  LinkProps,
  ListSubheader,
  CardActionArea,
} from '@mui/material';
//
import { MenuProps, MenuItemProps } from './MainNavbar';
import { useTranslation } from 'next-i18next';
import LanguagePopover from '@layouts/dashboard/LanguagePopover';
import AccountPopover from '../dashboard/AccountPopover';
import NotificationsPopover from '../dashboard/NotificationsPopover';
import { useAppSelector } from '@redux/hooks';
import config from '@configuration';

// ----------------------------------------------------------------------

interface RouterLinkProps extends LinkProps {
  component?: ReactNode;
  to?: string;
  end?: boolean;
}

const LinkStyle = styled(Link)<RouterLinkProps>(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.primary,
  marginRight: theme.spacing(5),
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shortest,
  }),
  '&:hover': {
    opacity: 0.48,
    textDecoration: 'none',
  },
}));

const ListItemStyle = styled(ListItem)<RouterLinkProps>(({ theme }) => ({
  ...theme.typography.body2,
  padding: 0,
  marginTop: theme.spacing(3),
  color: theme.palette.text.secondary,
  transition: theme.transitions.create('color'),
  '&:hover': {
    color: theme.palette.text.primary,
  },
}));

// ----------------------------------------------------------------------

export type IconBulletProps = {
  type?: 'subheader' | 'item';
};

function IconBullet({ type = 'item' }: IconBulletProps) {
  return (
    <Box sx={{ width: 24, height: 16, display: 'flex', alignItems: 'center' }}>
      <Box
        component="span"
        sx={{
          ml: '2px',
          width: 4,
          height: 4,
          borderRadius: '50%',
          bgcolor: 'currentColor',
          ...(type !== 'item' && {
            ml: 0,
            width: 8,
            height: 2,
            borderRadius: 2,
          }),
        }}
      />
    </Box>
  );
}

type MenuDesktopItemProps = {
  item: MenuItemProps;
  pathname: string;
  isOpen: boolean;
  isHome: boolean;
  isOffset: boolean;
  onOpen: VoidFunction;
  onClose: VoidFunction;
};

function MenuDesktopItem({
  item,
  pathname,
  isHome,
  isOpen,
  isOffset,
  onOpen,
  onClose,
}: MenuDesktopItemProps) {
  const { titleKey, path, children } = item;
  const isActive = pathname === path;
  const { t } = useTranslation();

  if (children) {
    return (
      <>
        <LinkStyle
          onClick={onOpen}
          sx={{
            display: 'flex',
            cursor: 'pointer',
            alignItems: 'center',
            ...(isHome && { color: 'common.white' }),
            ...(isOffset && { color: 'text.primary' }),
            ...(isOpen && { opacity: 0.48 }),
          }}
        >
          {titleKey}
          <Box
            component={Icon}
            icon={isOpen ? arrowIosUpwardFill : arrowIosDownwardFill}
            sx={{ ml: 0.5, width: 16, height: 16 }}
          />
        </LinkStyle>

        <Popover
          open={isOpen}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 80, left: 0 }}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          onClose={onClose}
          PaperProps={{
            sx: {
              px: 3,
              pt: 5,
              pb: 3,
              right: 16,
              m: 'auto',
              borderRadius: 2,
              maxWidth: theme => theme.breakpoints.values.lg,
              boxShadow: theme => theme.customShadows.z24,
            },
          }}
        >
          <Grid container spacing={3}>
            {children.map(list => {
              const { subheaderKey, items } = list;

              return (
                <Grid key={subheaderKey} item xs={12} md={subheaderKey === 'Dashboard' ? 6 : 2}>
                  <List disablePadding>
                    <ListSubheader
                      disableSticky
                      disableGutters
                      sx={{
                        display: 'flex',
                        lineHeight: 'unset',
                        alignItems: 'center',
                        color: 'text.primary',
                        typography: 'overline',
                      }}
                    >
                      <IconBullet type="subheader" /> {subheaderKey}
                    </ListSubheader>

                    {items
                      .filter(item => item.enabled)
                      .map(item => (
                        <NextLink key={item.key} href={item.path}>
                          <ListItemStyle
                            sx={{
                              ...(item.path === pathname && {
                                typography: 'subtitle2',
                                color: 'text.primary',
                              }),
                            }}
                          >
                            {item.titleKey === 'Dashboard' ? (
                              <CardActionArea
                                sx={{
                                  py: 5,
                                  px: 10,
                                  borderRadius: 2,
                                  color: 'primary.main',
                                  bgcolor: 'background.neutral',
                                }}
                              >
                                <Box
                                  component={motion.img}
                                  whileTap="tap"
                                  whileHover="hover"
                                  variants={{
                                    hover: { scale: 1.02 },
                                    tap: { scale: 0.98 },
                                  }}
                                  src="/static/illustrations/illustration_dashboard.png"
                                />
                              </CardActionArea>
                            ) : (
                              <>
                                <IconBullet />
                                {t(item.key)}
                              </>
                            )}
                          </ListItemStyle>
                        </NextLink>
                      ))}
                  </List>
                </Grid>
              );
            })}
          </Grid>
        </Popover>
      </>
    );
  } else {
    return (
      <NextLink key={item.key} href={path} passHref>
        <LinkStyle
          sx={{
            // filter: 'drop-shadow(0rem 0rem 0.2rem rgba(0, 0, 0, 0.3))',
            ...(isHome && { color: 'common.white' }),
            ...(isOffset && { color: 'text.primary' }),
            ...(isActive && { color: 'primary.main' }),
          }}
        >
          {t(item.key)}
        </LinkStyle>
      </NextLink>
    );
  }
}

export default function MenuDesktop({ isOffset, isHome, navConfig }: MenuProps) {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);
  const currentUser = useAppSelector(state => state.currentUser);
  console.log('currentUser', currentUser);
  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {!currentUser.id ? (
        <Stack direction="row">
          {navConfig
            .filter(link => link.enabled)
            .map(link => (
              <MenuDesktopItem
                key={link.titleKey}
                item={link}
                pathname={pathname}
                isOpen={open}
                onOpen={handleOpen}
                onClose={handleClose}
                isOffset={isOffset}
                isHome={isHome}
              />
            ))}
        </Stack>
      ) : (
        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          <LanguagePopover />
          {config.main.landing.notifications.enabled && <NotificationsPopover />}
          <AccountPopover />
        </Stack>
      )}
    </>
  );
}
