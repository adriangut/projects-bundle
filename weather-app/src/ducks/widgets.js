import axios from 'axios';
import { combineReducers } from 'redux';

const FETCH_WEATHER = 'FETCH_WEATHER';

const API_KEY = '1d8571cf27e8a8ebe8b6d3ac35489117';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export default combineReducers({ weather: weatherReducer });

export const fetchWeather = (city) => ({
    type: FETCH_WEATHER,
    payload: axios.get(`${ROOT_URL}&q=${city},us`),
});

const weatherReducer = (state = [], action) => {
    switch (action.type) {
    case FETCH_WEATHER:
        return [action.payload.data, ...state];
    }
    return state;
}
