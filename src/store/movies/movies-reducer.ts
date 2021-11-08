/* eslint-disable no-param-reassign */
// redux
import { createReducer } from '@reduxjs/toolkit';
// models
import { MovieModel } from 'models';
// mock
// import { movies } from 'data/mock-data';
// actions
import { moviesActions } from './movies-actions';

// STATE TYPE
interface MoviesState {
  movies: MovieModel[],
  currentMovie: MovieModel | null,
  errorText: string,
  loading: boolean,
  currentPage: number,
  perPage: number
}

// INITIAL STATE
const initialState: MoviesState = {
  movies: [],
  currentMovie: null,
  // currentMovie: movies[0],
  // movies,
  loading: false,
  errorText: '',
  currentPage: 1,
  perPage: 12
};

// Get actions
const {
  getMovieAsyncAction,
  setCurrentPageAction,
  setPageAction,
  addPageAsyncAction,
  setCurrentMovieAction,
  clearCurrentMovieAction
} = moviesActions;

// REDUCER
export const moviesReducer = createReducer<MoviesState>(
  initialState,
  (builder) => {
    builder
      // SET PAGE
      .addCase(
        setPageAction.pending,
        (state) => {
          // console.log('reducer - pending');
          state.movies = [];
          state.loading = true;
          state.errorText = '';
        }
      )
      .addCase(
        setPageAction.fulfilled,
        (state, action) => {
          // console.log('reducer - fulfilled');
          state.loading = false;
          state.movies = action.payload.movies;
        }
      )
      .addCase(
        setPageAction.rejected,
        (state, action) => {
          state.loading = false;
          state.errorText = action.payload?.errorMessage || '';
        }
      )
      // ADD PAGE
      .addCase(
        addPageAsyncAction.pending,
        (state) => {
          state.loading = true;
          state.errorText = '';
        }
      )
      .addCase(
        addPageAsyncAction.fulfilled,
        (state, action) => {
          state.loading = false;
          state.movies = state.movies.concat(action.payload.movies);
        }
      )
      .addCase(
        addPageAsyncAction.rejected,
        (state, action) => {
          state.loading = false;
          state.errorText = action.payload?.errorMessage || '';
        }
      )

      // GEM MOVIE (ASYNC)
      .addCase(
        getMovieAsyncAction.pending,
        (state) => {
          state.currentMovie = null;
          state.loading = true;
          state.errorText = '';
        }
      )
      .addCase(
        getMovieAsyncAction.fulfilled,
        (state, action) => {
          state.loading = false;
          state.currentMovie = action.payload.movie;
        }
      )
      .addCase(
        getMovieAsyncAction.rejected,
        (state, action) => {
          state.loading = false;
          state.errorText = action.payload?.errorMessage || '';
        }
      )

      // SET CURRENT PAGE
      .addCase(
        setCurrentPageAction,
        (state, action) => {
          state.currentPage = action.payload.page;
        }
      )

      // CURRENT MOVIE
      .addCase(
        setCurrentMovieAction,
        (state, action) => {
          state.currentMovie = action.payload.movie;
        }
      )
      .addCase(
        clearCurrentMovieAction,
        (state) => {
          state.currentMovie = null;
        }
      );
  }
);
