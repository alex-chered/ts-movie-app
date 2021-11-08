// router
import { useRouteMatch, useHistory, useLocation } from 'react-router-dom';
// third-party libraries
import classNames from 'classnames';
// utils
import { addParameterToUrl, rangeInt } from 'utils';
// components
import { Button } from 'components/button';
// aux. components
import {
  PaginationPrev,
  PaginationNext,
  PaginationPage,
  PaginationEllipsis
} from './auxiliary';
// aux. utils
import {
  computeTotalPages,
  computePaginationParameters
} from './utils';
// css
import styles from './pagination.module.css';

// PROPS
interface PaginationProps {
  currentPage: number;
  totalItems: number;
  perPage: number;
  loading?: boolean;
  className?: string;
}

// COMPONENT
export const Pagination = (props: PaginationProps) => {
  const {
    currentPage,
    totalItems,
    perPage,
    loading = false,
    className
  } = props;

  // Determine the current url
  let { url: baseUrl } = useRouteMatch();
  baseUrl = baseUrl === '/' ? '' : baseUrl;
  // Get the method
  const { push } = useHistory();
  // Get the current query string
  const { search } = useLocation();

  // Define amount items in main group
  const amountInMainGroup = 3;

  // Get parameters of rendering the component
  const {
    mostLeftPageInMainGroup,
    displayFirstPage,
    displayLastPage,
    displayLeftEllipsis,
    displayRightEllipsis
  } = computePaginationParameters(
    currentPage,
    totalItems,
    perPage,
    amountInMainGroup
  );

  // Compute total pages
  const totalPages = computeTotalPages(totalItems, perPage);

  // Function to form url considering current query string and base url
  const formUrl = (page: number): string => {
    const pageString = `${page}`;
    return `${baseUrl}/?${addParameterToUrl(search, 'page', pageString)}`;
  };

  // Function to go to the n-th page
  const goToPage = (page: number, add = false): void => {
    push(formUrl(page), { add });
  };

  // EVENT HANDLERS
  // -> click "Prev"
  const onClickPrevHandler = () => {
    if (currentPage === 1) {
      return;
    }
    goToPage(currentPage - 1);
  };
  // -> click "Next"
  const onClickNextHandler = () => {
    if (currentPage === totalPages) {
      return;
    }
    goToPage(currentPage + 1);
  };
  // -> key press "Item"
  const onSelectItemHandler = (page: number) => {
    if (page === 0) {
      return;
    }
    goToPage(currentPage);
  };
  // -> click the button "Load more"
  const onClickLoadMoreHandler = () => {
    if (currentPage === totalPages) {
      return;
    }
    goToPage(currentPage + 1, true);
  };

  // css
  const classes = classNames(
    styles['pagination'],
    className
  );

  // RENDER
  return (
    <div className={classes}>
      <Button
        className={styles['pagination__load-more']}
        text="Загрузить еще"
        disabled={loading}
        onClick={onClickLoadMoreHandler}
      />
      <div className={styles['pagination__pages']}>
        {/* Prev */}
        <PaginationPrev
          key="prev"
          disabled={currentPage === 1 || loading}
          onClick={onClickPrevHandler}
        />

        {/* Pages */}
        {/* First Page */}
        {
          displayFirstPage && (
            <PaginationPage
              key={1}
              page={1}
              active={currentPage === 1}
              disabled={loading}
              url={formUrl(1)}
              onSelect={onSelectItemHandler}
            />
          )
        }
        {/* Left Ellipsis */}
        {
          displayLeftEllipsis && (
            <PaginationEllipsis
              key="leftEllipsis"
              disabled={loading}
            />
          )
        }
        {/* Main Group */}
        {
          rangeInt(mostLeftPageInMainGroup, amountInMainGroup).map((item) => (
            <PaginationPage
              key={item}
              page={item}
              active={currentPage === item}
              disabled={loading}
              url={formUrl(item)}
              onSelect={onSelectItemHandler}
            />
          ))
        }
        {/* Left Ellipsis */}
        {
          displayRightEllipsis && (
            <PaginationEllipsis
              key="rightEllipsis"
              disabled={loading}
            />
          )
        }
        {/* Last Page */}
        {
          displayLastPage && (
            <PaginationPage
              key={totalPages}
              page={totalPages}
              active={currentPage === totalPages}
              disabled={loading}
              url={formUrl(totalPages)}
              onSelect={onSelectItemHandler}
            />
          )
        }

        {/* Next */}
        <PaginationNext
          key="next"
          disabled={currentPage === totalPages || loading}
          onClick={onClickNextHandler}
        />
      </div>
    </div>
  );
};
