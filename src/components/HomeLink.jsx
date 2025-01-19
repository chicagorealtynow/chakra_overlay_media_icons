import React from 'react';
    import { Link } from 'react-router-dom';
    import { Button } from '@chakra-ui/react';

    function HomeLink() {
      return (
        <Button as={Link} to="/" colorScheme="blue" mt={4}>
          Go Home
        </Button>
      );
    }

    export default HomeLink;
