import React from "react";
import SearchCard from "./entities/SearchCard/ui/SearchCard";
import SearchCardSmall from "./entities/SearchCard/ui/SearchCardSmall";

const page = () => {
  return (
    <div className="tw-container tw-mb-[70px]">
      <SearchCardSmall />
      <SearchCard />
    </div>
  );
};

export default page;
