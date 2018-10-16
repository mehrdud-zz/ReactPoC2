import React, { Component } from "react";

// import TradingMethod from "./Configuration/TradingMethod/TradingMethod";
// import TradingMethodList from "./Configuration/TradingMethod/TradingMethodList";
// import PostTradingMethod from "./Configuration/TradingMethod/PostTradingMethod";
import LandingPage from "./Components/LandingPage";
import StrategyContainer from "./Strategies/StrategyContainer";

class App extends Component {
  render() {
    return (
      <div class="container-fluid">
        <LandingPage />
      </div>
    );
  }
}
export default App;
