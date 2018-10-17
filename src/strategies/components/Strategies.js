import React from "react";

import withUser from "../../shared/hoc/WithUser";
import StrategyList from "./StrategyList";
import YearlyReport from "./YearlyReport";
import AddStrategy from "./AddStrategy";

class Strategies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strategyId: null
    };
  }
  onDeleteClicked = strategyId => {
    console.log("delete selected");
    this.setState({
      strategyId: strategyId
    });
  };

  onReportClicked = strategyId => {
    console.log("report selected");
    this.setState({
      strategyId: strategyId
    });
  };
  onBacktestClicked = strategyId => {
    console.log("backtest selected");
    this.setState({
      strategyId: null
    });
  };
  render() {
    let { user } = this.props;
    return (
      <React.Fragment>
        <AddStrategy />

        <StrategyList
          user={user}
          onReportClicked={this.onReportClicked}
          onDeleteClicked={this.onDeleteClicked}
          onBacktestClicked={this.onBacktestClicked}
        />
        {this.state.strategyId ? (
          <YearlyReport strategyId={this.state.strategyId} />
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

export default withUser(Strategies);
