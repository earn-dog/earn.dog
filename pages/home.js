import React from "react";
import { connect } from "react-redux";

import { db } from "../src/firebase";
import { AppWithAuthorisation } from "../src/components/App";

const fromObjectToList = object =>
  object
    ? Object.keys(object).map(key => ({ ...object[key], index: key }))
    : [];

class HomePage extends React.Component {
  componentDidMount() {
    const { onSetUsers } = this.props;

    db.onceGetUsers().then(snapshot =>
      onSetUsers(fromObjectToList(snapshot.val()))
    );
  }

  render() {
    const { users } = this.props;

    return (
      <AppWithAuthorisation>
        <h1>Home</h1>
        <p>
          Welcome back. Take a look at our offer walls to earn credit points.
        </p>

        {/* {!!users.length && <UserList users={users} />} */}
      </AppWithAuthorisation>
    );
  }
}

const UserList = ({ users }) => (
  <div>
    <h2>List of App User IDs (Saved on Sign Up in Firebase Database)</h2>
    {users.map(user => (
      <div key={user.index}>{user.email}</div>
    ))}
  </div>
);

const mapStateToProps = state => ({
  users: state.userState.users
});

const mapDispatchToProps = dispatch => ({
  onSetUsers: users => dispatch({ type: "USERS_SET", users })
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
