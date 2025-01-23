import React, { useState } from "react";
import ButtonMain from "@/components/button/ButtonMain";

interface Bid {
  lot: number;
  vin: string;
  vehicle: string;
  saleDate: string;
  state: string;
  bidStatus: string;
  myMaxBid: number;
  saleType: string | undefined;
}

interface CurrentBids {
  array: any[];
  results: number;
  pages: number;
}

interface PaginationProps {
  currentBids: CurrentBids;
}

const PaginationBlock = ({ currentBids }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= currentBids.pages) {
      setCurrentPage(page);
    }
  };

  // Функция для вычисления номеров страниц
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= currentBids.pages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div>
      {/* Пагинация */}
      <div className="pagination tw-gap-2">
        <ButtonMain
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          text={"Previous"}
          color="grey"
          variant="outline"
        />
        {getPageNumbers().map((page) => (
          <ButtonMain
            key={page}
            onClick={() => handlePageChange(page)}
            text={page.toString()}
            variant={page === currentPage ? "solid" : "outline"}
            color={page === currentPage ? "blue" : "grey"}
          />
        ))}
        <ButtonMain
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === currentBids.pages}
          text="Next"
          color="grey"
          variant="outline"
        />
      </div>
    </div>
  );
};

export default PaginationBlock;
