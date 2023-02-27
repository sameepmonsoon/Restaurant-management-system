import React, { useState } from "react";
import {
  Index,
  NextIndex,
  PaginationDiv,
  PaginationIndexes,
  PreviousIndex,
} from "./Pagination.style";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
type PaginationTypes = {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: any) => void;
};
const Pagination = (props: PaginationTypes) => {
  const { postsPerPage, totalPosts, paginate } = props;
  const [selectIndex, setSelectIndex] = useState(false);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <PaginationDiv>
      {totalPosts !== 0 && (
        <PreviousIndex>
          <HiOutlineChevronLeft size={25} />
        </PreviousIndex>
      )}
      {pageNumbers.map((number) => (
        <PaginationIndexes key={number}>
          <Index
            onClick={() => {
              paginate(number);
              setSelectIndex(!selectIndex);
            }}
            active={selectIndex}>
            {number}
          </Index>
        </PaginationIndexes>
      ))}
      {totalPosts !== 0 && (
        <NextIndex>
          <HiOutlineChevronRight size={25} />
        </NextIndex>
      )}
    </PaginationDiv>
  );
};

export default Pagination;
