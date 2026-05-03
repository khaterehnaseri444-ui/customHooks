import { useState } from "react";
import usePagination from "../core/hooks/pagination/Pagination";

function PaginationTest() {
  const [page, setPage] = useState(1);
  const totalPages = 30;

  const { paginationItems, next, prev } = usePagination({
    totalPages,
    currentPage: page,
    siblingCount: 1,
  });

  const goPageHandler = (pageNum) => {
    if (pageNum === "...") return;
    if (pageNum === page) return;
    setPage(pageNum);
  };

  return (
    <div className="w-full h-200 bg-lime-300 flex items-center justify-center flex-col">
      <h1>Test Custom Hook</h1>
      <div className="w-full h-50 bg-sky-400 flex items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => goPageHandler(page - 1)}
          disabled={page === 1}
        >
          prev
        </button>
        {paginationItems.map((item, index) => {
          if (item === "...") {
            return <span key={`ellipsis-${index}`}>...</span>;
          }
          const isActivePage = item === page;
          return (
            <button
              key={item}
              type="button"
              onClick={() => goPageHandler(item)}
              className={isActivePage ? "font-bold bg-blue-500 text-white" : ""}
            >
              {item}
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => goPageHandler(page + 1)}
          disabled={page === totalPages}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default PaginationTest;
