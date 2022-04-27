import React from 'react';
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  Link,
  Heading,
  Box,
  Icon,
  HStack,
} from '@chakra-ui/react';
import { FaMoon, FaSun, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { GiDna2 } from 'react-icons/gi';
// This handles our Dark/Light Mode Switch
export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="md"
      fontSize="xl"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      display="flex"
      color="current"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};

function Navbar() {
  // This method registers an external link to a new tab for our IconButtons
  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/noorkahalah/');
  };

  return (
    <HStack justify="space-evenly" p={4}>
      <Box display="flex">
        <Icon as={GiDna2} color="purple.400" />
        <Heading fontSize="xl">
          <Link to="/home">Noor Kahalah</Link>
        </Heading>
      </Box>
      <Link to="/works">Works</Link>
      <Link to="/posts">Posts</Link>
      <IconButton
        icon={<FaLinkedinIn />}
        colorScheme="linkedin"
        to="https://www.linkedin.com/in/noorkahalah/"
        onClick={handleLinkedIn}
      />

      <Box>
        <Icon as={FaGithub} />
        <Link href="https://github.com/Fyvii/Fyvii-Homepage">
          Github Source
        </Link>
      </Box>
      <ColorModeSwitcher className="switch" />
    </HStack>
  );
}

export default Navbar;
