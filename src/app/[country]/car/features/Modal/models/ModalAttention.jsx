import React from "react";

import Modal from "../ui/Modal";

import CloseModal from "../../../shared/img/CloseModal";
import BuyBtn from "../../../shared/img/BuyBtn";

import ListItem from "@/components/ListItem";

const list = [
  {
    label: "VIN",
    value: "4YDT2662493150186",
  },
  {
    label: "Transaction Fee",
    value: "2022",
  },
  {
    label: "Documentation Fee",
    value: "Year",
  },
];

const ModalAttention = () => {
  return (
    <>
      <div className="modal fade" tabindex="-1" aria-labelledby="modalAttention" aria-hidden="true" id="modalAttention">
        <Modal title={""}>
          <div className="tw-px-[20px] tablet:tw-px-[50px] tw-pb-[50px]">
            <div className="tw-text-start tw-mb-[30px]">
              <span className="tw-text-[20px] tablet:tw-text-[30px] tw-text-[#191919] tw-font-bold">Attention!</span>

              <div className="tw-mt-[20px]">
                <p>By clicking "Buy now", you are buying this lot for $17,000 plus applicable fees.</p>
                <p>
                  Should you fail to complete this transaction, you will be subject to any and all applicable relist
                  fees.
                </p>
              </div>

              <div className="tw-flex tw-flex-col tw-gap-[15px] tw-mt-[30px]">
                {list.map((item, idx) => {
                  return <ListItem key={idx} label={item.label} value={item.value} />;
                })}
              </div>
              <p className="tw-my-[30px] tw-flex tw-items-center tw-gap-[10px] tw-text-start tw-text-[14px] tw-leading-[16px ] tablet:tw-text-[16px]">
                <input
                  class="form-check-input tw-mb-[5px]"
                  type="checkbox"
                  id="checkboxNoLabel"
                  value=""
                  aria-label="..."
                />

                <span>
                  I agreement with the <span className="tw-text-[#3E73CF]"> rules</span>
                </span>
              </p>
            </div>

            <div className="tw-flex tw-flex-col tw-gap-[20px]">
              <button
                type="button"
                className="tw-py-[20px] tw-justify-center tw-gap-[10px] tw-flex tw-items-center tw-bg-[#3E73CF] tw-font-bold tw-text-[#fff] tw-px-[25px] tw-rounded-[26px] "
              >
                By Now <BuyBtn />
              </button>
              <button
                type="button"
                className="tw-py-[14px] tw-px-[25px] tw-justify-center tw-gap-[10px] tw-flex tw-items-center tw-bg-transparent tw-text-[#8C8C8C] case-border !tw-rounded-[26px] tw-font-medium"
                data-bs-dismiss="modal"
              >
                Cansel <CloseModal />
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ModalAttention;
