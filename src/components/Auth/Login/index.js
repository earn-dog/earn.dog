import React from "react";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon
} from "semantic-ui-react";

import firebase from "../../../firebase";

class Login extends React.Component {
  state = {
    username: "",
    errors: [],
    loading: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  displayErrors = errors =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ errors: [], loading: true });

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(socialAuthUser => {
        // Create a user in your Firebase Realtime Database too
        console.log(socialAuthUser);
      })
      .catch(err => {
        console.error(err);
        this.setState({
          errors: this.state.errors.concat(err),
          loading: false
        });
      });
  };

  render() {
    const { errors, loading } = this.state;

    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h1" icon color="violet" textAlign="center">
            <Icon name="money bill alternate" color="violet" />
            Log in to earn.dog
          </Header>
          <Form onSubmit={this.handleSubmit} size="large">
            <Segment stacked>
              <Button
                disabled={loading}
                className={loading ? "loading" : ""}
                color="violet"
                fluid
                size="large"
              >
                Sign in with Google
              </Button>
            </Segment>
          </Form>
          {errors.length > 0 && (
            <Message error>
              <h3>Error</h3>
              {this.displayErrors(errors)}
            </Message>
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;
