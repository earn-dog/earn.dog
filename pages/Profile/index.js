import React from "react";
import withAuth from "../../src/helpers/withAuth";

import { Container, Typography, Box, Button } from "@material-ui/core";

import Link from "../../src/components/Link";
import Copyright from "../../src/components/Copyright";

const Profile = ({ currentUser }) => {
  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            This is an auth protected page
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            naked
            href="/"
          >
            Home
          </Button>
        </Box>
      </Container>
      <Copyright />
    </React.Fragment>
  );
};

export default withAuth(Profile);
