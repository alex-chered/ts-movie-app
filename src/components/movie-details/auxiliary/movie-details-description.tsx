// third-party libraries
import classNames from 'classnames';
// aux.types
import type { TMovieDetailsTheme } from '../movie-details-theme.type';
// css
import styles from '../movie-details.module.css';

// PROPS
interface MovieDetailsDescriptionProps {
  text: string;
  theme: TMovieDetailsTheme;
}

// COMPONENT
export const MovieDetailsDescription = (props: MovieDetailsDescriptionProps) => {
  const { text, theme } = props;

  // css
  const classes = classNames(
    styles['movie-details__description'],
    {
      [styles['movie-details__description--theme-light']]: theme === 'light'
    }
  );

  // RENDER
  return (
    <p className={classes}>
      { text }
    </p>
  );
};
