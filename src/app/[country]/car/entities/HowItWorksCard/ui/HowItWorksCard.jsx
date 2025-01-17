import React from "react";

import "../styles/works-card.scss";

const HowItWorksCard = ({ icon, text, step }) => {
  return (
    <div className="tw-flex tw-flex-col tw-justify-center works-card  tw-py-[50px] tw-rounded-[10px] tw-bg-[#FFFFFF] tw-relative">
      <div className="tw-m-auto tw-mb-[22px]">{icon}</div>
      <div className="tw-text-center tw-text-[18px] tw-m-auto  tw-max-w-[160px]">{text}</div>
      <div className="step_number">{step}</div>
      <div className="cloud-end"></div>
    </div>
  );
};

export default HowItWorksCard;
