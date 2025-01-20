import Image from "next/image";
import React from "react";

import car from "../../../shared/img/carlider.png";

const HistoryCard = ({ img, finalbid, mileage, status }) => {
  return (
    <div className="tw-w-full tw-flex tw-gap-[20px] tw-rounded-[10px] tw-py-[10px] tablet:tw-py-[20px] tw-px-[15px] tablet:tw-px-[25px] tw-bg-[#fff]">
      <div className="">
        <Image className="tw-rounded-[10px] tw-w-[80px]" src={img} width={80} height={80} alt="" />
      </div>
      <div className="tw-flex tw-gap-[10px] tablet:tw-gap-[65px]  desktop:tw-gap-[20px]">
        <div className="tw-flex table:tw-flex-col ">
          <div className="tw-flex tw-flex-col">
            {" "}
            <span className="tw-text-[13px] tablet:tw-text-[14px] tw-text-[#8C8C8C]">Final Bid</span>
            <span className="tw-text-[14px] tablet:tw-text-[16px]">{finalbid}</span>
          </div>
        </div>
        <div className="tw-flex tw-flex-col tw-gap-[20px]  tablet:tw-gap-[65px] desktop:tw-gap-[20px] tablet:tw-flex-row desktop:tw-flex-col">
          <div className="tw-flex tw-flex-col">
            {" "}
            <span className="tw-text-[13px] tablet:tw-text-[14px] tw-text-[#8C8C8C]">Mileage</span>
            <span className="tw-text-[14px] tablet:tw-text-[16px]">{mileage}</span>
          </div>
          <div className="tw-flex tw-flex-col">
            {" "}
            <span className="tw-text-[13px] tablet:tw-text-[14px] tw-text-[#8C8C8C]">Status</span>
            <span className="tw-text-[14px] tablet:tw-text-[16px] tw-text-[#E3433A]">{status}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
