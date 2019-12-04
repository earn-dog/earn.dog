import React from "react";

import { Container, Typography, Box, Button } from "@material-ui/core";

import { Copyright, Link, Navbar, Sidebar } from "../src/components";


export default function Index() {
  return (
    <React.Fragment>
      <Navbar pageTitle="Home" />
      <Sidebar />
      <main>
        <Container maxWidth="md">
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
      </main>
    </React.Fragment>
  );
}
