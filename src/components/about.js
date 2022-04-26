import React from 'react';
import {
  Container,
  Text,
  VStack,
  Heading,
  Image,
  HStack,
  Center,
  Box,
} from '@chakra-ui/react';
import Works from './works';

function About() {
  return (
    <Box>
      <Container maxW="sm" p="10px">
        <VStack>
          <HStack>
            <Heading as="h1" size="lg">
              Noor Kahalah
            </Heading>
            <Image
              boxSize="85px"
              borderRadius="full"
              objectFit="cover"
              src="https://i.pinimg.com/564x/93/e9/b2/93e9b2c063be5cea37ef6f751a68935c.jpg"
              alt="nuur"
            ></Image>
          </HStack>
          <Text fontSize="md" paddingTop="5px" align="center">
            Welcome to my personal portfolio! Here you can check out more about
            myself and career!
          </Text>
          <Text color="gray.500" fontSize="md" paddingTop="50%" align="center">
            Check out my latest projects!
          </Text>
          <Box paddingTop="40px">
            <Works />
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

export default About;
