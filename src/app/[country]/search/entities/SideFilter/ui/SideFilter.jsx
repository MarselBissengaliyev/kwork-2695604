"use client";

import React, { useState } from "react";

import "../styles/side-filter.scss";

import SelectForm from "@/components/SelectForm";
import YearSelect from "@/components/YearSelect";

import CloseModal from "@/app/[country]/listing/[listing_slug]/shared/img/CloseModal";
import Search from "@/app/[country]/listing/[listing_slug]/shared/img/Search";

import Options from "../../../shared/img/Options";
import OptionsOpen from "../../../shared/img/OptionsOpen";

import SideArrow from "../../../shared/img/SideArrow";
import Sidebar from "../../../shared/img/Sidebar";

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
];

const SideFilter = () => {
  const [openOptions, setOpenOptions] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleOptions = e => {
    e.preventDefault();
    setOpenOptions(!openOptions);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <button className="tw-bg-transparent" onClick={toggleMenu}>
        <Sidebar />
      </button>

      {isMenuOpen && (
        <div className="tw-fixed tw-inset-0 tw-bg-black/50 tw-z-50 tw-flex">
          <div className="tw-bg-white tw-w-[250px] tablet:tw-w-[340px] tw-h-full tw-p-[30px] tw-overflow-y-auto">
            <button
              className="tw-absolute tw-px-[8px] tw-top-4 tw-left-[270px] tablet:tw-left-[370px] tw-rounded-[25px] tw-text-[#fff]"
              onClick={toggleMenu}
            >
              <SideArrow />
            </button>

            <form action="" className="tw-w-full tw-flex tw-flex-col tw-gap-[20px]">
              {filter.map((item, idx) => {
                return <SelectForm key={idx} options={item.options} label={item.label} name={item.name} />;
              })}

              <YearSelect fromOptions={[2022]} label={"Year from/to"} toOptions={[2222]} />

              <div className="">
                <div
                  className={`${openOptions ? "tw-block" : "tw-hidden"} tw-w-full tw-flex tw-flex-col tw-gap-[20px]`}
                >
                  {advanceed.map((item, idx) => {
                    return <SelectForm key={idx} options={item.options} label={item.label} name={item.name} />;
                  })}
                  <YearSelect fromOptions={["12.02.2012"]} label={"Year from/to"} toOptions={["12.03.2012"]} />

                  {/* <RangeSlider /> */}
                </div>
                <button onClick={toggleOptions} className="tw-bg-transparent tw-text-[16px] tw-mt-[20px]">
                  {!openOptions ? (
                    <span className="tw-flex tw-text-[14px] tablet:tw-text-[16px] tw-items-center tw-gap-[10px]">
                      <Options /> Advanced Options
                    </span>
                  ) : (
                    <span className="tw-flex tw-text-[14px] tablet:tw-text-[16px] tw-items-center tw-gap-[10px]">
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
                  onClick={toggleMenu}
                >
                  Reset all filters <CloseModal />
                </button>
              </div>
            </form>
          </div>

          <div className="tw-flex-1 tw-cursor-pointer" onClick={toggleMenu}></div>
        </div>
      )}
    </div>
  );
};

export default SideFilter;
