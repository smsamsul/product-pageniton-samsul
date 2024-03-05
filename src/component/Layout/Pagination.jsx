import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import ProductItem from "./ProductItem";
import Flex from "./Flex";

// Example items, to simulate fetching from another resources.
const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems && currentItems.map((item) => <ProductItem key={item} />)}
    </>
  );
}

function Pagination({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Flex style="flex flex-wrap justify-between gap-y-4 mb-10">
        <Items currentItems={currentItems} />
      </Flex>
      <Flex
        style={
          "justify-between items-center  border border-x-0 border-y-[#eee] py-2.5"
        }
      >
        <ReactPaginate
          breakLabel=""
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="Prev"
          renderOnZeroPageCount={null}
          nextClassName="page-item"
          previousClassName="page-item"
          pageClassName="page-item w-[40px] h-[40px]  flex justify-center items-center rounded"
          activeClassName="active bg-[#ef4a23]"
          pageLinkClassName="page-link p-2.5"
          containerClassName="pagination flex gap-x-1.5 items-center"
        />
        <p>
          {" "}
          {`Showing ${itemOffset} to ${endOffset} of ${items.length} (${pageCount}Pages)`}
        </p>
      </Flex>
    </>
  );
}

export default Pagination;
