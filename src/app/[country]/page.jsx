import { ROUTER } from "@/app/router";

import "@/app/styles/bootstrap.css";
import "@/app/styles/flaticon.css";
import "@/app/styles/remixicon.css";
import "@/app/styles/dark-mode.css";
import "@/app/styles/style.css";
import "@/app/styles/responsive.css";

import { getCurrentUser } from "@/actions/users";
import { getBlogPosts } from "@/actions/blog-posts";
import { getCategories } from "@/actions/categories";

import Banner from "@/containers/banner/Banner";
import Blog from "@/containers/Blog";
import Favour from "@/containers/Favour";

import Partner from "@/containers/Partner";
import { Subscribe } from "@/containers/Subscribe";
import Testimony from "@/containers/Testimony";
import WorkArea from "@/containers/WorkArea";

import { FeaturedListings } from "@/containers/listing";
import { getRegionConfiguration } from "@/actions/region-configurations";
import { FeaturedCategories, FeaturedLocations, NearestLots } from "@/containers/home";
import { getCities } from "@/actions/cities";
import { getMakesAndModels } from "@/actions/makes";
import { getNearestLots } from "@/actions/listings";

export const dynamic = "force-dynamic";
const limitParams = { limit: 6 };


export default async function Home({ params }) {
  const slugs = {
    country: params?.country,
  };

  const regionConfiguration = await getRegionConfiguration({
    country: slugs.country,
  }).catch(() => null);

  const currentUser = await getCurrentUser()
  const categories = slugs.country
    ? await getCategories({ country: slugs.country, sticky: true, take: 20 })
    : []
  const cities = slugs.country
    ? await getCities({ country: slugs.country, sticky: true, take: 6 })
    : []
  const { posts } = await getBlogPosts(limitParams)
  const makesAndModels = await getMakesAndModels(); // Получаем данные для марок и моделей
  const nearestLots = await getNearestLots(5); // Получение ближайших лотов

  return (
    <>
      <Banner
        makes={makesAndModels.makes}
        models={makesAndModels.models}
        country={slugs.country}
        categories={categories?.data?.map(category => ({
          ...category,
          href: [ROUTER.CATEGORIES, category?.slug].join("/"),
        }))}
      />
      <NearestLots lots={nearestLots} title={"Featured Vehicles"}/>
      <FeaturedListings currentUser={currentUser} />
      <FeaturedLocations
        locations={cities?.data?.map(city => ({
          ...city,
          href: [ROUTER.CITY, city?.slug].join("/"),
        }))}
      />
      <WorkArea />
      <Testimony />
      <Favour />
      <Partner />
      <Subscribe />
      <Blog blogPosts={posts} />
    </>
  )
}
