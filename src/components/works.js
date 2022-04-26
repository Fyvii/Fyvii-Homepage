import React from 'react';
import './works.css';
import { Box, VStack, Image, Badge } from '@chakra-ui/react';

function Works() {
  return (
    <Box>
      <VStack spacing="10px">
        <Badge borderRadius="full" px="2" colorScheme="green" marginLeft={1}>
          RoboFriends
        </Badge>
        <Image
          src="https://i.pinimg.com/564x/cd/37/fa/cd37fac37c849b2b513abdb576592f97.jpg"
          objectFit="cover"
          borderRadius="12px"
          alt="robofriends"
          className="robofriends"
        ></Image>
      </VStack>
    </Box>
  );
}

export default Works;
