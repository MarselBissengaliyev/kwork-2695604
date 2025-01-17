import React from "react";

import Modal from "../ui/Modal";

import Wallet from "../../../shared/img/Wallet";

const ModalNotEnoughMoney = () => {
  return (
    <>
      <div className="modal fade" tabindex="-1" aria-labelledby="ModalMoney" aria-hidden="true" id="modalNotMoney">
        <Modal title={"You are trying to bid $10,000"}>
          <div className="tw-px-[50px] tw-pb-[50px]">
            <div className="tw-text-center tw-mb-[30px]">
              <p className="tw-my-[30px] tw-text-start tw-text-[14px] tw-leading-[16px ] tablet:tw-text-[16px]">
                Your betting limit is not enough to place this bet. You need a $1,000 deposit to place this bid
              </p>
            </div>

            <div className="tw-flex tw-flex-col tw-gap-[20px]">
              <button
                type="button"
                className="tw-py-[14px] tw-px-[25px] tw-justify-center tw-gap-[10px] tw-flex tw-items-center tw-bg-[#3E73CF] tw-text-[#fff]  !tw-rounded-[26px] tw-font-medium"
                data-bs-dismiss="modal"
              >
                Cansel <Wallet />
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ModalNotEnoughMoney;
