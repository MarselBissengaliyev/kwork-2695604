import React from "react";

// eslint-disable-next-line react/prop-types
const SideArrow = ({ width = "8" }) => {
  return (
    <svg width={width} height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.749918 6.00014C0.749918 5.79703 0.834952 5.59394 1.00466 5.43908L6.34774 0.56599C6.68763 0.255998 7.23869 0.255998 7.57844 0.56599C7.91819 0.875857 7.91819 1.37836 7.57844 1.68837L2.85059 6.00014L7.57828 10.3119C7.91802 10.6219 7.91802 11.1244 7.57828 11.4342C7.23853 11.7444 6.68746 11.7444 6.34757 11.4342L1.0045 6.56121C0.834759 6.40628 0.749918 6.20319 0.749918 6.00014Z"
        fill="#191919"
      />
    </svg>
  );
};

export default SideArrow;
