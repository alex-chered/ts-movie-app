import { useCallback } from 'react';
// store
import { useAppDispatch } from 'store';
import { moviesActions } from 'store/movies';

// HOOK
export const useSetPage = () => {
  const dispatch = useAppDispatch();

  // Function to set a page
  const setPage = useCallback((page: number) => {
    dispatch(moviesActions.setPageAction({ page }));
  }, [dispatch]);

  // Function to add a page
  const addPage = useCallback((page: number) => {
    dispatch(moviesActions.addPageAsyncAction({ page }));
  }, [dispatch]);

  // RETURN
  return {
    setPage,
    addPage
  };
};
