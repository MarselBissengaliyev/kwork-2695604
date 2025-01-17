"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import css from "./NearestLots.module.scss";

export const NearestLots = ({ lots, title }) => {
  return (
    <div className={css.section + " tw-container tw-py-10"}>
      <div className={css.container + " tw-relative"}>
        <div className={css.head + " tw-flex tw-justify-between tw-items-center tw-mb-6"}>
          <h2 className={css.title + " tw-text-xl tw-font-bold"}>{title}</h2>
          <Link href="/listings" className={css.link + " tw-text-blue-500 hover:tw-underline"}>
            <span>See All</span>
            <i class="ri-arrow-right-line"></i>
          </Link>
        </div>

        {/* Swiper for smaller screens */}
        <div className="tw-block lg:tw-hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{
              768: { slidesPerView: 2.5 },
            }}
          >
            {lots.map(lot => (
              <SwiperSlide key={lot.id}>
                <Link href={`/listings/${lot.slug}`} className={css.item}>
                  <img src={lot.picture} alt={lot.name} className={css.img} />
                  <div className={css.content}>
                    <h3 className={css.title}>{lot.title}</h3>
                    <div className={css.footer}>
                      <p className={css.avgPrice}>
                        <span>Avg. Price</span> <b>${lot.avgPrice}</b>
                      </p>
                      <p className={css.currentBid}>
                        <span>Current Bid</span> <b>${lot.currentBid}</b>
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Static grid for larger screens */}
        <div className="tw-hidden lg:tw-block">
          <div className={css.row}>
            {lots.map(lot => (
              <Link key={lot.id} href={`/listings/${lot.slug}`} className={css.item}>
                <img src={lot.picture} alt={lot.name} className={css.img} />
                <div className={css.content}>
                  <h3 className={css.title}>{lot.title}</h3>
                  <div className={css.footer}>
                    <p className={css.avgPrice}>
                      <span>Avg. Price</span> <b>${lot.avgPrice}</b>
                    </p>
                    <p className={css.currentBid}>
                      <span>Current Bid</span> <b>${lot.currentBid}</b>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
