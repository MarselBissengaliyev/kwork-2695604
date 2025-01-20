"use client";

import React, { useEffect } from "react";

import PageDirect from "@/components/Common/PageDirect";

import "bootstrap/dist/css/bootstrap.min.css";

import SliderCar from "../../../entities/SliderCar";
import VehicleInfo from "../../../entities/VehicleInfo";
import BidStatus from "../../../entities/BidStatus";
import FinalPriceCalc from "../../../entities/FinalPriceCalc";
import PolandMarket from "../../../entities/PolandMarket";
import FAQ from "../../../entities/FAQ";
import WantItNow from "../../../entities/WantItNow";
import AccordionHistory from "../../../entities/AccordionHistory";
import AuctionDateNotification from "../../../entities/AuctionDateNotification";

import HistoryCard from "../../../entities/AccordionHistory/models/HistoryCard";

import ModalConfirmBild from "../../../features/Modal/models/ModalConfirmBild";
import ModalNotEnoughMoney from "../../../features/Modal/models/ModalNotEnoughMoney";
import ModalAttention from "../../../features/Modal/models/ModalAttention";
import ModalGetReport from "../../../features/Modal/models/ModalGetReport";

import Rating1 from "../../../shared/img/Rating";
import Rating2 from "../../../shared/img/Rating2";
import Rating3 from "../../../shared/img/Rating3";
import StarFav from "../../../shared/img/StarFav";
import Auc from "../../../shared/img/Auc";
import Car from "../../../shared/img/Car";
import InfoIcon from "../../../shared/img/InfoIcon";
import CopyText from "@/components/ListItem/models/CopyText";

const HeroCar = ({ listing }) => {
  console.log("MAKE=", listing);
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min"); // Подключаем JS Bootstrap
  }, []);
  return (
    <section className="tw-container tw-mx-0   desktop:tw-mx-auto  tw-mb-[66px]">
      {/* ======================================= */}
      <div className="tw-hidden tablet:tw-block">
        <div className="tw-flex tw-justify-between tw-items-baseline tw-mx-[30px] desktop:tw-mx-0">
          <div className="tw-flex laptop:tw-gap-[30px] tw-items-baseline tw-mb-[40px]  tw-flex-wrap tw-max-w-[493px] laptop:tw-max-w-full ">
            <h1 className="tw-text-[46px]">{listing.title}</h1>
            <span className="tw-text-[46px] tw-font-semibold tw-mr-[30px] laptop:tw-mr-0">{listing.engine}</span>
            <div className="tw-flex">
              <Rating1 className={"tw-z-30 tw-mr-[-4px]"} />
              <Rating2 className={"tw-z-20 tw-mr-[-4px]"} />
              <Rating3 className={"tw-z-10 tw-rounded-full"} />
            </div>
          </div>

          <StarFav />
        </div>
      </div>

      <div className="tw-block tablet:tw-hidden tw-mt-[15px] tw-mx-[15px] tablet:tw-mx-0  laptop:tw-mx-[30px] desktop:tw-mx-0">
        <div className="tw-flex tw-justify-between tw-items-baseline  ">
          <div className="tw-flex laptop:tw-gap-[30px] tw-items-baseline tw-mb-[40px]  tw-flex-wrap tw-max-w-[493px] laptop:tw-max-w-full ">
            <h1 className="tw-text-[26px] tw-max-w-[245px]">
              2022 Used Damaged
              <span className="tw-text-[26px] tw-font-semibold tw-mr-[30px] laptop:tw-mr-0"> Zhiguli for sale</span>
            </h1>

            <div className="tw-flex tw-justify-between tw-w-full tw-mt-[15px]">
              <div className="">
                <Rating1 className={"tw-z-30 tw-mr-[-4px]"} />
                <Rating2 className={"tw-z-20 tw-mr-[-4px]"} />
                <Rating3 className={"tw-z-10 tw-rounded-full"} />
              </div>
              <div className="">
                <StarFav />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ======================================= */}
      <div className="laptop:tw-flex desktop:tw-w-full tw-justify-center tw-flex-col desktop:tw-flex-row tw-mx-0 tablet:tw-mx-[20px] desktop:tw-mx-0 tw-max-w-[708px] laptop:tw-max-w-full  tw-gap-[0]  laptop:tw-gap-[20px]">
        <div className="desktop:tw-w-full desktop:tw-max-w-[760px]  tw-items-center tw-flex-col ">
          <SliderCar media={listing.media} />
          <div className="tw-block laptop:tw-hidden tw-mb-[31px] tw-mx-[15px] tablet:tw-mx-0 tablet:tw-mb-0">
            {/* laptop  */}
            <AuctionDateNotification />
            {listing.make.lots.length > 0 && (
              <AccordionHistory lots={listing.make.lots} title={"Auction History Found"} id={1} />
            )}
            <BidStatus listing={listing}>
              {" "}
              <button
                type="button"
                className="tw-w-full tablet:tw-w-[216px] laptop:tw-w-full tw-flex tw-gap-[10px] tw-justify-center tw-bg-[#3ECF5C] tw-text-[#fff] tw-py-[20.5px] tw-rounded-[32px] "
                data-bs-toggle="modal"
                // data-bs-target="#modalNotMoney"
                // data-bs-target="#modalConfirm"
                data-bs-target="#modalAttention"
              >
                Place a Bid <Auc />
              </button>
            </BidStatus>
          </div>
          <div className="tw-max-w-[648px] tw-mt-[11px] tw-items-center tw-h-[40px] tw-mb-[19px] tw-flex  laptop:tw-hidden tw-mx-[15px] tablet:tw-mx-0">
            {/* laptop */}
            <div className="tw-mr-[16px]">
              <Car />
            </div>

            <div className="tw-flex tw-items-baseline tablet:tw-items-stretch tw-gap-[9px]">
              <span className="text-vehicle tw-max-[579px]">
                THIS VEHICLE IS BEING SOLD IN IT`S CURRENT CONDITION ON AN 'AS IS' BASIS
              </span>
              <span className="tw-mt-[-4px]">
                <InfoIcon />
              </span>
            </div>
          </div>
          <div className=" tw-block tw-mb-[19px]  laptop:tw-hidden tw-mt-[31px] tablet:tw-mt-0 tw-mx-[15px] tablet:tw-mx-0">
            {/* laptop */}

            <VehicleInfo listing={listing}>
              {" "}
              <button
                type="button"
                className="tw-w-full tw-bg-[#3E73CF]  tw-py-[21.5px] tw-rounded-[32px]  tw-text-[18px] tw-leading-[21px] tw-mt-[45px]"
                data-bs-toggle="modal"
                data-bs-target="#modalGetReport"
              >
                <span className="tw-text-[#fff]">Get report</span>
              </button>{" "}
            </VehicleInfo>
          </div>
          <div className="tw-block  laptop:tw-hidden tw-mx-[15px] tablet:tw-mx-0">
            {/* laptop */}
            <WantItNow listing={listing} />
            <FinalPriceCalc listing={listing} />
          </div>
          <FAQ />
        </div>
        <div className="desktop:tw-w-[370px] tw-hidden  laptop:tw-block">
          {/* desktop */}
          <VehicleInfo listing={listing}>
            <button
              type="button"
              className=" tw-w-full tw-bg-[#3E73CF] t tw-py-[21.5px] tw-rounded-[32px] tw-hidden laptop:tw-block tw-text-[18px] tw-leading-[21px] tw-mt-[45px]"
              data-bs-toggle="modal"
              data-bs-target="#modalGetReport"
            >
              <span className="tw-text-[#fff]">Get report</span>
            </button>
          </VehicleInfo>
        </div>
        <div className="tw-flex tw-flex-col desktop:tw-max-w-[370px] tw-gap-[10px]">
          <div className="tw-hidden  laptop:tw-block">
            {/* desktop */}
            <AuctionDateNotification />
            {listing.make.lots.length > 0 && (
              <AccordionHistory lots={listing.make.lots} title={"Auction History Found"} id={1} />
            )}
            <BidStatus listing={listing}>
              <button
                type="button"
                className="tw-w-full tw-flex tw-gap-[10px] tw-justify-center tw-bg-[#3ECF5C] tw-text-[#fff] tw-py-[20.5px] tw-rounded-[32px] "
                data-bs-toggle="modal"
                // data-bs-target="#modalNotMoney"
                // data-bs-target="#modalConfirm"
                data-bs-target="#modalAttention"
              >
                Place a Bid <Auc />
              </button>
            </BidStatus>
          </div>
          <div className=" tw-w-[370px] tw-items-center tw-h-[40px]  tw-mb-[19px] tw-hidden  laptop:tw-flex">
            {/* desktop */}
            <div className="tw-mr-[16px]">
              <Car />
            </div>

            <div className="tw-flex tw-items-stretch">
              <span className="text-vehicle tw-max-w-[310px]">
                THIS VEHICLE IS BEING SOLD IN IT`S CURRENT CONDITION ON AN 'AS IS' BASIS
              </span>
              <span className="tw-mt-[-4px]">
                <InfoIcon />
              </span>
            </div>
          </div>
          <div className="tw-hidden  laptop:tw-block">
            {/* desktop */}
            <WantItNow listing={listing} />
            <FinalPriceCalc listing={listing} />
          </div>
          <PolandMarket listing={listing} marketInfo={listing.make.marketInfo[0]} />
        </div>
      </div>
      <ModalGetReport />
      <ModalConfirmBild />
      <ModalNotEnoughMoney />
      <ModalAttention />
    </section>
  );
};

export default HeroCar;
