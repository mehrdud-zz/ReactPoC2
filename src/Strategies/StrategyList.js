import React from "react";
import ReactTable from "react-table";
import axios from "axios";
import "react-table/react-table.css";

class StrategyList2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selected: {}, selectAll: 0, Strategies: [], Visible: true };

    this.toggleRow = this.toggleRow.bind(this);
  }

  toggleRow(strategyId) {
    const newSelected = Object.assign({}, this.state.selected);
    newSelected[strategyId] = !this.state.selected[strategyId];
    this.setState({
      selected: newSelected,
      selectAll: 2
    });
  }

  toggleSelectAll() {
    let newSelected = {};

    if (this.state.selectAll === 0) {
      this.state.Strategies.forEach(x => {
        newSelected[x.strategyId] = true;
      });
    }

    this.setState({
      selected: newSelected,
      selectAll: this.state.selectAll === 0 ? 1 : 0
    });
  }
  componentDidMount() {
    let url = "https://localhost:44319/api/Strategy";
    console.log(url);
    axios.get(url).then(response => {
      let strategies = response.data;
      this.setState({
        Strategies: strategies
      });
    });
  }
  render() {
    const columns = [
      {
        Header: "Strategies",
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
            Header: "StrategyId",
            accessor: "StrategyId",
            width: 120
          },
          {
            Header: "Name",
            id: "Name",
            accessor: d => d.Name
          }
        ]
      }
    ];
    if (this.state.Visible)
      return (
        <div class="table-container">
          <h1>Strategies</h1>
          <ReactTable
            data={this.state.Strategies}
            columns={columns}
            defaultSorted={[{ id: "StrategyId", desc: false }]}
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

export default StrategyList2;

function getStratgey() {
  let url = "http://localhost:50352/v2/Strategy";
  console.log(url);
  axios.get(url).then(response => {
    let strategies = response.data;
    console.log(response.data);
    return strategies;
  });
}
