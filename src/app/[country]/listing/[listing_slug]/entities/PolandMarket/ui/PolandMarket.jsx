"use client";

import React from "react";

import "../styles/poland.scss";

import ListItem from "@/components/ListItem/index";

import InfoIcon from "../../../shared/img/InfoIcon";

const PolandMarket = ({ marketInfo, listing }) => {
  const poland = [
    {
      label: "Minimal Price",
      value: marketInfo.min_price,
      icon: <InfoIcon />,
    },
    {
      label: "Maximum Price",
      value: marketInfo.max_price,
      icon: <InfoIcon />,
    },
    {
      label: "Median Price",
      value: marketInfo.avg_price,
      icon: <InfoIcon />,
    },
    {
      label: "Maximum mileage",
      value: marketInfo.min_mileage,
      icon: <InfoIcon />,
    },
    {
      label: "Median milage",
      value: marketInfo.avg_mileage,
      icon: <InfoIcon />,
    },
    {
      label: "Advert count",
      value: marketInfo.listing_count,
      icon: <InfoIcon />,
    },
  ];
  return (
    <div className="case-border tw-px-[32px] tw-py-[30px] tw-hidden  laptop:tw-block">
      <div className="">
        <h2 className="text-title tw-mb-[16px] tw-font-semibold">Poland Market</h2>
      </div>
      <ul className="tw-flex tw-flex-col tw-gap-[14px]">
        {poland.map((item, idx) => {
          return <ListItem key={idx} label={item.label} value={item.value} icon={item.icon} />;
        })}
      </ul>
      <hr className="tw-my-[25px]" />
      <div className="tw-flex tw-justify-between">
        <span className="tw-text-[18px] tw-text-[#191919]">Зазор от рынка</span>
        <span className="tw-text-[20px] tw-text-[#3E73CF]">{"$17,000"}</span>
      </div>
    </div>
  );
};

export default PolandMarket;
