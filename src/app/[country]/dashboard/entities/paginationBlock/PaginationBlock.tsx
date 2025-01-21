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
  bids: Bid[];
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

  // Получаем текущие лоты для отображения на текущей странице
  const currentPageBids = currentBids.bids.slice((currentPage - 1) * 1, currentPage * 1); // по одному лоту на странице

  return (
    <div>
      {/* Пагинация */}
      <div className="pagination tw-gap-2">
        <ButtonMain
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          text={"Previous"}
          color="grey"
          variant="outlined"
        />
        {getPageNumbers().map((page) => (
          <ButtonMain
            key={page}
            onClick={() => handlePageChange(page)}
            text={page.toString()}
            variant={page === currentPage ? "solid" : "outlined"}
            color={page === currentPage ? "blue" : "grey"}
          />
        ))}
        <ButtonMain
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === currentBids.pages}
          text="Next"
          color="grey"
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default PaginationBlock;
