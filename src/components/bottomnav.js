import { HStack, Text, Heading, IconButton } from '@chakra-ui/react';
import { FaLinkedinIn, FaGithubAlt, FaInstagram } from 'react-icons/fa';
import React from 'react';

// This method is a reusable external link component because our UI doesnt allow IconButtons to be external links.

export const Bottom = () => {
  // This method registers an external link to a new tab for our IconButtons
  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/noorkahalah/');
  };

  return (
    <HStack
      justify="center"
      bg="green.100"
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
      <IconButton icon={<FaGithubAlt />} colorScheme="yellow" />
      <IconButton icon={<FaInstagram />} colorScheme="red" />
    </HStack>
  );
};
