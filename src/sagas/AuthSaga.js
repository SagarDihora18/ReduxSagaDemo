import {
    FETCH_USER, LOADING, FETCH_USER_SUCCESS, FETCH_USER_FAILURE
} from '../actions/Types';
import {put, takeEvery } from 'redux-saga/effects'

function* fetchUsers(action) {
    try {
        console.log("In SAGA FETCH USER REQ")
        yield put({ type: LOADING })
        const response = yield fetch("https://randomuser.me/api/?results=15");
        const jsonResponse = yield response.json();
        console.log("In SAGA FETCH USER Response" + JSON.stringify(jsonResponse))
        yield put({ type: FETCH_USER_SUCCESS, userList: jsonResponse.results })
    } catch (err) {
        console.log("ERROR" + err.message)
        yield put({ type: FETCH_USER_FAILURE, message: err.message })
    }
}

export default function* fetchUserSaga() {
    yield takeEvery(FETCH_USER, fetchUsers)
}