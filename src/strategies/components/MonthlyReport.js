import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Table } from "antd";
import { reportFragment } from "./Fragments";

const GET_MONTHLY_REPORT = gql`
  query monthlyReports($strategyId: ID!, $instrument: Instrument!) {
    reports: monthlyReports(strategyId: $strategyId, instrument: $instrument) {
      month
      ...report
    }
  }
  ${reportFragment}
`;

const columns = [
  { title: "Month", dataIndex: "month", key: "month" },
  { title: "2018", dataIndex: "earn_2018", key: "earn_2018" },
  { title: "2017", dataIndex: "earn_2017", key: "earn_2017" },
  { title: "2016", dataIndex: "earn_2016", key: "earn_2016" },
  { title: "2015", dataIndex: "earn_2015", key: "earn_2015" }
];

const MonthlyReport = ({ strategyId, instrument }) => {
  return (
    <Query
      query={GET_MONTHLY_REPORT}
      variables={{ strategyId, instrument }}
      skip={!strategyId || !instrument}
      // pollInterval={60000}
    >
      {({ loading, error, data, refetch }) => {
        if (loading)
          return !strategyId
            ? "strategyId is not selected"
            : !instrument
              ? "instrument is not selected"
              : "Loading...";
        if (error) return `Error! ${error.message}`;
        return (
          <Table
            rowKey="month"
            columns={columns}
            dataSource={data.reports}
            pagination={false}
          />
        );
      }}
    </Query>
  );
};

export default MonthlyReport;
