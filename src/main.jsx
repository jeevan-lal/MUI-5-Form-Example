import * as React from 'react';
import { createRoot } from 'react-dom/client';
// Router
import { RouterProvider, BrowserRouter } from "react-router-dom";
// MUI
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
// Router
import router from './Router/index';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  </React.StrictMode>
);
