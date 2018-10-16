import React from "react";
import StrategyList from "./StrategyList";
import Strategy from "./Strategy";

class StrategyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Visible: false
    };

    this.strategy = React.createRef();
    this.strategyList = React.createRef();
    this.addStrategy = this.addStrategy.bind(this);
    this.onStrategySave = this.onStrategySave.bind(this);
  }

  onStrategySave() {
    this.strategy.current.showhide(false);
    this.strategyList.current.showhide(true);
  }

  render() {
    if (this.state.Visible)
      return (
        <div>
          <button onClick={this.addStrategy}>Add new Strategy</button>
          <Strategy
            ref={this.strategy}
            onStrategySave={this.onStrategySave.bind(this)}
          />
          <StrategyList ref={this.strategyList} />
        </div>
      );
    else return <div />;
  }

  showhide(value) {
    this.setState({ Visible: value });
  }

  addStrategy() {
    this.strategy.current.showhide(true);
    this.strategyList.current.showhide(false);
  }
}

export default StrategyContainer;
