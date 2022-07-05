import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Snackbar(theme: Theme) {
  return {
    MuiSnackbarContent: {
      styleOverrides: {
        root: {},
      },
    },
  };
}
