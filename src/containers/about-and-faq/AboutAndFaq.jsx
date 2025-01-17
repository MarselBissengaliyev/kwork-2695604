import React from "react";
import css from "./AboutAndFaq.module.scss";

const AboutAndFaq = () => {
  return (
    <div className={css.section}>
      <div className={css.container + " tw-container"}>
        <div className={css.about}>
          <h2>About Auto4Export</h2>
          <p>
            Auto4Export offers thousands of vehicles for sale online for export directly from any wholesale USA Auto
            Auction: new, used, salvage cars, motorcycles, trucks, boats, jet skis, ATV's, and construction & industrial
            equipments. We have been a licensed used car dealer since 2009, thousands of vehicles sold and a lot of
            satisfied customers from all over the world: Africa, Middle-East, Europe.. etc We are your reliable partners
            who offers the full service in car buying from the USA. We offer help in searching, bidding, purchasing,
            domestic and international transportation, and also assist in clearance documents.
          </p>
          <a href="/about">
            <span>Read more</span> <i class="ri-arrow-down-fill"></i>
          </a>
        </div>
        <div className={css.faq}>Read more</div>
      </div>
    </div>
  );
};

export default AboutAndFaq;
