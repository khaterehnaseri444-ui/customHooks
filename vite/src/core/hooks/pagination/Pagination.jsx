import React from "react";
import usePaginate from "./usePaginate";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  pagesToShow = 3,
}) => {
  const pages = usePaginate({ currentPage, totalPages, pagesToShow });
  const pageClickHandler = (page) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const prevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const nextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
  return (
    <div>
      <button
        onClick={prevClick}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-md border text-sm transition-colors ${
          currentPage === 1
            ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
        }`}
      >
        prev
      </button>
      <ul>
        {pages.map((item, index) => {
          if (item.type === "ellipsis") {
            return <li>...</li>;
          }
          if (item.type === "page") {
            return (
              <li>
                <button
                  onClick={() => pageClickHandler(item.page)}
                  className={`px-3 py-1 rounded-md border text-sm min-w-8 transition-colors ${
                    item.active
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {item.page}
                </button>
              </li>
            );
          }
          return null;
        })}
      </ul>
      <button
        onClick={nextClick}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded-md border text-sm transition-colors ${
          currentPage === totalPages
            ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
        }`}
      >
        next
      </button>
    </div>
  );
};
export default Pagination;
