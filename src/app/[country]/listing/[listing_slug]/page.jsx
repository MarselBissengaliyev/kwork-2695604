import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { notFound } from 'next/navigation'; // Next.js 13+ (app directory)
import "./car.scss";

import HeroCar from "./widgets/HeroCar";
import HowItWorks from "./widgets/HowItWorks";
import { NearestLots } from "@/containers/home";
import { getListingBySlug, getOtherLotsAndSoldCars } from "@/actions/listings";
import { getCurrentUser } from "@/actions/users";

const page = async ({ params }) => {
  const slug = params?.listing_slug;

  try {
    const listing = await getListingBySlug(slug);
    const currentUser = await getCurrentUser();
    const otherCars = await getOtherLotsAndSoldCars(slug);

    // Если `listing` или `otherCars` не найдены, перенаправляем на 404
    if (!listing || !otherCars) {
      throw new Error("NOT_FOUND");
    }

    return (
      <>
        <div className="tw-w-full tw-mb-[58px]">
          {listing && <HeroCar currentUser={currentUser} listing={listing} />}
          <hr />
        </div>
        <div className="tw-w-full tw-bg-[#F9F9F9] tw-h-[458px] tw-hidden desktop:tw-block">
          <HowItWorks />
        </div>
        <div className="tw-py-[10px]">
          <hr className="tw-my-[21px]" />
          <NearestLots title={"Similar Vehicles"} lots={otherCars.activeListings} />
        </div>
      </>
    );
  } catch (error) {
    if (error.message === "NOT_FOUND") {
      notFound(); // Перенаправляем на страницу 404
    }

    console.error("Произошла ошибка:", error);
    return null; // Вы можете показать fallback-страницу, если ошибка другая
  }
};

export default page;
