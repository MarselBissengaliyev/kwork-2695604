"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper";
import { ROUTER } from "@/app/router";
import css from "./NearestLots.module.scss";

export const NearestLots = ({ lots }) => {
  console.log(lots);
  const carouselRef = useRef(null);
  const cardWidth = 250; // Ширина одной карточки

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  return (
    <div className={css.section + " tw-container tw-py-10"}>
      <div className={css.container + " tw-relative"}>
        {/* Кнопка влево */}
        <button
          onClick={scrollLeft}
          className={css.left + " tw-absolute tw-left-0 tw-top-1/2 tw-transform tw-translate-y-[-50%] tw-bg-black tw-text-white tw-p-2 tw-rounded-full tw-shadow-lg"}
        >
          &lt;
        </button>

        {/* Карусель */}
        <div ref={carouselRef} className={css.carousel + " tw-flex tw-overflow-x-auto tw-scrollbar-hide"}>
          {/* Карточки */}
          <div className={css.cards + " tw-container  tw-mx-auto tw-py-10"}>
            <div className={css.head + " tw-flex tw-justify-between tw-items-center tw-mb-6"}>
              <h2 className={css.title + " tw-text-xl tw-font-bold"}>Featured Vehicles</h2>
              <Link href="/listings" className={css.link + " tw-text-blue-500 hover:tw-underline"}>
                See All
              </Link>
            </div>
            <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
              {lots.map(lot => (
                <Link key={lot.id} href={`/listings/${lot.slug}`} className="tw-group">
                  <div className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-p-4">
                    {lot.picture && (
                      <Image
                        src={lot.picture}
                        alt={lot.name}
                        width={250}
                        height={150}
                        className="tw-w-full tw-h-40 tw-object-cover tw-rounded-lg"
                      />
                    )}
                    <h3 className="tw-text-lg tw-font-semibold tw-mt-4">{lot.name}</h3>
                    <p className="tw-text-gray-500 tw-mt-2">Средняя цена: ${lot.avgPrice}</p>
                    <p className="tw-text-gray-700 tw-mt-1">Текущая ставка: ${lot.currentBid}</p>
                    <p className="tw-text-gray-400 tw-text-sm tw-mt-2">
                      Аукцион: {new Date(lot.auction_at).toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Кнопка вправо */}
        <button
          onClick={scrollRight}
          className="tw-absolute tw-right-0 tw-top-1/2 tw-transform tw-translate-y-[-50%] tw-bg-black tw-text-white tw-p-2 tw-rounded-full tw-shadow-lg"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};
