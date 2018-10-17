import { put, takeLatest, call } from 'redux-saga/effects'
import { FETCH_STRATEGIES_REQUEST, FETCH_STRATEGIES_SUCCESS, FETCH_STRATEGIES_FAILURE } from './actions';

function fetchStrategiesApi() {
    return fetch(`${process.env.REACT_APP_WEBSITE_NAME}/strategies`);
}

function* fetchStrategies() {
    yield call(console.log, `🍭 FETCH_STRATEGIES_REQUEST`);
    try {
        let strategies = yield call(fetchStrategiesApi);
        yield put({ type: FETCH_STRATEGIES_SUCCESS, strategies })
    }
    catch (err) {
        yield call(console.log, `😳 FETCH_STRATEGIES_FAILURE`);
        yield put({ type: FETCH_STRATEGIES_FAILURE, err })
    }
}

const strategies = [
    takeLatest(FETCH_STRATEGIES_REQUEST, fetchStrategies)
]

export default strategies