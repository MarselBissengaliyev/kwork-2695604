"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/how-work.scss";
import { Pagination, Navigation } from "swiper";
import HowItWorksCard from "@/app/[country]/listing/[listing_slug]/entities/HowItWorksCard";

import User from "../../../shared/img/User";
import Petition from "../../../shared/img/Petition";
import Protection from "../../../shared/img/Protection";
import Discount from "../../../shared/img/Discount";
import Shipping from "../../../shared/img/Shipping";

const HowItWorks = () => {
  const [activeSlide, setActiveSlide] = useState(0); // Состояние для активного слайда

  // Обработчик для обновления активного слайда
  const handleSlideChange = swiper => {
    setActiveSlide(swiper.activeIndex);
  };

  const data = [
    {
      icon: <User />,
      text: "Register on our website",
    },
    {
      icon: <Petition />,
      text: "Sign the contract and make a deposit",
    },
    {
      icon: <Protection />,
      text: "Find your car at the auction",
    },
    {
      icon: <Discount />,
      text: "Bidding at auction",
    },
    {
      icon: <Shipping />,
      text: "Delivery to your home",
    },
    {},
  ];

  return (
    <div className="tw-container tw-py-[70px] how-it-works">
      <h2 className="text-title tw-font-semibold tw-mb-[32px]">How it Works</h2>

      <div className="step-work">
        <Swiper
          modules={[Navigation]}
          pagination={{ clickable: true }}
          touchEventsTarget="container"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: data.length,
              spaceBetween: 30,
              navigation: true,
            },
          }}
          touchRatio={1} // Включает поддержку жестов
          onSlideChange={handleSlideChange} // Отслеживаем смену слайда
        >
          {data.map((item, idx) => (
            <SwiperSlide key={idx}>
              {idx !== 5 ? (
                <HowItWorksCard icon={item.icon} text={item.text} step={idx + 1} />
              ) : (
                <div className="enjoy-step"></div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Используем activeSlide для управления стилем линии */}
        <div className="tw-mt-[26px] tw-ml-[10px]">
          <div
            className="line-work"
            style={{ transform: `translateX(-${(activeSlide * 100) / data.length}%)` }} // Перемещаем линию в зависимости от слайда
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
