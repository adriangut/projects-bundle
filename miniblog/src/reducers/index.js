import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import posts from './reducer_posts';

export default combineReducers({ posts, form });
