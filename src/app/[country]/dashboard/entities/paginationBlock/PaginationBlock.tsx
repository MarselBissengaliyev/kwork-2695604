import ButtonMain from "@/components/button/ButtonMain";
import React from "react";

interface IPagination{
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

const PaginationBlock = ({
  currentPage,
  totalPages,
  onPageChange,
} : IPagination) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= Math.ceil(maxVisiblePages / 2)) {
        for (let i = 1; i <= maxVisiblePages; i++) {
          pageNumbers.push(i);
        }
      } else if (currentPage > totalPages - Math.floor(maxVisiblePages / 2)) {
        for (let i = totalPages - maxVisiblePages + 1; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        const startPage = currentPage - Math.floor(maxVisiblePages / 2);
        for (let i = startPage; i < startPage + maxVisiblePages; i++) {
          pageNumbers.push(i);
        }
      }
    }

    return pageNumbers;
  };

  return (
    <div className="pagination tw-gap-2">
      <ButtonMain
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        text={"Previous"}
        color="grey"
        variant="outlined"
        classNames={`${currentPage === 1 ? "tw-color-grey" : 'tw-color-black'}`}
      />
      {getPageNumbers().map((page) => (
        <ButtonMain
          key={page}
          onClick={() => onPageChange(page)}
          classNames={page === currentPage ? "active" : ""}
          text={page}
          variant="outlined"
          color="grey"
        />
      ))}
      {totalPages > 5 && currentPage < totalPages - 2 && (
        <>
          <ButtonMain color="grey" variant="outlined" text={"..."}></ButtonMain>
          <ButtonMain onClick={() => onPageChange(totalPages)} text={totalPages} color="grey" variant="outlined">
            
          </ButtonMain>
        </>
      )}
      <ButtonMain
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        text="Next"
        color="grey"
        variant="outlined"

        classNames={`${currentPage === totalPages ? "tw-color-grey" : 'tw-color-black'}`}
     
      />
        
    </div>
  );
};

export default PaginationBlock;
