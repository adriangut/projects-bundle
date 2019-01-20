import axios from 'axios';
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { omit, mapKeys } from '../../../utils/object';

const FETCH_POSTS = 'fetch_posts';
const FETCH_POST = 'fetch_post';
const CREATE_POST = "create_post";
const DELETE_POST = "delete_post";

const ROOT_URL = "http://reduxblog.heroku.com/api";
const API_KEY = '?key=PAPERCLIP1234';

export default combineReducers({ posts, form });

export const fetchPosts = () => ({
    type: FETCH_POSTS,
    payload: axios.get(`${ROOT_URL}/posts${API_KEY}`),
});

export const createPost = (values, callback) => ({
    type: CREATE_POST,
    payload: axios.post(`${ROOT_URL}/posts${API_KEY}`, values).then(callback),
});

export const fetchPost = (id) => ({
    type: FETCH_POST,
    payload: axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`),
});

export const deletePost = (id, callback) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(callback);

    return {
        type: DELETE_POST,
        payload: id,
    };
}

const posts = (state = {}, action) => {
    switch (action.type) {
        case DELETE_POST:
            return omit(state, action.payload);
        case FETCH_POST:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case FETCH_POSTS:
            return mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}
