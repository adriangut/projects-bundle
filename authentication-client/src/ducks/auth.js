import axios from 'axios';
import { browserHistory } from 'react-router';
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const AUTH_USER = "auth_user";
const UNAUTH_USER = "unauth_user";
const AUTH_ERROR = "auth_error";
const FETCH_MESSAGE = "fetch_message";
const ROOT_URL = "http://localhost:8081";

const auth = (state = {}, action) => {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, error: '', authenticated: true };
        case UNAUTH_USER:
            return { ...state, authenticated: false };
        case AUTH_ERROR:
            return { ...state, error: action.payload };
        case FETCH_MESSAGE:
            return {...state, message: action.payload };
    }

    return state;
}

export default combineReducers({ auth, form });

export const signInUser = ({ email, password }) => (dispatch) => {
    // submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
        .then((response) => {
            // if request is good...
            // - update state to indicate user is authenticated
            dispatch({ type: AUTH_USER });
            // - save the JWT token
            localStorage.setItem('token', response.data.token);
            // - redirect to route '/feature'
            browserHistory.push('/feature');
        })
        .catch(() => {
            // if request is bad...
            // - show an error to the user
            dispatch(authError('Incorrect Login Information'));
        });
};

export const signupUser = ({ email, password }) => (dispatch) => {
    axios.post(`${ROOT_URL}/signup`, { email, password })
        .then((response) => {
            dispatch({ type: AUTH_USER });
            localStorage.setItem('token', response.data.token);
            browserHistory.push('/feature');
        })
        .catch((response) => dispatch(authError(response.data.error)));
};

export const authError = (error) => ({
    type: AUTH_ERROR,
    payload: error,
})

export const signoutUser = () => {
    localStorage.removeItem('token');

    return { type: UNAUTH_USER };
}

export const fetchMessage = () => (dispatch) => {
    axios.get(ROOT_URL, { headers: { authorization: localStorage.getItem('token') } })
        .then((response) => {
            dispatch({
                type: FETCH_MESSAGE,
                payload: response.data.message,
            });
        }
    );
};

export const authUser = () => ({ type: AUTH_USER });
