import React, { useState } from "react";

import Modal from "../ui/Modal";

import CloseModal from "../../../shared/img/CloseModal";
import BuyBtn from "../../../shared/img/BuyBtn";

import ListItem from "@/components/ListItem";

const ModalAttention = ({ listing, handleCreateBid }) => {
  const [isChecked, setIsChecked] = useState(false); // отслеживание состояния чекбокса

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="modal fade" tabIndex="-1" aria-labelledby="modalAttention" id="modalAttention">
      <Modal title={""}>
        <div className="tw-px-[20px] tablet:tw-px-[50px] tw-pb-[50px]">
          <div className="tw-text-start tw-mb-[30px]">
            <span className="tw-text-[20px] tablet:tw-text-[30px] tw-text-[#191919] tw-font-bold">Attention!</span>

            <div className="tw-mt-[20px]">
              <p>
                By clicking "Buy now", you are buying this lot for ${listing.buy_now} plus applicable fees.
              </p>
              <p>
                Should you fail to complete this transaction, you will be subject to any and all applicable relist fees.
              </p>
            </div>

            <div className="tw-flex tw-flex-col tw-gap-[15px] tw-mt-[30px]">
              <ListItem label={"Buy Now Price"} value={"$" + listing.buy_now} />
            </div>

            <p className="tw-my-[30px] tw-flex tw-items-center tw-gap-[10px] tw-text-start tw-text-[14px] tw-leading-[16px] tablet:tw-text-[16px]">
              <input
                className="form-check-input tw-mb-[5px]"
                type="checkbox"
                id="checkboxNoLabel"
                value=""
                aria-label="..."
                checked={isChecked}
                onChange={handleCheckboxChange} // обновляем состояние при изменении
              />
              <span>
                I agree with the <span className="tw-text-[#3E73CF]">rules</span>
              </span>
            </p>
          </div>

          <div className="tw-flex tw-flex-col tw-gap-[20px]">
            <button
              onClick={() => {
                if (isChecked) {
                  handleCreateBid(listing.buy_now);
                } else {
                  alert("Please agree with the rules to proceed.");
                }
              }}
              type="button"
              className={`tw-py-[20px] tw-justify-center tw-gap-[10px] tw-flex tw-items-center tw-bg-[#3E73CF] tw-font-bold tw-text-[#fff] tw-px-[25px] tw-rounded-[26px] ${
                isChecked ? "" : "tw-opacity-50 tw-pointer-events-none"
              }`}
              disabled={!isChecked} // делаем кнопку неактивной, если чекбокс не отмечен
            >
              Buy Now <BuyBtn />
            </button>
            <button
              type="button"
              className="tw-py-[14px] tw-px-[25px] tw-justify-center tw-gap-[10px] tw-flex tw-items-center tw-bg-transparent tw-text-[#8C8C8C] case-border !tw-rounded-[26px] tw-font-medium"
              data-bs-dismiss="modal"
            >
              Cancel <CloseModal />
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalAttention;
