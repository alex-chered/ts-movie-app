// third-party libraries
import classNames from 'classnames';
// css
import styles from './skeleton.module.css';

// PROPS
interface SkeletonProps {
  className?: string;
}

// COMPONENT
export const Skeleton = (props: SkeletonProps) => {
  const { className } = props;

  // css
  const classes = classNames(
    styles['skeleton'],
    className
  );

  // RENDER
  return (
    <div className={classes}>
      &zwnj;
    </div>
  );
};
