import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { AppWithAuthentication } from "../src/components/App";

const styles = theme => ({
  button: {
    margin: theme.spacing(2)
  },
  input: {
    display: "none"
  }
});

const LandingPage = ({ classes }) => (
  <AppWithAuthentication>
    <h1>Welcome</h1>
    <p>
        Points mean prizes here at earn.dog, so why not check out some of our offer walls. 
    </p>
  </AppWithAuthentication>
);

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LandingPage);
