import { ReactNode } from 'react';
// css
import styles from '../movie-card.module.css';

// PROPS
interface MovieCardInnerProps {
  children: ReactNode;
}

// COMPONENT
export const MovieCardInner = (props: MovieCardInnerProps) => {
  const { children } = props;

  // RENDER
  return (
    <div className={styles['movie-card__inner']}>
      { children }
    </div>
  );
};
