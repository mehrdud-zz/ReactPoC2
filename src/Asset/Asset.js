import React from "react";
import axios from "axios";
class Asset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AssetId: 0,
      name: "",
      AssetClassificationId: 0,
      Visible: false
    };

    this.SaveAsset = this.SaveAsset.bind(this);
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
            <button onClick={this.SaveAsset}>Save Asset</button>
          </div>
        </div>
      );
    else return <div />;
  }

  SaveAsset(event) {
    event.preventDefault();

    console.log(this.state.AssetId);
    console.log(this.state.name);
    console.log(this.state.AssetClassificationId);

    let url = "https://localhost:44319/api/Asset";
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
    this.props.onAssetSave(true);
  }
  setAssetId(event, section) {
    this.setState({ AssetId: event.target.value });
  }

  setName(event, section) {
    this.setState({ name: event.target.value });
  }

  setAssetClassificationId(event, section) {
    this.setState({ AssetClassificationId: event.target.value });
  }

  showhide(value) {
    this.setState({ Visible: value });
  }
}

export default Asset;
