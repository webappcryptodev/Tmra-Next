//
import React, { useEffect, useState } from 'react';
import MainFooter from './MainFooter';
import MainNavbar from './MainNavbar';
import config from '@configuration';
// components
import NewLoadingScreen from './NewLoadingScreen';

// ----------------------------------------------------------------------

const delay = 2.5;

// ----------------------------------------------------------------------

export default function WhitelabelLayout({ children, backgroundColor, secondColor, imgLogoUrl }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => setShow(false), delay * 1000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return show ? (
    <NewLoadingScreen />
  ) : (
    <>
      <MainNavbar
        backgroundColor={backgroundColor}
        isWhiteLabel={config.whitelabel.landing.enabled}
        logoUrl={imgLogoUrl}
        secondColor={secondColor ? secondColor : undefined}
      />
      <div>{children}</div>
      <MainFooter backgroundColorProps={backgroundColor} imgLogo={imgLogoUrl} />
    </>
  );
}
