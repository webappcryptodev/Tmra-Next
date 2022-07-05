import { m } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { useState, useEffect } from 'react';
// next
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
// @mui
import { styled } from '@mui/material/styles';
import {
  Box,
  Link,
  Grid,
  List,
  Stack,
  Popover,
  ListSubheader,
  CardActionArea,
} from '@mui/material';
// components
import Iconify from '../../components/Iconify';
//
import { MenuProps, MenuItemProps } from './type';

// ----------------------------------------------------------------------

const LinkStyle = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.primary,
  marginRight: theme.spacing(5),
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
  '&:hover': {
    opacity: 0.48,
    textDecoration: 'none',
  },
}));

const ListItemStyle = styled(Link)(({ theme }) => ({
  ...theme.typography.body2,
  display: 'flex',
  alignItems: 'center',
  padding: 0,
  marginTop: theme.spacing(3),
  color: theme.palette.text.secondary,
  transition: theme.transitions.create('color'),
  '&:hover': {
    color: theme.palette.text.primary,
  },
}));

// ----------------------------------------------------------------------

export default function MenuDesktop({ isOffset, isHome, navConfig }: MenuProps) {
  const { pathname } = useRouter();

  const [open, setOpen] = useState(false);

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
    <Stack direction="row">
      {navConfig.map(link => (
        <MenuDesktopItem
          key={link.title}
          item={link}
          isOpen={open}
          onOpen={handleOpen}
          onClose={handleClose}
          isOffset={isOffset}
          isHome={isHome}
        />
      ))}
    </Stack>
  );
}

// ----------------------------------------------------------------------

type MenuDesktopItemProps = {
  item: MenuItemProps;
  isOpen: boolean;
  isHome: boolean;
  isOffset: boolean;
  onOpen: VoidFunction;
  onClose: VoidFunction;
};

function MenuDesktopItem({
  item,
  isHome,
  isOpen,
  isOffset,
  onOpen,
  onClose,
}: MenuDesktopItemProps) {
  const { pathname } = useRouter();

  const { title, path, children } = item;

  const { t } = useTranslation();

  const isActive = (path: string) => pathname === path;

  if (children) {
    return (
      <>
        <LinkStyle
          onClick={onOpen}
          sx={{
            display: 'flex',
            cursor: 'pointer',
            alignItems: 'center',
            ...(isHome && { color: 'text.primary' }),
            ...(isOffset && { color: 'text.primary' }),
            ...(isOpen && { opacity: 0.48 }),
          }}
        >
          {t(item.key)}
          <Iconify
            icon={isOpen ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'}
            sx={{ ml: 0.5, width: 16, height: 16 }}
          />
        </LinkStyle>

        <Popover
          open={isOpen}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 96, left: 0 }}
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
              maxWidth: theme => theme.breakpoints.values.sm,
              boxShadow: theme => theme.customShadows.z24,
            },
          }}
        >
          <Grid container spacing={3}>
            {children.map(list => {
              const { subheader, items } = list;

              return (
                <Grid key={subheader} item xs={12} md={6}>
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
                      {t(subheader)}
                    </ListSubheader>

                    {items.map(item => (
                      <NextLink key={item.key} href={item.path} passHref>
                        <ListItemStyle
                          underline="none"
                          sx={{
                            ...(isActive(item.path) && {
                              color: 'text.primary',
                              typography: 'subtitle2',
                            }),
                          }}
                        >
                          {item.title === 'Dashboard' ? (
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
                                component={m.img}
                                whileTap="tap"
                                whileHover="hover"
                                variants={{
                                  hover: { scale: 1.02 },
                                  tap: { scale: 0.98 },
                                }}
                                src="https://minimal-assets-api.vercel.app/assets/illustrations/illustration_dashboard.png"
                              />
                            </CardActionArea>
                          ) : (
                            <>{t(item.key)}</>
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
  }

  if (title === 'Documentation') {
    return (
      <LinkStyle
        href={path}
        target="_blank"
        rel="noopener"
        sx={{
          ...(isHome && { color: 'text.primary' }),
          ...(isOffset && { color: 'text.primary' }),
        }}
      >
        {t(item.key)}
      </LinkStyle>
    );
  }

  return item.spyTo && isHome ? (
    <ScrollLink to={item.spyTo} spy smooth key={item.key} offset={-100}>
      <LinkStyle
        sx={{
          ...(isHome && { color: 'text.primary' }),
          ...(isOffset && { color: 'text.primary' }),
          ...(isActive(path) && { color: 'primary.main' }),
          cursor: 'pointer',
        }}
      >
        {t(item.key)}
      </LinkStyle>
    </ScrollLink>
  ) : (
    <NextLink key={item.key} href={path} passHref>
      <LinkStyle
        sx={{
          ...(isHome && { color: 'text.primary' }),
          ...(isOffset && { color: 'text.primary' }),
          ...(isActive(path) && {
            color: 'info.main',
          }),
        }}
      >
        {t(item.key)}
      </LinkStyle>
    </NextLink>
  );
}
