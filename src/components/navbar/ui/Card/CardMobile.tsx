import React from "react";

interface CardProps {
  amount: number;
  icon: string;
  title: string;
}

const CardMobile: React.FC<CardProps> = ({ title, amount, icon }) => {
  return (
    <div className="tw-flex tw-items-start tw-text-white tw-rounded-lg tw-space-x-4 tw-w-[124px]">
      <img
        src={icon}
        alt={`${title} icon`}
        className="tw-object-contain tw-h-full tw-align-top tw-w-[20px]"
      />
        <p className="tw-text-[18px] tw-font-bold">{title === "Watchlist" ? "" : "$"}{amount.toLocaleString()}</p>
    </div>
  );
};

export default CardMobile;
