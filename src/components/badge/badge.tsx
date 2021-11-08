import { DetailedHTMLProps, HTMLAttributes } from 'react';
// third-party libraries
import classNames from 'classnames';
// css
import styles from './badge.module.css';

// PROPS
interface BadgeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    text: string;
    type?: 'success';
  }

// COMPONENT
export const Badge = (props: BadgeProps) => {
  const {
    text,
    type = 'success',
    className
  } = props;

  // css
  const classesRoot = classNames(
    styles['badge'],
    {
      [styles['badge--success']]: type === 'success'
    },
    className
  );

  // RENDER
  return (
    <span
      className={classesRoot}
    >
      { text }
    </span>
  );
};
