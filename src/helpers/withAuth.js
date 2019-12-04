import React from "react";
import router from "next/router";
import { auth } from "../firebase";

import LoadingIndicator from "../components/LoadingIndicator";

const withAuth = Component => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        status: "LOADING"
      };
    }
    componentDidMount() {
      auth.onAuthStateChanged(authUser => {
        if (authUser) {
          this.setState({
            status: "SIGNED_IN"
          });
        } else {
          router.push("/");
        }
      });
    }
    renderContent() {
      const { status } = this.state;

      if (status == "LOADING") {
        return <LoadingIndicator />;
      } else if (status == "SIGNED_IN") {
        return <Component {...this.props} />;
      }
    }

    render() {
      return <React.Fragment>{this.renderContent()}</React.Fragment>;
    }
  };
};

export default withAuth;