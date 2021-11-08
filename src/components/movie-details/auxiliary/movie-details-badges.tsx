import { ReactNode } from 'react';
// css
import styles from '../movie-details.module.css';

// PROPS
interface MovieDetailsBadgesProps {
  children: ReactNode;
}

// COMPONENT
export const MovieDetailsBadges = (props: MovieDetailsBadgesProps) => {
  const { children } = props;

  // RENDER
  return (
    <div
      className={styles['movie-details__badges']}
    >
      { children }
    </div>
  );
};
