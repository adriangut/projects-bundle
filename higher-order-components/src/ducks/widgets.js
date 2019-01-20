import { combineReducers } from 'redux';

const CHANGE_AUTH = "change_auth";

export default combineReducers({ authenticated: authenticationReducer });

const authenticationReducer = (state = false, action) => {
    switch (action.type) {
        case CHANGE_AUTH:
            return action.payload;
    }

    return state;
}

export const authenticate = (isLogggedIn) => ({ type: CHANGE_AUTH, payload: isLogggedIn });
