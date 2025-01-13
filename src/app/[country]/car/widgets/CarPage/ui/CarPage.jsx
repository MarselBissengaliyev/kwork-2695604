import React from "react";

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

const CarPage = () => {
  return (
    <section className="tw-container">
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
      <div className="tw-flex tw-gap-[20px]">
        <div className="tw-flex tw-flex-col tw-gap-[70px]">
          <SliderCar />
          <FAQ />
        </div>
        <div className="">
          <VehicleInfo />
        </div>
        <div className="tw-flex tw-flex-col tw-gap-[10px]">
          <BidStatus />
          <div className="tw-w-[370px] tw-h-[40px] tw-bg-blue-500 tw-mb-[19px]"> </div>
          <FinalPriceCalc />
          <PolandMarket />
        </div>
      </div>
    </section>
  );
};

export default CarPage;
