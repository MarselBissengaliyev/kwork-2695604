"use client";

import React from "react";

import InfoIcon from "../../../shared/img/InfoIcon";

import ListItem from "@/components/ListItem";
import CounterCar from "../../CounterCar/ui/CounterCar";

const BidStatus = () => {
  return (
    <div className="case-border tw-w-full tw-mb-[19px]">
      <div className="tw-flex tw-justify-between tw-px-[30px] tw-mb-[30px] tw-py-[28px] tw-bg-[#F9F9F9]">
        <span className="tw-text-[18px] tw-flex tw-gap-[8px] tw-items-center tw-text-[#191919]">
          Bid Status
          <span>
            <InfoIcon />
          </span>
        </span>
        <span className="tw-text-[20px] tw-text-[#E3433A]">Outbid</span>
      </div>
      <div className="tw-px-[30px] tw-pb-[28px]">
        <div className="tw-flex tw-flex-wrap tw-gap-[95px] laptop:tw-gap-0 tw-mb-[22px]">
          <div className="tw-mr-[0px] laptop:tw-mr-[69px]">
            <span className="tw-text-[16px] tw-flex tw-gap-[8px] tw-items-center tw-text-[#8C8C8C]">Current Bid</span>
            <span className="tw-text-[#3E73CF] tw-text-[26px] tw-font-[500px]">$200</span>
          </div>
          <div>
            <span className="tw-text-[16px] tw-flex tw-gap-[8px] tw-items-center tw-text-[#8C8C8C] ">
              Recommended Bid
              <span className="tw-mt-[-3px]">
                <InfoIcon />
              </span>
            </span>
            <span className="tw-text-[#3ECF5C] tw-text-[26px] tw-font-[500px]">$1,500</span>
          </div>
          <div className="tw-mt-[0px] laptop:tw-mt-[20px]">
            <span className="tw-text-[16px] tw-flex tw-gap-[8px] tw-items-center tw-text-[#8C8C8C]">
              Time Left
              <span className="tw-mt-[-3px]">
                <InfoIcon />
              </span>
            </span>
            <span className="tw-text-[#E3433A] tw-text-[26px] tw-font-[500px]">00:00:56</span>
          </div>
        </div>
        <ListItem label="Location" value="TN - Knoxville" icon={""} />
        <div className="tw-flex tw-flex-col tw-mt-[20px] tw-mb-[20px]">
          <span className="tw-text-[16px] tw-text-[#191919]">Place Your Maximum Bid</span>
          <span className="tw-text-[#8C8C8C] tw-text-[16px]">($25 Bid Increments)</span>
        </div>

        <CounterCar />

        <div className="tw-my-[19px] tw-block laptop:tw-hidden">
          <span className="tw-text-[#3E73CF] tw-text-[16px]">Fee Estimator</span>
        </div>
      </div>
    </div>
  );
};

export default BidStatus;
