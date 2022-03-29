import { useEffect } from 'react';
// router
import { useParams } from 'react-router-dom';
// components
import { MovieDetails } from 'components/movie-details';
import { MovieDetailsSkeleton } from 'components/skeletons';
import { Message } from 'components/message';
// store
import { useAppSelector } from 'store';
import { moviesSelectors } from 'store/movies';
// hooks
import { useGetMovie } from 'hooks/movies';
// aux. components
import { MoviePageWrapper } from './auxiliary';

// COMPONENT
export const MoviePage = () => {
  // Get params from url
  const { movieId } = useParams<{ movieId: string }>();

  const { getMovie } = useGetMovie();
  // Current movie from the store
  const { currentMovie } = useAppSelector(moviesSelectors.currentMovieSelector);
  // Get movie - status
  // const { loading } = useAppSelector(moviesSelectors.loadingSelector);
  const loading = true;
  const { errorText } = useAppSelector(moviesSelectors.errorTextSelector);

  // Get movie by id
  useEffect(() => {
    if (!movieId) {
      return;
    }
    getMovie(movieId);
  }, [getMovie, movieId]);

  // ERROR
  if (errorText) {
    return <Message text="При загрузке произошла ошибка" />;
  }

  // NO DATA
  if (!loading && !currentMovie) {
    return <Message text="По вашему запросу ничего не найдено" />;
  }

  // RENDER
  return (
    <MoviePageWrapper>
      { loading && <MovieDetailsSkeleton /> }
      { !loading && <MovieDetails /> }
    </MoviePageWrapper>
  );
};
