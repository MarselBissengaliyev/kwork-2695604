"use client";

import React, { useEffect } from "react";
import css from "./AboutAndFaq.module.scss";
import AccordionFAQ from "@/app/[country]/car/entities/AccordionFAQ";

const AboutAndFaq = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min"); // Подключаем JS Bootstrap
  }, []);
  const faq = [
    {
      question: "Do I need a dealer’s license to buy from you?",
      answer: "",
    },
    {
      question: "How much does it cost to join?",
      answer: "It’s completely free! There is no cost to join with a Standard Membership.",
    },
    {
      question: "Where are your vehicles located?",
      answer: "",
    },
    {
      question: "How do I get started?  ",
      answer: "",
    },
    {
      question: "Do you offer shipping?",
      answer: "",
    },
  ];
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
            <span>Read more</span> <i className="ri-arrow-down-fill"></i>
          </a>
        </div>
        <div className={css.faq}>
          <h2>Popular Questions</h2>
          <div className={css.card}>
            {faq.map((item, idx) => {
              const id = `collapse-aaq-${idx}`; // Уникальный идентификатор
              return <AccordionFAQ key={idx} question={item.question} answer={item.answer} id={id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAndFaq;
