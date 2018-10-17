import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import StrategyListItem from './StrategyListItem';
import AddStrategy from './AddStrategy';

class StrategyList extends React.Component {
  render() {
    return (
      <div>
        <AddStrategy></AddStrategy>
        <ul>
          {this.props.strategies.map((a, index) => (
            <StrategyListItem key={index} {...a} onClick={() => this.props.onStrategyClick(index)} />
          ))}
        </ul>
      </div >
    )
  }
  componentDidMount = () => {
    this.props.onStrategiesLoad();
  }
}

StrategyList.propTypes = {
  strategies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    })).isRequired,
  onStrategyClick: PropTypes.func.isRequired,
}

export default connect()(StrategyList);