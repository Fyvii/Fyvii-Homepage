import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import '@fontsource/roboto-slab';
import theme from './components/theme';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
