// /* eslint-disable react/self-closing-comp */

import { DetailedHTMLProps, HTMLAttributes, memo } from 'react';
// store
import { useAppSelector } from 'store';
import { moviesSelectors } from 'store/movies';
// hooks
import { useCurrentMovie } from 'hooks/movies';
// aux. components
import {
  MovieCardWrapper,
  MovieCardInner,
  MovieCardTitle,
  MovieCardYear
} from './auxiliary';

// PROPS
export interface MovieCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    movieId: string;
  }

// COMPONENT
export const MovieCard = memo((props: MovieCardProps) => {
  const {
    movieId,
    className
  } = props;

  // Get moviie by id
  const { movie } = useAppSelector(moviesSelectors.movieByIdSelector(movieId));

  //
  const { setCurrentMovie } = useCurrentMovie();

  // NO DATA
  if (!movie) {
    return null;
  }

  // RETURN
  return (
    <MovieCardWrapper
      className={className}
      id={movieId}
      poster={movie.poster}
      onClick={() => setCurrentMovie(movie)}
    >
      {/* Inner */}
      <MovieCardInner>
        {/* Title */}
        <MovieCardTitle text={movie.title} />
        {/* Year */}
        <MovieCardYear text={movie.year} />
      </MovieCardInner>
    </MovieCardWrapper>
  );
});
