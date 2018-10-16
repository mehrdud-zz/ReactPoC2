import React, { Component } from "react";
import StrategyContainer from "../Strategies/StrategyContainer";
import AssetContainer from "../Asset/AssetContainer";
import NavBar from "./Navbar";
class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.showStrategies = this.showStrategies.bind(this);
    this.showAssets = this.showAssets.bind(this);
    this.showLandingPage = this.showLandingPage.bind(this);
    this.state = {
      dashboard: "Dashboard"
    };

    this.strategyContainer = React.createRef();
    this.assetContainer = React.createRef();
  }

  render() {
    const dashboard = this.state.dashboard;
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#" onClick={this.showLandingPage}>
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" onClick={this.showAssets}>
                  Assets
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" onClick={this.showStrategies}>
                  Strategies
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <div>
          <StrategyContainer ref={this.strategyContainer} />
          <AssetContainer ref={this.assetContainer} />
        </div>
      </div>
    );
  }

  showStrategies() {
    this.setState({ dashboard: "Strategies" });
    this.strategyContainer.current.showhide(true);
    this.assetContainer.current.showhide(false);
    console.log("Set dashboard to Strategies");
  }

  showAssets() {
    this.setState({ dashboard: "Assets" });
    this.strategyContainer.current.showhide(false);
    this.assetContainer.current.showhide(true);
    console.log("Set dashboard to Assets");
  }
  showPortfolios() {
    this.state = { dashboard: "Portfolios" };
    console.log("Set dashboard to Portfolios");
  }

  showLandingPage() {
    this.state = { dashboard: "LandingPage" };
    this.strategyContainer.current.showhide(false);
    console.log("Set dashboard to landing page");
  }

  onDashboardStatusChange = dataFromChild => {
    this.setState({ visibility: dataFromChild });
    console.log(dataFromChild);
  };
}

export default LandingPage;
