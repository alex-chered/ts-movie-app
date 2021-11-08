import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';
// third-party libraries
import classNames from 'classnames';
// assets
import image from './imdb_logo.png';
// css
import styles from './logo.module.css';

export interface LogoProps
  extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {}

// COMPONENT
export const Logo = (props: LogoProps) => {
  const { className } = props;

  // css
  const classesRoot = classNames(
    styles['logo'],
    className
  );

  // RENDER
  return (
    <img
      className={classesRoot}
      src={image}
      alt="Logo"
    />
  );
};
