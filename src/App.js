import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import About from './components/about';

function App() {
  return (
    <Box textAlign="center" fontSize="xl" className="body">
      <ColorModeSwitcher />
      <About />
    </Box>
  );
}

export default App;
