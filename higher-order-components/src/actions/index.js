import {
    CHANGE_AUTH
} from './types';

export function authenticate(isLogggedIn){
    return{
        type: CHANGE_AUTH,
        payload: isLogggedIn
    };
}