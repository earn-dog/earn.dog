import React from "react";
import Router from "next/router";

import Button from "@material-ui/core/Button";
import { AppWithAuthentication } from "../src/components/App";
import { auth, provider } from "../src/firebase/firebase";
import { db } from "../src/firebase";
import * as routes from "../src/constants/routes";

const SignInPage = () => (
  <AppWithAuthentication>
    <h1>Sign In</h1>
    <p>Earning points is just a click away</p>
    <SignInForm />
  </AppWithAuthentication>
);

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  user: null,
  error: null
};

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onClick = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        console.log(user);

        db.doCreateUser(
          user.uid,
          user.email,
          user.displayName,
          user.photoURL,
          false
        )
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            Router.push(routes.HOME);
          })
          .catch(error => {
            this.setState(updateByPropertyName("error", error));
          });

        Router.push(routes.HOME);
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });
  };

  render() {
    return (
      <Button variant="contained" color="primary" onClick={this.onClick}>
        Sign In with Google
      </Button>
    );
  }
}

export default SignInPage;

export { SignInForm };
