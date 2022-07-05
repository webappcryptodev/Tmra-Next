import Logo from '@components/Logo';
import LanguagePopover from '@layouts/dashboard/LanguagePopover';
import { styled } from '@mui/material/styles';
import RouterLink from 'next/link';
import React from 'react';

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

export default function LandingLayout({ children }: React.PropsWithChildren<unknown>): JSX.Element {
  return (
    <>
      <HeaderStyle>
        <RouterLink href="/">
          <Logo />
        </RouterLink>
        <LanguagePopover />
      </HeaderStyle>
      {/* <AppBar>
        <Logo />
        
      </AppBar> */}
      {children}
    </>
  );
}
