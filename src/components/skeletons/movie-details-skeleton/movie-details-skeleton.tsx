// components
import { Skeleton } from 'components/skeletons';
// css
import styles from './movie-details-skeleton.module.css';

// COMPONENT
export const MovieDetailsSkeleton = () => {
  // RENDER
  return (
    <div className={styles['skeleton']}>
      <Skeleton className={styles['skeleton__poster']} />
      <div className={styles['skeleton__right']}>
        <Skeleton className={styles['skeleton__title']} />
        <Skeleton className={styles['skeleton__description']} />
        <Skeleton className={styles['skeleton__badges']} />
        <Skeleton className={styles['skeleton__summary']} />
      </div>
    </div>
  );
};
