import React from "react";

import "../styles/contact-us.scss";

import Locator from "../../../shared/img/Locator";
import Phone from "../../../shared/img/Phone";
import Message from "../../../shared/img/Message";
import Office from "../../../shared/img/Office";
import OfficeUkraine from "../../../shared/img/OfficeUkraine";

const ContactCard = () => {
  return (
    <div className="tw-flex tw-flex-col desktop:tw-flex-row tw-gap-[20px]">
      <div className="desktop:tw-max-w-[760px] tw-w-full contact-card-border tw-p-[20px] tablet:tw-p-[40px]">
        <div className="">
          <div className="tw-flex tw-justify-between tw-mb-[30px]">
            <div className="tw-flex tw-flex-col tw-gap-[14px]">
              <span className="tw-text-[20px] tablet:tw-text-[30px] tw-max-w-[140px] tablet:tw-max-w-full tw-text-[#191919]">
                Corporate Headquarter
              </span>
              <span className="tw-text-[14px] tablet:tw-text-[18px] tw-text-[#8C8C8C]">Bid N Drive Inc</span>
            </div>
            <div className="">
              <Office />
            </div>
          </div>
          <div className="divide-card-contact tw-flex tw-flex-col tw-justify-around desktop:tw-justify-normal tablet:tw-flex-row tw-gap-[20px] tablet:tw-gap-2 desktop:tw-gap-[70px] tw-pt-[30px]">
            <div className="tw-flex tw-flex-row tablet:tw-flex-col tw-gap-[20px]">
              <span>
                <Locator />
              </span>
              <div className="tw-flex tw-flex-col tw-gap-[10px] tablet:tw-gap-[20px]">
                <span className="tw-text-[13px] tablet:tw-text-[16px]">Address</span>
                <span className="tw-text-[14px] tw-max-w-[170px] tablet:tw-text-[18px] tw-text-[#191919]">
                  2305 Fourth st Tucker, GA 30084
                </span>
              </div>
            </div>
            {/* ============================================= */}
            <div className="tw-flex tw-flex-row tablet:tw-flex-col tw-gap-[20px]">
              <span>
                <Phone />
              </span>
              <div className="tw-flex tw-flex-col tw-gap-[10px] tablet:tw-gap-[20px]">
                <span className="tw-text-[13px] tablet:tw-text-[16px]">Phones</span>
                <span className="tw-text-[16px] tablet:tw-text-[20px] tw-text-[#191919]">+1 (850) 319-34-67</span>
              </div>
            </div>
            {/* ================================================ */}
            <div className="tw-flex tw-flex-row tablet:tw-flex-col  tw-gap-[20px]">
              <span>
                <Message />
              </span>
              <div className="tw-flex tw-flex-col tw-gap-[10px] tablet:tw-gap-[20px]">
                <span className="tw-text-[13px] tablet:tw-text-[16px]">E-mail</span>
                <span className="tw-text-[#3E73CF] tw-text-[14px] tablet:tw-text-[18px]">info@auto4export.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================================================================================================================ */}
      <div className="desktop:tw-max-w-[760px] tw-w-full contact-card-border tw-p-[20px] tablet:tw-p-[40px]">
        <div className="">
          <div className="tw-flex tw-justify-between tw-mb-[30px]">
            <div className="tw-flex tw-flex-col tw-gap-[14px]">
              <span className="tw-text-[20px] tw-max-w-[140px] tablet:tw-max-w-full tablet:tw-text-[30px] tw-text-[#191919]">
                Representative in Ukraine
              </span>
              <span className="tw-text-[14px] tablet:tw-text-[18px] tw-text-[#8C8C8C]">PRINCE AUTO</span>
            </div>
            <div className="">
              <OfficeUkraine />
            </div>
          </div>
          <div className="divide-card-contact tw-flex tw-flex-col tw-justify-around desktop:tw-justify-normal tablet:tw-flex-row tw-gap-[20px] tablet:tw-gap-[70px] tw-pt-[30px]">
            <div className="tw-flex tw-flex-row tablet:tw-flex-col tw-gap-[20px]">
              <span>
                <Locator />
              </span>
              <div className="tw-flex tw-flex-col tw-gap-[10px] tablet:tw-gap-[20px]">
                <span className="tw-text-[13px] tablet:tw-text-[16px]">Address</span>
                <span className="tw-text-[14px] tw-max-w-[170px] tablet:tw-text-[18px] tw-text-[#191919]">
                  52005, Nizhnednepro-vskaia
                </span>
              </div>
            </div>
            {/* ============================================= */}
            <div className="tw-flex tw-flex-row tablet:tw-flex-col tw-gap-[20px]">
              <span>
                <Phone />
              </span>
              <div className="tw-flex tw-flex-col tw-gap-[10px] tablet:tw-gap-[20px]">
                <span className="tw-text-[13px] tablet:tw-text-[16px]">Phones</span>
                <span className="tw-text-[16px] tablet:tw-text-[20px] tw-text-[#191919]">+38 (056) 378-80-07</span>
              </div>
            </div>
            {/* ================================================ */}
            <div className="tw-flex tw-flex-row tablet:tw-flex-col  tw-gap-[20px]">
              <span>
                <Phone />
              </span>
              <div className="tw-flex tw-flex-col tw-gap-[10px] tablet:tw-gap-[20px]">
                <span className="tw-text-[13px] tablet:tw-text-[16px]">Telephone/fax</span>
                <span className="tw-text-[16px] tablet:tw-text-[20px] tw-text-[#191919]">+38 (096) 977-77-67</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
