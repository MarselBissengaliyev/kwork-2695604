import UserContact from "../../../shared/img/UserContact";

import Input from "@/components/Input";

import React from "react";

const SubmitRequest = () => {
  return (
    <div className="tw-bg-[#223E70]">
      <div className="tw-container tw-py-[90px]">
        <div className="tw-flex tw-flex-col desktop:tw-flex-row tw-justify-between tw-w-full tw-mx-[20px] tablet:tw-mx-[30px] desktop:tw-mx-0">
          <div className="tw-flex tw-flex-col tw-gap-[16px] tablet:tw-gap-[30px] tw-mb-[20px]  tablet:tw-mb-[40px] desktop:tw-mb-0 ">
            <span className="tw-text-[26px] tablet:tw-text-[46px] tw-text-[#fff]">
              Submit <br className="tw-hidden desktop:tw-block" /> a Request
            </span>
            <span className="tw-text-[14px] desktop:tw-max-w-[180px] tablet:tw-text-[16px] tw-text-[#fff] tw-max-w-[160px] tablet:tw-max-w-full">
              Our manager will answer you as soon as possible
            </span>
          </div>
          <div className="tw-flex tw-justify-center tablet:tw-mx-auto minilaptop:tw-mx-0 tw-max-w-[280px] tablet:tw-max-w-[400px]  minilaptop:tw-max-w-[700px] tablettw-max-w-[700px]  minidesk:tw-max-w-[760px]  desktop:tw-max-w-[1020px] tw-w-full ">
            <form action="" className="tw-flex tw-flex-col  tw-gap-[20px]  tw-w-full">
              <div className="tw-flex ">
                <Input placeholder={"Email"} className={"!tw-rounded-r-none"} />
                <Input placeholder={"Name"} className={"!tw-rounded-l-none"} />
              </div>
              <div className="tw-flex">
                <Input placeholder={"Phone"} className={"!tw-rounded-r-none"} />
                <Input placeholder={"Email"} className={"!tw-rounded-l-none"} />
              </div>
              <div className="tw-flex tw-w-full">
                <textarea
                  type={"texterea"}
                  placeholder={"Message"}
                  className={"tw-p-[10px] tw-rounded-[26px] tw-w-full"}
                />
              </div>
              <p className="tw-text-[#FFFFFF] tw-textt-[13px] tablet:tw-text-[16px] tw-max-w-[280px] tablet:tw-max-w-[495px] desktop:tw-max-w-full">
                Please enter the details of your request. A member of our support staff will respond as soon as
                possible.
              </p>
              <button
                type="button"
                className="tw-w-full tw-flex tw-gap-[10px] tw-items-center tw-bg-[#3E73CF] tw-justify-center tw-text-center tw-text-[#fff] tw-max-w-full tablet:tw-max-w-[247px] tw-py-[21.5px] tw-rounded-[32px]  tw-text-[18px] tw-leading-[21px] tw-mt-[45px]"
                data-bs-toggle="modal"
                data-bs-target="#modalGetReport"
              >
                Send Message <UserContact />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitRequest;
