/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link as ScrollLink } from 'react-scroll';
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
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
//
import { MenuProps, MenuItemProps } from './MainNavbar';
import { useTranslation } from 'next-i18next';
import LanguagePopover from '@layouts/dashboard/LanguagePopover';
import AccountPopover from '@layouts/dashboard/AccountPopover';
import NotificationsPopover from '@layouts/dashboard/NotificationsPopover';
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

const LinkStyleWhiteSingle = styled('div')(({ theme }) => ({
  ...theme.typography.subtitle2,
  // color: theme.palette.text.primary,
  marginRight: theme.spacing(5),
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shortest,
  }),
  '&:hover': {
    opacity: 0.48,
    textDecoration: 'none',
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
  isHome: boolean;
  isWhiteLabel: boolean;
  isOffset: boolean;
};

function MenuDesktopItem({ item, pathname, isHome, isOffset, isWhiteLabel }: MenuDesktopItemProps) {
  const { titleKey, path, children } = item;
  const isActive = path => {
    if (typeof path === 'string') {
      return pathname === path;
    } else if (typeof path === 'object') {
      if (path.length) {
        const paths = path
          .filter(e => e.items)
          .map(e => e.items.map(item => item.path))
          .reduce((a, b) => a.concat(b), []);
        if (paths.includes(pathname)) {
          return true;
        }
      }
    }
  };
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setOpen] = useState(false);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (isOpen) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  if (children) {
    return (
      <>
        <LinkStyle
          href="void:(0)"
          onMouseEnter={e => {
            onOpen();
            handleClick(e);
          }}
          // onMouseLeave={e => {
          //   onClose();
          //   handleClose();
          // }}
          sx={{
            display: 'flex',
            cursor: 'pointer',
            alignItems: 'center',
            color: 'text.primary',
            ...(isActive(children) && { color: 'primary.main', opacity: 0.8 }),
          }}
        >
          {titleKey}
          <Box
            component={Icon}
            icon={isOpen ? arrowIosUpwardFill : arrowIosDownwardFill}
            sx={{ ml: 0.5, width: 16, height: 16 }}
          />
        </LinkStyle>

        <Menu
          sx={{ top: 10 }}
          anchorEl={anchorEl}
          open={isOpen}
          onClose={onClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          {children.map((list, key) => {
            const { subheaderKey, items } = list;
            return (
              <MenuItem
                onClick={() => {
                  handleClose();
                  onClose();
                }}
                key={key}
              >
                {items
                  .filter(item => item.enabled)
                  .map((item, key) => {
                    return (
                      <Typography
                        key={key}
                        component={Link}
                        href={item.path}
                        underline="none"
                        color="primary.main"
                        sx={{
                          color: 'text.primary',
                          ...(isActive(item.path) && { color: 'primary.main', opacity: 0.8 }),
                        }}
                      >
                        {t(item.key)}
                      </Typography>
                    );
                  })}
              </MenuItem>
            );
          })}
        </Menu>
      </>
    );
  } else {
    return item.spyTo ? (
      <ScrollLink to={item.spyTo} spy smooth key={item.key}>
        <LinkStyleWhiteSingle
          sx={{
            color: 'text.primary',
            ...(isHome && { color: 'text.primary' }),
            ...(isOffset && { color: 'text.primary' }),
            ...(isActive(path) && { color: 'primary.main', opacity: 0.8 }),
            cursor: 'pointer',
          }}
        >
          {t(item.key)}
        </LinkStyleWhiteSingle>
      </ScrollLink>
    ) : item.path ? (
      <NextLink key={item.key} href={item.path}>
        <LinkStyleWhiteSingle
          sx={{
            color: 'text.primary',
            ...(isHome && { color: 'text.primary' }),
            ...(isOffset && { color: 'text.primary' }),
            ...(isActive(path) && { color: 'primary.main', opacity: 0.8 }),
            cursor: 'pointer',
          }}
        >
          {t(item.key)}
        </LinkStyleWhiteSingle>
      </NextLink>
    ) : null;
  }
}

export default function MenuDesktop({ isOffset, isHome, navConfig, isWhiteLabel }: MenuProps) {
  const { pathname } = useRouter();
  const currentUser = useAppSelector(state => state.currentUser);

  return (
    <>
      {/* {!currentUser.id ? ( */}
      <Stack direction="row" data-cy="org.home-page.menu.navbar">
        {navConfig
          .filter(link => link.enabled)
          .map(link => (
            <MenuDesktopItem
              key={link.titleKey}
              item={link}
              pathname={pathname}
              isOffset={isOffset}
              isHome={isHome}
              isWhiteLabel={true}
            />
          ))}
      </Stack>
      {/* ) : ( */}
      {/* <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }} sx={{ mr: 2.5 }}>
          <LanguagePopover />
          {config.main.landing.notifications.enabled && <NotificationsPopover />}
          <AccountPopover />
        </Stack> */}
      {/* )} */}
    </>
  );
}
