import { fork, all } from 'redux-saga/effects';
import fetchUserSaga from './AuthSaga';
export default function* rootSaga() {
    yield all([
        fetchUserSaga(),
    ])
}