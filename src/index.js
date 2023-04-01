import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { theme } from "./materialTheme";
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { AppContextProvider } from './context/AppContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);