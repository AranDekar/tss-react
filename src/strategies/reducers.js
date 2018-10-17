import { ADD_STRATEGY, SET_STATUS, SELECT_STRATEGY, FETCH_STRATEGIES_REQUEST } from './actions';

const strategies = (state = [], action) => {
    switch (action.type) {
        case ADD_STRATEGY:
            return [
                ...state,
                action.strategy
            ];
        case FETCH_STRATEGIES_REQUEST:
            return [
                ...state
            ];
        case SET_STATUS:
            return state.map(a =>
                (a.id === action.id)
                    ? { ...a, status: action.status }
                    : a
            );
        case SELECT_STRATEGY:
            return state.map((a, index) =>
                (index === action.index)
                    ? { ...a, text: a.text + 'clicked' }
                    : a
            );
        default:
            return state;
    }
}

export default strategies;