/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
// next
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
//
import MainFooter from './MainFooter';
import MainNavbar from './MainNavbar';
import CampaignDetailsNavbar from './CampaignDetailsNavbar';
// components
import NewLoadingScreen from '@layouts/whitelabel/NewLoadingScreen';

// ----------------------------------------------------------------------

const delay = 2.5;

type MainLayoutProps = {
  children: ReactNode;
  campaignDetails: boolean;
};

export default function MainLayout({ children, campaignDetails }: MainLayoutProps): JSX.Element {
  const { pathname } = useRouter();
  const isHome = pathname === '/';

  // Hendy's note: do not use "show" animation, it makes it feel slow
  const [show, setShow] = useState(false);
  // useEffect(() => {
  //   const timer1 = setTimeout(() => setShow(false), delay * 1000);
  //   return () => {
  //     clearTimeout(timer1);
  //   };
  // }, []);

  return show ? (
    <NewLoadingScreen />
  ) : (
    <>
      {campaignDetails ? <CampaignDetailsNavbar /> : <MainNavbar />}
      <div>{children}</div>
      <MainFooter />
    </>
  );
}
