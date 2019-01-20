
import { combineReducers } from 'redux';
import books from './reducer_books';
import activeBook from './reducer_active_book';

const BOOK_SELECTED = 'BOOK_SELECTED';

export default combineReducers({ activeBook, books });;

export const selectBook = (book) => ({
    type: BOOK_SELECTED,
    payload: book,
});

// State argument is not app state, only the state the reducer is responsible for.
const activeBook = (state = null, action) => {
    switch (action.type) {
        case BOOK_SELECTED:
            return action.payload;
    }
    return state;
}

const books = () => [
    { title: "JavaScript: The Good Parts", pages: 101 },
    { title: "Harry Potter", pages: 39 },
    { title: "The Dank Tower", pages: 85 },
    { title: "Eloquent Ruby", pages: 1 },
];
