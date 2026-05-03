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
    <div className="w-full h-200 flex items-center justify-center flex-col">
      <h1 className="text-[30px]">Test Custom Hook</h1>
      <div className="w-full h-50 flex items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => goPageHandler(page - 1)}
          disabled={page === 1}
          className="text-[20px] cursor-pointer"
        >
          {"<"}
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
              className={isActivePage ? "font-bold" : "cursor-pointer"}
            >
              {item}
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => goPageHandler(page + 1)}
          disabled={page === totalPages}
          className="text-[20px] cursor-pointer"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

export default PaginationTest;
