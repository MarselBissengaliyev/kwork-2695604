import React from 'react'
import { redirect } from 'next/navigation'
import PageDirect from '@/components/Common/PageDirect'
import { getCurrentUser } from '@/actions/users'
import DashboardStats from '@/components/Dashboard/DashboardStats'
import LeftSidebar from '@/components/Dashboard/LeftSidebar'

import { getDataBriefStats } from '@/actions/stats'
import ButtonMain from '@/components/button/ButtonMain'
import { DashBoardCards } from './entities/dashboardCards'
import { DashboardMoneyCard } from './entities/DashboardMoneyCard'

const page = async () => {
  // const { users, listings, blogPosts, reviews } = await getDataBriefStats()

  const mockUsers = [
    {
      id: 1,
      email: "user1@example.com",
      password: "hashed_password_1",
      name: "John Doe",
      email_verified: false,
      image: "https://example.com/images/user1.png",
      role: "USER",
      profile: {
        bio: "Loves auctions and bidding.",
        phone: "+1234567890",
      },
      listings: [
        { id: 101, title: "Antique Vase", price: 200 },
        { id: 102, title: "Vintage Watch", price: 500 },
      ],
      wonLots: [
        { id: 201, title: "Rare Book", price: 300 },
      ],
      bids: [
        { id: 301, amount: 100, listingId: 101 },
        { id: 302, amount: 150, listingId: 102 },
      ],
      favourites: [
        { id: 401, listingId: 103, title: "Modern Painting" },
      ],
      reviews: [
        { id: 501, rating: 5, comment: "Great experience!" },
      ],
      blogPosts: [
        { id: 601, title: "My Bidding Journey", content: "Lorem ipsum dolor sit amet..." },
      ],
      transactions: [
        { id: 701, amount: 100, status: "Completed" },
        { id: 702, amount: 150, status: "Pending" },
      ],
      created_at: new Date("2023-01-01T12:00:00Z"),
      updated_at: new Date(),
    },
    {
      id: 2,
      email: "user2@example.com",
      password: "hashed_password_2",
      name: "Jane Smith",
      email_verified: true,
      image: "https://example.com/images/user2.png",
      role: "ADMIN",
      profile: {
        bio: "Administrator of the platform.",
        phone: "+9876543210",
      },
      listings: [],
      wonLots: [],
      bids: [],
      favourites: [],
      reviews: [],
      blogPosts: [],
      transactions: [],
      created_at: new Date("2023-02-01T15:00:00Z"),
      updated_at: new Date(),
    },
  ];
  

  const currentUser = await getCurrentUser()
  const isAdmin = currentUser?.role === 'ADMIN'
  // if (!isAdmin) {
  //   redirect('/')
  // }
  return (
    <>
      <PageDirect pageTitle={"Dashboard"} className={'tw-justify-between tw-gap-5'}>
        <div className='tw-flex tw-gap-10'>
          <div className='tw-flex tw-gap-2 '>

            <ButtonMain variant='outlined' text={"Dashboard"}/>
            <ButtonMain color='grey' variant='outlined' text="My Bids" number={8}/>
            <ButtonMain text="Transactions" color="grey" variant='outlined' number={4}/>
            <ButtonMain color='grey' number={4} variant='outlined' text="Watchlist"/>
          </div>
          <div className='tw-flex tw-gap-2'>
            <ButtonMain color='grey' variant='outlined' text="Request refund"/>
            <ButtonMain color='grey' variant='outlined' text="Edit Profile" icon="/images/dashboard/icons/editing.png"/>
          </div>
        </div>
      </PageDirect>
      <div className="">
        <div className="tw-container">

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
          <div className='tw-flex tw-gap-[20px] md:tw-grid md:tw-grid-cols-2'>
            <DashBoardCards />
            <DashBoardCards />
            <DashBoardCards />
        </div>
        </div>
          <div className=' tw-bg-[#F9F9F9] tw-mt-[50px] tw-py-[70px]'>
            <div className='tw-container tw-flex tw-gap-[20px]'>
              <DashboardMoneyCard/>
              <DashboardMoneyCard/>
              <DashboardMoneyCard/>
              <DashboardMoneyCard/>
            </div>
          </div>
      </div>
    </>
  )
}

export default page
