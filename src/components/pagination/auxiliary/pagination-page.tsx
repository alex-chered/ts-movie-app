/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

import { KeyboardEvent } from 'react';
// router
import { Link } from 'react-router-dom';
// third-party libraries
import classNames from 'classnames';
// css
import styles from '../pagination.module.css';

// PROPS
interface PaginationPageProps {
  page: number;
  url?: string;
  disabled?: boolean;
  active?: boolean;
  onSelect?: (page: number) => void;
}

// COMPONENT
export const PaginationPage = (props: PaginationPageProps) => {
  const {
    page,
    url = '/',
    disabled = false,
    active = false,
    onSelect
  } = props;

  // Item -> onKeyPress
  const onKeyPressHandler = (e: KeyboardEvent<HTMLAnchorElement>) => {
    if (e.code.toLowerCase() === 'space') {
      if (!active) {
        onSelect && onSelect(page);
      }
    }
  };

  // css
  const classes = classNames(
    styles['pagination-item'],
    {
      [styles['pagination-item--active']]: active,
      [styles['pagination-item--disabled']]: disabled && !active
    }
  );

  // RENDER
  return (
    <>
      {/* Render "Link", if item isn't active */}
      {
        !active && (
          <Link
            className={classes}
            to={url}
            tabIndex={0}
            onKeyPress={onKeyPressHandler}
          >
            { page }
          </Link>
        )
      }
      {/* Render simple "span", if item is active */}
      {
        active && (
          <span
            className={classes}
            tabIndex={0}
          >
            { page }
          </span>
        )
      }
    </>
  );
};
