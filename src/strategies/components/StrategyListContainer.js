import { connect } from 'react-redux'
import StrategyList from './StrategyList';
import { onStrategyClick, onStrategiesLoad } from '../actions'

const getStrategies = (strategies) => {
    return strategies;
}
const mapStateToProps = state => ({
    strategies: getStrategies(state.strategies),
})

const mapDispatchToProps = dispatch => ({
    onStrategyClick: index => dispatch(onStrategyClick(index)),
    onStrategiesLoad: () => dispatch(onStrategiesLoad()),
})

const StrategyListContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(StrategyList)

export default StrategyListContainer;