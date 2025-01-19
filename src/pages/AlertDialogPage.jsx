import React, { useState } from 'react';
    import {
      AlertDialog,
      AlertDialogBody,
      AlertDialogFooter,
      AlertDialogHeader,
      AlertDialogContent,
      AlertDialogOverlay,
      Button,
      useDisclosure,
      Text,
      Box
    } from '@chakra-ui/react';
    import HomeLink from '../components/HomeLink';

    function AlertDialogPage() {
      const { isOpen, onOpen, onClose } = useDisclosure();
      const cancelRef = React.useRef();

      return (
        <Box p={5}>
          <Text fontSize="xl" mb={4}>
            <b>Alert Dialog Example</b>
          </Text>
          <Button colorScheme="red" onClick={onOpen}>
            Show Alert
          </Button>

          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Delete Customer
                </AlertDialogHeader>

                <AlertDialogBody>
                  Are you sure? You can't undo this action afterwards.
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="red" onClick={onClose} ml={3}>
                    Delete
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
          <Text mt={4}>
            This example demonstrates a basic alert dialog. The dialog is triggered by a button click.
            The <code>useDisclosure</code> hook manages the open/close state.
          </Text>
          <HomeLink />
        </Box>
      );
    }

    export default AlertDialogPage;
