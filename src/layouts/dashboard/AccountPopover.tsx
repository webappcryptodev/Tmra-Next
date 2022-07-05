/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import homeFill from '@iconify/icons-eva/home-fill';
import personFill from '@iconify/icons-eva/person-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import settings2Fill from '@iconify/icons-eva/settings-2-fill';
import { Icon } from '@iconify/react';
import { Avatar, Box, Button, Divider, IconButton, MenuItem, Typography } from '@mui/material';
// material
import { alpha } from '@mui/material/styles';
import { startSignOut } from '../../redux/slices/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { useEffect, useRef, useState } from 'react';
// import { Link as RouterLink, useNavigate } from 'react-router-dom';
import RouterLink from 'next/link';
import { useRouter } from 'next/router';
// components
import MenuPopover from '../../components/MenuPopover';
import { app } from '@redux/slices/auth/realm';
import { getLandingMainPaths, getOrgDashboardPaths } from '@routes/paths';

import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';
import { getOrganizationData } from '@redux/slices/organization/organizationSlice';
//
// import account from '../../_mocks_/account';

// ----------------------------------------------------------------------

const paths = getLandingMainPaths();
const organizationId =
  typeof window !== 'undefined' ? localStorage.getItem('organizationId') : null;
const orgsPaths = getOrgDashboardPaths(organizationId!);

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
    linkTo: orgsPaths.settingsAccount,
  },
  {
    label: 'Reset Password',
    icon: lockFill,
    linkTo: orgsPaths.settingPassword,
  },
];

// ----------------------------------------------------------------------

export interface ManagedOrganization {
  _id?: string;
  linkTo: string;
}

export default function AccountPopover() {
  // The `state` arg is correctly typed as `RootState` already
  const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;
  const auth = useAppSelector(state => state.auth);
  const currentUser = useAppSelector(state => state.currentUser);
  const { organizationData } = useAppSelector(state => state.organization);

  const [managedOrganizations, setManagedOrganizations] = useState<ManagedOrganization[]>([]);
  const dispatch = useAppDispatch();
  console.debug('currentUser is :', currentUser?.id);
  // const navigate = useNavigate();
  const router = useRouter();

  const isLogin = typeof window !== 'undefined' ? localStorage.getItem('token') : '';

  useEffect(() => {
    if (!isLogin) {
      console.log('token ', isLogin);
      console.info('Current user is not signed in, redirecting to sign in page...');
      router.push(paths.signIn);
    }
  }, []);

  useEffect(() => {
    if (managedOrganizations && managedOrganizations?.length >= 1) {
      dispatch(getOrganizationData(managedOrganizations[0]._id as string));
    }
  }, [managedOrganizations]);

  useEffect(() => {
    const fetchManagedNonprofits = async () => {
      console.debug('Listing managed nonprofits for', app.currentUser?.profile.ssoId, '...');

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
    };

    if (managedOrganizations.length === 0) {
      fetchManagedNonprofits();
    }
  }, []);

  if (managedOrganizations && managedOrganizations?.length >= 1) {
    MENU_OPTIONS[0].linkTo = `/manage/organization/${managedOrganizations[0]._id}`;
    MENU_OPTIONS[1].linkTo = `/manage/organization/${managedOrganizations[0]._id}/settings/account`;
  }
  if (managedOrganizations && managedOrganizations?.length < 1) {
    MENU_OPTIONS[0].linkTo = `/my`;
    MENU_OPTIONS[1].linkTo = `/my/settings`;
  }

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const signOut = async () => {
    // localStorage.clear();
    await startSignOut(auth.refreshToken, dispatch, router.push.bind(router));
    // await app.currentUser?.logOut();
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: theme => alpha(theme.palette.grey[900], 0.72),
            },
          }),
        }}
        data-cy="dashboard.dashboard-navbar.avatar"
      >
        <Avatar
          src={
            organizationData?.aboutPicture
              ? organizationData.aboutPicture.indexOf('http') > -1
                ? organizationData?.aboutPicture
                : `${publicRuntimeConfig.bunny.cdn.urlMedia}/${organizationData?.aboutPicture}`
              : ''
          }
          alt="photoURL"
        />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            {currentUser?.fullName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {currentUser?.email}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        {MENU_OPTIONS.map(option => (
          <MenuItem
            key={option.label}
            onClick={() => router.push(option.linkTo)}
            /* href={option.linkTo}
            component={RouterLink} */
            /* onClick={handleClose} */
            sx={{ typography: 'body2', py: 1, px: 2.5 }}
          >
            <Box
              component={Icon}
              icon={option.icon}
              sx={{
                mr: 2,
                width: 24,
                height: 24,
              }}
            />

            {option.label}
          </MenuItem>
        ))}

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button fullWidth color="inherit" variant="outlined" onClick={signOut}>
            Logout
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}
