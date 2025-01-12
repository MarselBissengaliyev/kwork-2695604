import { redirect } from 'next/navigation'
import PageBanner from '@/components/Common/PageBanner'
import { getCurrentUser } from '@/actions/users'

import LeftSidebar from '@/components/Dashboard/LeftSidebar'

import { ReviewList } from '@/components/review'
import { getReviews } from '@/actions/reviews'
import { Pagination } from '@/components/pagination'

const page = async ({ searchParams }) => {
  const page = parseInt(searchParams?.page) || 1

  const { data, results, pagination } = await getReviews({
    page,
    take: 10,
  })
  const currentUser = await getCurrentUser()

  const isAdmin = currentUser?.role === 'ADMIN'
  if (!isAdmin) {
    redirect('/')
  }
  return (
    <>
      <PageBanner pageTitle="Reviews" />
      <div className="container tw-flex tw-flex-col tw-gap-10 tw-py-10">
        <div className="row">
          <div className="col-lg-4">
            <LeftSidebar />
          </div>
          <div className="col-lg-8 tw-flex tw-flex-col tw-gap-10">
            <ReviewList reviews={data} />
            {pagination?.pages > 1 && <Pagination {...pagination} />}
          </div>
        </div>
      </div>
    </>
  )
}

export default page
