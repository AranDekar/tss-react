import gql from "graphql-tag";

export const reportFragment = gql`
  fragment report on Report {
    earn_2018
    earn_2017
    earn_2016
    earn_2015
    maxLoss_2018
    maxLoss_2017
    maxLoss_2016
    maxLoss_2015
    maxProfit_2018
    maxProfit_2017
    maxProfit_2016
    maxProfit_2015
  }
`;
