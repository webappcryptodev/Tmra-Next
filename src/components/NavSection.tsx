import { useState, ReactNode } from 'react';
import { Icon } from '@iconify/react';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
// next
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// material
import { alpha, useTheme, styled } from '@mui/material/styles';
import {
  Box,
  List,
  BoxProps,
  Collapse,
  ListItemText,
  ListItemIcon,
  ListSubheader,
  ListItemButton,
  ListItemButtonProps,
} from '@mui/material';
import { useTranslation } from 'next-i18next';
import configuration from '@configuration';

// ----------------------------------------------------------------------

const ListSubheaderStyle = styled(props => (
  <ListSubheader disableSticky disableGutters {...props} />
))(({ theme }) => ({
  ...theme.typography.overline,
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
  paddingLeft: theme.spacing(5),
  color: theme.palette.text.primary,
}));

interface ListItemStyleProps extends ListItemButtonProps {
  component?: ReactNode;
  to?: string;
}

const ListItemStyle = styled(ListItemButton)<ListItemStyleProps>(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: 'relative',
  textTransform: 'capitalize',
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(2.5),
  color: theme.palette.text.secondary,
  '&:before': {
    top: 0,
    right: 0,
    width: 3,
    bottom: 0,
    content: "''",
    display: 'none',
    position: 'absolute',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: theme.palette.primary.main,
  },
}));

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

// ----------------------------------------------------------------------

export type NavItemProps = {
  titleKey: string;
  enabled: boolean;
  path: string;
  exactPath?: boolean;
  icon?: JSX.Element;
  info?: JSX.Element;
  children?: {
    titleKey: string;
    path: string;
    exactPath?: boolean;
    enabled: boolean;
  }[];
};

function NavItem({ item, isShow }: { item: NavItemProps; isShow?: boolean }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const { pathname, asPath } = useRouter();
  const { titleKey, path, icon, info, children } = item;
  const isActiveRoot = item.exactPath ? asPath === path : asPath.includes(path);

  const [open, setOpen] = useState(isActiveRoot);

  const handleOpen = () => {
    setOpen(!open);
  };

  const activeRootStyle = {
    color: 'primary.main',
    fontWeight: 'fontWeightMedium',
    bgcolor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    '&:before': { display: 'block' },
  };

  const activeSubStyle = {
    color: 'text.primary',
    fontWeight: 'fontWeightMedium',
  };

  if (children) {
    return (
      <>
        <ListItemStyle
          onClick={handleOpen}
          sx={{
            ...(isActiveRoot && activeRootStyle),
          }}
        >
          <ListItemIconStyle>{icon && icon}</ListItemIconStyle>

          {isShow && (
            <>
              <ListItemText disableTypography primary={t(titleKey)} />
              {info && info}
              <Box
                component={Icon}
                icon={open ? arrowIosDownwardFill : arrowIosForwardFill}
                sx={{ width: 16, height: 16, ml: 1 }}
              />
            </>
          )}
        </ListItemStyle>

        {isShow && (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {children.map(item => {
                const { titleKey, path } = item;
                const isActiveSub = item.exactPath ? asPath === path : asPath.includes(path);

                return (
                  <NextLink key={titleKey} href={path} passHref>
                    <ListItemStyle
                      component="a"
                      sx={{
                        ...(isActiveSub && activeSubStyle),
                      }}
                    >
                      <ListItemIconStyle>
                        <Box
                          component="span"
                          sx={{
                            width: 4,
                            height: 4,
                            display: 'flex',
                            borderRadius: '50%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: 'text.disabled',
                            transition: theme => theme.transitions.create('transform'),
                            ...(isActiveSub && {
                              transform: 'scale(2)',
                              bgcolor: 'primary.main',
                            }),
                          }}
                        />
                      </ListItemIconStyle>
                      <ListItemText disableTypography primary={t(titleKey)} />
                    </ListItemStyle>
                  </NextLink>
                );
              })}
            </List>
          </Collapse>
        )}
      </>
    );
  }

  return (
    <NextLink href={path} passHref>
      <ListItemStyle
        component="a"
        sx={{
          ...(isActiveRoot && activeRootStyle),
        }}
      >
        <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
        {isShow && (
          <>
            <ListItemText disableTypography primary={t(titleKey)} />
            {info && info}
          </>
        )}
      </ListItemStyle>
    </NextLink>
  );
}

export type NavConfig = {
  subheaderKey: string;
  items: NavItemProps[];
}[];

interface NavSectionProps extends BoxProps {
  isShow?: boolean | undefined;
  navConfig: NavConfig;
}

export default function NavSection({ navConfig, isShow = true, ...other }: NavSectionProps) {
  const { t } = useTranslation();
  return (
    <Box {...other} data-cy="dashboard.menu.sidebar">
      {navConfig.map(list => {
        const { subheaderKey, items } = list;
        return (
          <List key={subheaderKey} disablePadding>
            {isShow && <ListSubheaderStyle>{t(subheaderKey)}</ListSubheaderStyle>}
            {items
              .filter(item => item.enabled)
              .map((item: NavItemProps) => (
                <NavItem key={item.titleKey} item={item} isShow={isShow} />
              ))}
          </List>
        );
      })}
    </Box>
  );
}
