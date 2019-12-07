import React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu
} from "@material-ui/core";

import AccountCircle from "@material-ui/icons/AccountCircle";

import { removeUser } from "../../helpers/authWrapper";

export default function Navbar(props) {
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    setAnchorEl(null);
    removeUser();
  };

  const { pageTitle, parentClasses } = props;
  return (
    <>
      <AppBar position="fixed" className={parentClasses.appBar}>
        <Toolbar>
          <Typography variant="h6" className={parentClasses.title}>
            {pageTitle}
          </Typography>
          {auth && (
            <div>
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
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
