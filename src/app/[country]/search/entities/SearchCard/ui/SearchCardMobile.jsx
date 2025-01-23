/* eslint-disable react/prop-types */
"use client";

import Rating1 from "@/app/[country]/listing/[listing_slug]/shared/img/Rating";
import Rating2 from "@/app/[country]/listing/[listing_slug]/shared/img/Rating2";
import Rating3 from "@/app/[country]/listing/[listing_slug]/shared/img/Rating3";
import StarFav from "@/app/[country]/listing/[listing_slug]/shared/img/StarFav";
import ButtonMain from "@/components/button/ButtonMain";
import ListItem from "@/components/ListItem";
import CopyText from "@/components/ListItem/models/CopyText";
// import CarCardsSlider from "@/components/Sliders/CarCardsSlider/CarCardsSlider";
import React, { useState } from "react";

import Clock from "../../../shared/img/Clock";

// eslint-disable-next-line react/prop-types
const SearchCardMobile = ({ title, lot, vin, carInfo, clock }) => {
  const [isClick, setClick] = useState(false);
  const handleClick = e => {
    // setClick((prev) => (prev === e ? null : e))
    // console.log(isClick)
    // Navigate to listing page
    // window.location.href = `/[country]/listing/${card.listing_slug}`
  };

  return (
    <div className=" tw-w-full" style={{ border: "1px solid #ECECEC", borderRadius: "10px" }}>
      {/* <CarCardsSlider height="260px" imglinks={card.imgs} /> */}
      <div className="tw-flex tw-flex-col tw-gap-[20px] tw-p-[15px]">
        <div className="tw-flex tw-gap-[20px]">
          <div className="">
            <div className="tw-max-w-[301px] tw-m-auto">
              <img
                className="tw-rounded-[10px]"
                src="https://images.drive.ru/i/0/5f27e548ec05c40632000017.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className="tw-flex tw-flex-col ">
            <p className="tw-text-[18px] tw-text-[#3E73CF] tw-leading-5 tw-font-medium">{title}</p>
            <div className="tw-flex">
              <Rating1 className={"tw-z-30 tw-mr-[-4px]"} />
              <Rating2 className={"tw-z-20 tw-mr-[-4px]"} />
              <Rating3 className={"tw-z-10 tw-rounded-full"} />
            </div>
          </div>
        </div>
        <div className="tw-flex tw-flex-col tw-gap-[13px]">
          <ListItem label={"Lot"} value={<CopyText text={lot} />} icon="" />
          <ListItem label={"Vin"} value={<CopyText text={vin} />} icon="" />
          {carInfo.map((list, idx) => (
            <ListItem key={idx} label={list.label} value={list.value} />
          ))}
        </div>

        <div className="tw-flex tw-w-full tw-items-center tw-gap-[20px] tw-justify-between">
          <ButtonMain
            text={"Bid Now"}
            icon={"/images/dashboard/icons/auction.png"}
            classNames={"tw-gap-2 tw-w-full"}
            onClick={() => setClick(e => !e)}
            color={isClick ? "grey" : "blue"}
            number={undefined}
            hoverColor={undefined}
            disabled={undefined}
            onMouseOver={undefined}
            onMouseOut={undefined}
          />
          <StarFav />
        </div>
        <div className="tw-w-flex tw-text-[14px] tw-items-center">
          <Clock /> <span>{clock}</span>
        </div>
      </div>
    </div>
  );
};

export default SearchCardMobile;
