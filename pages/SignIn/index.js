import React from "react";

import { Container, Typography, Box, Button } from "@material-ui/core";

import Link from "../../src/components/Link";
import Copyright from "../../src/components/Copyright";

export default function SignIn() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Sign In
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          naked
          href="/"
        >
          {"< Back"}
        </Button>

        <Box my={2} align="center">
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            naked
            href=""
          >
            Sign in with Google
          </Button>
        </Box>

        <Copyright />
      </Box>
    </Container>
  );
}
