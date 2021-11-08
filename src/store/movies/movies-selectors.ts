// redux
import { createSelector } from '@reduxjs/toolkit';
// store
import { AppState } from 'store';

// SELECTORS
// select movies
const dataSelector = createSelector(
  (state: AppState) => state.movies.movies,
  (movies) => ({ movies })
);

// select movie by id
const movieByIdSelector = (movieId: string) => createSelector(
  (state: AppState) => state.movies.movies.find((movie) => movie.id === movieId),
  (movie) => ({ movie })
);

// select loading
const loadingSelector = createSelector(
  (state: AppState) => state.movies.loading,
  (loading) => ({ loading })
);

// select error text
const errorTextSelector = createSelector(
  (state: AppState) => state.movies.errorText,
  (errorText) => ({ errorText })
);

// select page size
const pageSizeSelector = createSelector(
  (state: AppState) => state.movies.perPage,
  (perPage) => ({ perPage })
);

// select current page
const currentPageSelector = createSelector(
  (state: AppState) => state.movies.currentPage,
  (currentPage) => ({ currentPage })
);

// select the current movie
const currentMovieSelector = createSelector(
  (state: AppState) => state.movies.currentMovie,
  (currentMovie) => ({ currentMovie })
);

// select data length
const dataLengthSelector = createSelector(
  (state: AppState) => state.movies.movies.length,
  (dataLength) => ({ dataLength })
);

// Combine all selectors into one object
export const moviesSelectors = {
  dataSelector,
  movieByIdSelector,
  loadingSelector,
  errorTextSelector,
  pageSizeSelector,
  currentPageSelector,
  currentMovieSelector,
  dataLengthSelector
};
