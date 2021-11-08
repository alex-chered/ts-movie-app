// css
import styles from '../movie-details.module.css';

// PROPS
interface MovieDetailsPosterProps {
  url: string;
}

// COMPONENT
export const MovieDetailsPoster = (props: MovieDetailsPosterProps) => {
  const { url } = props;

  // RENDER
  return (
    <div
      className={styles['movie-details__poster-wrapper']}
    >
      <img
        className={styles['movie-details__poster']}
        src={url}
        alt="poster"
      />
    </div>
  );
};
