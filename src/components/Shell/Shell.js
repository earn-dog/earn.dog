import React from "react";
import Router from "next/router";
import { connect } from "react-redux";

import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import Navbar from "../Navbar";

import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import AccountBalanceWalletRoundedIcon from "@material-ui/icons/AccountBalanceWalletRounded";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";
import VpnKeyRoundedIcon from "@material-ui/icons/VpnKeyRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";

import { makeStyles } from "@material-ui/core/styles";

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

  const handleGoToWithdrawPage = () => {
    Router.push(routes.WITHDRAW);
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

          <ListItem
            button
            key="Withdraw"
            href="/withdraw"
            onClick={handleGoToWithdrawPage}
          >
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
