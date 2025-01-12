import PageBanner from '@/components/Common/PageBanner'

import { getCurrentUser } from '@/actions/users'
import { getUserFavouriteListings } from '@/actions/listings'

import ListingCard from './ListingCard'

export const dynamic = 'force-dynamic'

const page = async () => {
  const favourites = await getUserFavouriteListings()
  const currentUser = await getCurrentUser()

  return (
    <>
      <PageBanner pageTitle="My Favourites" />
      <ListingCard currentUser={currentUser} favourites={favourites} />
    </>
  )
}

export default page
