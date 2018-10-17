import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { List, Button, Popover } from "antd";
import BacktestStrategy from "./BacktestStrategy";

const GET_STRATEGIES = gql`
  query strategies($postedBy: ID!) {
    strategies(postedBy: $postedBy) {
      _id
      name
      description
      postedBy
      createdTime
      code
      events
    }
  }
`;

const StrategyList = ({
  user,
  onReportClicked,
  onDeleteClicked,
  onBacktestClicked
}) => {
  return (
    <Query
      query={GET_STRATEGIES}
      variables={{ postedBy: user.userId }}
      skip={!user.userId}
      // pollInterval={60000}
    >
      {({ loading, error, data, refetch }) => {
        if (loading)
          return !user.userId ? user.name + "Please login first" : "Loading...";
        if (error) return `Error! ${error.message}`;
        return (
          <List
            itemLayout="horizontal"
            size="large"
            pagination={{
              onChange: page => {
                console.log(page);
              },
              pageSize: 3
            }}
            dataSource={data.strategies}
            renderItem={item => (
              <List.Item
                key={item._id}
                actions={[
                  <Popover
                    content={<p>{item.code}</p>}
                    title="Code"
                    trigger="click"
                  >
                    <Button icon="code">See Code</Button>
                  </Popover>,
                  <BacktestStrategy
                    strategyId={item._id}
                    onBacktestClicked={e => onBacktestClicked(item._id, e)}
                  />,
                  <Button
                    icon="sliders"
                    onClick={e => onReportClicked(item._id, e)}
                  >
                    report
                  </Button>,
                  <Button
                    icon="delete"
                    onClick={e => onDeleteClicked(item._id, e)}
                  >
                    delete
                  </Button>
                ]}
              >
                <List.Item.Meta
                  title={item.name}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        );
      }}
    </Query>
  );
};

export default StrategyList;
