import { HStack, Text, Heading, IconButton } from '@chakra-ui/react';
import { FaLinkedinIn, FaGithubAlt, FaInstagram } from 'react-icons/fa';
import React from 'react';

export const Bottom = () => {
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
      <IconButton icon={<FaLinkedinIn />} colorScheme="blue" />
      <IconButton icon={<FaGithubAlt />} colorScheme="yellow" />
      <IconButton icon={<FaInstagram />} colorScheme="red" />
    </HStack>
  );
};
