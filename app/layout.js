"use client"

import * as React from 'react';
import "./globals.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import getLPTheme from './getLPTheme';


export default function Layout({ children }) {

  const [mode, setMode] = React.useState('light');
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };


  return (
    <html lang="en">
      <head>
        <title>ERPZ Documentation</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider theme={LPtheme}>
          <AppAppBar mode={mode} toggleColorMode={toggleColorMode}/>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
