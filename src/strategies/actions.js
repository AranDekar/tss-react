export const SET_STATUS = 'SET_STATUS';
export const ADD_STRATEGY = 'ADD_STRATEGY';
export const SELECT_STRATEGY = 'SELECT_STRATEGY';
export const FETCH_STRATEGIES_REQUEST = 'FETCH_STRATEGIES_REQUEST';
export const FETCH_STRATEGIES_SUCCESS = 'FETCH_STRATEGIES_SUCCESS';
export const FETCH_STRATEGIES_FAILURE = 'FETCH_STRATEGIES_FAILURE';

export const setStatus = ({ id, status }) => ({
    type: SET_STATUS,
    id,
    status
})

export const addStrategy = (strategy) => ({
    type: ADD_STRATEGY,
    strategy
})

export const onStrategyClick = (index) => ({
    type: SELECT_STRATEGY,
    index,
})

export const onStrategiesLoad = () => ({
    type: FETCH_STRATEGIES_REQUEST,
})

export const BacktestStatus = {
    NOT_APPLICABLE: 'NOT_APPLICABLE',
    RUNNING: 'RUNNING',
    COMPLETED: 'COMPLETED',
    FAILED: 'FAILED',
}