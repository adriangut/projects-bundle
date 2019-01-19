import { combineReducers } from 'redux';
import books from './reducer_books';
import activeBook from './reducer_active_book';

export default combineReducers({ activeBook, books });;
