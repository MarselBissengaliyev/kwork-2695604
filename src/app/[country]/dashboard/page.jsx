import React from 'react'
import { redirect } from 'next/navigation'
import PageDirect from '@/components/Common/PageDirect'
import { getCurrentUser } from '@/actions/users'
import DashboardStats from '@/components/Dashboard/DashboardStats'
import LeftSidebar from '@/components/Dashboard/LeftSidebar'

import { getDataBriefStats } from '@/actions/stats'
import ButtonMain from '@/components/button/ButtonMain'

const page = async () => {
  // const { users, listings, blogPosts, reviews } = await getDataBriefStats()

  const currentUser = await getCurrentUser()
  const isAdmin = currentUser?.role === 'ADMIN'
  // if (!isAdmin) {
  //   redirect('/')
  // }
  return (
    <>
      <PageDirect pageTitle={"Dashboard"} className={'tw-justify-between tw-gap-5'}>
        <div className='tw-flex tw-gap-10'>
          <div className='tw-flex tw-gap-2'>
            <ButtonMain variant='outlined' text={"Dashboard"}/>
            <ButtonMain color='grey' variant='outlined' text="My Bids" number={8}/>
            <ButtonMain text="Transactions" number={4}/>
            <ButtonMain color='grey' number={4} variant='outlined' text="Watchlist"/>
          </div>
          <div className='tw-flex'>
            <ButtonMain color='grey' variant='outlined' text="Request refund"/>
            <ButtonMain color='grey' variant='outlined' text="Edit Profile" icon="/images/dashboard/icons/editing.png"/>
          </div>
        </div>
      </PageDirect>
      {/* <ButtonMain  fullWidth={true} text={"hello"}/> */}
      {/* <ButtonMain color='green' variant='solid'>Hello</ButtonMain> */}
      <div className="ptb-100">
        <div className="container">

          {/* <div className="row">
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
          </div> */}
        </div>
      </div>
    </>
  )
}

export default page
