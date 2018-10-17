import { all } from 'redux-saga/effects'
import strategies from './strategies/sagas';
import movies from './movies/sagas'

export default function* rootSaga() {
    yield all([
        ...strategies,
        ...movies
    ])
}