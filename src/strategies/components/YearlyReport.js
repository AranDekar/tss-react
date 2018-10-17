import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Table } from "antd";
import { reportFragment } from "./Fragments";
import MonthlyReport from "./MonthlyReport";

const GET_YEARLY_REPORT = gql`
  query yearlyReports($strategyId: ID!) {
    reports: yearlyReports(strategyId: $strategyId) {
      instrument
      ...report
    }
  }
  ${reportFragment}
`;
const columns = [
  { title: "Instrument", dataIndex: "instrument", key: "instrument" },
  { title: "2018", dataIndex: "earn_2018", key: "earn_2018" },
  { title: "2017", dataIndex: "earn_2017", key: "earn_2017" },
  { title: "2016", dataIndex: "earn_2016", key: "earn_2016" },
  { title: "2015", dataIndex: "earn_2015", key: "earn_2015" }
];

const onYearlyReportSelected = (record, index, indent, expanded) => {
  return <MonthlyReport strategyId={strategy} {...record} />;
};
let strategy;
const YearlyReport = ({ strategyId }) => {
  strategy = strategyId;
  return (
    <Query
      query={GET_YEARLY_REPORT}
      variables={{ strategyId }}
      skip={!strategyId}
      // pollInterval={60000}
    >
      {({ loading, error, data, refetch }) => {
        if (loading)
          return !strategyId ? "strategyId is not selected" : "Loading...";
        if (error) return `Error! ${error.message}`;
        return (
          <Table
            rowKey="instrument"
            columns={columns}
            dataSource={data.reports}
            expandedRowRender={onYearlyReportSelected}
            pagination={false}
          />
        );
      }}
    </Query>
  );
};

export default YearlyReport;
