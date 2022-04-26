import React from 'react';
import './works.css';
import { Box, VStack, Image, Badge, Link } from '@chakra-ui/react';

function Works() {
  return (
    <Box>
      <VStack spacing="15px">
        <Link href="/works">
          <Badge borderRadius="full" px="3" colorScheme="green" marginLeft={1}>
            RoboFriends
          </Badge>
        </Link>
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
