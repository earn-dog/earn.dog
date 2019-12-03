import React from "react";

import { Container, Typography, Box, Button } from "@material-ui/core";

import Link from "../src/components/Link";
import Copyright from "../src/components/Copyright";
import Navbar from "../src/components/Navbar";

export default function Index() {
  return (
    <React.Fragment>
      <Navbar pageTitle="Home" />
      <Container maxWidth="xl">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Dev earn.dog
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            naked
            href="/signin"
          >
            Sign In
          </Button>
          <Copyright />
        </Box>
      </Container>
    </React.Fragment>
  );
}
