// components
import { Modal } from 'components/modals/modal';
import { MovieDetails } from 'components/movie-details';
// hooks
import { useCurrentMovie } from 'hooks/movies';
// store
import { useAppSelector } from 'store';
import { moviesSelectors } from 'store/movies';

// COMPONENT
export const MovieDetailsModal = () => {
  const { clearCurrentMovie } = useCurrentMovie();

  // Get the current movie and its title
  const { currentMovie } = useAppSelector(moviesSelectors.currentMovieSelector);
  const title = currentMovie?.title || '';

  // RENDER
  return (
    <Modal
      title={title}
      onClose={clearCurrentMovie}
    >
      <MovieDetails
        theme="light"
      />
    </Modal>
  );
};
