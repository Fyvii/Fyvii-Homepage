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
  return (
    <HStack justify="space-evenly" p={5}>
      <Box display="flex">
        <Icon as={GiDna2} />
        <Heading fontSize="xl">
          <Link>Noor Kahalah</Link>
        </Heading>
      </Box>

      <Link>Works</Link>
      <Link>Posts</Link>

      <Box>
        <Icon as={FaGithub} />
        <Link>Github Source</Link>
      </Box>
      <ColorModeSwitcher className="switch" />
    </HStack>
  );
}

export default Navbar;
