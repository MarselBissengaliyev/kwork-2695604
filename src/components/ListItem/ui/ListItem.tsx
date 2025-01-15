import React from "react";

import "../styles/listitem.scss";

type ListItemType = {
  label: React.ReactNode;
  icon?: React.ReactNode;
  value: React.ReactNode
}

const ListItem = ({ label, icon, value }: ListItemType) => {
  return (
    <li className="list-item">
      <span className="list-item-label">
        <span className="tw-text-[16px]"> {label} </span>
        <span className={`tw-ml-[6px] ${icon ? "" : "tw-hidden"} `}>{icon ? icon : ""}</span>
      </span>
      <span className="list-item-border"></span>
      <span className="list-item-value">{value}</span>
    </li>
  );
};

export default ListItem;
