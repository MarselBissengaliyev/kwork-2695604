"use client";

import React, { useEffect } from "react";

import "../styles/faq-page.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import FaqBtn from "../../../shared/img/FaqBtn";

import AccordionFAQ from "@/app/[country]/listing/[listing_slug]/entities/AccordionFAQ";

const faq = [
  {
    question: "How do I start bidding?",
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
  {
    question: "How much does it cost to join?",
    answer: "",
  },
];

const FaqPage = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min"); // Подключаем JS Bootstrap
  }, []);
  return (
    <section className="tw-container tw-mt-[50px] tw-mb-[70px]">
      <div className="tw-flex tw-flex-col desktop:tw-flex-row tw-justify-center tw-mx-[20px] tablet:tw-mx-[30px] desktop:tw-mx-0 desktop:tw-justify-between tw-items-end tw-gap-[50px] ">
        <div className="tw-max-w-[1150px] tw-w-full">
          <span>Крошки</span>
          {/* ============= hero =============== */}
          <div className="tw-flex tw-flex-col tw-mt-[20px] tablet:tw-flex-row tw-justify-between tablet:tw-items-center tw-mb-[20px] tablet:tw-mb-[40px]">
            <div className="tw-mb-[20px] tablet:tw-mb-0">
              <h2 className="tw-text-[26px] tablet:tw-text-[46px]">Faq</h2>
            </div>
            <div className="tw-max-w-full tablet:tw-max-w-[400px] desktop:tw-max-w-[630px] tw-w-full">
              <div className="search-about tw-w-full">
                <input placeholder="Quick search" className="tw-w-full" type="text" />
                <button>
                  <i className="ri-search-line"></i>
                </button>
              </div>
            </div>
          </div>
          {/* =============== Accordion ======================= */}
          <div className="faq-border-about tw-p-[10px] tablet:tw-p-[30px]">
            {faq.map((item, idx) => {
              const id = `collapse-${idx}`; // Уникальный идентификатор
              return <AccordionFAQ key={idx} question={item.question} answer={item.answer} id={id} />;
            })}
          </div>
        </div>
        {/* ============= any question ======================= */}
        <div className="desktop:tw-max-w-[340px]   tw-w-full tw-flex tw-flex-col">
          <div className="tw-flex tw-flex-col tablet:tw-flex-row desktop:tw-flex-col tablet:tw-items-center tw-justify-between faq-question desktop:tw-gap-[150px] tw-h-[162px] tablet:tw-h-[190px] desktop:tw-h-full  tw-rounded-[10px]  tw-w-full tw-p-[20px] tablet:tw-px-12 tablet:tw-pb-[70px] tablet:tw-pt-[60px] ">
            <p className="tw-text-[#fff] tw-text-[20px] tablet:tw-text-[30px] tw-max-w-[150px] tablet:tw-max-w-full desktop:tw-max-w-[150px] tw-leading-[23px] tablet:tw-leading-[35px]">
              Do You Have Any Ques?
            </p>
            <button className="tw-w-full tw-flex tw-gap-[10px] tw-max-w-[133px] tablet:tw-max-w-[181px] tw-justify-center tw-items-center tw-py-[14px] tw-text-[14px] tablet:tw-text-[16px] tw-font-semibold tw-text-[#fff] tw-bg-[#007bff] tw-rounded-[24px] tw-transition-[background-color] hover:tw-bg-[#0069d9]">
              Ask a Question <FaqBtn />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
