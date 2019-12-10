import React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu
} from "@material-ui/core";
import { connect } from "react-redux";

import AccountCircle from "@material-ui/icons/AccountCircle";
import { auth } from "../../firebase/firebase";
import Router from "next/router";
import * as routes from "../../constants/routes";

const Navbar = ({ pageTitle, parentClasses, authUser }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleGoToProfile = () => {
    Router.push(routes.PROFILE);
  };

  return (
    <React.Fragment>
      <AppBar position="fixed" className={parentClasses.appBar}>
        <Toolbar>
          <Typography variant="h6" className={parentClasses.title}>
            {pageTitle}
          </Typography>
          {authUser && (
            <>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleGoToProfile}>Profile</MenuItem>
                <MenuItem onClick={() => auth.signOut()}>Sign Out</MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

export default connect(mapStateToProps)(Navbar);
