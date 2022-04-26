import React from 'react';
import {
  Container,
  Text,
  Heading,
  Image,
  VStack,
  HStack,
  Box,
} from '@chakra-ui/react';
import Works from './works';

// This function is a reusable header component in our home page sections
export function Bio(props) {
  return (
    <div>
      <Heading size="md" as="u" color="green.400">
        {props.header}
      </Heading>
      <Text paddingTop="20px" fontSize="lg">
        {props.text}
      </Text>
    </div>
  );
}

function About() {
  return (
    <Container maxW="lg" h="100%" padding="15px">
      <VStack spacing="25px" align="start">
        <HStack>
          <Heading paddingRight="10px">Noor Kahalah</Heading>
          <Image
            boxSize="85px"
            objectFit="cover"
            borderRadius="15px"
            src="https://i.pinimg.com/564x/93/e9/b2/93e9b2c063be5cea37ef6f751a68935c.jpg"
          ></Image>
        </HStack>
        <Text color="gray.500">Frontend Developer/Designer</Text>
        <Bio
          header="Bio"
          text=" Welcome to my space! I'm a full-stack developer based in New Mexico
          with a passion for building digital spaces. I received my Bachelors
          Degree in biochemistry 🧬 from the University of New Mexico. I later
          decided to drop medicine to pursuit my passion in coding 👾! When
          I'm not online I love to capture film 🎞!"
        />
        <Bio
          header="Hobbies"
          text="Music, Playing Guitar, Film Photography, Design, Skateboarding"
        />
        <Bio header="Work" text="Checkout the latest project!"></Bio>
        <Works />

        <Box>
          <Bio
            header="Socials"
            text="Feel free to reach me or check out my other network platforms!"
          />
        </Box>
      </VStack>
    </Container>
  );
}

export default About;
