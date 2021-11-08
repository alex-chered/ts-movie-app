import { ReactNode } from 'react';
// third-party libraries
import classNames from 'classnames';
// css
import styles from '../movie-details.module.css';

// PROPS
interface MovieDetailsWrapperProps {
  children: ReactNode;
  className?: string;
  theme?: 'default' | 'light';
}

// COMPONENT
export const MovieDetailsWrapper = (props: MovieDetailsWrapperProps) => {
  const { children, className, theme } = props;

  // css
  const classesRoot = classNames(
    styles['movie-details'],
    {
      [styles['movie-details--theme-light']]: theme === 'light'
    },
    className
  );

  // RENDER
  return (
    <div className={classesRoot}>
      { children }
    </div>
  );
};
