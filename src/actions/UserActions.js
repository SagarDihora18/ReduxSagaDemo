import {
    FETCH_USER, LOADING,
    FETCH_USER_SUCCESS, FETCH_USER_FAILURE
} from './Types';

export const fetchUserLoading = () => ({ type: LOADING })

export const fetchUserSuccess = json => ({
    type: FETCH_USER_SUCCESS,
    payload: json
})

export const fetchUserFailure = error => ({
    type: FETCH_USER_FAILURE,
    payload: error
})

export const fetchUsers = () => ({
    type: FETCH_USER,
})