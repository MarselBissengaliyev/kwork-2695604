import React from "react";

import "../styles/auction-date.scss";

import InfoIcon from "../../../shared/img/InfoIcon";
import Bell from "../../../shared/img/Bell";

import ButtonMain from "@/components/button/ButtonMain";
import Select from "@/components/Select";

const options = ["Cars", "Trucks", "ATV", "Motorcycle", "Boats", "RV", "Construction Equipment"];

const AuctionDateNotification = () => {
  return (
    <div className="case-border tw-w-full  tw-mb-[19px]">
      <div className="tw-flex tw-justify-between tw-px-[30px] tw-mb-[30px] tw-py-[28px] tw-bg-[#FFF5F5]">
        <span className="tw-text-[16px] tablet:tw-text-[20px] tw-flex tw-gap-[8px] tw-items-center tw-font-semibold tw-text-[#E3433A]">
          This car has no date of sale
          <span>
            <InfoIcon />
          </span>
        </span>
      </div>

      <div className="tw-px-[15px] tw-text-[14px] tablet:tw-text-[16px] tablet:tw-px-[30px] tw-pb-[28px]">
        <div className="tw-mb-[30px]">
          <p>
            Vehicle Alerts are emails or text messages notifying of the latest vehicles we add to our inventory based on
            what you’re looking for.
          </p>
          <p>
            You cancel alerts at any time or change the frequency to suit you need. You can also setup as many alerts as
            you want.
          </p>
        </div>
        <div className="">
          <form action="">
            <label htmlFor="" className="tw-text-[14px] tablet:tw-text-[18px] tw-font-bold tw-mb-[16px]">
              Alerts for Similar Vehicles
            </label>

            <div className="">
              <Select options={options} />
            </div>
            <ButtonMain className={"tw-w-full tw-py-[20px] tw-rounded-[32px] tw-mt-[20px]"}>
              {" "}
              Set Alert <Bell />
            </ButtonMain>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuctionDateNotification;
