import React from 'react';
    import { Avatar, AvatarBadge, AvatarGroup, Text, Box } from '@chakra-ui/react';
    import HomeLink from '../components/HomeLink';

    function AvatarPage() {
      return (
        <Box p={5}>
          <Text fontSize="xl" mb={4}>
            <b>Avatar Example</b>
          </Text>
          <Avatar name="John Doe" src="https://bit.ly/dan-abramov" />
          <Text mt={4}>
            This example shows a simple avatar. The <code>Avatar</code> component is used to create the avatar.
          </Text>
          <Text mt={4}>
            <b>Avatar with Badge</b>
          </Text>
          <Avatar name="Jane Doe" src="https://bit.ly/sage-adebayo">
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
          <Text mt={4}>
            <b>Avatar Group</b>
          </Text>
          <AvatarGroup size="md" max={3}>
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Michael Jackson" src="https://bit.ly/code-beast" />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
          </AvatarGroup>
          <HomeLink />
        </Box>
      );
    }

    export default AvatarPage;
