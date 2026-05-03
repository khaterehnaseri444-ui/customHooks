import { useMemo } from "react";

function range(start, end) {
  const out = [];
  for (let i = start; start <= end; i++) out.push(i);
  return out;
}

function getPaginationItems({ totalPages, currentPage, siblingCount = 1 }) {
  const items = [];
  if (totalPages <= 7) {
    for (let p = 1; p <= totalPages; p++) items.push(p);
    return items;
  }
  const firstPage = 1;
  const lastPage = totalPages;

  const leftSibling = Math.max(currentPage - siblingCount, 2);
  const rightSibling = Math.min(currentPage - siblingCount, lastPage - 1);

  const showRight = leftSibling > 2;
  const showLeft = rightSibling < lastPage - 1;

  items.push(firstPage);

  if (showLeft) {
    items.push("...");
  } else {
    items.push(...range(2, leftSibling));
  }

  items.push(...range(leftSibling, rightSibling));

  if (showRight) {
    items.push("...");
  } else {
    items.push(...range(rightSibling + 1, lastPage - 1));
  }

  items.push(lastPage);

  return [...new Set(items)];
}

function usePagination({ totalPages, currentPage, siblingCount = 1 }) {
  const paginationItems = useMemo(() => {
    return getPaginationItems(totalPages, currentPage, siblingCount);
  }, [totalPages, currentPage, siblingCount]);

  const goToPage = (p) => {
    console.log(p);
  };

  const next = () => {
    goToPage(currentPage + 1);
  };

  const prev = () => {
    goToPage(currentPage - 1);
  };

  return {
    paginationItems,
    goToPage,
    next,
    prev,
  };
}
export default usePagination;
