import React from 'react';
    import {
      Popover,
      PopoverTrigger,
      PopoverContent,
      PopoverHeader,
      PopoverBody,
      PopoverArrow,
      Button,
      Text,
      Box
    } from '@chakra-ui/react';
    import HomeLink from '../components/HomeLink';

    function PopoverPage() {
      return (
        <Box p={5}>
          <Text fontSize="xl" mb={4}>
            <b>Popover Example</b>
          </Text>
          <Popover>
            <PopoverTrigger>
              <Button>Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader>Popover Header</PopoverHeader>
              <PopoverBody>
                This is the content of the popover. You can add any content here.
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Text mt={4}>
            This example demonstrates a basic popover. The popover is triggered by a button click.
            The <code>Popover</code>, <code>PopoverTrigger</code>, and <code>PopoverContent</code> components are used to create the popover.
          </Text>
          <HomeLink />
        </Box>
      );
    }

    export default PopoverPage;
