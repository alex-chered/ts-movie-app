// redux
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
// store
import { AppState } from 'store';
// services
import { MoviesService } from 'services/movies';
// models
import { MovieModel } from 'models';
// utils
import { getIdsByPage } from 'utils';

interface ActionResult {
  movies: MovieModel[];
}
interface ActionParameter {
  page: number
}
interface ActionConfig {
  rejectValue: { errorMessage: string },
  state: AppState
}

// ACTIONS
// The current movie
const setCurrentMovieAction = createAction<{ movie: MovieModel }>('movies/setCurrentMovie');
const clearCurrentMovieAction = createAction<void>('movies/clearCurrentMovie');

// Set the current page in the store
const setCurrentPageAction = createAction<{ page: number }>('movies/setCurrentPage');

// Fetch movies for the required page and set this page as the current one
const setPageAction = createAsyncThunk<
  ActionResult,
  ActionParameter,
  ActionConfig
>(
  'movies/setPage',
  async ({ page }, thunkApi) => {
    try {
      // Get the page size
      const { perPage } = thunkApi.getState().movies;
      //
      const { dispatch } = thunkApi;
      // Get ids for the required page
      const ids = getIdsByPage(page, perPage);
      // Dispatch
      dispatch(setCurrentPageAction({ page }));
      // Do the request
      const movies = await MoviesService.fetchMovies(ids);
      // Return data
      return { movies };
    } catch (err) {
      const msg = (err as Error).message;
      return thunkApi.rejectWithValue({ errorMessage: msg });
    }
  }
);

// Fetch movies for the required page and set this page as the current one
const addPageAsyncAction = createAsyncThunk<
  ActionResult,
  ActionParameter,
  ActionConfig
>(
  'movies/addPage',
  async ({ page }, thunkApi) => {
    try {
      // Get the page size
      const { perPage } = thunkApi.getState().movies;
      //
      const { dispatch } = thunkApi;
      // Get ids for the required page
      const ids = getIdsByPage(page, perPage);
      // Dispatch
      dispatch(setCurrentPageAction({ page }));
      // Do the request
      const movies = await MoviesService.fetchMovies(ids);
      // Return data
      return { movies };
    } catch (err) {
      const msg = (err as Error).message;
      return thunkApi.rejectWithValue({ errorMessage: msg });
    }
  }
);

// Get movie by id
const getMovieAsyncAction = createAsyncThunk<
  { movie: MovieModel },
  { id: string },
  {
    rejectValue: { errorMessage: string },
    state: AppState
  }
>(
  'movies/getMovie',
  async ({ id }, thunkApi) => {
    try {
      // Do the request
      const movies = await MoviesService.fetchMovies([id]);
      // Return data
      return { movie: movies[0] };
    } catch (err) {
      const msg = (err as Error).message;
      return thunkApi.rejectWithValue({ errorMessage: msg });
    }
  }
);

export const moviesActions = {
  setPageAction,
  addPageAsyncAction,
  getMovieAsyncAction,
  setCurrentPageAction,
  setCurrentMovieAction,
  clearCurrentMovieAction
};
