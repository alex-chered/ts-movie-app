// third-party libraries
import classNames from 'classnames';
// components
import { Skeleton } from 'components/skeletons';
// css
import styles from './movie-card-skeleton.module.css';

// PROPS
export interface MovieCardSkeletonProps {
  className?: string
}

// COMPONENT
export const MovieCardSkeleton = (props: MovieCardSkeletonProps) => {
  const { className } = props;

  // css
  const classes = classNames(
    styles['skeleton'],
    className
  );

  // RENDER
  return <Skeleton className={classes} />;
};
