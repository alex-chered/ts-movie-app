import { memo } from 'react';
// components
import { Pagination } from 'components/pagination';
// store
import { useAppSelector } from 'store';
import { moviesSelectors } from 'store/movies';
// data
import { IDS } from 'data/mock-ids';
// css
import styles from '../main-page.module.css';

// COMPONENT
export const MainPagePagination = memo(() => {
  // Current page
  const { currentPage } = useAppSelector(moviesSelectors.currentPageSelector);
  // Per page
  const { perPage } = useAppSelector(moviesSelectors.pageSizeSelector);
  // Loading status
  const { loading } = useAppSelector(moviesSelectors.loadingSelector);

  // RENDER
  return (
    <div className={styles['main-page__pagination']}>
      <Pagination
        currentPage={currentPage}
        perPage={perPage}
        totalItems={IDS.length}
        loading={loading}
      />
    </div>
  );
});
