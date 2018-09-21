import React, { Component } from "react";
import { Logger, ConsoleLogger } from "react-console-logger";
const myLogger = new Logger();

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
    let button;

    if (dashboard2 == "Dashboard") {
      button = (
        <input
          type="button"
          value="Show strategies"
          onClick={this.showStrategy}
        />
      );
    } else {
      button = (
        <input
          type="button"
          value="Show Dashboard"
          onClick={this.showDashboard}
        />
      );
    }

    return (
      <div>
        <h1>Test</h1>
        {button}
        {this.state.dashboard}
        {dashboard2}
      </div>
    );
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
    this.state = { dashboard: "Threads" };
    console.log("Set dashboard to Threads");
  }
}

export default LandingPage;
