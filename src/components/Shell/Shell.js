import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { connect } from "react-redux";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import AccountBalanceWalletRoundedIcon from "@material-ui/icons/AccountBalanceWalletRounded";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";

import VpnKeyRoundedIcon from "@material-ui/icons/VpnKeyRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import Navbar from "../Navbar";

import Router from "next/router";
import * as routes from "../../constants/routes";

import { auth } from "../../firebase/firebase";

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

const Shell = ({ children, authUser }) => {
  const classes = useStyles();

  const handleGoToEarnPage = () => {
    Router.push(routes.EARN);
  };

  const handleGoToSignInPage = () => {
    Router.push(routes.SIGN_IN);
  };

  const handleGoToProfilePage = () => {
    Router.push(routes.PROFILE);
  };

  return (
    <div className={classes.root}>
      <Navbar pageTitle="earn.dog" parentClasses={classes} />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem button key="Earn" href="/earn" onClick={handleGoToEarnPage}>
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
        {!authUser && (
          <List>
            <ListItem
              button
              key="Sign In"
              href="/signin"
              onClick={handleGoToSignInPage}
            >
              <ListItemIcon>
                <VpnKeyRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Sign In" />
            </ListItem>
          </List>
        )}

        {authUser && (
          <List>
            <ListItem
              button
              key="Profile"
              href="/profile"
              onClick={handleGoToProfilePage}
            >
              <ListItemIcon>
                <AccountBoxRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>

            <ListItem button key="Sign Out" onClick={() => auth.signOut()}>
              <ListItemIcon>
                <ExitToAppRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItem>
          </List>
        )}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

export default connect(mapStateToProps)(Shell);
