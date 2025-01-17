"use client";

import React from "react";
import css from "./Reviews.module.scss";
import ReactStars from "react-rating-stars-component";
import QuoteIcon from "./icons/QuoteIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Navigation, Pagination } from "swiper";

const Reviews = () => {
  const reviews = [
    {
      avatar: "/images/authors/author-1.jpg",
      name: "Balveer Bhadiar",
      location: "Ukraine",
      rating: 4,
      text: `First things first, the customer support was outstanding. I would like to thank the whole team for such professionalism! Initially I was a bit skeptical about using them, but they have proven to be very safe. I have bought several vehicles through a better bid and I could not be happier with how efficient everything was. I recommend them to anyone looking for a great deal.`,
    },
    {
      avatar: "/images/authors/author-2.jpg",
      name: "Emlen Beaver",
      location: "England",
      rating: 5,
      text: `Thanks for filling the void for rebuilders! I got my car basically as a steal, without any special licenses. Your site was so easy to navigate and use, and not to mention your customer service was fantastic. Incredibly helpful and responsive. I’ve tried another similar service and I like you guys the best!`,
    },
    {
      avatar: "/images/authors/author-3.jpg",
      name: "Sukhnam Chander",
      location: "Germany",
      rating: 5,
      text: `I’m a father of two and have another one on the way, so I’ve been looking for a family car in addition to the car we currently own as our family is growing. I was looking for something newer, more spacious, in my price range and something I could get fast. They have the option to filter so I was able to find exactly what I was looking for. `,
    },
    {
      avatar: "/images/authors/author-4.jpg",
      name: "Freddy Kauschke",
      location: "Denmark",
      rating: 4,
      text: "Hands down the best marketplace for used vehicles I’ve used so far. The site is easy to use, the bidding process is incredibly simple and it`s so exciting to be a part of a live auction, there’s nothing quite like it. The fact that you guys are official copart brokers was what initially attracted me. Now I have access to vehicles I normally couldn’t buy since I’m not a dealer.",
    },
  ];
  return (
    <div className={css.section}>
      <div className={css.container + " tw-container"}>
        <h2>Last Reviews</h2>
        <div className={css.cards}>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 4,
              },
            }}
          >
            {reviews.map((r, index) => (
              <SwiperSlide key={index}>
                <div className={css.card}>
                  <div className={css.head}>
                    <img src={r.avatar} alt="" />
                    <div className={css.content}>
                      <h4>{r.name}</h4>
                      <div className={css.footer}>
                        <span>{r.location}</span>
                        <ReactStars
                          classNames={css.rating}
                          edit={false}
                          value={r.rating}
                          count={5}
                          size={24}
                          activeColor="#ffd700"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={css.hr}>
                    <hr />
                    <QuoteIcon />
                  </div>
                  <div className={css.body}>{r.text}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
