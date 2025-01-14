import React from "react";

import "../styles/listitem.scss";

const ListItem = ({ label, icon, value }) => {
  return (
    <li className="list-item">
      <span className="list-item-label">
        {label} {icon ? icon : ""}
      </span>
      <span className="list-item-border"></span>
      <span className="list-item-value">{value}</span>
    </li>
  );
};

export default ListItem;
