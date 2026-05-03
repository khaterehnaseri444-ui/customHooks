import { useMemo } from "react";

function range(start, end) {
  const out = [];
  for (let i = start; i <= end; i++) {
    out.push(i);
  }
  return out;
}

function getPaginationItems({ totalPages, currentPage, siblingCount = 1 }) {
  const items = [];

  if (totalPages <= 2 * siblingCount + 3) {
    return range(1, totalPages);
  }

  const firstPage = 1;
  const lastPage = totalPages;

  const leftSibling = Math.max(currentPage - siblingCount, 2);
  const rightSibling = Math.min(currentPage + siblingCount, totalPages - 1);

  const showLeftEllipsis = leftSibling > 2;
  const showRightEllipsis = rightSibling < totalPages - 1;

  items.push(firstPage);

  if (showLeftEllipsis) {
    items.push("...");
  } else {
    items.push(...range(2, leftSibling));
  }

  items.push(...range(leftSibling, rightSibling));

  if (showRightEllipsis) {
    items.push("...");
  } else {
    items.push(...range(rightSibling + 1, lastPage - 1));
  }

  items.push(lastPage);

  return [...new Set(items)];
}

function usePagination({ totalPages, currentPage, siblingCount = 1 }) {
  const paginationItems = useMemo(() => {
    return getPaginationItems({ totalPages, currentPage, siblingCount });
  }, [totalPages, currentPage, siblingCount]);

  const goToPage = (p) => {
    if (typeof p !== "number") return;
    console.log(`Navigating to page: ${p}`);
  };

  const next = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const prev = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  return {
    paginationItems,
    goToPage,
    next,
    prev,
  };
}

export default usePagination;
