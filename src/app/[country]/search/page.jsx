import React from "react";

import SearchCard from "./entities/SearchCard/ui/SearchCard";
import SearchCardSmall from "./entities/SearchCard/ui/SearchCardSmall";
import SearchCardMobile from "./entities/SearchCard/ui/SearchCardMobile";

import PaginationBlock from "../dashboard/entities/paginationBlock/PaginationBlock";

import Select from "@/components/Select";

import FilterCard from "./entities/FilterCard/ui/FilterCard";
import QuickFilters from "./entities/QuickFilters";

import SideFilter from "./entities/SideFilter";

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

const page = () => {
  return (
    <div className="tw-flex tw-gap-[50px] tw-mx-[20px] tablet:tw-mx-[30px] desktop:tw-mx-auto desktop:tw-container tw-my-[70px]">
      <div className="tw-hidden desktop:tw-block">
        <FilterCard />
      </div>
      <div className="tw-w-full ">
        <div className="">
          <QuickFilters />
        </div>
        <div className="tw-flex tw-w-full tw-items-center  tw-my-[30px] tw-justify-between">
          <div className="tw-flex tw-gap-[20px] tw-items-center">
            <span className="tw-block desktop:tw-hidden">
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
            <SearchCardSmall />
          </div>
          <div className="tw-flex tw-flex-col tw-gap-[20px] minilaptop:tw-hidden">
            {/* mobile */}
            <SearchCardMobile card={[]} />
          </div>
        </div>
        <div className="tw-mt-[50px]">
          <PaginationBlock currentPage={1} totalPages={10} />
        </div>
      </div>
    </div>
  );
};

export default page;
