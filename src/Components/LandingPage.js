import React, { Component } from "react";
import Dashboard from "./Dashboard";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.showStrategy = this.showStrategy.bind(this);
    this.showThreads = this.showThreads.bind(this);
    this.showDashboard = this.showDashboard.bind(this);
    this.state = {
      dashboard: "Dashboard"
    };
  }
  render() {
    const dashboard2 = this.state.dashboard;

    if (dashboard2 === "Dashboard") {
      return (
        <div>
          <Dashboard />
        </div>
      );
    } else {
      return (
        <div>
          <h1>Multi Asset Core</h1>
        </div>
      );
    }
  }

  showDashboard() {
    this.setState({ dashboard: "Dashboard" });
    console.log("Set dashboard to Dashboard");
  }

  showStrategy() {
    this.setState({ dashboard: "Strategy" });
    console.log("Set dashboard to Strategy");
  }

  showThreads() {
    this.setState({ dashboard: "Threads" });
    console.log("Set dashboard to Threads");
  }
}

export default LandingPage;
