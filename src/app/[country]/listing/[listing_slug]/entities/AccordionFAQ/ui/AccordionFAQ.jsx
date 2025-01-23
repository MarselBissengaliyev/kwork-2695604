import React from "react";

import "@/app/styles/bootstrap.css";

const AccordionFAQ = ({ question, answer, id }) => {
  return (
    <div className="accordion-item ">
      <h2 className="accordion-header ">
        <button
          className="accordion-button collapsed "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}`} // Уникальный идентификатор
          aria-expanded="false"
          aria-controls={id}
        >
          {question}
        </button>
      </h2>
      <div id={id} className="accordion-collapse collapse">
        <div className="accordion-body">{answer}</div>
      </div>
    </div>
  );
};

export default AccordionFAQ;
