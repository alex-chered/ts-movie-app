import { memo } from 'react';
// components
import { MovieCard } from 'components/movie-card';
import { MovieCardSkeleton } from 'components/skeletons';
// store
import { useAppSelector } from 'store';
import { moviesSelectors } from 'store/movies';
// utils
import { createMockArray } from 'utils';
// css
import styles from './movie-list.module.css';

// COMPONENT
export const MovieList = memo(() => {
  // Get the "fetchMovies" loading status
  const { loading } = useAppSelector(moviesSelectors.loadingSelector);
  // Get the movies number per page
  const { perPage } = useAppSelector(moviesSelectors.pageSizeSelector);
  // Get movies
  const { movies } = useAppSelector(moviesSelectors.dataSelector);

  // RENDER
  return (
    <div
      className={styles['movie-list']}
    >
      {/* NOT Loading */}
      {
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movieId={movie.id}
          />
        ))
      }
      {/* Loading */}
      {
        loading && (
          createMockArray(perPage).map((element) => <MovieCardSkeleton key={element} />)
        )
      }
    </div>
  );
});
