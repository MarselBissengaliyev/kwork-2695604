import React from "react";

import "../styles/search-card.scss";
import CopyText from "@/components/ListItem/models/CopyText";
import CarCardsSlider from "@/components/Sliders/CarCardsSlider/CarCardsSlider";

import Rating1 from "@/app/[country]/listing/[listing_slug]/shared/img/Rating";
import Rating2 from "@/app/[country]/listing/[listing_slug]/shared/img/Rating2";
import Rating3 from "@/app/[country]/listing/[listing_slug]/shared/img/Rating3";

import Mileage from "../../../shared/img/Mileage";
import Damage from "../../../shared/img/Damage";
import Location from "../../../shared/img/Location";
import Doc from "../../../shared/img/Doc";
import Clock from "../../../shared/img/Clock";

import Auc from "../../../../listing/[listing_slug]/shared/img/Auc";
import StarFav from "../../../../listing/[listing_slug]/shared/img/StarFav";

const SearchCard = () => {
  // const imgs = [
  //   {
  //     alt: "watch",
  //     src: "https://images.drive.ru/i/0/5f27e548ec05c40632000017.jpeg",
  //   },
  //   {
  //     alt: "watch",
  //     src: "https://images.drive.ru/i/0/5f27e548ec05c40632000017.jpeg",
  //   },
  //   {
  //     alt: "watch",
  //     src: "https://images.drive.ru/i/0/5f27e548ec05c40632000017.jpeg",
  //   },
  // ];
  return (
    <div className="search_car">
      <div className="search_car_inner tw-w-full case-border">
        <div className="search_car_inner_img tw-w-full">
          <img src="https://images.drive.ru/i/0/5f27e548ec05c40632000017.jpeg" alt="" />
          {/* <CarCardsSlider width="370px" height="260px" imglinks={imgs} /> */}
        </div>
        <div className="tw-pt-[30px]">
          <h2 className="tw-text-[#3E73CF] tw-text-[18px] tw-mb-[20px]">2013 Chevrolet Impala Ls 3.6L</h2>
          <div className="tw-mb-[20px]">
            <div className="tw-flex tw-gap-[74px]">
              <span className="tw-flex tw-gap-[9px]">
                LOT <CopyText text={"#30874242"} />
              </span>
              <span className="tw-flex tw-gap-[9px]">
                VIN: <CopyText text={"1D7RB1GP6AS109178"} />
              </span>
            </div>
            <div className="card-info_item">
              <div className="card-info_item_first">
                <div className="tw-flex tw-justify-between tw-items-center tw-max-w-[216px] tw-w-[100%] right-border">
                  <div className="tw-flex tw-flex-col">
                    <div className="">Mileage</div>
                    <div className="">198,239</div>
                  </div>
                  <div className="tw-pr-[30px]">
                    <Mileage />
                  </div>
                </div>
                <div className="tw-flex tw-justify-between tw-items-center tw-max-w-[216px] tw-w-[100%] ">
                  <div className="tw-flex tw-flex-col tw-pl-[30px]">
                    <div className="">Damage</div>
                    <div className="">front end</div>
                  </div>
                  <div className="">
                    <Damage />
                  </div>
                </div>
              </div>
              <div className="card-info_item_second">
                <div className="tw-flex tw-justify-between tw-items-center tw-max-w-[216px] tw-w-[100%] right-border">
                  <div className="tw-flex tw-flex-col">
                    <div className="">Location</div>
                    <div className="">SC - Columbia</div>
                  </div>
                  <div className="tw-pr-[30px]">
                    <Location />
                  </div>
                </div>
                <div className="tw-flex tw-justify-between tw-items-center tw-max-w-[216px] tw-w-[100%] ">
                  <div className="tw-flex tw-flex-col tw-pl-[30px]">
                    <div className="">Doc. Type</div>
                    <div className="">Clean Title</div>
                  </div>
                  <div className="">
                    <Doc />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-info_item2 tw-w-full tw-pl-[30px] tw-max-w-[230px] tw-mt-[30px] tw-h-[240px]">
          <div className="tw-flex tw-justify-between">
            <div className="tw-flex tw-flex-col tw-gap-[20px]">
              <div className="">
                <span className="tw-text-[13px] tablet:tw-text-[14px] tw-flex tw-gap-[8px] tw-items-center tw-text-[#8C8C8C]">
                  Current Bid
                </span>
                <span className="tw-text-[#3E73CF] tw-text-[20px] tw-font-[500px]">$200</span>
              </div>
              <div className="">
                <span className="tw-text-[13px] tablet:tw-text-[14px] tw-flex tw-gap-[8px] tw-items-center tw-text-[#8C8C8C]">
                  Buy it Now
                </span>
                <span className="tw-text-[#E3433A] tw-text-[20px] tw-font-[500px]">$200</span>
              </div>
            </div>
            <div className="tw-flex tw-flex-col">
              <Rating1 className={"tw-z-30 tw-mb-[-4px]"} />
              <Rating2 className={"tw-z-20 tw-mb-[-4px]"} />
              <Rating3 className={"tw-z-10 tw-rounded-full"} />
            </div>
          </div>
          <button className="tw-w-full tw-py-[12px] tw-text-[#fff] tw-rounded-[32px] tw-bg-[#3E73CF] tw-mt-[23px]">
            Bid Now <Auc className={""} />
          </button>
          <div className="tw-flex tw-justify-between tw-items-center tw-mt-[24px]">
            <div className="tw-w-flex tw-text-[14px]  tw-items-center">
              <Clock /> <span>5 hr. 18 min.</span>
            </div>
            <div className="">
              <StarFav width={"20"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
