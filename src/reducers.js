import { combineReducers } from 'redux';
import strategies from './strategies/reducers';
import movies from './movies/reducers';

export default combineReducers({
    strategies,
    movies
});