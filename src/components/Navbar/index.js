import React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Switch,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Menu
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

class Navbar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    setAnchorEl: ""
  };

  handleChange = e => {
    this.setState({ auth: e.target.checked });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleProfileIconOpen = e => {
    this.setState({ setAnchorEl: e.currentTarget });
  };

  handleProfileIconClose = () => {
    this.setState({ setAnchorEl: null });
  };

  render() {
    const { pageTitle } = this.props;
    const { auth, anchorEl, openProfileIcon, setAnchorEl } = this.state;

    return (
      <div style={{ flexGrow: 1 }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={auth}
                onChange={this.handleChange}
                aria-label="login switch"
              />
            }
            label={auth ? "Logout" : "Login"}
          />
        </FormGroup>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              style={{ marginRight: 2 }}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              {pageTitle}
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={this.handleProfileIconOpen}
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
                  open={openProfileIcon}
                  onClose={this.handleProfileIconClose}
                >
                  <MenuItem onClick={this.handleProfileIconClose}>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={this.handleProfileIconClose}>
                    My account
                  </MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
