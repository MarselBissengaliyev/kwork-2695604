import React, { useEffect, useState } from "react";
import InfoIcon from "../../../shared/img/InfoIcon";
import ListItem from "@/components/ListItem";
import CounterCar from "../../CounterCar/ui/CounterCar";
import ModalConfirmBild from "../../../features/Modal/models/ModalConfirmBild";

const BidStatus = ({ children, listing, setInputValue }) => {
  const isAuctionOver = new Date(listing.auction_at).getTime() < Date.now();
  const bid = isAuctionOver ? listing.final_bid : listing.current_bid;
  const recommendedBid = !isAuctionOver ? listing.avg_price : null;

  const [timeLeft, setTimeLeft] = useState(null); // Initialize as null initially

  useEffect(() => {
    if (isAuctionOver || !listing.auction_at) return;

    const calculateTimeLeftInterval = () => {
      const timeRemaining = calculateTimeLeft(new Date(listing.auction_at).getTime() - Date.now());
      setTimeLeft(timeRemaining);
    };

    // Calculate the initial time left right after mounting
    calculateTimeLeftInterval();

    // Set interval for the countdown
    const interval = setInterval(calculateTimeLeftInterval, 1000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, [isAuctionOver, listing.auction_at]);

  return (
    <>
      <div className="case-border tw-w-full tw-mb-[19px]">
        <div className="tw-flex tw-justify-between tw-px-[30px] tw-mb-[30px] tw-py-[28px] tw-bg-[#F9F9F9]">
          <span className="tw-text-[18px] tw-flex tw-gap-[8px] tw-items-center tw-font-semibold tw-text-[#191919]">
            Bid Status
            <span>
              <InfoIcon />
            </span>
          </span>
          {listing.bids && listing.bids[0].status && (
            <span className="tw-text-[20px] tw-text-[#E3433A]">{listing.bids[0].status}</span>
          )}
        </div>
        <div className="tw-px-[15px] tablet:tw-px-[30px] tw-pb-[28px]">
          <div className="tw-flex tw-flex-wrap tablet:tw-gap-[95px] desktop:tw-gap-0 tw-mb-[22px]">
            <div className="tw-mr-[55px] tablet:tw-mr-[0px] laptop:tw-mr-[69px]">
              <span className="tw-text-[13px] tablet:tw-text-[16px] tw-flex tw-gap-[8px] tw-items-center tw-text-[#8C8C8C]">
                {isAuctionOver ? "Final Bid" : "Current Bid"}
              </span>
              {bid ? (
                <span className="tw-text-[#3E73CF] tw-text-[26px] tw-font-[500px]">${bid || `N\/A`}</span>
              ) : (
                <span className="tw-text-[#8C8C8C] tw-text-[16px]">N/A</span>
              )}
            </div>
            <div>
              <span className="tw-text-[13px] tablet:tw-text-[16px] tw-flex tw-gap-[8px] tw-items-center tw-text-[#8C8C8C]">
                Recommended Bid
                <span className="tw-mt-[-3px]">
                  <InfoIcon />
                </span>
              </span>
              {recommendedBid !== null ? (
                <span className="tw-text-[#3ECF5C] tw-text-[26px] tw-font-[500px]">${recommendedBid}</span>
              ) : (
                <span className="tw-text-[#8C8C8C] tw-text-[16px]">N/A</span>
              )}
            </div>
            {!isAuctionOver && listing.auction_at && timeLeft && (
              <div className="tw-mt-[18px] tablet:tw-mt-[0px] desktop:tw-mt-[20px]">
                <span className="tw-text-[13px] tablet:tw-text-[16px] tw-flex tw-gap-[8px] tw-items-center tw-text-[#8C8C8C]">
                  Time Left
                  <span className="tw-mt-[-3px]">
                    <InfoIcon />
                  </span>
                </span>
                <span className="tw-text-[#E3433A] tw-text-[26px] tw-font-[500px]">{timeLeft || "-"}</span>
              </div>
            )}
          </div>
          <ListItem label="Location" value={listing.location} icon={""} />
          <div className="tw-flex tw-flex-col tw-mt-[20px] tw-mb-[20px]">
            <span className="tw-text-[13px] tablet:tw-text-[16px] tw-text-[#191919]">Place Your Maximum Bid</span>
            <span className="tw-text-[#8C8C8C] tw-text-[16px]">($25 Bid Increments)</span>
          </div>

          <CounterCar setInputValue={setInputValue}>{children}</CounterCar>

          <div className="tw-my-[19px] tw-block laptop:tw-hidden">
            <span className="tw-text-[#3E73CF] tw-text-[16px]">Fee Estimator</span>
          </div>
        </div>
      </div>
    </>
  );
};

const calculateTimeLeft = ms => {
  if (ms <= 0) return null;

  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / 1000 / 60) % 60);
  const hours = Math.floor((ms / 1000 / 60 / 60) % 24);
  const days = Math.floor(ms / 1000 / 60 / 60 / 24);

  return `${days > 0 ? `${days}d ` : ""}${hours > 0 ? `${hours}h ` : ""}${minutes}m ${seconds}s`;
};

export default BidStatus;
