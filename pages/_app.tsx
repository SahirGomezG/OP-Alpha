import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@chakra-ui/core';
import { UserContextProvider } from '../context/store';

import '../styles/global.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App