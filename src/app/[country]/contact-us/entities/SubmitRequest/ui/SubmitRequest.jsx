import User from "@/app/[country]/listing/[listing_slug]/shared/img/User";

import Input from "@/components/Input";
import InputPhone from "@/components/InputPhone";
import React from "react";

const SubmitRequest = () => {
  return (
    <div className="tw-bg-[#223E70]">
      <div className="tw-container tw-py-[90px]">
        <div className="tw-flex tw-flex-col desktop:tw-flex-row tw-justify-between tw-w-full tw-mx-[20px] tablet:tw-mx-[30px] desktop:tw-mx-0">
          <div className="tw-flex tw-flex-col tw-gap-[30px] ">
            <span className="tw-text-[26px] tablet:tw-text-[46px] tw-text-[#fff]">
              Submit <br className="tw-hidden desktop:tw-block" /> a Request
            </span>
            <span className="tw-text-[14px] desktop:tw-max-w-[180px] tablet:tw-text-[16px] tw-text-[#fff]">
              Our manager will answer you as soon as possible
            </span>
          </div>
          <div className="tw-max-w-full desktop:tw-max-w-[1020px] tw-w-full">
            <form action="" className="tw-flex tw-flex-col tw-gap-[20px] tw-w-full">
              <div className="tw-flex">
                <Input placeholder={"Email"} className={"!tw-rounded-r-none"} />
                <Input placeholder={"Name"} className={"!tw-rounded-l-none"} />
              </div>
              <div className="tw-flex">
                <Input placeholder={"Phone"} className={"!tw-rounded-r-none"} />
                <Input placeholder={"Email"} className={"!tw-rounded-l-none"} />
              </div>
              <div className="tw-flex">
                <textarea
                  type={"texterea"}
                  placeholder={"Message"}
                  className={"tw-p-[10px] tw-rounded-[26px] tw-w-full"}
                />
              </div>
              <p>
                Please enter the details of your request. A member of our support staff will respond as soon as
                possible.
              </p>
              <button
                type="button"
                className="tw-w-full tw-bg-[#3E73CF] tw-text-center tw-max-w-full tablet:tw-max-w-[247px] tw-py-[21.5px] tw-rounded-[32px] tw-hidden laptop:tw-block tw-text-[18px] tw-leading-[21px] tw-mt-[45px]"
                data-bs-toggle="modal"
                data-bs-target="#modalGetReport"
              >
                Send Message <User />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitRequest;
