import React from 'react'
import { redirect } from 'next/navigation'
import PageBanner from '@/components/Common/PageBanner'
import { getCurrentUser } from '@/actions/users'

import { getListings } from '@/actions/listings'
import LeftSidebar from '@/components/Dashboard/LeftSidebar'
import { ListingAdminList } from '@/components/listing'
import { ROUTER } from '@/app/router'

export const dynamic = 'force-dynamic'

const page = async ({ searchParams }) => {
  const page = parseInt(searchParams?.page) || 1

  const currentUser = await getCurrentUser()
  const { listings, results, pagination } = await getListings({
    page,
    take: 10,
  })

  const isAdmin = currentUser?.role === 'ADMIN'
  // if (!isAdmin) {
  //   redirect('/')
  // }
  return (
    <>
      <PageBanner pageTitle="All listings" />
      <div className="container tw-py-10">
        <div className="tw-flex tw-flex-col md:tw-flex-row tw-gap-6">
          <div className="md:tw-basis-4/12">
            <LeftSidebar />
          </div>
          <div className="md:tw-basis-8/12 tw-w-full">
            <ListingAdminList
              data={
                listings?.map((listing) => ({
                  ...listing,
                  href: listing?.slug
                    ? `${ROUTER.LISTING}/${listing.slug}`
                    : '#',
                  visible: !!listing?.published,
                })) || []
              }
              {...{ results, pagination }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default page
