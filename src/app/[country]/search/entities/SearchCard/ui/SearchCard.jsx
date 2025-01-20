import React from "react";

import "../styles/search-card.scss";
import CopyText from "@/components/ListItem/models/CopyText";

const SearchCard = () => {
  return (
    <div className="search_car ">
      SearchCard
      <div className="search_car_inner case-border">
        <div className="search_car_inner_img">
          <img src="https://images.drive.ru/i/0/5f27e548ec05c40632000017.jpeg" alt="" />
        </div>
        <div className="tw-py-[30px]">
          <h2 className="tw-text-[#3E73CF] tw-text-[18px] tw-mb-[20px]">2013 Chevrolet Impala Ls 3.6L</h2>
          <div className="tw-mb-[20px]">
            <div className="tw-flex tw-gap-[74px]">
              <span className="tw-flex tw-gap-[9px]">
                LOT <span>#30874242</span> <CopyText />
              </span>
              <span className="tw-flex tw-gap-[9px]">
                VIN: <span>1D7RB1GP6AS109178</span> <CopyText />{" "}
              </span>
            </div>
            <div className=""></div>
          </div>
        </div>
        <div className="tw-py-[30px]"></div>
      </div>
    </div>
  );
};

export default SearchCard;
