import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';
import { omit, mapKeys } from '../../../utils/object';

export default function(state = {}, action) {
    switch (action.type) {
        case DELETE_POST:
            return omit(state, action.payload);
        case FETCH_POST:
            // const post = action.payload.data;
            // const newState = { ...state  };
            // newState[post.id] = post;
            // return newState; ES5
            return { ...state, [action.payload.data.id]: action.payload.data };
        case FETCH_POSTS:
            return mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}
