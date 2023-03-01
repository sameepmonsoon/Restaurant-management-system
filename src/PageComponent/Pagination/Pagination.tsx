import React, { useState, useEffect } from "react";
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
  currentPageNumber: number;
};
const Pagination = (props: PaginationTypes) => {
  const { currentPageNumber, postsPerPage, totalPosts, paginate } = props;
  const [selectIndex, setSelectIndex] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | any>(0);
  // @ts-ignore
  const pageNumbers = [];
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  // previous page
  const handlePrevious = () => {
    if (currentPageNumber === 1) {
      paginate(1);
    } else {
      paginate(currentPageNumber - 1);
    }
  };
  // next page
  const handleNext = () => {
    if (currentPageNumber == totalPages) {
      paginate(currentPageNumber);
    } else {
      paginate(currentPageNumber + 1);
    }
  };
  return (
    <PaginationDiv>
      {totalPosts !== 0 && (
        <PreviousIndex onClick={handlePrevious}>
          <HiOutlineChevronLeft size={17} />
        </PreviousIndex>
      )}
      {pageNumbers.map((number) => (
        <>
          <PaginationIndexes key={number}>
            <Index
              onClick={() => {
                paginate(number);
              }}
              active={number === currentPageNumber}>
              {number}
            </Index>
          </PaginationIndexes>
        </>
      ))}
      {totalPosts !== 0 && (
        <NextIndex onClick={handleNext}>
          <HiOutlineChevronRight size={17} />
        </NextIndex>
      )}
    </PaginationDiv>
  );
};

export default Pagination;
