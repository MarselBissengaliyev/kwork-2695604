import React from "react";

import CloseModal from "../../../shared/img/CloseModal";

const Modal = ({ title, children }) => {
  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="tw-flex tw-flex-col tw-text-center">
          <div className="tw-flex tw-items-center tw-justify-end tw-mt-[10px] tw-mr-[20px]  ">
            <button
              type="button"
              className="tw-bg-transparent tw-flex tw-justify-center tw-items-center tw-w-[30px] tw-h-[30px] case-border tw-p-[7px] !tw-rounded-[25px]"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <CloseModal />
            </button>
          </div>
          <h5 className="tw-text-[20px] tablet:tw-text-[30px]" id="exampleModalLabel">
            {title}
          </h5>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
