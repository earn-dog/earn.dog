import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import AccountBalanceWalletRoundedIcon from "@material-ui/icons/AccountBalanceWalletRounded";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";

import VpnKeyRoundedIcon from "@material-ui/icons/VpnKeyRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import Link from "../Link";
import Navbar from "../Navbar";

import { auth } from "../../firebase";

const drawerWidth = 180;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  title: {
    flexGrow: 1
  },
  toolbar: theme.mixins.toolbar
}));

export default function Shell({ children }) {
  const classes = useStyles();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("Logged out");
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div className={classes.root}>
      <Navbar pageTitle="Home" parentClasses={classes} />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem button key="Earn">
            <ListItemIcon>
              <MonetizationOnOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Earn" />
          </ListItem>

          <ListItem button key="Withdraw">
            <ListItemIcon>
              <AccountBalanceWalletRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Withdraw" />
          </ListItem>
        </List>

        <Divider />

        <List>
          <ListItem button key="Log In" component={Link} href="/signin">
            <ListItemIcon>
              <VpnKeyRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Log In" />
          </ListItem>

          <ListItem button key="Profile" component={Link} href="/profile">
            <ListItemIcon>
              <AccountBoxRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>

          <ListItem button key="Sign Out" onClick={handleSignOut}>
            <ListItemIcon>
              <ExitToAppRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Sign Out" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}
