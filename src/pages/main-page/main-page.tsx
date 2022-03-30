import { useEffect } from 'react';
// router
import { useHistory, useLocation } from 'react-router-dom';
// components
import { MovieList } from 'components/movie-list';
import { Message } from 'components/message';
// hooks
import { useQueryParam } from 'hooks/common';
import { useSetPage } from 'hooks/movies';
// store
import { useAppSelector } from 'store';
import { moviesSelectors } from 'store/movies';
// aux. components
import {
  MainPageWrapper,
  MainPagePagination
} from './auxiliary';

interface LocationState {
  add?: boolean
}

// COMPONENT
export const MainPage = () => {
  // Get the query parameter "page".
  // The default value is 1.
  const { param: page } = useQueryParam('page', '1');

  //
  const { setPage, addPage } = useSetPage();

  // Get information about store
  const { errorText } = useAppSelector(moviesSelectors.errorTextSelector);
  const { dataLength: moviesLength } = useAppSelector(moviesSelectors.dataLengthSelector);
  const { loading } = useAppSelector(moviesSelectors.loadingSelector);

  // Determine the action type
  const { action } = useHistory();
  // Get the location state
  const { state: locationState } = useLocation<LocationState>();

  // Get the parameter whether to add movies to the current ones
  let addMovies = false;
  if (action !== 'POP') {
    addMovies = locationState?.add || false;
  }

  // This effect handles page changes
  useEffect(() => {
    // Convert string to number
    const numPage = +page;

    // Add new movies
    if (addMovies) {
      addPage(numPage);

    // Set new movies
    } else {
      setPage(numPage);
    }
  // disable depedency for "addMovies"
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, setPage, addPage]);

  // Function to determine if there is data
  const isNoData = () => {
    return !loading && moviesLength === 0;
  };

  // RENDER
  return (
    <MainPageWrapper>

      {/* ERROR */}
      { errorText && <Message text="При загрузке произошла ошибка" /> }

      {/* NO DATA */}
      { !errorText && isNoData() && <Message text="Нет данных" /> }

      {/* DATA */}
      { !errorText && !isNoData() && (
        <>
          <MovieList />
          <MainPagePagination />
        </>
      ) }

    </MainPageWrapper>
  );
};
