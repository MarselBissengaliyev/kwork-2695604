"use client";

import React, { useState } from "react";

import "../styles/filter-card.scss";

import SelectForm from "@/components/SelectForm";
import YearSelect from "@/components/YearSelect";
import RangeSlider from "@/components/RangeSlider";

import CloseModal from "@/app/[country]/listing/[listing_slug]/shared/img/CloseModal";
import Search from "@/app/[country]/listing/[listing_slug]/shared/img/Search";

import Options from "../../../shared/img/Options";
import OptionsOpen from "../../../shared/img/OptionsOpen";

const filter = [
  {
    label: "Condition",
    options: ["Sms", "Whatsapp"],
    name: "Select",
  },
  {
    label: "Make",
    options: ["Sms", "Whatsapp"],
    name: "Select",
  },
  {
    label: "Model",
    options: ["Sms", "Whatsapp"],
    name: "Select",
  },
];

const advanceed = [
  {
    label: "Mileage",
    options: ["Sms", "Whatsapp"],
    name: "Select",
  },
  {
    label: "Primary Damage",
    options: ["Sms", "Whatsapp"],
    name: "Select",
  },
  {
    label: "Secondary",
    options: ["Sms", "Whatsapp"],
    name: "Select",
  },
  {
    label: "Transmissiom",
    options: ["Sms", "Whatsapp"],
    name: "Select",
  },
  {
    label: "Title",
    options: ["Sms", "Whatsapp"],
    name: "Select",
  },
  {
    label: "Cylinder",
    options: ["Sms", "Whatsapp"],
    name: "Select",
  },
  {
    label: "Engine Type",
    options: ["Sms", "Whatsapp"],
    name: "Select",
  },
  {
    label: "Drive Train",
    options: ["Sms", "Whatsapp"],
    name: "Select",
  },
  {
    label: "Auction Type",
    options: ["Sms", "Whatsapp"],
    name: "Select",
  },
  {
    label: "Vehicle Type",
    options: ["Sms", "Whatsapp"],
    name: "Select",
  },
  {
    label: "Sale Status",
    options: ["Sms", "Whatsapp"],
    name: "Select",
  },
  {
    label: "Bodystyle",
    options: ["Sms", "Whatsapp"],
    name: "Select",
  },
];

const FilterCard = () => {
  const [openOptions, setOpenOptions] = useState(false);

  const toggleOptions = e => {
    e.preventDefault();
    setOpenOptions(!openOptions);
  };

  return (
    <div className="filter-border  tw-p-[30px]">
      <form action="" className="tw-w-full tw-flex tw-flex-col tw-gap-[20px]">
        {filter.map((item, idx) => {
          return <SelectForm key={idx} options={item.options} label={item.label} name={item.name} />;
        })}

        <YearSelect fromOptions={[2022]} label={"Year from/to"} toOptions={[2222]} />

        <div className="">
          <div className={`${openOptions ? "tw-block" : "tw-hidden"} tw-w-full tw-flex tw-flex-col tw-gap-[20px]`}>
            {advanceed.map((item, idx) => {
              return <SelectForm key={idx} options={item.options} label={item.label} name={item.name} />;
            })}
            <YearSelect fromOptions={["12.02.2012"]} label={"Year from/to"} toOptions={["12.03.2012"]} />

            <RangeSlider />
          </div>
          <button onClick={toggleOptions} className=" tw-bg-transparent tw-text-[16px] tw-mt-[20px]">
            {!openOptions ? (
              <span className="tw-flex tw-gap-[10px]">
                <Options /> Advanced Options
              </span>
            ) : (
              <span className="tw-flex tw-gap-[10px]">
                <OptionsOpen /> Hide Advanced Options
              </span>
            )}
          </button>
        </div>

        <div className="tw-flex tw-flex-col tw-gap-[20px]">
          <button
            type="button"
            className="tw-py-[20px] tw-justify-center tw-gap-[10px] tw-flex tw-items-center tw-bg-[#3E73CF] tw-font-bold tw-text-[#fff] tw-px-[25px] tw-rounded-[26px] "
          >
            Find Vehicle <Search />
          </button>
          <button
            type="button"
            className="tw-py-[14px] tw-px-[25px] tw-justify-center tw-gap-[10px] tw-flex tw-items-center tw-bg-transparent tw-text-[#8C8C8C] case-border !tw-rounded-[26px] tw-font-medium"
            data-bs-dismiss="modal"
          >
            Reset all filters <CloseModal />
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterCard;
