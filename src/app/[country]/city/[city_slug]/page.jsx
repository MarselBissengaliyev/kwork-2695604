import React from 'react'

import { getCurrentUser } from '@/actions/users'
import { PageHeader } from '@/components/page'
import { ROUTER } from '@/app/router'
import { getCityBySlug } from '@/actions/cities'
import { getCategories, getCityCategories } from '@/actions/categories'
import { Categories } from '@/components/category'
import { getRegionConfiguration } from '@/actions/region-configurations'

export const dynamic = 'force-dynamic'

export const generateMetadata = async ({ params }) => {
  const slugs = {
    country: params?.country?.toLowerCase(),
    city: params?.city_slug?.toLowerCase(),
  }

  let metadata = {}

  const config = slugs.country
    ? await getRegionConfiguration({ country: slugs.country }).catch(() => null)
    : null
  const city = slugs.city
    ? await getCityBySlug(slugs.city).catch(() => null)
    : null

  if (city) {
    metadata.title = city.seo_title
    metadata.description = city.seo_description
    metadata.canonical = `https://${config.domain}/city/${slugs.city}`
  }

  return {
    ...metadata,
    alternates: {
      canonical: metadata.canonical,
    },
  }
}

const page = async ({ params, searchParams }) => {
  const slugs = {
    country: params?.country?.toLowerCase(),
    city: params?.city_slug?.toLowerCase(),
  }

  const page = parseInt(searchParams?.page) || 1

  const city = await getCityBySlug(slugs.city)
  const categories = await getCityCategories({
    city: slugs.city,
    take: 20,
    page,
  })
  const currentUser = await getCurrentUser()

  return (
    <>
      <PageHeader
        title={city ? city?.name : ''}
        breadcrumbs={[
          { href: ROUTER.HOME, label: 'Home' },
          { href: ROUTER.CITIES, label: 'Cities' },
          { label: city ? city?.name : '' },
        ]}
      />
      <Categories
        currentUser={currentUser}
        data={
          categories?.data?.map((category) => ({
            ...category,
            href: category?.slug
              ? `${ROUTER.CITY}/${slugs.city}/${category?.slug}`
              : '#',
          })) || []
        }
        results={categories?.results}
        pagination={categories?.pagination}
      />
    </>
  )
}

export default page
