import { ReactNode, CSSProperties } from 'react';
// router
import { Link, useLocation } from 'react-router-dom';
// third-party libraries
import classNames from 'classnames';
// css
import styles from '../movie-card.module.css';

// PROPS
interface MovieCardWrapperProps {
  children: ReactNode,
  id: string,
  poster: string,
  onClick: () => void,
  className?: string
}

// COMPONENT
export const MovieCardWrapper = (props: MovieCardWrapperProps) => {
  const {
    children,
    id,
    poster,
    onClick,
    className
  } = props;

  const location = useLocation();

  // css
  const classesRoot = classNames(
    styles['movie-card'],
    className
  );

  // background-image
  const style: CSSProperties = {
    backgroundImage: `url(${poster})`
  };

  // RENDER
  return (
    <Link
      className={classesRoot}
      style={style}
      to={{
        pathname: `/movie/${id}`,
        state: { background: location }
      }}
      onClick={onClick}
    >
      { children }
    </Link>
  );
};
