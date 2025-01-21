import React from "react";

import SearchCard from "./entities/SearchCard/ui/SearchCard";
import SearchCardSmall from "./entities/SearchCard/ui/SearchCardSmall";
import SearchCardMobile from "./entities/SearchCard/ui/SearchCardMobile";

import Select from "@/components/Select";

import FilterCard from "./entities/FilterCard/ui/FilterCard";
import QuickFilters from "./entities/QuickFilters";

const page = () => {
  return (
    <div className="tw-flex tw-gap-[50px] tw-mx-[30px] desktop:tw-mx-auto tw-container tw-my-[70px]">
      <div className="tw-hidden laptop:tw-block">
        <FilterCard />
      </div>
      <div className="tw-w-full ">
        <div className="">
          <QuickFilters />
        </div>
        <div className="tw-flex tw-w-full tw-items-center  tw-my-[30px] tw-justify-between">
          <span>Showing result: 1-24 of 48</span>
          <div className="tw-max-w-[255px]">
            <Select options={["2021", "2022"]} name={"Sort by date"} />
          </div>
        </div>
        <div className="tw-w-full">
          <div className="tw-hidden desktop:tw-block">
            <SearchCard />
          </div>
          <div className="tw-hidden tablet:tw-block desktop:tw-hidden">
            {" "}
            <SearchCardSmall />
          </div>
          <div className="tw-block tablet:tw-hidden laptop:tw-hidden">
            <SearchCardMobile card={[]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
