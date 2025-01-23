"use client";

import React, { useEffect } from "react";

import "../styles/faq-page.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import AccordionFAQ from "@/app/[country]/listing/[listing_slug]/entities/AccordionFAQ";

const FaqPage = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min"); // Подключаем JS Bootstrap
  }, []);
  return (
    <section className="tw-container">
      <div className="">
        {/* ============= hero =============== */}
        <div className="tw-flex">
          <div className="">
            <h2 className="tw-text-[26px] tablet:tw-text-[46px]">Faq</h2>
          </div>
          <div className="">
            <div className="search-about">
              <input placeholder="Quick search" type="text" />
              <button>
                <i className="ri-search-line"></i>
              </button>
            </div>
          </div>
        </div>
        {/* =============== Accordion ======================= */}
        <div className="">
          <AccordionFAQ id={1} question={"dsfsdf"} answer={"fdsfsdfsd"} />
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
