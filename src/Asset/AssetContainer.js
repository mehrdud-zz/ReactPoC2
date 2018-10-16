import React from "react";
import AssetList from "./AssetList";
import Asset from "./Asset";

class AssetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Visible: false
    };

    this.Asset = React.createRef();
    this.assetList = React.createRef();
    this.addAsset = this.addAsset.bind(this);
    this.onAssetSave = this.onAssetSave.bind(this);
  }

  onAssetSave() {
    this.Asset.current.showhide(false);
    this.assetList.current.showhide(true);
  }

  render() {
    if (this.state.Visible)
      return (
        <div>
          <button onClick={this.addAsset}>Add new Asset</button>
          <Asset ref={this.Asset} onAssetSave={this.onAssetSave.bind(this)} />
          <AssetList ref={this.assetList} />
        </div>
      );
    else return <div />;
  }

  showhide(value) {
    this.setState({ Visible: value });
  }

  addAsset() {
    this.Asset.current.showhide(true);
    this.assetList.current.showhide(false);
  }
}

export default AssetContainer;
