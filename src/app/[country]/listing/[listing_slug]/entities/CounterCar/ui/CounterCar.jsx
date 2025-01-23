"use client";
import React, { useEffect, useRef } from "react";

import "../styles/counter.scss";

import ButtonMain from "@/components/button/ButtonMain";

import Plus from "../../../shared/img/Plus";
import Minus from "../../../shared/img/Minus";

const CounterCar = ({ children, setInputValue }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min"); // Подключаем JS Bootstrap
  }, []);

  const decrement = () => {
    if (inputRef.current) {
      const currentValue = parseInt(inputRef.current.value, 10) || 0;
      const newValue = currentValue - 500;
      const updatedValue = Math.max(newValue, 25); // Минимум 25
      inputRef.current.value = updatedValue;
      setInputValue(newValue)
    }
  };

  const increment = () => {
    if (inputRef.current) {
      const currentValue = parseInt(inputRef.current.value, 10) || 0;
      const newValue = currentValue + 500;
      inputRef.current.value = newValue;
      setInputValue(newValue)
    }
  };

  return (
    <div className="tw-flex tw-flex-col">
      <div className="tw-flex tw-gap-[20px] tw-flex-col tablet:tw-flex-row tw-justify-between">
        <div className="tw-flex tw-items-center tw-justify-center tw-w-full tw-max-w-[412px] laptop:tw-max-w-full tw-px-[20px] tw-py-[17px] counter-border">
          <button type="button" onClick={decrement} className="tw-w-[24px] tw-bg-[#3E73CF] tw-rounded-[14px]">
            <Minus />
          </button>
          <input
            ref={inputRef}
            id="bid-input"
            name="bid"
            type="text"
            defaultValue={25}
            step={25}
            min={25}
            className="tw-text-center tw-w-full tw-text-[18px] tw-border-0 tw-outline-none"
          />
          <button type="button" onClick={increment} className="tw-w-[24px] tw-bg-[#3E73CF] tw-rounded-[14px]">
            <Plus />
          </button>
        </div>
        <div className="tw-block laptop:tw-hidden">{children}</div>
      </div>

      <div className="tw-my-[19px] tw-hidden laptop:tw-block">
        <span className="tw-text-[#3E73CF] tw-text-[16px]">Fee Estimator</span>
      </div>

      <div className="tw-hidden laptop:tw-block">{children}</div>
    </div>
  );
};

export default CounterCar;
