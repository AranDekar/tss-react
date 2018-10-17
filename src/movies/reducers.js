import { ADD_MOVIE, SELECT_MOVIE, FETCH_MOVIES_REQUEST } from './actions';

const movies = (state = [], action) => {
    switch (action.type) {
        case ADD_MOVIE:
            return [
                ...state,
                action.movie
            ];
        case SELECT_MOVIE:
            return state.map((a, index) =>
                (index === action.index)
                    ? { ...a, title: a.title + 'clicked' }
                    : a
            );
        case FETCH_MOVIES_REQUEST: // saga
            return state;
        default:
            return state;
    }
}

export default movies;