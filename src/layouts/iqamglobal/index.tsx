import React, { useEffect, useState } from 'react';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { Box, Stack } from '@mui/material';
// components
//
import MainFooter from './MainFooter';
import MainHeader from './MainHeader';
import { OrganizationInfoFragment } from '@generated/graphql';
import NewLoadingScreen from '../whitelabel/NewLoadingScreen';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
  organization?: OrganizationInfoFragment | null;
  imgLogoUrl?: string;
};

export default function MainDonorLayout({ children, organization, imgLogoUrl }: Props) {
  const router = useRouter();
  const isHome = router.pathname === '/';
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleStart = (url: string) => {
      // console.debug('LoadingScreen.handleStart url=%s router.asPath=%s', url, router.asPath);
      return url != router.pathname && setLoading(true);
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleComplete = (url: string) => {
      // console.debug('LoadingScreen.handleComplete url=%s router.asPath=%s', url, router.asPath);
      return setLoading(false);
    };

    if (router.asPath === router.pathname) {
      router.events.on('routeChangeStart', handleStart);
      router.events.on('routeChangeComplete', handleComplete);
      router.events.on('routeChangeError', handleComplete);
    }

    setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.events]);

  return loading ? (
    <NewLoadingScreen organization={organization} imgLogo={imgLogoUrl} />
  ) : (
    <Stack sx={{ minHeight: 1 }}>
      <MainHeader imgLogo={imgLogoUrl} />

      {children}

      <MainFooter imgLogo={imgLogoUrl} />
    </Stack>
  );
}
