import { HStack, Heading, IconButton, Tooltip } from '@chakra-ui/react';
import {
  FaLinkedinIn,
  FaGithubAlt,
  FaSpotify,
  FaMicrosoft,
} from 'react-icons/fa';
import React from 'react';

export const Bottom = () => {
  // This method registers an external link to a new tab for our IconButtons
  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/noorkahalah/');
  };
  const handleGitHub = () => {
    window.open('https://github.com/Fyvii');
  };
  const handleSpotify = () => {
    window.open(
      'https://open.spotify.com/playlist/4ObKLuE0YsHTosTCPfiEi4?si=93ed073960b640ef'
    );
  };

  return (
    <HStack
      justify="center"
      bg="green.50"
      padding={5}
      spacing={5}
      borderRadius="5px"
    >
      <Heading color="gray.600" fontSize="sm">
        @ 2022 Noor Kahalah
      </Heading>
      <IconButton
        icon={<FaLinkedinIn />}
        colorScheme="linkedin"
        onClick={handleLinkedIn}
      />
      <IconButton
        icon={<FaGithubAlt />}
        colorScheme="yellow"
        onClick={handleGitHub}
      />
      <IconButton
        icon={<FaSpotify />}
        colorScheme="green"
        onClick={handleSpotify}
      />

      <Tooltip
        id="tooltip"
        value="nuur.dev@outlook.com"
        label="nuur.dev@outlook.com"
        fontSize="lg"
      >
        <IconButton icon={<FaMicrosoft />} colorScheme="facebook" />
      </Tooltip>
    </HStack>
  );
};
