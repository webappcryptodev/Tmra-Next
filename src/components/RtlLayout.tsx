import { useEffect, ReactNode } from 'react';
// rtl
import rtlPlugin from 'stylis-plugin-rtl';
// emotion
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
// material
import { useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------

type RtlLayoutProps = {
  children?: ReactNode;
};

export default function RtlLayout({ children }: RtlLayoutProps) {
  const theme = useTheme();

  useEffect(() => {
    document.dir = theme.direction;
  }, [theme.direction]);

  const cacheRtl = createCache({
    key: theme.direction === 'rtl' ? 'rtl' : 'css',
    // @ts-ignore
    stylisPlugins: theme.direction === 'rtl' ? [rtlPlugin] : [],
  });

  cacheRtl.compat = true;

  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
}
