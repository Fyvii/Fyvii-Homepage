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

function About() {
  return (
    <Container maxW="sm" p="10px">
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
                src="https://i.pinimg.com/564x/93/e9/b2/93e9b2c063be5cea37ef6f751a68935c.jpg"
                alt="nuur"
              ></Image>
            </HStack>
          </Box>
          <Text fontSize="md">
            Welcome to my personal portfolio! Here you can check out more about
            myself and career!
          </Text>
          <Text color="gray.500" fontSize="md" paddingTop="5px">
            Check out my latest projects!
          </Text>
        </VStack>
      </Center>
    </Container>
  );
}

export default About;
