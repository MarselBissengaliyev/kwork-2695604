import React from "react";

// eslint-disable-next-line react/prop-types
const Clock = ({ width = "14" }) => {
  return (
    <svg width={width} height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 7.8691C0 3.98978 3.13401 0.844971 7 0.844971C10.8641 0.849545 13.9954 3.99168 14 7.8691C14 11.7484 10.866 14.8932 7 14.8932C3.13401 14.8932 0 11.7484 0 7.8691ZM8.45918 10.2362C8.70768 10.4855 9.1105 10.4855 9.359 10.2362C9.60742 9.98688 9.60742 9.58267 9.359 9.33332L7.63636 7.60474V4.03776C7.63636 3.68509 7.35145 3.3992 7 3.3992C6.64855 3.3992 6.36364 3.68509 6.36364 4.03776V7.8691C6.36367 8.03845 6.43074 8.20084 6.55009 8.32056L8.45918 10.2362Z"
        fill="#D5D5D5"
      />
    </svg>
  );
};

export default Clock;