import React from 'react';
import { VStack, Box } from '@chakra-ui/react';
import Navbar from './components/navbar';
import About from './components/about';
import { Bottom } from './components/bottomnav';
import './App.css';

function App() {
  return (
    <VStack>
      <Box className="navigation" w="100%" position="fixed" top={0} zIndex={2}>
        <Navbar />
      </Box>
      <Box className="information" w="100%" paddingTop="75px">
        <About />
      </Box>
      <Box className="bottomnavigation" w="100%">
        <Bottom />
      </Box>
    </VStack>
  );
}

export default App;
