import { useEffect, useRef, useState } from "react";

import "../styles/history-acc.scss";

import History from "../../../shared/img/History";
import HistoryCard from "../models/HistoryCard";


const AccordionHistory = ({ title, initialAuctions, id }) => {
  const [previousAuctions, setPreviousAuctions] = useState(initialAuctions || { auctions: [] });
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const scrollContainerRef = useRef(null);

  const loadMoreAuctions = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/auctions?page=${page + 1}&take=2`); // Пример запроса
      const newAuctions = await response.json();
      setPreviousAuctions((prev) => ({
        ...prev,
        auctions: [...prev.auctions, ...newAuctions.auctions],
      }));
      setPage(page + 1);
    } catch (error) {
      console.error("Error loading more auctions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        scrollContainerRef.current.scrollHeight -
        scrollContainerRef.current.scrollTop ===
        scrollContainerRef.current.clientHeight && !loading
      ) {
        loadMoreAuctions();
      }
    };

    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, [loading, page]);

  return (
    <div className="accordion-history tw-mb-[20px]">
      <h2 className="accordion-header ">
        <button
          className="accordion-btn collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}`}
          aria-expanded="false"
          aria-controls={id}
        >
          <History /> {title}
        </button>
      </h2>
      <div id={id} className="accordion-collapse collapse">
        <div className="accordion-bod">
          <div
            className="tw-overflow-auto tw-h-[250px] tw-gap-[10px] tw-flex tw-flex-col"
            ref={scrollContainerRef}
          >
            {Array.isArray(previousAuctions.auctions) && previousAuctions.auctions.length > 0 ? (
              previousAuctions.auctions.map((item, idx) => (
                <HistoryCard
                  key={idx}
                  img={item.picture}
                  finalbid={item.final_bid}
                  mileage={item.mileage}
                  status={item.status || "N\/A"}
                />
              ))
            ) : (
              <p>No history available</p>
            )}
            {loading && <p>Loading...</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionHistory;
