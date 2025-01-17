import Image from "next/image";
import React from "react";

import car from "../../../shared/img/carlider.png";

const HistoryCard = () => {
  return (
    <div className="tw-w-full tw-flex tw-gap-[20px] tw-rounded-[10px] tw-py-[20px] tw-px-[25px] tw-bg-[#fff]">
      <div className="">
        <Image className="tw-rounded-[10px] tw-w-[80px]" src={car} alt="" />
      </div>
      <div className="tw-flex  tw-gap-[20px]">
        <div className="tw-flex tw-flex-col ">
          <div className="tw-flex tw-flex-col">
            {" "}
            <span className="tw-text-[13px] tablet:tw-text-[14px] tw-text-[#8C8C8C]">Final Bid</span>
            <span className="tw-text-[14px] tablet:tw-text-[16px]">$2,500</span>
          </div>
        </div>
        <div className="tw-flex tw-flex-col">
          <div className="tw-flex tw-flex-col">
            {" "}
            <span className="tw-text-[13px] tablet:tw-text-[14px] tw-text-[#8C8C8C]">Mileage</span>
            <span className="tw-text-[14px] tablet:tw-text-[16px]">98 982</span>
          </div>
          <div className="tw-flex tw-flex-col">
            {" "}
            <span className="tw-text-[13px] tablet:tw-text-[14px] tw-text-[#8C8C8C]">Status</span>
            <span className="tw-text-[14px] tablet:tw-text-[16px] tw-text-[#E3433A]">Not Sold</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
