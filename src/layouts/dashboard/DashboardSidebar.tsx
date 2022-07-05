import config from '@configuration';
import {
  Avatar,
  Box,
  CardActionArea,
  Drawer,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Popover,
  Skeleton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
// material
import { alpha, styled } from '@mui/material/styles';
import { useAppSelector } from '@redux/hooks';
import { getAdminDashboardPaths, getMyPaths, getOrgDashboardPaths } from '@routes/paths';
import getConfig from 'next/config';
// next
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import RuntimeConfigs from '@utils/runtime-configs';
//
import { MHidden } from '../../components/@material-extend';
// components
import Logo from '../../components/Logo';
import NavSection, { NavConfig } from '../../components/NavSection';
import Scrollbar from '../../components/Scrollbar';
// hooks
import useCollapseDrawer from '../../hooks/useCollapseDrawer';
// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const COLLAPSE_WIDTH = 102;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.complex,
    }),
  },
}));

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: theme.shape.borderRadiusSm,
  backgroundColor: theme.palette.grey[500_12],
}));

// ----------------------------------------------------------------------

type IconCollapseProps = {
  onToggleCollapse: VoidFunction;
  collapseClick: boolean;
};

function IconCollapse({ onToggleCollapse, collapseClick }: IconCollapseProps) {
  return (
    <Tooltip title="Mini Menu">
      <CardActionArea
        onClick={onToggleCollapse}
        sx={{
          width: 18,
          height: 18,
          display: 'flex',
          cursor: 'pointer',
          borderRadius: '50%',
          alignItems: 'center',
          color: 'text.primary',
          justifyContent: 'center',
          border: 'solid 1px currentColor',
          ...(collapseClick && {
            borderWidth: 2,
          }),
        }}
      >
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            bgcolor: 'currentColor',
            transition: theme => theme.transitions.create('all'),
            ...(collapseClick && {
              width: 0,
              height: 0,
            }),
          }}
        />
      </CardActionArea>
    </Tooltip>
  );
}

type DashboardSidebarProps = {
  isOpenSidebar: boolean;
  onCloseSidebar: VoidFunction;
  currentName?: string | null;
  currentSubtitle?: string | null;
  currentImageUrl?: string | null;
  navConfig: NavConfig;
};

export default function DashboardSidebar({
  isOpenSidebar,
  onCloseSidebar,
  currentName,
  currentSubtitle,
  currentImageUrl,
  navConfig,
}: DashboardSidebarProps) {
  const router = useRouter();
  const currentUser = useAppSelector(state => state.currentUser);
  const { isCollapse, collapseClick, collapseHover, onToggleCollapse, onHoverEnter, onHoverLeave } =
    useCollapseDrawer();

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);

  const [dashSwitcherOpen, setDashSwitcherOpen] = useState(false);
  const dashSwitcherRef = useRef(null);

  const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;
  const orgs = [
    {
      name: 'Iqam Global',
      imageUrl: `${publicRuntimeConfig.bunny.cdn.urlMedia}/${publicRuntimeConfig.bunny.storage.prefix}organization-favicon/61b4794cfe52d41f557f1acc.png?w=128`,
      id: '61b4794cfe52d41f557f1acc',
    },
    {
      name: 'Dunia Anak Alam Foundation',
      imageUrl: '/static/mock-images/daa.png',
      id: '60f524626f471e54c18e39b9',
    },
    // {
    //   name: 'Andri 2021',
    //   imageUrl: '/static/mock-images/ybkb.jpeg',
    //   id: '611b842b7dbdecf4c46b631e',
    // },
    // {
    //   name: 'Pasuruan Youth Forum',
    //   imageUrl: '/static/mock-images/pyf.png',
    //   id: 'pyf',
    // },
  ];

  const realName = currentName ?? currentUser?.fullName;
  const realSubtitle = currentSubtitle ?? currentUser?.email;
  const realImageUrl = currentImageUrl ?? currentUser?.imageUrl;
  const renderContent = (
    <Scrollbar
      sx={{
        height: '100%',
        '& .simplebar-content': {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          px: 2.5,
          pt: 3,
          pb: 2,
          ...(isCollapse && {
            alignItems: 'center',
          }),
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <NextLink href="/">
            <Box sx={{ display: 'inline-flex' }}>
              <Logo />
            </Box>
          </NextLink>

          <MHidden width="lgDown">
            {!isCollapse && (
              <IconCollapse onToggleCollapse={onToggleCollapse} collapseClick={collapseClick} />
            )}
          </MHidden>
        </Stack>

        {isCollapse ? (
          <>
            {!currentUser?.imageUrl && (
              <Avatar
                alt={realName}
                src="/static/mock-images/avatars/avatar_default.jpg"
                sx={{ mx: 'auto', mb: 2 }}
              />
            )}
            {currentUser?.imageUrl && <Avatar alt={realName} src={realImageUrl} />}
          </>
        ) : (
          <AccountStyle
            ref={dashSwitcherRef}
            onClick={() => setDashSwitcherOpen(true)}
            sx={{ cursor: 'pointer' }}
          >
            {!currentName && <Skeleton variant="rectangular" sx={{ height: 64 }}></Skeleton>}
            {currentName && (
              <Avatar
                alt={realName}
                src={realImageUrl ?? '/static/mock-images/avatars/avatar_default.jpg'}
              />
            )}
            {currentName && (
              <Box sx={{ ml: 2 }}>
                <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                  {realName}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    maxWidth: 150,
                  }}
                >
                  {realSubtitle}
                </Typography>
              </Box>
            )}
          </AccountStyle>
        )}
      </Stack>

      <Popover
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={dashSwitcherOpen}
        onClose={() => setDashSwitcherOpen(false)}
        anchorEl={dashSwitcherRef.current}
      >
        <Box sx={{ p: 2 }}>
          <MenuItem
            onClick={() => {
              router.push(getMyPaths().my);
              setDashSwitcherOpen(false);
            }}
          >
            <ListItemIcon>
              <Box
                component="img"
                alt="Hendy Irawan"
                src={currentUser?.imageUrl}
                sx={{ height: 28 }}
              />
            </ListItemIcon>
            <ListItemText>{currentUser?.fullName}</ListItemText>
          </MenuItem>
          {orgs.map(org => (
            <MenuItem
              key={org.id}
              onClick={() => {
                router.push(getOrgDashboardPaths(org.id).overview);
                setDashSwitcherOpen(false);
              }}
            >
              <ListItemIcon>
                <Box component="img" alt={org.name} src={org.imageUrl} sx={{ height: 28 }} />
              </ListItemIcon>
              <ListItemText>{org.name}</ListItemText>
            </MenuItem>
          ))}
          {config.admin.dashboard.enabled && (
            <MenuItem
              onClick={() => {
                router.push(getAdminDashboardPaths().overview);
                setDashSwitcherOpen(false);
              }}
            >
              <ListItemIcon>
                <Box component="img" alt="Tmra" src="/static/logo.svg" sx={{ height: 28 }} />
              </ListItemIcon>
              <ListItemText>Tmra</ListItemText>
            </MenuItem>
          )}
        </Box>
      </Popover>

      <NavSection navConfig={navConfig} isShow={!isCollapse} />
    </Scrollbar>
  );

  return (
    <RootStyle
      sx={{
        width: {
          lg: isCollapse ? COLLAPSE_WIDTH : DRAWER_WIDTH,
        },
        ...(collapseClick && {
          position: 'absolute',
        }),
      }}
    >
      <MHidden width="lgUp">
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>

      <MHidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          onMouseEnter={onHoverEnter}
          onMouseLeave={onHoverLeave}
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default',
              ...(isCollapse && {
                width: COLLAPSE_WIDTH,
              }),
              ...(collapseHover && {
                borderRight: 0,
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
                boxShadow: theme => theme.customShadows.z20,
                bgcolor: theme => alpha(theme.palette.background.default, 0.88),
              }),
            },
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );
}
