// redux
import { combineReducers } from '@reduxjs/toolkit';
// reducers
import { moviesReducer } from './movies';

// ROOT REDUCER
export const rootReducer = combineReducers({
  movies: moviesReducer
});
