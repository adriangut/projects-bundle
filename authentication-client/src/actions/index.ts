import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from './types.js';

const ROOT_URL = "http://localhost:8081";

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
            dispatch(authError('Bad Login Info'));
        });
};

export const signupUser = ({ email, password }) => (dispatch) => {
    axios.post(`$(ROOT_URL/signup`, { email, password })
        .then((response) => {
            dispatch({ type: AUTH_USER });
            localStorage.setItem('token', response.data.token);
            browserHistory.push('/feature');
        })
        .catch((response) => dispatch(authError(response.data.error)));
};

export const authError = (error: any) => ({
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
