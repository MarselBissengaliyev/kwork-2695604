import React from "react";

import "../styles/history-acc.scss";

import History from "../../../shared/img/History";

const AccordionHistory = ({ title, card, id }) => {
  return (
    <div className="accordion-history tw-mb-[20px]">
      <h2 className="accordion-header ">
        <button
          className="accordion-btn collapsed "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}`} // Уникальный идентификатор
          aria-expanded="false"
          aria-controls={id}
        >
          <History /> {title}
        </button>
      </h2>
      <div id={id} className="accordion-collapse collapse">
        <div className="accordion-body">{card}</div>
      </div>
    </div>
  );
};

export default AccordionHistory;
