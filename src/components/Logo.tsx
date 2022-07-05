import { Box, BoxProps } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

// ----------------------------------------------------------------------

// const Logo = React.forwardRef<unknown, BoxProps>(({ sx }) => {
//   // const theme = useTheme();
//   // const PRIMARY_LIGHT = theme.palette.primary.light;
//   // const PRIMARY_MAIN = theme.palette.primary.main;
//   // const PRIMARY_DARK = theme.palette.primary.dark;
//   const router = useRouter();
//   const isArabic = router.locale?.startsWith('ar');
//   return (
//     <a>
//       <Box
//         component="img"
//         src={`/static/tmra-brand-light-${isArabic ? 'ar' : 'en'}.svg`}
//         sx={{ width: 120, height: 40, ...sx }}
//       />
//     </a>
//   );
// });
// Logo.displayName = 'Logo';

interface LogoProps extends BoxProps {
  href?: string;
  logoUrl?: string | undefined;
}

// const Logo = ({ sx }: LogoProps, ref: any) => {
//   const theme = useTheme();
//   const PRIMARY_LIGHT = theme.palette.primary.light;
//   const PRIMARY_MAIN = theme.palette.primary.main;
//   const PRIMARY_DARK = theme.palette.primary.dark;
//   const router = useRouter();
//   const isArabic = router.locale?.startsWith('ar');

//   return (
//     <img
//       src={`/static/tmra-brand-light-${isArabic ? 'ar' : 'en'}.svg`}
//       style={{ width: '120px' }}
//     />
//   );
//   /* <Box ref={ref} sx={{ width: 120, height: 40, cursor: 'pointer', ...sx }}> */
//   /* </Box> */
// };

// const Logo = React.forwardRef<unknown, LogoProps>(({ sx }, ref) => {
//   const theme = useTheme();
//   const PRIMARY_LIGHT = theme.palette.primary.light;
//   const PRIMARY_MAIN = theme.palette.primary.main;
//   const PRIMARY_DARK = theme.palette.primary.dark;
//   const router = useRouter();
//   const isArabic = router.locale?.startsWith('ar');

//   return (
//     <img
//       src={`/static/tmra-brand-light-${isArabic ? 'ar' : 'en'}.svg`}
//       style={{ width: '120px' }}
//     />
//   );
//   /* <Box ref={ref} sx={{ width: 120, height: 40, cursor: 'pointer', ...sx }}> */
//   /* </Box> */
// });

const Logo = React.forwardRef<unknown, LogoProps>(({ sx, href, logoUrl }, ref) => {
  // const theme = useTheme();
  // const PRIMARY_LIGHT = theme.palette.primary.light;
  // const PRIMARY_MAIN = theme.palette.primary.main;
  // const PRIMARY_DARK = theme.palette.primary.dark;
  const router = useRouter();
  const isArabic = router.locale?.startsWith('ar');
  if (href) {
    return (
      <a href={href}>
        <Box
          ref={ref}
          component="img"
          src={logoUrl ? logoUrl : `/static/tmra-brand-light-${isArabic ? 'ar' : 'en'}.svg`}
          sx={{ width: 120, height: 40, ...sx }}
        />
      </a>
    );
  } else {
    return (
      <Box
        ref={ref}
        component="img"
        src={logoUrl ? logoUrl : `/static/tmra-brand-light-${isArabic ? 'ar' : 'en'}.svg`}
        sx={{ width: 120, height: 40, ...sx }}
      />
    );
  }
});
Logo.displayName = 'Logo';

export default Logo;
