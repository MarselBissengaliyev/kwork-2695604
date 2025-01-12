import React from 'react'

import { getListings } from '@/actions/listings'
import { getCurrentUser } from '@/actions/users'
import { getCategoryBySlug } from '@/actions/categories'

import { Listings } from '@/components/listing'
import { PageHeader } from '@/components/page'

import { ROUTER } from '@/app/router'

export const dynamic = 'force-dynamic'

export const generateMetadata = async ({ params }) => {
  const slug = params?.category_slug?.toLowerCase()

  const category = slug ? await getCategoryBySlug(slug).catch(() => null) : null

  return {
    title: category?.seo_title,
    description: category?.seo_description,
  }
}

const page = async ({ params, searchParams }) => {
  const slugs = {
    country: params?.country?.toLowerCase(),
    category: params?.category_slug?.toLowerCase(),
  }

  const page = parseInt(searchParams?.page) || 1

  const category = await getCategoryBySlug(slugs.category)
  const { listings, results, pagination } = category
    ? await getListings({
        category: slugs.category,
        published: true,
        page,
      })
    : []
  const currentUser = await getCurrentUser()

  return (
    <>
      <PageHeader
        title={category ? category?.name : ''}
        breadcrumbs={[
          { href: ROUTER.HOME, label: 'Home' },
          { href: ROUTER.CATEGORIES, label: 'Categories' },
          { label: category ? category?.name : '' },
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
