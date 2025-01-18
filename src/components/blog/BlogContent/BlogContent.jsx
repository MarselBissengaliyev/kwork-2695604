"use client";

import { Pagination } from "@/components/pagination";

import { BlogCard } from "../BlogCard";
import css from "./BlogContent.module.scss";
import ButtonMain from "@/components/button/ButtonMain";
import Link from "next/link";

export const BlogContent = ({ posts, results, pagination }) => {
  console.log(posts, results, pagination)
  return (
    <section className={css.section}>
      <div className={css.container + " tw-container"}>
        <div className={css.block}>
          <h2>
            911 GT3 with Manthey Kit <br /> Is Quicker at the 'Ring
          </h2>
        </div>
        <div className={css.articles}>
          <div className={css.article}>
            <img className={css.img} src="/images/blog/blog-1.jpg" alt="" />
            <div className={css.content}>
              <a href="#">
                <h4>NHTSA Looking into Ford Bronco Engine Failures</h4>
              </a>
              <p>
                Auto4Export offers thousands of vehicles for sale online for export directly from any wholesale USA Auto
                Auction: new, used, salvage cars, motorcycles, trucks, boats, jet skis, ATV's, and construction &
                industrial equipments. We have been a licensed used car dealer since 2009, thousands of vehicles sold
                and a lot of satisfied customers from all…
              </p>
              <div className={css.footer}>
                <div className={css.date}>
                  <i class="ri-calendar-line"></i>
                  <span>28 Jun 2022</span>
                </div>
                <a href="/about">
                  <span>Read More</span>
                  <i class="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
