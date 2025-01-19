import React from 'react';
    import { Image, Text, Box } from '@chakra-ui/react';
    import HomeLink from '../components/HomeLink';

    function ImagePage() {
      return (
        <Box p={5}>
          <Text fontSize="xl" mb={4}>
            <b>Image Example</b>
          </Text>
          <Image
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            borderRadius="full"
            boxSize="150px"
          />
          <Text mt={4}>
            This example shows a simple image. The <code>Image</code> component is used to display the image.
          </Text>
          <HomeLink />
        </Box>
      );
    }

    export default ImagePage;
