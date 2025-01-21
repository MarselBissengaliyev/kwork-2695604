"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const QuickFilters = () => {
  const items = [
    { text: "Pure Sale", active: false },
    { text: "Only With photo", active: true },
    { text: "Clean title", active: false },
    { text: "Run & Drive", active: false },
    { text: "Auction Soon", active: false },
    { text: "Bn dsdf price $2000", active: false },
  ];

  return (
    <div style={{ maxWidth: "400px" }}>
      <Swiper spaceBetween={10} slidesPerView={"auto"} navigation={true} className="custom-swiper">
        {items.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              style={{
                padding: "8px 16px",
                borderRadius: "20px",
                border: "1px solid #ccc",
                background: item.active ? "#E8F0FE" : "#fff",
                color: item.active ? "#4285F4" : "#333",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {item.text}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default QuickFilters;
