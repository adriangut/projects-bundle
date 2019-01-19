import { combineReducers } from 'redux';
import { weatherReducer as weather } from './reducer_weather';

export default combineReducers({ weather });
