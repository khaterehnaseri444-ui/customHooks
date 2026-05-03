import React, { useState } from "react";
import Pagination from "../core/hooks/pagination/Pagination";

function PaginationTest() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 30;

  const pageHandler = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        pagesToShow={3}
        onPageChange={pageHandler}
      />
    </div>
  );
}

export default PaginationTest;
