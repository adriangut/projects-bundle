import { CHANGE_AUTH as type } from './types';

export const authenticate = (isLogggedIn) => ({ type, payload: isLogggedIn });
