import React from 'react';
    import { Icon, Text, Box } from '@chakra-ui/react';
    import { StarIcon, EmailIcon } from '@chakra-ui/icons';
    import HomeLink from '../components/HomeLink';

    function IconPage() {
      return (
        <Box p={5}>
          <Text fontSize="xl" mb={4}>
            <b>Icon Example</b>
          </Text>
          <Icon as={StarIcon} w={8} h={8} color="yellow.500" />
          <Text mt={4}>
            This example shows a simple icon. The <code>Icon</code> component is used to create the icon.
          </Text>
          <Text mt={4}>
            <b>Email Icon</b>
          </Text>
          <Icon as={EmailIcon} w={8} h={8} color="blue.500" />
          <HomeLink />
        </Box>
      );
    }

    export default IconPage;
