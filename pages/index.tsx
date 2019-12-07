import React from "react";

import { Container, Typography, Box, Button } from "@material-ui/core";

import { Copyright } from "../src/components";

export default function Index() {
  return (
    <>
      <main>
        <Container maxWidth="xl">
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Dev earn.dog
            </Typography>
            <Button variant="contained" color="primary" href="/signin">
              Sign In
            </Button>
            <Copyright />
          </Box>
        </Container>
      </main>
    </>
  );
}
