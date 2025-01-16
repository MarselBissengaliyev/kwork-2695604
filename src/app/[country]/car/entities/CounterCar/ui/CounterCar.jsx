import React from "react";

import "../styles/counter.scss";

import ButtonMain from "@/components/button/ButtonMain";

import Auc from "../../../shared/img/Auc";
import Plus from "../../../shared/img/Plus";
import Minus from "../../../shared/img/Minus";

const CounterCar = () => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();

        console.log("Bid submitted:", e.target.bid.value);
      }}
      className="tw-flex tw-flex-col"
    >
      <div className="tw-flex tw-gap-[20px] tw-flex-col tablet:tw-flex-row tw-justify-between">
        <div className="tw-flex tw-items-center tw-justify-center tw-w-full tw-max-w-[412px] laptop:tw-max-w-[310px]  tw-px-[20px]  tw-py-[17px] counter-border">
          <button
            type="button"
            onClick={() => {
              const input = document.getElementById("bid-input");
              if (input.value > 25) input.value = parseInt(input.value) - 25;
            }}
            className="tw-w-[24px] tw-bg-[#3E73CF]  tw-rounded-[14px]"
          >
            <Minus />
          </button>
          <input
            id="bid-input"
            name="bid"
            type="number"
            defaultValue={131}
            step={25}
            min={25}
            className="tw-text-center tw-w-full tw-text-[18px] tw-border-0 tw-outline-none"
          />
          <button
            type="button"
            onClick={() => {
              const input = document.getElementById("bid-input");
              input.value = parseInt(input.value) + 25;
            }}
            className="tw-w-[24px]  tw-bg-[#3E73CF]  tw-rounded-[14px]"
          >
            <Plus />
          </button>
        </div>
        <ButtonMain
          color="green"
          type="submit"
          className={"tw-w-full tablet:tw-max-w-[216px] tw-block laptop:tw-hidden tw-py-[20.5px] tw-rounded-[32px] "}
        >
          {/* laptop */}
          <span className="tw-mr-[9px]">Place a Bid</span> <Auc />
        </ButtonMain>
      </div>

      <div className="tw-my-[19px] tw-hidden laptop:tw-block">
        <span className="tw-text-[#3E73CF] tw-text-[16px]">Fee Estimator</span>
      </div>

      <ButtonMain
        color="green"
        type="submit"
        className={"tw-w-full tw-hidden laptop:tw-block tw-py-[20.5px] tw-rounded-[32px] "}
      >
        {/* desktop */}
        <span className="tw-mr-[9px]">Place a Bid</span> <Auc />
      </ButtonMain>
    </form>
  );
};

export default CounterCar;
