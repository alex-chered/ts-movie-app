/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

// third-party libraries
import classNames from 'classnames';
// css
import styles from '../pagination.module.css';

// PROPS
interface PaginationPrevProps {
  disabled?: boolean;
  onClick?: () => void;
}

// COMPONENT
export const PaginationPrev = (props: PaginationPrevProps) => {
  const { disabled = false, onClick } = props;

  // css
  const classes = classNames(
    styles['pagination-item'],
    {
      [styles['pagination-item--disabled']]: disabled
    }
  );

  // RENDER
  return (
    <span
      className={classes}
      onClick={onClick}
      tabIndex={0}
      role="button"
    >
      &lt;
    </span>
  );
};
