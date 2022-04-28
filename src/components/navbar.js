import React from 'react';

import {
  useColorMode,
  useColorModeValue,
  IconButton,
  Heading,
  Box,
  Link,
  Icon,
  HStack,
  Show,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
//Icons
import { FaMoon, FaSun, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HamburgerIcon } from '@chakra-ui/icons';

//React Router
import { NavLink } from 'react-router-dom';

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

//Navigation
function Navbar(props) {
  // This method registers an external link to a new tab for our IconButtons
  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/noorkahalah/');
  };

  return (
    <HStack justify="space-between" p={4}>
      <Box display="flex">
        <Heading fontSize="lg">
          <NavLink to="/">Noor Kahalah</NavLink>
        </Heading>
      </Box>

      <Show above="md">
        <NavLink exact to="/works">
          Works
        </NavLink>
      </Show>

      <Show above="md">
        <NavLink to="/posts">Posts</NavLink>
      </Show>
      <Show above="md">
        <IconButton
          icon={<FaLinkedinIn />}
          colorScheme="linkedin"
          to="https://www.linkedin.com/in/noorkahalah/"
          onClick={handleLinkedIn}
        />
      </Show>
      <Show above="md">
        <Box>
          <Icon as={FaGithub} />
          <Link href="https://github.com/Fyvii/Fyvii-Homepage">
            Github Source
          </Link>
        </Box>
      </Show>
      <HStack>
        <Show below="md">
          <Menu>
            <MenuButton as={Button} color="current">
              <Icon as={HamburgerIcon}></Icon>
            </MenuButton>
            <MenuList>
              <MenuItem>Home</MenuItem>
              <MenuItem>Works</MenuItem>
              <MenuItem>Posts</MenuItem>
              <MenuItem>LinkedIn</MenuItem>
              <MenuItem>Github Source</MenuItem>
            </MenuList>
          </Menu>
        </Show>
        <ColorModeSwitcher className="switch" />
      </HStack>
    </HStack>
  );
}

export default Navbar;
