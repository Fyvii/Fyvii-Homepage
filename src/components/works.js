import React from 'react';
import './works.css';
import { Box, VStack, HStack, Image, Badge, Link } from '@chakra-ui/react';

function Works() {
  return (
    <Box>
      <HStack align="baseline">
        <VStack spacing="15px" paddingTop="5px" paddingBottom="5px">
          <Link href="/works">
            <Badge
              borderRadius="full"
              px="3"
              colorScheme="green"
              marginLeft={1}
            >
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
        <VStack spacing="15px" paddingTop="5px" paddingBottom="5px">
          <Link href="/works">
            <Badge
              borderRadius="full"
              px="3"
              colorScheme="green"
              marginLeft={1}
            >
              Facial Recognition
            </Badge>
          </Link>
          <Image
            src="https://i.pinimg.com/564x/f8/67/ee/f867ee8f3ffc6bdc2a6233d4237a7ee5.jpg"
            objectFit="cover"
            borderRadius="12px"
            alt="facialrecognition"
            className="robofriends"
          ></Image>
        </VStack>
        <VStack spacing="15px" paddingTop="5px" paddingBottom="5px">
          <Link href="/works">
            <Badge
              borderRadius="full"
              px="3"
              colorScheme="green"
              marginLeft={1}
            >
              Nasa POD
            </Badge>
          </Link>
          <Image
            src="https://i.pinimg.com/564x/6e/06/bd/6e06bd3cf4fb660d53dc0b87ee228660.jpg"
            objectFit="cover"
            borderRadius="12px"
            alt="facialrecognition"
            className="robofriends"
          ></Image>
        </VStack>
      </HStack>
    </Box>
  );
}

export default Works;
