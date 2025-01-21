import React from "react";

import "../styles/search-card.scss";

import Rating1 from "@/app/[country]/listing/[listing_slug]/shared/img/Rating";
import Rating2 from "@/app/[country]/listing/[listing_slug]/shared/img/Rating2";
import Rating3 from "@/app/[country]/listing/[listing_slug]/shared/img/Rating3";

import ListItem from "@/components/ListItem";
import CopyText from "@/components/ListItem/models/CopyText";

import Clock from "../../../shared/img/Clock";

import StarFav from "@/app/[country]/listing/[listing_slug]/shared/img/StarFav";
import Auc from "../../../../listing/[listing_slug]/shared/img/Auc";

const infocopy = [
  {
    label: "LOT:",
    value: <CopyText text={"30874242"} />,
  },
  {
    label: "VIN:",
    value: <CopyText text={"1FALP6536WK134349"} />,
  },
];

const info = [
  {
    label: "Mileage:",
    value: "198,239",
  },
  {
    label: "Location:",
    value: "SC - Columbia",
  },
  {
    label: "Damage:",
    value: "front end",
  },
  {
    label: "Doc. Type:",
    value: "Clean Title",
  },
];

const SearchCardSmall = () => {
  return (
    <div className="case-border case-card">
      <div className="case-card_item1">
        <div className="tw-max-w-[301px]">
          <img className="tw-rounded-[10px]" src="https://images.drive.ru/i/0/5f27e548ec05c40632000017.jpeg" alt="" />
        </div>
        <div className="">
          <div className="tw-flex tw-gap-[70px] tw-mb-[20px]">
            <div className="">
              <span className="tw-text-[18px]">2013 Chevrolet Impala Ls 3.6L </span>
            </div>
            <div className="tw-flex">
              <Rating1 className={"tw-z-30 tw-mr-[-4px]"} />
              <Rating2 className={"tw-z-20 tw-mr-[-4px]"} />
              <Rating3 className={"tw-z-10 tw-rounded-full"} />
            </div>
          </div>
          <div className="tw-flex tw-flex-col tw-gap-[20px]">
            {infocopy.map((item, idx) => {
              return <ListItem key={idx} label={item.label} value={item.value} />;
            })}

            {info.map((item, idx) => {
              return <ListItem key={idx} label={item.label} value={item.value} />;
            })}
          </div>
        </div>
      </div>

      {/* =========================== */}
      <div className="case-card_item2">
        <div className="tw-w-full">
          {" "}
          <hr />
        </div>
        <StarFav />
      </div>
      {/* =================================== */}
      <div className="case-card_item3">
        <div className="tw-flex tw-w-full tw-gap-[90px] tw-items-center">
          <div className="tw-max-w-[75px] tw-w-full">
            <span className="tw-text-[13px]  tw-w-full  tablet:tw-text-[14px] tw-flex tw-gap-[8px] tw-items-center tw-text-[#8C8C8C]">
              Current Bid
            </span>
            <span className="tw-text-[#3E73CF] tw-text-[20px] tw-font-[500px]">$200</span>
          </div>
          <div className="tw-max-w-[70px] tw-w-full">
            <span className="tw-text-[13px] tw-w-full tablet:tw-text-[14px] tw-flex tw-gap-[8px] tw-items-center tw-text-[#8C8C8C]">
              Buy it Now
            </span>
            <span className="tw-text-[#E3433A] tw-text-[20px] tw-font-[500px]">$200</span>
          </div>
        </div>
        <div className="tw-flex tw-justify-between tw-items-center tw-gap-[30px]   tw-w-full">
          <div className="tw-w-full">
            <button className="tw-w-full tw-py-[12px] tw-max-w-[180px] tw-text-[#fff] tw-rounded-[32px] tw-bg-[#3E73CF]">
              Bid Now <Auc className={""} />
            </button>
          </div>
          <div className="tw-flex tw-justify-end tw-max-w-[100px] tw-w-full">
            <div className="tw-w-flex tw-text-[14px] tw-items-center">
              <Clock /> <span>5 hr. 18 min.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCardSmall;
