import React from "react";

import { Container, Typography, Box, Button } from "@material-ui/core";

import Link from "../../src/components/Link";
import Copyright from "../../src/components/Copyright";
import Navbar from "../../src/components/Navbar";

import { auth, firebase } from "../../src/firebase";

export default function SignIn() {
  const [currentUser, setUser] = React.useState(null);

  const handleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    provider.addScope("profile");
    provider.addScope("email");

    auth
      .signInWithPopup(provider)
      .then(userObject => {
        const { user } = userObject;
        console.log("Successfully signed in");
        console.log(user);

        setUser(user);
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <React.Fragment>
      <Navbar pageTitle="Sign In" currentUser={currentUser} />
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
              onClick={handleSignIn}
            >
              Sign in with Google
            </Button>
          </Box>

          <Copyright />
        </Box>
      </Container>
    </React.Fragment>
  );
}
