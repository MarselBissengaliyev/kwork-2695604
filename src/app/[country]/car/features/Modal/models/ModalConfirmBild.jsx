import React from "react";

import Image from "next/image";

import Modal from "../ui/Modal";

import CloseModal from "../../../shared/img/CloseModal";
import TickConfirm from "../../../shared/img/TickConfirm";
import car from "../../../shared/img/carlider.png";

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
  {
    label: "Modal",
    value: "Xs",
  },
];

const ModalConfirmBild = () => {
  return (
    <>
      <div className="modal fade" tabindex="-1" aria-labelledby="modalConfirm" aria-hidden="true" id="modalConfirm">
        <Modal title={"Confirm You Bid"}>
          <div className="tw-px-[50px] tw-pb-[50px]">
            <div className="tw-text-center tw-mb-[30px]">
              <span className="tw-text-[26px] tablet:tw-text-[40px] tw-text-[#3E73CF] tw-font-bold">$131</span>
              <div className="tw-flex tw-my-[30px] tw-items-center tw-gap-[20px] case-border tw-h-[80px] tw-min-w-[240px] tw-max-w-[410px]">
                <Image src={car} className="tw-rounded-l-[10px]" width={110} height={80} alt="car" />
                <div className="tw-max-w-[136px]">
                  <p className="tw-text-[14px] tablet:tw-text-[18px] tw-leading-[20px] tw-font-bold   tw-text-[#3E73CF] ">
                    2013 Chevrolet Impala Ls 3.6L
                  </p>
                </div>
              </div>
              <div className="tw-flex tw-flex-col tw-gap-[15px] tw-mt-[30px]">
                {list.map((item, idx) => {
                  return <ListItem key={idx} label={item.label} value={item.value} />;
                })}
              </div>
              <p className="tw-my-[30px] tw-text-start tw-text-[14px] tw-leading-[16px ] tablet:tw-text-[16px]">
                By clicking "Confirm My Bid", <br /> you agree to
                <span className="tw-text-[#3E73CF]"> Purchase Order Agreement</span>
              </p>
            </div>

            <div className="tw-flex tw-flex-col tw-gap-[20px]">
              <button
                type="button"
                className="tw-py-[20px] tw-justify-center tw-gap-[10px] tw-flex tw-items-center tw-bg-[#3E73CF] tw-font-bold tw-text-[#fff] tw-px-[25px] tw-rounded-[26px] "
              >
                Confirm my Bid <TickConfirm />
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

export default ModalConfirmBild;
