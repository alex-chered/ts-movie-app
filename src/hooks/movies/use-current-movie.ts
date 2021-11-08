import { useCallback } from 'react';
// store
import { useAppDispatch } from 'store';
import { moviesActions } from 'store/movies';
// models
import { MovieModel } from 'models';

// HOOK
export const useCurrentMovie = () => {
  const dispatch = useAppDispatch();

  const setCurrentMovie = useCallback((movie: MovieModel) => {
    dispatch(moviesActions.setCurrentMovieAction({ movie }));
  }, [dispatch]);

  const clearCurrentMovie = useCallback(() => {
    dispatch(moviesActions.clearCurrentMovieAction());
  }, [dispatch]);

  // RETURN
  return {
    setCurrentMovie,
    clearCurrentMovie
  };
};
