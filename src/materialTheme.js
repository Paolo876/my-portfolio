import { createTheme } from '@mui/material';
import bgPattern from "./assets/bg-pattern.png"
export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // background: "rgb(28,28,34)",
          // background: "linear-gradient(90deg, rgba(38,38,48,1) 0%, rgba(41,43,57,1) 80%, rgba(51,51,74,1) 100%)",
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