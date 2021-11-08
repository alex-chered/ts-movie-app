/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

// third-party libraries
import classNames from 'classnames';
// css
import styles from '../pagination.module.css';

// PROPS
interface PaginationEllipsisProps {
  disabled?: boolean;
}

// COMPONENT
export const PaginationEllipsis = (props: PaginationEllipsisProps) => {
  const { disabled = false } = props;

  // css
  const classes = classNames(
    styles['pagination-item'],
    styles['pagination-item--ellipsis'],
    {
      [styles['pagination-item--disabled']]: disabled
    }
  );

  // RENDER
  return (
    <span
      className={classes}
      tabIndex={0}
    >
      ...
    </span>
  );
};
