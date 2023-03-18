import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        mode: 'dark',
        type: "dark",
        primary: {
          main: '#474e8d',
        },
        secondary: {
          main: '#d3547d',
        },
        background: {
          default: '#141E30',
          paper: '#243B55',
        },
        text: {
          primary: '#FAF9F6',
        },
      },
      typography: {
        h1: {
          fontSize: 35,
          fontFamily: 'Manrope',
          fontWeight: 600,
          letterSpacing: '0.01em',
        },
        h2: {
          fontSize: 32,
          fontFamily: 'Manrope',
          fontWeight: 600,
        },
      },
});