import React from "react";
import withAuth from "../src/helpers/withAuth";
import Navbar from "../../src/components/Navbar";

const Profile = () => {
  return (
    <React.Fragment>
      <Navbar pageTitle={"Profile"} />
    </React.Fragment>
  );
};

export default withAuth(Profile);
