import React from "react";

import "../styles/history-acc.scss";

import History from "../../../shared/img/History";
import HistoryCard from "../models/HistoryCard";

import carlider from "../../../shared/img/carlider.png";

const AccordionHistory = ({ title, lots, id, }) => {
  return (
    <div className="accordion-history tw-mb-[20px]">
      <h2 className="accordion-header ">
        <button
          className="accordion-btn collapsed "
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
          <div className="tw-overflow-auto tw-h-[250px] tw-gap-[10px] tw-flex tw-flex-col">
            {Array.isArray(lots) && lots.length > 0 ? (
              lots.map((item, idx) => (
                <HistoryCard
                  key={idx}
                  img={item.picture}
                  finalbid={item.final_bid}
                  mileage={item.mileage}
                  status={item.status}
                />
              ))
            ) : (
              <p>No history available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionHistory;
