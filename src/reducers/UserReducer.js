import {
    FETCH_USER, USER_INPUT, LOADING, FETCH_USER_SUCCESS, FETCH_USER_FAILURE
} from '../actions/Types';

const initialState = {
    isLoading: false,
    userList: [],
    errorMessage: "",
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_USER:
            console.log("FETCH_USER")
            return {
                ...state,
                // isLoading: true
            };
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userList: action.userList
            };
        case FETCH_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.message
            };
        default:
            return state;
    }
}