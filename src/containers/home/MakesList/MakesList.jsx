import React from "react";
import Link from "next/link";
import css from "./MakesList.module.scss";
import ListItem from "@/components/ListItem";

export const MakesList = ({ makes }) => {
  const chunks = [];
  const chunkSize = 10;

  // Разделяем список на массив массивов по 10 элементов
  for (let i = 0; i < makes.length; i += chunkSize) {
    chunks.push(makes.slice(i, i + chunkSize));
  }

  return (
    <div className={css.section}>
      <div className={css.container + " tw-container"}>
        <div className={css.head}>
          <h2 className={css.title}>Search Vehicles by</h2>
          <Link href="/listings" className={css.link + " tw-text-blue-500 hover:tw-underline"}>
            <span>See All</span>
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
        <ul className={css.list}>
          {chunks.slice(0, 4).map((chunk, index) => (
            <li key={index}>
              <ul className="inner-list">
                {chunk.map((make, idx) => (
                  <ListItem key={idx} label={make.name} value={make.lotCount} />
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
