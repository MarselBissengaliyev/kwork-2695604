import React from "react";

import "../ui/styles/listitem.scss";

const ListItem = ({ label, icon, value }) => {
  return (
    <li className="list-item">
      <span className="list-item-label">
        <span className={` ${label === "Add Shipping" ? "tw-text-[#3E73CF]" : " "} list-item-label_title`}>
          {" "}
          {label}{" "}
        </span>
        <span className={`tw-ml-[6px] ${icon ? "" : "tw-hidden"} `}>{icon ? icon : ""}</span>
      </span>
      <span className="list-item-border"></span>
      <span
        className={` ${value === "YES" || value === "NO" ? "tw-text-[#3E73CF]" : " "} ${value === "OutBid" ? "tw-text-[#E3433A]" : " "} list-item-value`}
      >
        {value}
      </span>
    </li>
  );
};

export default ListItem;
