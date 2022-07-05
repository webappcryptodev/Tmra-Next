//
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import MainFooter from './MainFooter';
import MainNavbar from './MainNavbar';
import config from '@configuration';
// components
import NewLoadingScreen from '@layouts/givingsadaqah/NewLoadingScreen';

// ----------------------------------------------------------------------

export default function WhitelabelLayout({
  children,
  backgroundColor,
  secondColor,
  imgLogoUrl,
  homeURL,
  organization,
}) {
  const router = useRouter();
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
    <>
      <MainNavbar
        backgroundColor={backgroundColor}
        isWhiteLabel={config.whitelabel.landing.enabled}
        logoUrl={imgLogoUrl}
        secondColor={secondColor ? secondColor : undefined}
        homeURL={homeURL ?? '/'}
      />
      <div>{children}</div>
      <MainFooter backgroundColorProps={backgroundColor} imgLogo={imgLogoUrl} />
    </>
  );
}
