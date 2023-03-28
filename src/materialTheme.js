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
          fontWeight: 400,
          letterSpacing: .75,
          // borderWidth: 2,
          ":hover": {
            borderRadius: 0,
            // borderWidth: 2,
          }
        },
        
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "none",
          boxShadow: "none",
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textTransform: "uppercase",
          textDecoration: "none",
          color: "#efebe5"
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 0
        }
      }
    }
  },
  palette: {
    mode: 'dark',
    primary: {
      // main: 'rgb(237, 165, 17)',
      main: '#ea7b00',
    },
    secondary: {
      main: '#0f5bd7',
      // main: '#193ab8',
    },
    info: {
      main: '#d4d700',
    },
    error: {
      main: '#ea0800',
    },
    success: {
      main: '#5bd800',
    },
    background: {
      default: 'rgb(38,37,37)',
      lighter: 'rgba(239,235,229,0.75)',
      paper: '#24242b',
    },
    text: {
      primary: '#efebe5',
      secondary: 'rgba(239,235,229,0.8)',
      disabled: 'rgba(239,235,229,0.55)',
    },
  },
  typography: {
    fontFamily: 'Noto Sans Lao',
    h1: {
      fontFamily: 'Manrope',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    h2: {
      fontFamily: 'Manrope',
      fontWeight: 700,
      textTransform: 'uppercase',

    },
    h3: {
      fontFamily: 'Manrope',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 1
    },
    h4: {
      fontFamily: 'Manrope',
      textTransform: 'uppercase',
      letterSpacing: 15,
      fontWeight: 800,

    },
    h5: {
      fontFamily: 'Manrope',
      letterSpacing: 6,
      fontWeight: 600,
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
      fontFamily: 'Noto Sans Lao',
    },
  },
});