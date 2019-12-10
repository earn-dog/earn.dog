import React from "react";
import { connect } from "react-redux";

import { AppWithAuthorisation } from "../src/components/App";

const ProfilePage = ({ authUser }) => {
  return (
    <AppWithAuthorisation>
      <h1>{authUser ? authUser.displayName : null}</h1>
      <b>{authUser ? authUser.email : null}</b>
    </AppWithAuthorisation>
  );
};

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

export default connect(mapStateToProps)(ProfilePage);
