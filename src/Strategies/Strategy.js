import React from "react";
import axios from "axios";
class Strategy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strategyId: 0,
      name: "",
      strategyClassificationId: 0,
      Visible: false
    };

    this.SaveStrategy = this.SaveStrategy.bind(this);
    this.tellContainer = this.tellContainer.bind(this);
  }

  render() {
    if (this.state.Visible)
      return (
        <div class="dataItemCard InputGroup">
          <div class="dataItem">
            <div class="title">
              <span>Name:</span>
            </div>
            <div class="property">
              <input
                type="textbox"
                value={this.state.name}
                onChange={e => this.setName(e, "name")}
              />
            </div>
          </div>
          <div>
            <button onClick={this.SaveStrategy}>Save Strategy</button>
          </div>
        </div>
      );
    else return <div />;
  }

  SaveStrategy(event) {
    event.preventDefault();

    console.log(this.state.strategyId);
    console.log(this.state.name);
    console.log(this.state.strategyClassificationId);

    let url = "https://localhost:44319/api/Strategy";
    console.log(url);
    axios
      .post(url, {
        Name: this.state.name
      })
      .then(res => {
        this.tellContainer(false);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  tellContainer(response) {
    this.props.onStrategySave(true);
  }
  setStrategyId(event, section) {
    this.setState({ strategyId: event.target.value });
  }

  setName(event, section) {
    this.setState({ name: event.target.value });
  }

  setStrategyClassificationId(event, section) {
    this.setState({ strategyClassificationId: event.target.value });
  }

  showhide(value) {
    this.setState({ Visible: value });
  }
}

export default Strategy;
