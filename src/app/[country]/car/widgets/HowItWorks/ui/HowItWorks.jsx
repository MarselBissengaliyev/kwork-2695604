import React from "react";

import HowItWorksCard from "@/app/[country]/car/entities/HowItWorksCard";

import "../styles/how-work.scss";

import User from "../../../shared/img/User";
import Petition from "../../../shared/img/Petition";
import Protection from "../../../shared/img/Protection";
import Discount from "../../../shared/img/Discount";
import Shipping from "../../../shared/img/Shipping";

const data = [
  {
    icon: <User />,
    text: "Register on our website",
  },
  {
    icon: <Petition />,
    text: "Sign the contract and make a deposit",
  },
  {
    icon: <Protection />,
    text: "Find your car at the auction",
  },
  {
    icon: <Discount />,
    text: "Bidding at auction",
  },
  {
    icon: <Shipping />,
    text: "Delivery to your home",
  },
];

const HowItWorks = () => {
  return (
    <div className="tw-container tw-py-[70px]">
      <h2 className="text-title tw-font-semibold tw-mb-[32px]">How it Works</h2>

      <div className="step-work ">
        <div className="tw-w-full tw-flex tw-gap-[20px]">
          {data.map((item, idx) => (
            <HowItWorksCard key={idx} icon={item.icon} text={item.text} step={idx + 1} />
          ))}
          <div className="enjoy-step"></div>
        </div>

        <div className="tw-mt-[26px] tw-ml-[10px]">
          <div className="line-work"></div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
