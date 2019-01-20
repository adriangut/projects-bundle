import { combineReducers } from 'redux';

export const SAVE_COMMENT = 'save_comment';

export default combineReducers({ comments: commentReducer });

export const saveComment = (payload) => ({ payload, type: SAVE_COMMENT });

export const commentReducer = (state = [], action) => {
    switch (action.type) {
        case SAVE_COMMENT:
            return [ ...state, action.payload];
    }

    return state;
}
