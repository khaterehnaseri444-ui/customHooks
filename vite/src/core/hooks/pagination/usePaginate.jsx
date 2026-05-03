import { useMemo } from "react";

const usePaginate = ({ currentPage, totalPages, pagesToShow = 3 }) => {
  return useMemo(() => {
    const pages = [];
    if (totalPages <= 0) return pages;

    pages.push({
      type: "prev",
      label: "prev",
      disabled: currentPage === 1,
    });
    if (totalPages <= pagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push({
          type: "page",
          page: i,
          active: i === currentPage,
        });
      }
    } else {
      pages.push({
        type: "page",
        page: 1,
        active: 1 === currentPage,
      });

      let startPage = Math.max(2, currentPage - 2);
      let endPage = Math.min(totalPages - 1, currentPage + 2);

      if (currentPage <= 3) {
        startPage = 2;
        endPage = Math.max(5, totalPages - 1);
      } else if (currentPage >= totalPages - 2) {
        endPage = totalPages - 1;
        startPage = Math.max(2, totalPages - 4);
      }

      if (startPage > 2) {
        pages.push({ type: "ellipsis" });
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push({ type: "page", page: i, active: i === currentPage });
      }
      if (endPage < totalPages - 1) {
        pages.push({ type: "ellipsis" });
      }

      if (totalPages > 1) {
        pages.push({
          type: "page",
          page: totalPages,
          active: totalPages === currentPage,
        });
      }
    }

    pages.push({
      type: "next",
      label: "next",
      disabled: totalPages === currentPage,
    });
    return pages;
  }, [totalPages, currentPage, pagesToShow]);
};

export default usePaginate;
