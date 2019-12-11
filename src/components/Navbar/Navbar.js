import React from "react";
import { connect } from "react-redux";
import Router from "next/router";

import {
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";

import * as routes from "../../constants/routes";
import ProfileIcon from "../ProfileIcon";

const Navbar = ({ pageTitle, parentClasses, authUser }) => {

  const handleGoToHomePage = () => {
    Router.push(routes.HOME);
  };

  return (
    <React.Fragment>
      <AppBar position="fixed" className={parentClasses.appBar}>
        <Toolbar>
          <Typography
            variant="h6"
            className={parentClasses.title}
            onClick={handleGoToHomePage}
          >
            {pageTitle}
          </Typography>
          {authUser && <ProfileIcon />}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

export default connect(mapStateToProps)(Navbar);
