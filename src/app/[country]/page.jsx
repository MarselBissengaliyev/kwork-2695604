import { ROUTER } from "@/app/router";

import "@/app/styles/bootstrap.css";
import "@/app/styles/dark-mode.css";
import "@/app/styles/flaticon.css";
import "@/app/styles/remixicon.css";
import "@/app/styles/responsive.css";
import "@/app/styles/style.css";

import { getBlogPosts } from "@/actions/blog-posts";
import { getCategories } from "@/actions/categories";
import { getCurrentUser } from "@/actions/users";

import Advantages from "@/containers/home/advantages/Advantages";
import Banner from "@/containers/home/banner/Banner";

import { getCities } from "@/actions/cities";
import { getNearestLots } from "@/actions/listings";
import { getMakesAndModels, getMakesWithLotCount } from "@/actions/makes";
import { getRegionConfiguration } from "@/actions/region-configurations";
import HowItWorks from "@/app/[country]/car/widgets/HowItWorks";
import AboutAndFaq from "@/containers/home/about-and-faq/AboutAndFaq";
import Reviews from "@/containers/home/reviews/Reviews";
import { MakesList, NearestLots } from "@/containers/home";
import css from "./page.module.scss";
export const dynamic = "force-dynamic";
const limitParams = { limit: 6 };

export default async function Home({ params }) {
  const slugs = {
    country: params?.country,
  };

  const regionConfiguration = await getRegionConfiguration({
    country: slugs.country,
  }).catch(() => null);

  const currentUser = await getCurrentUser();
  const categories = slugs.country ? await getCategories({ country: slugs.country, sticky: true, take: 20 }) : [];
  const cities = slugs.country ? await getCities({ country: slugs.country, sticky: true, take: 6 }) : [];
  const { posts } = await getBlogPosts(limitParams);
  const makesAndModels = await getMakesAndModels(); // Получаем данные для марок и моделей
  const nearestLots = await getNearestLots(5); // Получение ближайших лотов
  const makesWithCount = await getMakesWithLotCount();

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
      <NearestLots lots={nearestLots} title={"Featured Vehicles"} />
      <MakesList makes={makesWithCount.data} />
      <div className={css.howItWorks}>
        <HowItWorks />
      </div>
      <Advantages />
      <AboutAndFaq />
      <Reviews/>
    </>
  );
}
