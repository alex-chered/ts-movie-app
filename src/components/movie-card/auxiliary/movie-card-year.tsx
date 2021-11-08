// css
import styles from '../movie-card.module.css';

// PROPS
interface MovieCardYearProps {
  text: string;
}

// COMPONENT
export const MovieCardYear = (props: MovieCardYearProps) => {
  const { text } = props;

  // RENDER
  return (
    <p className={styles['movie-card__year']}>
      { text }
    </p>
  );
};
