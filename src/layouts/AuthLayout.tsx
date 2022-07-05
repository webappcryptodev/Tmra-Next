import React, { ReactNode } from 'react';
import RouterLink from 'next/link';
// material
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
// components
import Logo from '@components/Logo';
import { MHidden } from '@components/@material-extend';
import LanguagePopover from '@layouts/dashboard/LanguagePopover';

// ----------------------------------------------------------------------

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

// ----------------------------------------------------------------------

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <HeaderStyle>
      <Box sx={{ display: 'flex', width: '24rem', justifyContent: 'space-between' }}>
        <RouterLink href="/" passHref>
          <Logo />
        </RouterLink>
        <LanguagePopover />
      </Box>

      <MHidden width="smDown">
        <Typography
          variant="body2"
          sx={{
            mt: { md: -2 },
          }}
        >
          {children}
        </Typography>
      </MHidden>
    </HeaderStyle>
  );
}
