// css
import styles from '../movie-card.module.css';

// PROPS
interface MovieCardTitleProps {
  text: string;
}

// COMPONENT
export const MovieCardTitle = (props: MovieCardTitleProps) => {
  const { text } = props;

  // RENDER
  return (
    <p className={styles['movie-card__title']}>
      { text }
    </p>
  );
};
