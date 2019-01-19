import { combineReducers } from 'redux';
import { commentReducer as comments } from './comments';

export default combineReducers({ comments });
