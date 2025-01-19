import React from 'react';
    import { Link } from 'react-router-dom';
    import { Box, Heading, List, ListItem, ListIcon } from '@chakra-ui/react';
    import { ChevronRightIcon } from '@chakra-ui/icons';

    function HomePage() {
      return (
        <Box p={5}>
          <Heading mb={6}>Chakra UI Examples</Heading>
          <Heading size="md" mb={4}>Overlays</Heading>
          <List spacing={3} mb={5}>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              <Link to="/alert-dialog">Alert Dialog</Link>
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              <Link to="/drawer">Drawer</Link>
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              <Link to="/menu">Menu</Link>
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              <Link to="/modal">Modal</Link>
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              <Link to="/popover">Popover</Link>
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              <Link to="/tooltip">Tooltip</Link>
            </ListItem>
          </List>
          <Heading size="md" mb={4}>Media and Icons</Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              <Link to="/avatar">Avatar</Link>
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              <Link to="/icon">Icon</Link>
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              <Link to="/image">Image</Link>
            </ListItem>
          </List>
        </Box>
      );
    }

    export default HomePage;
