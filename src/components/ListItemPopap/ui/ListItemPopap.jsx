import ListItem from "@/components/ListItem/ui/ListItem";
import React, { useState } from "react";

const ListItemPopap = ({ label, icon, value, aucfree, transfree, docfree }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <li
      className="list-item tw-relative"
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
    >
      <span className="list-item-label">
        <span className={`!tw-text-[#3E73CF] list-item-label_title`}>{label}</span>
        <span className={`tw-ml-[6px] ${icon ? "" : "tw-hidden"}`}>{icon ? icon : ""}</span>
      </span>
      <span className="list-item-border"></span>
      <span
        className={` ${
          value === "YES" ? "tw-text-[#3E73CF]" : " "
        } ${value === "OutBid" ? "tw-text-[#E3433A]" : " "} list-item-value`}
      >
        {value}
      </span>

      {/* Popup */}
      {showPopup && (
        <div className="tw-absolute tw-top-[25px] tw-w-full  tw-bg-white tw-shadow-lg tw-border tw-rounded-md tw-p-[20px] tw-z-10">
          <ul className="tw-text-sm tw-w-full tw-p-0 tw-space-y-2 tw-list-none">
            <li className="">
              <ListItem label={"Auction Fee"} value={aucfree} />
            </li>
            <li className="">
              <ListItem label={"Transaction Fee"} value={transfree} />
            </li>
            <li className="">
              <ListItem label={"Documentation Fee"} value={docfree} />
            </li>
          </ul>
        </div>
      )}
    </li>
  );
};

export default ListItemPopap;
