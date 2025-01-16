"use client";

import React from "react";
import { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./car.scss";

import HeroCar from "./widgets/HeroCar";
import HowItWorks from "./widgets/HowItWorks";
import { NearestLots } from "@/containers/home";

const page = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min"); // Подключаем JS Bootstrap
  }, []);
  return (
    <>
      <div className="tw-w-full tw-mb-[58px]">
        <HeroCar />
        <hr />
      </div>
      <div className="tw-w-full tw-bg-[#F9F9F9] tw-h-[458px] tw-hidden xxl:tw-block">
        <HowItWorks />
      </div>
      <div className="tw-h-[472px]">
        <hr className="tw-my-[21px]" />
        <NearestLots lots={[]} />
      </div>
    </>
  );
};

export default page;
