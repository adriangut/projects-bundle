import axios from 'axios';

const API_KEY = '1d8571cf27e8a8ebe8b6d3ac35489117';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    
    return{
        type: FETCH_WEATHER,
        payload: request
    };
}