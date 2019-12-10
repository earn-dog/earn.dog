import React from "react";
import { compose } from "recompose";

import Shell from "../Shell";
import withAuthentication from "../Session/withAuthentication";
import withAuthorisation from "../Session/withAuthorisation";

const App = ({ children }) => (
  <div className="app">
    <Shell>{children}</Shell>
  </div>
);

const AppWithAuthentication = compose(
  withAuthentication,
  withAuthorisation(false)
)(App);

const AppWithAuthorisation = compose(
  withAuthentication,
  withAuthorisation(true)
)(App);

export { AppWithAuthentication, AppWithAuthorisation };
