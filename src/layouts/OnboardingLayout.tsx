import React, { ReactNode } from 'react';
// next
import RouterLink from 'next/link';
// material
import { styled } from '@mui/material/styles';
// components
import Logo from '../components/Logo';
import { Box, Stack } from '@mui/material';
import LanguagePopover from '@layouts/dashboard/LanguagePopover';
import AccountPopover from './dashboard/AccountPopover';
import NotificationsPopover from './dashboard/NotificationsPopover';
import config from '@configuration';

// ----------------------------------------------------------------------

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: '100%',
  position: 'absolute',
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(5, 5, 0),
  },
}));

// ----------------------------------------------------------------------

type LogoOnlyLayoutProps = {
  children?: ReactNode;
};

export default function OnboardingLayout({ children }: LogoOnlyLayoutProps) {
  return (
    <>
      <HeaderStyle>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <RouterLink href="/" passHref>
            <Logo />
          </RouterLink>
          {/* <LanguagePopover />
          <AccountPopover /> */}
          <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
            <LanguagePopover />
            {config.org.dashboard.notifications.enabled && <NotificationsPopover />}
            <AccountPopover />
          </Stack>
        </Box>
      </HeaderStyle>
      {children}
    </>
  );
}
