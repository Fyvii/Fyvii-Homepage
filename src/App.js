import React from 'react';
import { VStack, Box } from '@chakra-ui/react';
import Navbar from './components/navbar';
import About from './components/about';

function App() {
  return (
    <VStack>
      <Box className="header" w="100%">
        <Navbar />
      </Box>
      <Box className="information" w="100%">
        <About />
      </Box>
    </VStack>
  );
}

export default App;
