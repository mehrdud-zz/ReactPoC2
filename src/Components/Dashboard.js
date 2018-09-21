import React, { Component } from "react";
import { Logger, ConsoleLogger } from "react-console-logger";
const myLogger = new Logger();

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.showStrategies = this.showStrategies.bind(this);
    this.showPortfolios = this.showPortfolios.bind(this); 
    this.state = {
      dashboard: "Dashboard"
    };
  }
  render() {
    const dashboard2 = this.state.dashboard;
    let button;
 
      button = (
        <input
          type="button"
          value="Show strategies"
          onClick={this.showStrategies}
        />

        <input
          type="button"
          value="Show Portfolios"
          onClick={this.showPortfolios}
        /> 
      );
    
    return (
      <div>
        <h1>Multi Asset Core</h1>
        {button}        
        {this.state.dashboard}
      </div>
    );
  }
 
  showStrategies() {
    this.setState({ dashboard: "Strategies" });
    console.log("Set dashboard to Strategies");
  }

  showPortfolios() {
    this.state = { dashboard: "Portfolios" };
    console.log("Set dashboard to Portfolios");
  }
}

export default LandingPage;
