import React from 'react';
import { VStack, Box } from '@chakra-ui/react';
import Navbar from './components/navbar';
import About from './components/about';
import Worksection from './components/worksection';
import { Bottom } from './components/bottomnav';
import './App.css';

//React Routing
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <VStack>
      <Box className="navigation" w="100%" position="fixed" top={0} zIndex={2}>
        <Navbar />
      </Box>
      <Box className="information" w="100%" paddingTop="75px">
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/works" element={<Worksection />}></Route>
        </Routes>
      </Box>
      <Box className="bottomnavigation" w="100%">
        <Bottom />
      </Box>
    </VStack>
  );
}

export default App;
