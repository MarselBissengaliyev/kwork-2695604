import React from "react";

import Modal from "../ui/Modal";

import CloseModal from "../../../shared/img/CloseModal";
import BuyBtn from "../../../shared/img/BuyBtn";
import Minus from "../../../shared/img/Minus";
import Plus from "../../../shared/img/Plus";

import ListItem from "@/components/ListItem";
import ListItemPopap from "@/components/ListItemPopap";

const list = [
  {
    label: "Buy Now Price",
    value: "$17,000",
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

              {/* ======================================================================================== */}
              <div className="tw-mt-[30px]">
                <h2 className="tw-text-[14px] tablet:tw-text-[16px]">Final Offer Price</h2>
                <div className="tw-flex tw-mt-[16px] tw-mb-[30px] tw-gap-[20px] tw-flex-col tablet:tw-flex-row tw-justify-between">
                  <div className="tw-flex tw-items-center tw-justify-center tw-w-full tw-max-w-[412px] laptop:tw-max-w-full  tw-px-[20px]  tw-py-[17px] counter-border">
                    <button
                      type="button"
                      onClick={() => {
                        const input = document.getElementById("bid-input");
                        if (input.value > 25) input.value = parseInt(input.value) - 25;
                      }}
                      className="tw-w-[24px] tw-bg-[#3E73CF]  tw-rounded-[14px]"
                    >
                      <Minus />
                    </button>
                    <input
                      id="bid-input"
                      name="bid"
                      type="number"
                      defaultValue={131}
                      step={25}
                      min={25}
                      className="tw-text-center tw-w-full tw-text-[18px] tw-border-0 tw-outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const input = document.getElementById("bid-input");
                        input.value = parseInt(input.value) + 25;
                      }}
                      className="tw-w-[24px]  tw-bg-[#3E73CF]  tw-rounded-[14px]"
                    >
                      <Plus />
                    </button>
                  </div>
                </div>
              </div>
              {/* ===================================================================================================== */}

              <div className="tw-flex tw-flex-col tw-gap-[15px] tw-mt-[30px]">
                <ListItem label={"Buy Now Price"} value={"$17, 000"} />
                <ListItemPopap label={"+Fee"} value={"$500"} aucfree={"$300"} transfree={"$100"} docfree={"$100"} />
                <ListItem label={"Final Buy Now Price"} value={"$17, 000"} />
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
