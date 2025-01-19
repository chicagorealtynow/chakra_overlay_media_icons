import React from 'react';
    import {
      Menu,
      MenuButton,
      MenuList,
      MenuItem,
      Button,
      Text,
      Box
    } from '@chakra-ui/react';
    import { ChevronDownIcon } from '@chakra-ui/icons';
    import HomeLink from '../components/HomeLink';

    function MenuPage() {
      return (
        <Box p={5}>
          <Text fontSize="xl" mb={4}>
            <b>Menu Example</b>
          </Text>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Actions
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
            </MenuList>
          </Menu>
          <Text mt={4}>
            This example demonstrates a basic menu. The menu is triggered by a button click.
            The <code>Menu</code>, <code>MenuButton</code>, and <code>MenuList</code> components are used to create the menu.
          </Text>
          <HomeLink />
        </Box>
      );
    }

    export default MenuPage;
