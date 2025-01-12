import React from 'react'
import { getListings } from '@/actions/listings'
import { getCityBySlug } from '@/actions/cities'
import { getCategoryBySlug } from '@/actions/categories'

import { ROUTER } from '@/app/router'
import { PageHeader } from '@/components/page'
import { Listings } from '@/components/listing'

import { getCurrentUser } from '@/actions/users'

export const dynamic = 'force-dynamic'

export const generateMetadata = async ({ params }) => {
  const slugs = {
    city: params?.city_slug?.toLowerCase(),
    category: params?.category_slug?.toLowerCase(),
  }

  const category = slugs.category
    ? await getCategoryBySlug(
        slugs.category,
        slugs.city ? { city: slugs.city } : undefined
      )
    : null

  return {
    title: category?.seo_title,
    description: category?.seo_description,
  }
}

const page = async ({ params, searchParams }) => {
  const slugs = {
    city: params?.city_slug?.toLowerCase(),
    category: params?.category_slug?.toLowerCase(),
  }

  const page = parseInt(searchParams?.page) || 1

  const city = slugs.city ? await getCityBySlug(slugs.city) : null

  const category = slugs.category
    ? await getCategoryBySlug(
        slugs.category,
        city ? { city: city.slug } : undefined
      )
    : null

  const { listings, pagination, results } = category
    ? await getListings({
        city: slugs.city,
        category: slugs.category,
        page,
      })
    : []

  const currentUser = await getCurrentUser()

  return (
    <>
      <PageHeader
        title={`${category?.name} in ${city?.name}`}
        breadcrumbs={[
          { href: ROUTER.HOME, label: 'Home' },
          {
            href: city ? `${ROUTER.CITY}/${city?.slug}` : '#',
            label: city ? city?.name : '',
          },
          {
            href: category ? `${ROUTER.CATEGORIES}/${category?.slug}` : '#',
            label: category ? category?.name : '',
          },
        ]}
      />
      <Listings
        currentUser={currentUser}
        listings={
          listings?.map((listing) => ({
            ...listing,
            href: listing?.slug ? `${ROUTER.LISTING}/${listing?.slug}` : '#',
          })) || []
        }
        results={results}
        pagination={pagination}
      />
    </>
  )
}

export default page
