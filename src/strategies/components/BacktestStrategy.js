import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Button } from "antd";
import { reportFragment } from "./Fragments";

const GET_YEARLY_REPORT = gql`
  query yearlyReports($strategyId: ID!) {
    reports: yearlyReports(strategyId: $strategyId) {
      instrument
      ...report
    }
  }
  ${reportFragment}
`;

const BACKTEST_STRATEGY = gql`
  mutation backtest($strategyId: ID!) {
    reports: backtest(strategyId: $strategyId) {
      instrument
      ...report
    }
  }
  ${reportFragment}
`;

const handleBacktest = (backtestStrategy, strategyId) => {
  backtestStrategy({ variables: { strategyId: strategyId } });
};

const handleUpdateCache = (cache, { data: { reports } }, strategyId) => {
  cache.writeQuery({
    query: GET_YEARLY_REPORT,
    variables: { strategyId },
    data: { reports }
  });
};

const BacktestStrategy = ({ strategyId, onBacktestClicked }) => {
  return (
    <Mutation
      mutation={BACKTEST_STRATEGY}
      key={strategyId}
      update={(cache, { data: { reports } }) =>
        handleUpdateCache(cache, { data: { reports } }, strategyId)
      }
    >
      {(backtestStrategy, { loading, error, data }) => (
        <React.Fragment>
          <Button
            icon="play-circle"
            onClick={e => {
              handleBacktest(backtestStrategy, strategyId);
              onBacktestClicked();
            }}
          >
            backtest
          </Button>
          {loading && <p>Loading...</p>}
          {error && (
            <p>
              Error{" "}
              <span role="img" aria-label="error">
                📍
              </span>{" "}
              please try again
            </p>
          )}
        </React.Fragment>
      )}
    </Mutation>
  );
};

export default BacktestStrategy;
