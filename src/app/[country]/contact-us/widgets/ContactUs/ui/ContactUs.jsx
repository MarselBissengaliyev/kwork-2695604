import React from "react";

import ContactCard from "../../../entities/ContactCard";
import SubmitRequest from "../../../entities/SubmitRequest";

const ContactUs = () => {
  return (
    <>
      <section className="tw-container">
        <div className="tw-mt-[50px] tw-mx-[20px] tablet:tw-mx-[30px] desktop:tw-mx-0">
          <div className="tw-mb-[40px]">
            <div className="tw-mb-[20px]">Крошки</div>
            <div className="">
              <h2 className="tw-text-[24px] tablet:tw-text-[46px]">Contact Us</h2>
            </div>
          </div>
          <div className="tw-mb-[70px]">
            <ContactCard />
          </div>
        </div>
      </section>
      <SubmitRequest />
    </>
  );
};

export default ContactUs;
