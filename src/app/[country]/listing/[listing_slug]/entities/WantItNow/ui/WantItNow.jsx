import ListItem from "@/components/ListItem";
import React from "react";

import BuyItNow from "../../../shared/img/BuyItNow";
import JobOffer from "../../../shared/img/JobOffer";

const WantItNow = ({ listing }) => {
  return (
    <div className="case-border tw-mb-[20px] tw-px-[15px] tablet:tw-px-[30px] tw-py-[28px]">
      <h2 className="tw-text-[20px] tablet:tw-text-[30px]">Want It Now?</h2>
      <hr className="tw-my-[24px]" />
      <div className="tw-mb-[30px]">
        <ListItem label={"Buy now Price"} value={"$" + listing.final_bid} />
      </div>
      <div className="tw-flex tw-flex-col tw-gap-[20px]">
        <button
          type="button"
          className="tw-py-[20px] tw-justify-center tw-gap-[10px] tw-flex tw-items-center tw-bg-[#E3433A] tw-font-bold tw-text-[#fff] tw-px-[25px] tw-rounded-[32px] "
        >
          Buy it Now <BuyItNow />
        </button>
        <button
          type="button"
          className="tw-py-[20px] tw-px-[25px] tw-justify-center tw-gap-[10px] tw-flex tw-bg-[#223E70] tw-items-center tw-text-[#fff] !tw-rounded-[32px] tw-font-medium"
          data-bs-dismiss="modal"
        >
          Make An Offer <JobOffer />
        </button>
      </div>
    </div>
  );
};

export default WantItNow;
