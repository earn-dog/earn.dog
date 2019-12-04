import React from "react";
import withAuth from "../../src/helpers/withAuth";
import Navbar from "../../src/components/Navbar";

const Profile = props => {
  const { currentUser } = props;
  return (
    <React.Fragment>
      <Navbar pageTitle={"Profile"} currentUser={currentUser} />
      <p>this page is auth protected</p>
    </React.Fragment>
  );
};

export default withAuth(Profile);
