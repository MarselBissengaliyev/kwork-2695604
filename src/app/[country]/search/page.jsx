import React from "react";

import SearchCard from "./entities/SearchCard/ui/SearchCard";
import SearchCardSmall from "./entities/SearchCard/ui/SearchCardSmall";
import SearchCardMobile from "./entities/SearchCard/ui/SearchCardMobile";

import PaginationBlock from "../dashboard/entities/paginationBlock/PaginationBlock";

import Select from "@/components/Select";
import CopyText from "@/components/ListItem/models/CopyText";

import FilterCard from "./entities/FilterCard/ui/FilterCard";
import QuickFilters from "./entities/QuickFilters";

import SideFilter from "./entities/SideFilter";

// ================= desktop ===============
const data = [
  {
    title: "2013 Chevrolet Impala Ls 3.6L",
    lot: "#30874242",
    vin: "123ABC456DEF7890",
    mileage: "123,456 km",
    damage: "front end",
    location: "Moscow, Russia",
    docType: "Government Documents",
    currentBid: "200",
    buyitNow: "200",
    clock: "12:00:00",
  },
  {
    title: "2013 Chevrolet Impala Ls 3.6L",
    lot: "#30874242",
    vin: "123ABC456DEF7890",
    mileage: "123,456 km",
    damage: "front end",
    location: "Moscow, Russia",
    docType: "Government Documents",
    currentBid: "200",
    buyitNow: "200",
    clock: "12:00:00",
  },
];
// ===================== laptop ===============================
const dataCardSmall = [
  {
    title: "2013 Chevrolet Impala Ls 3.6L",
    infocopy: [
      {
        label: "LOT:",
        value: <CopyText text={"30874242"} />,
      },
      {
        label: "VIN:",
        value: <CopyText text={"1FALP6536WK134349"} />,
      },
    ],
    info: [
      {
        label: "Mileage:",
        value: "198,239",
      },
      {
        label: "Location:",
        value: "SC - Columbia",
      },
      {
        label: "Damage:",
        value: "front end",
      },
      {
        label: "Doc. Type:",
        value: "Clean Title",
      },
    ],
    currentBid: "200",
    buyitNow: "200",
    clock: "12:00:00",
  },
  {
    title: "2013 Chevrolet Impala Ls 3.6L",
    infocopy: [
      {
        label: "LOT:",
        value: <CopyText text={"30874242"} />,
      },
      {
        label: "VIN:",
        value: <CopyText text={"1FALP6536WK134349"} />,
      },
    ],
    info: [
      {
        label: "Mileage:",
        value: "198,239",
      },
      {
        label: "Location:",
        value: "SC - Columbia",
      },
      {
        label: "Damage:",
        value: "front end",
      },
      { label: "Doc. Type:", value: "Clean Title" },
    ],
    currentBid: "200",
    buyitNow: "200",
    clock: "12:00:00",
  },
];

// ===================== mobile ===============================
const dataCardMobile = [
  {
    title: "2013 Chevrolet Impala Ls 3.6L",
    lot: "#30874242", // Убедитесь, что это всегда строка
    vin: "123ABC456DEF7890", // Убедитесь, что это всегда строка
    carInfo: [
      { label: "Mileage:", value: "198,239" },
      { label: "Location:", value: "SC - Columbia" },
      { label: "Damage:", value: "front end" },
      { label: "Doc. Type:", value: "Clean Title" },
      { label: "Current Bid:", value: "$131" },
      { label: "Buy it Now:", value: "$2,850" },
    ],
    clock: "12:00:00", // Убедитесь, что это строка
  },
  {
    title: "2013 Chevrolet Impala Ls 3.6L",
    lot: "#30874242", // Убедитесь, что это всегда строка
    vin: "123ABC456DEF7890", // Убедитесь, что это всегда строка
    carInfo: [
      { label: "Mileage:", value: "198,239" },
      { label: "Location:", value: "SC - Columbia" },
      { label: "Damage:", value: "front end" },
      { label: "Doc. Type:", value: "Clean Title" },
      { label: "Current Bid:", value: "$131" },
      { label: "Buy it Now:", value: "$2,850" },
    ],
    clock: "12:00:00", // Убедитесь, что это строка
  },
];

const page = () => {
  return (
    <div className=" tw-mx-[20px] tablet:tw-mx-[30px] desktop:tw-mx-auto desktop:tw-container tw-my-[70px]">
      <h2 className="tw-text-[26px] tablet:tw-max-w-[530px]  tablet:tw-mx-[30px] desktop:tw-mx-auto desktop:tw-max-w-full tablet:tw-text-[46px]">
        2022 Used Damaged Zhiguli for sale
      </h2>
      <div className="tw-flex tw-gap-[50px]  tablet:tw-mx-[30px] desktop:tw-mx-auto desktop:tw-container tw-mt-[40px] ">
        <div className="tw-hidden desktop:tw-block">
          {/* desktop */}
          <FilterCard />
        </div>
        <div className="tw-w-full ">
          <div className="">
            <QuickFilters />
          </div>
          <div className="tw-flex tw-w-full tw-items-center  tw-my-[30px] tw-justify-between">
            <div className="tw-flex tw-gap-[20px] tw-items-center">
              <span className="tw-block desktop:tw-hidden">
                {/* laptop sidebar */}
                <SideFilter />
              </span>
              <span className="tw-hidden minilaptop:tw-block">Showing result: 1-24 of 48</span>
            </div>

            <div className="tw-max-w-[195px] tablet:tw-max-w-[255px] tw-w-full">
              <Select options={["2021", "2022"]} name={"Sort by date"} />
            </div>
          </div>
          <div className="tw-w-full">
            <div className="tw-hidden tw-flex-col tw-gap-[20px]  desktop:tw-flex">
              {/* desktop */}
              {data.map((item, idx) => {
                return (
                  <SearchCard
                    key={idx}
                    title={item.title}
                    lot={item.lot}
                    vin={item.vin}
                    mileage={item.mileage}
                    damage={item.damage}
                    location={item.location}
                    docType={item.docType}
                    currentBid={item.currentBid}
                    buyitNow={item.buyitNow}
                    clock={item.clock}
                  />
                );
              })}
            </div>
            <div className="tw-hidden minilaptop:tw-flex desktop:tw-hidden tw-flex-col tw-gap-[20px]">
              {/* latop */}
              {dataCardSmall.map((item, idx) => {
                return (
                  <SearchCardSmall
                    key={idx}
                    title={item.title}
                    infocopy={item.infocopy}
                    info={item.info}
                    currentBid={item.currentBid}
                    buyitNow={item.buyitNow}
                    clock={item.clock}
                  />
                );
              })}
            </div>
            <div className="tw-flex tw-flex-col tw-gap-[20px] minilaptop:tw-hidden">
              {/* mobile */}
              {dataCardMobile.map((item, idx) => (
                <SearchCardMobile
                  key={idx}
                  title={item.title}
                  lot={item.lot}
                  vin={item.vin}
                  carInfo={item.carInfo}
                  clock={item.clock}
                />
              ))}
            </div>
          </div>
          <div className="tw-mt-[50px]">
            <PaginationBlock
              currentBids={{
                array: [],
                pages: 1,
                results: 1,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
