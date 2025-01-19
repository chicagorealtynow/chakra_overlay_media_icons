import React from 'react';
    import {
      Modal,
      ModalOverlay,
      ModalContent,
      ModalHeader,
      ModalFooter,
      ModalBody,
      ModalCloseButton,
      Button,
      useDisclosure,
      Text,
      Box
    } from '@chakra-ui/react';
    import HomeLink from '../components/HomeLink';

    function ModalPage() {
      const { isOpen, onOpen, onClose } = useDisclosure();

      return (
        <Box p={5}>
          <Text fontSize="xl" mb={4}>
            <b>Modal Example</b>
          </Text>
          <Button colorScheme="blue" onClick={onOpen}>
            Open Modal
          </Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Header</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>
                  This is the content of the modal. You can add any content here.
                </Text>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Text mt={4}>
            This example shows a simple modal. The <code>useDisclosure</code> hook manages the open/close state.
          </Text>
          <HomeLink />
        </Box>
      );
    }

    export default ModalPage;
