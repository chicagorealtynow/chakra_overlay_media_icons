import React from 'react';
    import { Tooltip, Button, Text, Box } from '@chakra-ui/react';
    import HomeLink from '../components/HomeLink';

    function TooltipPage() {
      return (
        <Box p={5}>
          <Text fontSize="xl" mb={4}>
            <b>Tooltip Example</b>
          </Text>
          <Tooltip label="This is a tooltip">
            <Button>Hover me</Button>
          </Tooltip>
          <Text mt={4}>
            This example shows a simple tooltip. The tooltip appears when you hover over the button.
            The <code>Tooltip</code> component is used to create the tooltip.
          </Text>
          <HomeLink />
        </Box>
      );
    }

    export default TooltipPage;
