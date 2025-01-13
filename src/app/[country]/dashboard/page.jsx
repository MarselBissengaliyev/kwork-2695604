import React from 'react'
import { redirect } from 'next/navigation'
import PageBanner from '@/components/Common/PageBanner'
import { getCurrentUser } from '@/actions/users'
import DashboardStats from '@/components/Dashboard/DashboardStats'
import LeftSidebar from '@/components/Dashboard/LeftSidebar'

import { getDataBriefStats } from '@/actions/stats'
import PageDirect from '@/components/Common/PageDirect'
import ButtonMain from '@/components/button/ButtonMain'

const page = async () => {
  const { users, listings, blogPosts, reviews } = await getDataBriefStats()

  const currentUser = await getCurrentUser()
  const isAdmin = currentUser?.role === 'ADMIN'
  if (!isAdmin) {
    redirect('/')
  }
  return (
    <>
      <PageDirect pageTitle="Dashboard" />

      <ButtonMain color='green' variant='solid'>Hello</ButtonMain>
      <div className="ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <LeftSidebar />
            </div>

            <div className="col-lg-8">
              <DashboardStats
                users={users}
                listings={listings}
                blogPosts={blogPosts}
                reviews={reviews}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
