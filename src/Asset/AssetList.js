import React from "react";
import ReactTable from "react-table";
import axios from "axios";
import "react-table/react-table.css";

class AssetList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selected: {}, selectAll: 0, Strategies: [], Visible: true };

    this.toggleRow = this.toggleRow.bind(this);
  }

  toggleRow(assetId) {
    const newSelected = Object.assign({}, this.state.selected);
    newSelected[assetId] = !this.state.selected[assetId];
    this.setState({
      selected: newSelected,
      selectAll: 2
    });
  }

  toggleSelectAll() {
    let newSelected = {};

    if (this.state.selectAll === 0) {
      this.state.Assets.forEach(x => {
        newSelected[x.assetId] = true;
      });
    }

    this.setState({
      selected: newSelected,
      selectAll: this.state.selectAll === 0 ? 1 : 0
    });
  }
  componentDidMount() {
    let url = "https://localhost:44319/api/Asset";
    console.log(url);
    axios.get(url).then(response => {
      let assets = response.data;
      this.setState({
        Assets: assets
      });
    });
  }
  render() {
    const columns = [
      {
        Header: "Assets",
        columns: [
          {
            id: "checkbox",
            accessor: "",
            Cell: ({ original }) => {
              return <input type="checkbox" className="checkbox" />;
            },
            Header: x => {
              return (
                <input
                  type="checkbox"
                  checked={this.state.selectAll === 1}
                  ref={input => {
                    if (input) {
                      input.indeterminate = this.state.selectAll === 2;
                    }
                  }}
                  onChange={() => this.toggleSelectAll()}
                />
              );
            },
            sortable: false,
            width: 40
          },
          {
            Header: "assedId",
            accessor: "assedId",
            width: 120
          },
          {
            Header: "assetTag",
            id: "assetTag",
            accessor: d => d.assetTag
          }
        ]
      }
    ];
    if (this.state.Visible)
      return (
        <div class="table-container">
          <h1>Assets</h1>
          <ReactTable
            data={this.state.Assets}
            columns={columns}
            defaultSorted={[{ id: "AssetId", desc: false }]}
            className="-striped -highlight"
          />
        </div>
      );
    else return <div />;
  }

  showhide(value) {
    this.setState({ Visible: value });
  }
}

export default AssetList;

function getAsset() {
  let url = "http://localhost:50352/v2/Asset";
  console.log(url);
  axios.get(url).then(response => {
    let assets = response.data;
    console.log(response.data);
    return assets;
  });
}
