import { memo } from 'react';
// store
import { useAppSelector } from 'store';
import { moviesSelectors } from 'store/movies';
// components
import { Badge } from 'components/badge';
// aux. components
import {
  MovieDetailsWrapper,
  MovieDetailsPoster,
  MovieDetailsTitle,
  MovieDetailsDescription,
  MovieDetailsBadges,
  MovieDetailsSummary,
  MovieDetailsSummaryRow
} from './auxiliary';
// aux. types
import type { TMovieDetailsTheme } from './movie-details-theme.type';

// PROPS
interface MovieDetailsProps {
  className?: string,
  theme?: TMovieDetailsTheme;
}

// COMPONENT
export const MovieDetails = memo((props: MovieDetailsProps) => {
  const { theme = 'default', className } = props;

  // Current movie from the store
  const { currentMovie } = useAppSelector(moviesSelectors.currentMovieSelector);

  // The current movie is null
  if (!currentMovie) {
    return null;
  }

  // Get the movie fields
  const {
    poster,
    title,
    plot,
    genre,
    year,
    runtime,
    production,
    country,
    director,
    writer,
    actors,
    awards
  } = currentMovie;

  // Rows for summary data
  const rows: MovieDetailsSummaryRow[] = [
    { caption: 'Production', text: production },
    { caption: 'Country', text: country },
    { caption: 'Director', text: director },
    { caption: 'Writer', text: writer },
    { caption: 'Actors', text: actors },
    { caption: 'Awards', text: awards }
  ];

  // RENDER
  return (
    <MovieDetailsWrapper
      theme={theme}
      className={className}
    >
      {/* Poster */}
      <MovieDetailsPoster url={poster} />

      {/* Movie Info */}
      <div>
        <MovieDetailsTitle title={title} theme={theme} />
        <MovieDetailsDescription text={plot} theme={theme} />
        <MovieDetailsBadges>
          <Badge text={genre} />
          <Badge text={year} />
          <Badge text={runtime} />
        </MovieDetailsBadges>
        <MovieDetailsSummary rows={rows} theme={theme} />
      </div>
    </MovieDetailsWrapper>
  );
});
