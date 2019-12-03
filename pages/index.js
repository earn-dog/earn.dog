import React from "react";

import { Container, Typography, Box, Button } from "@material-ui/core";

import Link from "../src/components/Link";
import Copyright from "../src/components/Copyright";

export default function Index() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          earn.dog
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
  );
}
