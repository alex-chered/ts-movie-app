// aux. utils
import { computeTotalPages } from './compute-total-pages';

interface PaginationRenderParameters {
  mostLeftPageInMainGroup: number;
  mostRightPageInMainGroup: number;
  displayFirstPage: boolean;
  displayLastPage: boolean;
  displayLeftEllipsis: boolean;
  displayRightEllipsis: boolean;
  totalPages: number;
}

// FUNCTION
export const computePaginationParameters = (
  currentPage: number,
  totalItems: number,
  perPage: number,
  mainGroup: number
): PaginationRenderParameters => {
  const totalPages: number = computeTotalPages(totalItems, perPage);
  const amountPagesInGroup = mainGroup;
  const amountPagesOnEachSideOfCurrentPage = Math.floor((amountPagesInGroup - 1) / 2);
  let mostLeftPageInMainGroup = 1;
  let mostRightPageInMainGroup = 1;
  let displayFirstPage = false;
  let displayLastPage = false;
  let displayLeftEllipsis = false;
  let displayRightEllipsis = false;

  // If the first page is active
  //
  if (currentPage === 1) {
    // The most left page
    mostLeftPageInMainGroup = 1;
    // The most right page
    mostRightPageInMainGroup = mostLeftPageInMainGroup + amountPagesInGroup - 1;
    mostRightPageInMainGroup = (mostRightPageInMainGroup > totalPages)
      ? totalPages
      : mostRightPageInMainGroup;

  // If the last page is active
  //
  } else if (currentPage === totalPages) {
    // The most right page
    mostRightPageInMainGroup = totalPages;
    // The most left page
    mostLeftPageInMainGroup = mostRightPageInMainGroup - amountPagesInGroup + 1;
    mostLeftPageInMainGroup = (mostLeftPageInMainGroup < 1)
      ? 1
      : mostLeftPageInMainGroup;

  // If active page is between the first and the last
  } else {
    // The most left page
    mostLeftPageInMainGroup = currentPage - amountPagesOnEachSideOfCurrentPage;
    mostLeftPageInMainGroup = (mostLeftPageInMainGroup < 1)
      ? 1
      : mostLeftPageInMainGroup;
    // The most right page
    mostRightPageInMainGroup = currentPage + amountPagesOnEachSideOfCurrentPage;
    mostRightPageInMainGroup = (mostRightPageInMainGroup > totalPages)
      ? totalPages
      : mostRightPageInMainGroup;

    const diff = amountPagesInGroup - (mostRightPageInMainGroup - mostLeftPageInMainGroup + 1);
    if (diff) {
      if (mostLeftPageInMainGroup === 1) {
        mostRightPageInMainGroup += diff;
      } else {
        mostLeftPageInMainGroup -= diff;
      }
    }
  }

  // Display the first page
  displayFirstPage = mostLeftPageInMainGroup > 1;
  // Display the last page
  displayLastPage = mostRightPageInMainGroup < totalPages;

  // Display the left ellipsis
  displayLeftEllipsis = (mostLeftPageInMainGroup - 1) > 1;
  // Display the right ellipsis
  displayRightEllipsis = (mostRightPageInMainGroup + 1) < totalPages;

  return {
    mostLeftPageInMainGroup,
    mostRightPageInMainGroup,
    displayFirstPage,
    displayLastPage,
    displayLeftEllipsis,
    displayRightEllipsis,
    totalPages
  };
};
