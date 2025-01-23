import React from "react";

import Modal from "../ui/Modal";

import Wallet from "../../../shared/img/Wallet";

const ModalGetReport = ({ currentUser }) => {
  return (
    <>
      <div className="modal fade" tabindex="-1" aria-labelledby="modalGetReport" aria-hidden="true" id="modalGetReport">
        <Modal title={""}>
          <div className=" tw-px-[20px] tablet:tw-px-[50px] tw-pb-[50px]">
            <span className="tw-text-[20px] tablet:tw-text-[30px] tw-text-[#191919] tw-font-bold">Get report</span>
            <div className=" tw-mb-[30px]">
              {currentUser ? (
                <p className="tw-my-[30px] tw-text-start tw-text-[14px] tw-leading-[16px ] tw-leading-[18px] tablet:tw-text-[16px]">
                  Your betting limit is not enough to place this bet. You need a $1,000 deposit to place this bid
                </p>
              ) : (
                <p className="tw-my-[30px] tw-text-start tw-text-[14px] tw-leading-[16px ] tw-leading-[18px] tablet:tw-text-[16px]">
                  Пожалуйста авторизуйтесь!
                </p>
              )}
            </div>

            <div className="tw-flex tw-flex-col tw-gap-[20px]">
              {currentUser && <button
                type="button"
                className="tw-py-[20px] tw-justify-center tw-gap-[10px] tw-flex tw-items-center tw-bg-[#3E73CF] tw-font-bold tw-text-[#fff] tw-px-[25px] tw-rounded-[26px] "
              >
                Confirm report request
              </button>}
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ModalGetReport;
