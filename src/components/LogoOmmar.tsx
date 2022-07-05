/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, BoxProps } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

// ----------------------------------------------------------------------

interface LogoProps extends BoxProps {
  href?: string;
}

const LogoOmmar = React.forwardRef<unknown, LogoProps>(({ sx, href }, ref) => {
  const router = useRouter();
  const isArabic = router.locale?.startsWith('ar');
  if (href) {
    return (
      <a href={href}>
        <Box
          ref={ref}
          component="img"
          src={`/static/logo-ommar.png`}
          sx={{ width: 120, height: 40, ...sx }}
          data-cy="org.home-page.logo"
        />
      </a>
    );
  } else {
    return (
      <Box
        ref={ref}
        component="img"
        src={`/static/logo-ommar.png`}
        sx={{ width: 120, height: 40, ...sx }}
      />
    );
  }
});

LogoOmmar.displayName = 'LogoOmmar';

export default LogoOmmar;
