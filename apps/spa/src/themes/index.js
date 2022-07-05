import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: '"Noto Sans", sans-serif',
    button: {
      textTransform: 'none',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#051424',
      paper: '#051424',
    },
  },
  typography: {
    fontFamily: '"Noto Sans", sans-serif',
    fontSize: 12,
    button: {
      textTransform: 'none',
    },
  },
});
