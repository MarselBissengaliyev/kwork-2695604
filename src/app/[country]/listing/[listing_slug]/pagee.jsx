import React from 'react'

import { getListingBySlug } from '@/actions/listings'
import { getReviewByListingId } from '@/actions/reviews'
import { getCurrentUser } from '@/actions/users'

import { ListingDetail } from '@/components/listing'
import { PageBanner } from '@/components/page'
import { ROUTER } from '@/app/router'

const page = async ({ params }) => {
  const slug = params?.listing_slug

  const listing = await getListingBySlug(slug)
  const currentUser = await getCurrentUser()

  const city = listing?.city
  const category = listing?.categories?.[0]

  const reviews = listing
    ? await getReviewByListingId({ listingId: listing?.id })
    : []

  return (
    <>
      <PageBanner
        title={`${listing?.title}`}
        breadcrumbs={[
          { href: ROUTER.HOME, label: 'Home' },
          {
            href: city ? `${ROUTER.CITY}/${city?.slug}` : '#',
            label: city ? city?.name : '',
          },
          {
            href: category
              ? [`${ROUTER.CITY}/${city?.slug}`, `${category?.slug}`].join('/')
              : '#',
            label: category ? category?.name : '',
          },
          {
            label: listing?.title,
          },
        ]}
      />
      <ListingDetail
        currentUser={currentUser}
        listing={listing}
        reviews={reviews}
      />
    </>
  )
}

export default page
