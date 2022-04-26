import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import About from './components/about';

function App() {
  return (
    <Box>
      <Box display="flex" justifyContent="flex-end" padding={3}>
        <ColorModeSwitcher />
      </Box>
      <Flex justify="space-evenly">
        <About />
        <About />
      </Flex>
    </Box>
  );
}

export default App;
