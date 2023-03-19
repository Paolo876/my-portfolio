import { createTheme } from '@mui/material';
import bgPattern from "./assets/bg-pattern.png";


export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: bgPattern,
        },
      },
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#0d0d10',
      paper: '#24242b',
    },
  },
});