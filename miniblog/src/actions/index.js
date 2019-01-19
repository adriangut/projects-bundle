import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = "create_post";
export const DELETE_POST = "delete_post";

const ROOT_URL = "http://reduxblog.heroku.com/api";
const API_KEY = '?key=PAPERCLIP1234';

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
