import React from "react";

import SearchCard from "./entities/SearchCard/ui/SearchCard";
import SearchCardSmall from "./entities/SearchCard/ui/SearchCardSmall";
import SearchCardMobile from "./entities/SearchCard/ui/SearchCardMobile";

import FilterCard from "./entities/FilterCard/ui/FilterCard";
import QuickFilters from "./entities/QuickFilters";

const page = () => {
  return (
    <div className="tw-flex tw-justify-between tw-container tw-my-[70px]">
      <div className="tw-w-full">
        <QuickFilters />
        <FilterCard />
      </div>
      <div className="">
        <SearchCardMobile card={[]} />
        <SearchCardSmall />
        <SearchCard />
      </div>
    </div>
  );
};

export default page;
