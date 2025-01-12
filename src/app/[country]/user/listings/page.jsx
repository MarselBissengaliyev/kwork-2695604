import React from 'react'
import PageBanner from '@/components/Common/PageBanner'
import ListingCard from '@/components/Listings/MyListings/ListingCard'

import { getCurrentUser } from '@/actions/users'
import { getUserListings } from '@/actions/listings'

export const dynamic = 'force-dynamic'

const page = async () => {
  const listings = await getUserListings()
  const currentUser = await getCurrentUser()

  return (
    <>
      <PageBanner pageTitle="My Listings" />
      <ListingCard currentUser={currentUser} listings={listings} />
    </>
  )
}

export default page
