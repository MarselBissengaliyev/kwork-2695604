import React from "react";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ width = "48" }) => {
  return (
    <svg width={width} height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.5 24C0.5 11.0213 11.0213 0.5 24 0.5C36.9787 0.5 47.5 11.0213 47.5 24C47.5 36.9787 36.9787 47.5 24 47.5C11.0213 47.5 0.5 36.9787 0.5 24Z"
        stroke="#DBDBDB"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.9091 15H19.0909C16.8316 15 15 16.8316 15 19.0909V28.9091C15 29.9941 15.431 31.0346 16.1982 31.8018C16.9654 32.569 18.0059 33 19.0909 33H28.9091C31.1684 33 33 31.1684 33 28.9091V19.0909C33 16.8316 31.1684 15 28.9091 15ZM28.9091 28.0909H27.0436C26.7489 28.5877 26.214 28.8922 25.6364 28.8922C25.0587 28.8922 24.5239 28.5877 24.2291 28.0909H19.0909C18.639 28.0909 18.2727 27.7246 18.2727 27.2727C18.2727 26.8209 18.639 26.4545 19.0909 26.4545H24.2291C24.5239 25.9578 25.0587 25.6532 25.6364 25.6532C26.214 25.6532 26.7489 25.9578 27.0436 26.4545H28.9091C29.361 26.4545 29.7273 26.8209 29.7273 27.2727C29.7273 27.7246 29.361 28.0909 28.9091 28.0909ZM28.9091 21.5455H23.7709C23.4761 22.0422 22.9413 22.3468 22.3636 22.3468C21.786 22.3468 21.2511 22.0422 20.9564 21.5455H19.0909C18.639 21.5455 18.2727 21.1791 18.2727 20.7273C18.2727 20.2754 18.639 19.9091 19.0909 19.9091H20.9564C21.2511 19.4123 21.786 19.1078 22.3636 19.1078C22.9413 19.1078 23.4761 19.4123 23.7709 19.9091H28.9091C29.361 19.9091 29.7273 20.2754 29.7273 20.7273C29.7273 21.1791 29.361 21.5455 28.9091 21.5455Z"
        fill="#D5D5D5"
      />
    </svg>
  );
};

export default Sidebar;