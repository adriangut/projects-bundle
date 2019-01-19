import { FETCH_WEATHER } from '../actions/index';

export const weatherReducer = (state = [], action) => {
    switch (action.type) {
    case FETCH_WEATHER:
        return [action.payload.data, ...state];
    }
    return state;
}
