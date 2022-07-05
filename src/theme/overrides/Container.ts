import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Container(theme: Theme) {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {},
      },
    },
  };
}
