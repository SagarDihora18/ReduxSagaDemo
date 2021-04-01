
export const fetchUserList = () => {
    return async dispatch => {
        dispatch(fetchUserLoading());
        try {
            let response = await fetch("https://randomuser.me/api/?results=15");
            let jsonResponse = await response.json();
            dispatch(fetchUserSuccess(jsonResponse.results));
        }
        catch (error) {
            dispatch(fetchUserFailure(error));
        }
    }
}
