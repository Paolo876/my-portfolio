import { createTheme } from '@mui/material';
import bgImage from "./assets/noise.png"

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          width: "100vw",
          height: "100vh",
          background: 'rgb(38,37,37)',
          // background     : `radial-gradient(circle, rgba(46,45,45,1) 0%, ${bgImage} 92%)`,
          background     : `radial-gradient(circle, rgba(46,45,45,1) 0%, rgba(38,37,37,1) 92%)`,
          // backgroundImage: `url(${bgImage})`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          // borderWidth: 2,
          ":hover": {
            borderRadius: 0,
            // borderWidth: 2,
          }
        },
        
      },
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffe082',
    },
    secondary: {
      main: '#3f4998',
    },
    background: {
      default: '#0d0d10',
      paper: '#24242b',
    },
    text: {
      primary: '#efebe5',
      secondary: 'rgba(239,235,229,0.8)',
      disabled: 'rgba(239,235,229,0.55)',
    },
  },
  typography: {
    fontFamily: 'Roboto Condensed',
    h1: {
      fontFamily: 'Manrope',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    h2: {
      fontFamily: 'Manrope',
      fontWeight: 600,
      textTransform: 'uppercase',

    },
    h3: {
      fontFamily: 'Manrope',
      fontWeight: 600,
      textTransform: 'uppercase',
    },
    h4: {
      fontFamily: 'Manrope',
      textTransform: 'uppercase',
    },
    h5: {
      fontFamily: 'Manrope',
      fontWeight: 400,
      textTransform: 'uppercase',
    },
    h6: {
      fontFamily: 'Manrope',
      textTransform: 'uppercase',
    },
    subtitle1: {
      fontWeight: 300,
    },
    subtitle2: {
      fontWeight: 300,
    },
    body1: {
      fontWeight: 300,
    },
    body2: {
      fontWeight: 300,
    },
    button: {
      fontFamily: 'Roboto Condensed',
    },
  },
});