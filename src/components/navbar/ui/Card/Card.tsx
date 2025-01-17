import React from "react";

interface CardProps {
  title: string;
  amount: number;
  icon: string;
}

const Card: React.FC<CardProps> = ({ title, amount, icon }) => {
  return (
    <div className="tw-flex tw-items-start tw-text-white tw-rounded-lg tw-space-x-4 tw-w-[124px]">
      <img
        src={icon}
        alt={`${title} icon`}
        className="tw-object-contain tw-h-full tw-align-top"
      />
      <div className="tw-flex tw-flex-col">
        <h4 className="tw-m-0 tw-text-[14px] tw-font-normal tw-opacity-75 tw-text-white">
          {title}
        </h4>
        <p className="tw-text-[18px] tw-font-bold">{title === "Watchlist" ? "" : "$"}{amount.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Card;
