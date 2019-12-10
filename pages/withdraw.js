import React from "react";

import { AppWithAuthorisation } from "../src/components/App";

class WithdrawPage extends React.Component {
  render() {
    return (
      <AppWithAuthorisation>
        <h1>Withdraw</h1>
      </AppWithAuthorisation>
    );
  }
}

export default WithdrawPage;
