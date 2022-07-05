import React, { ReactNode } from 'react';
// next
import RouterLink from 'next/link';
// material
import { styled } from '@mui/material/styles';
// components
import Logo from '../components/Logo';
import { Box } from '@mui/material';
import LanguagePopover from '@layouts/dashboard/LanguagePopover';
import AccountPopover from './dashboard/AccountPopover';

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

export default function LogoOnlyLayout({ children }: LogoOnlyLayoutProps) {
  return (
    <>
      <HeaderStyle>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <RouterLink href="/" passHref>
            <Logo />
          </RouterLink>
          <LanguagePopover />
        </Box>
      </HeaderStyle>
      {children}
    </>
  );
}
