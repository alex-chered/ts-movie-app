// third-party libraries
import classNames from 'classnames';
// aux.types
import type { TMovieDetailsTheme } from '../movie-details-theme.type';
// css
import styles from '../movie-details.module.css';

// PROPS
interface MovieDetailsTitleProps {
  title: string;
  theme: TMovieDetailsTheme;
}

// COMPONENT
export const MovieDetailsTitle = (props: MovieDetailsTitleProps) => {
  const { title, theme } = props;

  // css
  const classes = classNames(
    styles['movie-details__title'],
    {
      [styles['movie-details__title--theme-light']]: theme === 'light'
    }
  );

  // RENDER
  return (
    <h3 className={classes}>
      { title }
    </h3>
  );
};
