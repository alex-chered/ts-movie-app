import { Fragment } from 'react';
// third-party libraries
import classNames from 'classnames';
// aux.types
import type { TMovieDetailsTheme } from '../movie-details-theme.type';
// css
import styles from '../movie-details.module.css';

// PROPS
export interface MovieDetailsSummaryRow {
  caption: string;
  text: string;
}
interface MovieDetailsSummaryProps {
  rows: MovieDetailsSummaryRow[];
  theme: TMovieDetailsTheme;
}

// COMPONENT
export const MovieDetailsSummary = (props: MovieDetailsSummaryProps) => {
  const { rows, theme } = props;

  // css
  const classesCaption = classNames(
    styles['movie-details__summary-caption'],
    {
      [styles['movie-details__summary-caption--theme-light']]: theme === 'light'
    }
  );
  const classesText = classNames(
    styles['movie-details__summary-text'],
    {
      [styles['movie-details__summary-text--theme-light']]: theme === 'light'
    }
  );

  // RENDER
  return (
    <div className={styles['movie-details__summary']}>
      {
        rows.map((row) => (
          <Fragment key={row.caption}>
            <div className={classesCaption}>
              { row.caption }
            </div>
            <div className={classesText}>
              { row.text }
            </div>
          </Fragment>
        ))
      }
    </div>
  );
};
