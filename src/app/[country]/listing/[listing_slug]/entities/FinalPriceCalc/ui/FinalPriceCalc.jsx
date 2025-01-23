"use client";

import React from "react";

import "../styles/finalprice.scss";

import ListItem from "@/components/ListItem/index";

import InfoIcon from "../../../shared/img/InfoIcon";

const FinalPriceCalc = ({ listing }) => {
  const poland = [
    {
      label: "Auction Fees",
      value: "$17,000",
      icon: <InfoIcon />,
    },
    {
      label: "Transaction Fee",
      value: "$17,000",
      icon: <InfoIcon />,
    },
    {
      label: "Documentation Fee",
      value: "$17,000",
      icon: <InfoIcon />,
    },
    {
      label: "Add Shipping",
      value: "$17,000",
      icon: " ",
    },
  ];
  return (
    <div className="case-border  xxl:tw-max-w-[370px] tw-px-[15px] laptop:tw-px-[32px] tw-py-[30px]">
      <div className=" tw-w-full">
        <h2 className="text-title tw-mb-[16px] tw-font-semibold">Final Price Calculator</h2>
      </div>
      <ul>
        <li className="list-price  tw-w-full ">
          <span className="list-price-label">
            <span className="hidden laptop:block">
              {" "}
              Enter <br /> Final Bid{" "}
            </span>
            <span className="block laptop:hidden tw-text-[14px] tw-pl-[5px] tw-mb-[10px]"> Enter Final Bid </span>
            <span className="tw-pb-[16px] tw-ml-[8px] tablet:tw-pb-[0px]  tablet:tw-ml-[6px] ">
              <InfoIcon />
            </span>
          </span>
          <span className="list-price-value">{"$" + listing.final_bid}</span>
        </li>
      </ul>
      <hr className="tw-my-[25px]" />
      <ul className="tw-flex tw-flex-col tw-gap-[14px] tw-mb-[49px]">
        {poland.map((item, idx) => {
          return <ListItem key={idx} label={item.label} value={item.value} icon={item.icon} />;
        })}
      </ul>
      <hr className="tw-my-[25px]" />
      <div className="tw-flex tw-justify-between">
        <span className="tw-text-[18px] tw-text-[#191919]">Final Price</span>
        <span className="tw-text-[20px] tw-text-[#3E73CF]">{"$" + listing.final_bid}</span>
      </div>
    </div>
  );
};

export default FinalPriceCalc;
