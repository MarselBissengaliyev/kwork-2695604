import React from "react";

import PageDirect from "@/components/Common/PageDirect";

import SliderCar from "../../../entities/SliderCar";
import VehicleInfo from "../../../entities/VehicleInfo";
import BidStatus from "../../../entities/BidStatus";
import FinalPriceCalc from "../../../entities/FinalPriceCalc";
import PolandMarket from "../../../entities/PolandMarket";
import FAQ from "../../../entities/FAQ";

import Rating1 from "../../../shared/img/Rating";
import Rating2 from "../../../shared/img/Rating2";
import Rating3 from "../../../shared/img/Rating3";
import StarFav from "../../../shared/img/StarFav";
import Car from "../../../shared/img/Car";
import InfoIcon from "../../../shared/img/InfoIcon";

const HeroCar = () => {
  return (
    <section className="tw-container tw-mx-0 desktop:tw-mx-auto  tw-mb-[66px]">
      {/* ======================================= */}
      <div className="tw-flex tw-justify-between tw-items-baseline">
        <div className="tw-flex tw-gap-[30px] tw-items-baseline">
          <h1 className="tw-text-[46px]">
            2013 Chevrolet Impala <span>Ls 3.6L</span>
          </h1>
          <div className="tw-flex">
            <Rating1 className={"tw-z-30 tw-mr-[-4px]"} />
            <Rating2 className={"tw-z-20 tw-mr-[-4px]"} />
            <Rating3 className={"tw-z-10 tw-rounded-full"} />
          </div>
        </div>

        <StarFav />
      </div>
      {/* ======================================= */}
      <div className="laptop:tw-flex tw-w-full tw-justify-center  tw-max-w-[708px] laptop:tw-max-w-full  tw-gap-[0] tw-mx-[30px] laptop:tw-mx-[0] laptop:tw-gap-[20px]">
        <div className=" tw-w-full tw-max-w-[760px]  tw-items-center tw-flex-col ">
          <SliderCar />
          <div className="tw-block  laptop:tw-hidden">
            {/* laptop  */}
            <BidStatus />
          </div>
          <div className="tw-max-w-[648px] tw-mt-[11px] tw-items-center tw-h-[40px] tw-mb-[19px] tw-flex  laptop:tw-hidden">
            {/* laptop */}
            <div className="tw-mr-[16px]">
              <Car />
            </div>
            <div className="tw-flex tw-items-stretch tw-gap-[9px]">
              <span className="text-vehicle tw-max-[579px]">
                THIS VEHICLE IS BEING SOLD IN IT`S CURRENT CONDITION ON AN 'AS IS' BASIS
              </span>
              <span className="tw-mt-[-4px]">
                <InfoIcon />
              </span>
            </div>
          </div>
          <div className=" tw-block tw-mb-[19px]  laptop:tw-hidden">
            {/* laptop */}
            <VehicleInfo />
          </div>
          <div className="tw-block  laptop:tw-hidden">
            {/* laptop */}
            <FinalPriceCalc />
          </div>
          <FAQ />
        </div>
        <div className="tw-w-[370px] tw-hidden  laptop:tw-block">
          {/* desktop */}
          <VehicleInfo />
        </div>
        <div className="tw-flex tw-flex-col tw-gap-[10px]">
          <div className="tw-hidden  laptop:tw-block">
            {/* desktop */}
            <BidStatus />
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
            <FinalPriceCalc />
          </div>
          <PolandMarket />
        </div>
      </div>
    </section>
  );
};

export default HeroCar;
