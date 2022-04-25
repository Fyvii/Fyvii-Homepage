import React from 'react';
import {
  Box,
  Text,
  VStack,
  Heading,
  Image,
  HStack,
  Center,
} from '@chakra-ui/react';

function About() {
  return (
    <Center>
      <VStack>
        <Box>
          <HStack>
            <Heading as="h1" size="lg" color="">
              Noor Kahalah
            </Heading>
            <Image
              boxSize="100px"
              borderRadius="full"
              objectFit="cover"
              src=" https://i.pinimg.com/564x/e5/2a/51/e52a512d1eee143e47ffd1b411bc523c.jpg"
              alt="nuur"
            ></Image>
          </HStack>
        </Box>
        <Text fontSize="md">
          Welcome to my personal portfolio! Here you can check out more about
          myself and career!
        </Text>
        <Text color="gray.500" fontSize="md">
          Check out my latest projects!
        </Text>
      </VStack>
    </Center>
  );
}

export default About;
