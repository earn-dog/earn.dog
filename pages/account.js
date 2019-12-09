import React from "react";
import { connect } from "react-redux";

import { AppwithAuthorisation } from "../src/components/App";

const AccountPage = ({ authUser }) => (
  <AppwithAuthorisation>
    <h1>Account: {authUser.displayName}</h1>
  </AppwithAuthorisation>
);

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

export default connect(mapStateToProps)(AccountPage);
