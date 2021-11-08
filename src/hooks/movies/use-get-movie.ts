import { useCallback } from 'react';
// store
import { useAppDispatch } from 'store';
import { moviesActions } from 'store/movies';

// HOOK
export const useGetMovie = () => {
  const dispatch = useAppDispatch();

  // Function to fetch the movie and set it as the current
  const getMovie = useCallback((id: string) => {
    dispatch(moviesActions.getMovieAsyncAction({ id }));
  }, [dispatch]);

  // RETURN
  return {
    getMovie
  };
};
