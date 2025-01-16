import React from "react";

import "../styles/listitem.scss";

const ListItem = ({ label, icon, value }) => {
  return (
    <li className="list-item">
      <span className="list-item-label">
        <span className="list-item-label_title"> {label} </span>
        <span className={`tw-ml-[6px] ${icon ? "" : "tw-hidden"} `}>{icon ? icon : ""}</span>
      </span>
      <span className="list-item-border"></span>
      <span className="list-item-value">{value}</span>
    </li>
  );
};

export default ListItem;
