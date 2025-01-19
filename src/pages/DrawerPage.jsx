import React from 'react';
    import {
      Drawer,
      DrawerBody,
      DrawerHeader,
      DrawerOverlay,
      DrawerContent,
      DrawerCloseButton,
      Button,
      useDisclosure,
      Text,
      Box
    } from '@chakra-ui/react';
    import HomeLink from '../components/HomeLink';

    function DrawerPage() {
      const { isOpen, onOpen, onClose } = useDisclosure();
      const btnRef = React.useRef();

      return (
        <Box p={5}>
          <Text fontSize="xl" mb={4}>
            <b>Drawer Example</b>
          </Text>
          <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
            Open Drawer
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Drawer Header</DrawerHeader>

              <DrawerBody>
                <Text>
                  This is the content of the drawer. You can add any content here.
                </Text>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          <Text mt={4}>
            This example shows a simple drawer that slides in from the left. The <code>useDisclosure</code> hook manages the open/close state.
          </Text>
          <HomeLink />
        </Box>
      );
    }

    export default DrawerPage;
