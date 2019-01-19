import { combineReducers } from 'redux';
import { authenticationReducer as authenticated } from './authentication';

export default combineReducers({ authenticated });
