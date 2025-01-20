import React from "react";
import SearchCard from "./entities/SearchCard/ui/SearchCard";
import SearchCardSmall from "./entities/SearchCard/ui/SearchCardSmall";
import SearchCardMobile from "./entities/SearchCard/ui/SearchCardMobile";

const page = () => {
  return (
    <div className="tw-container tw-mb-[70px]">
      <SearchCardMobile card={[]} />
      <SearchCardSmall />
      <SearchCard />
    </div>
  );
};

export default page;
