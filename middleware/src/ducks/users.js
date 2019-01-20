import axios from 'axios';
import { combineReducers } from 'redux';

const FETCH_USERS = "fetch_users";

export default combineReducers({ users: usersReducer });

export const fetchUsers = () => ({
    type: FETCH_USERS,
    payload: axios.get('https://jsonplaceholder.typicode.com/users'),
});

const usersReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_USERS:
            return [...state, ...action.payload.data ];
    }

    return state;
}
