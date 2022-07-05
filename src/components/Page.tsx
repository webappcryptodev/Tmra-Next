import Head from 'next/head';
import { forwardRef, ReactNode } from 'react';
// material
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface PageProps extends BoxProps {
  children: ReactNode;
  title?: string;
  favicon?: string | null;
}

const Page = forwardRef<HTMLDivElement, PageProps>(
  ({ children, title = '', favicon = null, ...other }, ref) => (
    <Box ref={ref} {...other}>
      <Head>
        <title>{title}</title>
        {favicon && <link rel="icon" type="image/png" sizes="32x32" href={favicon} />}
      </Head>
      {children}
    </Box>
  ),
);

export default Page;
