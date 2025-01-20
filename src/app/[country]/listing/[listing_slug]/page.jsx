import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./car.scss";

import HeroCar from "./widgets/HeroCar";
import HowItWorks from "./widgets/HowItWorks";
import { NearestLots } from "@/containers/home";
import { getListingBySlug } from "@/actions/listings";
import { getCurrentUser } from "@/actions/users";

const lots = [
  {
    picture: "https://avatars.mds.yandex.net/i?id=8b347a0cf8e22b9a716c85399addeb63dcad1d2b-11490366-images-thumbs&n=13",
    slug: "",
    name: "Chevrolet",
    title: "2013 Chevrolet Impala Ls 3.6L",
    avgPrice: "2,850",
    currentBid: "2,850",
  },
  {
    picture: "https://avatars.mds.yandex.net/i?id=8b347a0cf8e22b9a716c85399addeb63dcad1d2b-11490366-images-thumbs&n=13",
    slug: "",
    name: "Chevrolet",
    title: "2013 Chevrolet Impala Ls 3.6L",
    avgPrice: "2,850",
    avgPrice: "$2,850",
  },
  {
    picture: "https://avatars.mds.yandex.net/i?id=8b347a0cf8e22b9a716c85399addeb63dcad1d2b-11490366-images-thumbs&n=13",
    slug: "",
    name: "Chevrolet",
    title: "2013 Chevrolet Impala Ls 3.6L",
    avgPrice: "2,850",
    currentBid: "2,850",
  },
  {
    picture: "https://avatars.mds.yandex.net/i?id=8b347a0cf8e22b9a716c85399addeb63dcad1d2b-11490366-images-thumbs&n=13",
    slug: "",
    name: "Chevrolet",
    title: "2013 Chevrolet Impala Ls 3.6L",
    avgPrice: "2,850",
    currentBid: "2,850",
  },
  {
    picture: "https://avatars.mds.yandex.net/i?id=8b347a0cf8e22b9a716c85399addeb63dcad1d2b-11490366-images-thumbs&n=13",
    slug: "",
    name: "Chevrolet",
    title: "2013 Chevrolet Impala Ls 3.6L",
    avgPrice: "2,850",
    currentBid: "2,850",
  },
];

const page = async ({ params }) => {
  const slug = params?.listing_slug;

  const listing = await getListingBySlug(slug);
  console.log(listing);
  const currentUser = await getCurrentUser();

  const city = listing?.city;
  const category = listing?.categories?.[0];

  return (
    <>
      <div className="tw-w-full tw-mb-[58px]">
        {listing && <HeroCar listing={listing}/>}
        <hr />
      </div>
      <div className="tw-w-full tw-bg-[#F9F9F9] tw-h-[458px] tw-hidden desktop:tw-block">
        <HowItWorks />
      </div>
      <div className="tw-py-[10px]">
        <hr className="tw-my-[21px]" />
        <NearestLots title={"Similar Vehicles"} lots={lots} />;
      </div>
    </>
  );
};

export default page;
