import { put, takeLatest, call } from 'redux-saga/effects'
import { FETCH_MOVIES_REQUEST, onFetchMoviesSuccess, onFetchMoviesFailure } from './actions';
import ApiCall from '../shared/ApiCall';

function fetchMoviesApi() {
    let apiCall = new ApiCall(`${process.env.REACT_APP_MOVIES_WEBSITE_NAME}/api/v1/movie`);
    return apiCall.get(`${process.env.REACT_APP_MOVIES_WEBSITE_NAME}/api/v1/movie`);
}

function* fetchMovies() {
    yield call(console.log, `🌎 FETCH_MOVIES_REQUEST`);
    try {
        let api = yield call(fetchMoviesApi);
        yield call(console.log, `👍 FETCH_MOVIES_SUCCESS. ${JSON.stringify(api.response)}`);
        yield put(onFetchMoviesSuccess(movies))
    }
    catch (err) {
        yield call(console.log, `👎 FETCH_MOVIES_FAILURE`, err);
        yield put(onFetchMoviesFailure(err))
    }
}

const movies = [
    takeLatest(FETCH_MOVIES_REQUEST, fetchMovies)
]

export default movies