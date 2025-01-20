import React from 'react'
import { redirect } from 'next/navigation'
import PageDirect from '@/components/Common/PageDirect'
import { getCurrentUser } from '@/actions/users'
import "./page.scss"
import DashboardStats from '@/components/Dashboard/DashboardStats'
import LeftSidebar from '@/components/Dashboard/LeftSidebar'

import { getDataBriefStats } from '@/actions/stats'
import ButtonMain from '@/components/button/ButtonMain'
import { DashBoardCards } from './entities/dashboardCards'
import { DashboardMoneyCard } from './entities/DashboardMoneyCard'
import { Container } from '@/components/Container'

const page = async () => {
  // const { users, listings, blogPosts, reviews } = await getDataBriefStats()
  const mockUsers =
    {
      id: 1,
      email: "user1@example.com",
      password: "hashed_password_1",
      name: "John Doe",
      email_verified: false,
      image: "https://example.com/images/user1.png",
      role: "USER",
      balance:10000,
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
        { 
          "id": 301, 
          "amount": 100, 
          "lot_id": 101, 
          "user_id": 1, 
          "status": "CURRENT", 
          "created_at": "2025-01-17T12:00:00Z"
        },
        { 
          "id": 302, 
          "amount": 150, 
          "lot_id": 102, 
          "user_id": 2, 
          "status": "CURRENT", 
          "created_at": "2025-01-16T15:30:00Z"
        },
        { 
          "id": 303, 
          "amount": 120, 
          "lot_id": 103, 
          "user_id": 3, 
          "status": "WON", 
          "created_at": "2025-01-15T09:00:00Z"
        }
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
    };

    const biddingLimit = mockUsers.balance <= 1000 
  ? 10000 
  : mockUsers.balance <= 2500 
  ? 50000 
  : 200000;
  
  const usedSum = mockUsers.bids
  .filter(bid => bid.status === 'CURRENT')  // фильтруем по статусу "CURRENT"
  .reduce((sum, bid) => sum + bid.amount, 0);


  const wonBids = mockUsers.bids.filter(bid => bid.status === "WON");
  const wonBidsCount = wonBids.length;

  const currentBids = mockUsers.bids.filter(bid => bid.status === "CURRENT");
  const outbiddedBidsCount = currentBids.filter(bid => bid.Current_bid > bid.amount).length;

  const availableSum = biddingLimit - usedSum;

  const currentUser = await getCurrentUser()
  const isAdmin = currentUser?.role === 'ADMIN'
  // if (!isAdmin) {
  //   redirect('/')
  // }
  return (
    <>
      <PageDirect
  pageTitle={"Dashboard"}
  className={'tw-justify-between tw-gap-5 max-mindesk:tw-flex-col max-mindesk:tw-justify-start'}
>
  <div className='tw-flex tw-gap-10 tw-overflow-x-auto tw-w-full no-scrollbar max-mindesk:tw-gap-2'>
    <div className='tw-flex tw-gap-2'>
      <ButtonMain classNames={'tw-w-[170px] tw-flex-shrink-0'} variant='outlined' text={"Dashboard"}  />

      <a href="./myBids">
        <ButtonMain classNames={'tw-w-[170px] tw-flex-shrink-0'} color='grey' variant='outlined' text="My Bids"/>
      </a>
      
      <a href='./transactions'>
        <ButtonMain classNames={'tw-w-[170px] tw-flex-shrink-0'} text="Transactions" color="grey" variant='outlined' />
      </a>

      <a href="./Watchlist">
        <ButtonMain classNames={'tw-w-[170px] tw-flex-shrink-0'} color='grey' variant='outlined' text="Watchlist" />
      </a>
    </div>
    <div className='tw-flex tw-gap-2'>
      <ButtonMain classNames={'tw-w-[170px] tw-flex-shrink-0'} color='grey' variant='outlined' text="Request refund" />
        <a href="./EditSettings">
          <ButtonMain classNames={'tw-w-[170px] tw-flex-shrink-0 tw-flex tw-gap-2'} color='grey' variant='outlined' text="Edit Profile" icon="/images/dashboard/icons/editing.png" />
        </a>
    </div>
  </div>
</PageDirect>

      <div className="">
        <Container>

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
          <div className='tw-grid tw-grid-cols-5 tw-gap-[20px] max-laptop:tw-grid-cols-2 max-tablet:tw-grid-cols-1'>
            <DashBoardCards number={outbiddedBidsCount} icon="/images/dashboard/icons/bidding.png" text="Outbidded Bids" linkText='Please, raise your bids' />
            <DashBoardCards number={wonBidsCount} text='Wons Bids' icon="/images/dashboard/icons/carok.png" linkText='Learn more'/>
            {/* <DashBoardCards number={"1"} text='Unpaid Invoice' icon="/images/dashboard/icons/reciept.png" linkText='Please, pay it' />
            <DashBoardCards number={"0"} text='Seller Offer' icon="/images/dashboard/icons/carmouse.png" linkText='Learn more'/> */}
            <DashBoardCards number={"3"} text='Vehicles from your Watchlist starts soon' icon="/images/dashboard/icons/cartime.png" linkText='Learn more'/>
          </div>
        </Container>
          <div className=' tw-bg-[#F9F9F9] tw-mt-[50px] tw-py-[70px]'>
            <Container className='tw-grid tw-grid-cols-4 tw-gap-[20px] max-laptop:tw-grid-cols-2 max-tablet:tw-grid-cols-1'>
              <DashboardMoneyCard text={"Your Deposite"} price={`$${Number(mockUsers.balance).toLocaleString('en-US')}`} icon="/images/dashboard/icons/wallet.png" infotext={"Need More? Please, add your deposit"} secInfoText={"Also you can refund your deposit here."}/>
              <DashboardMoneyCard text="Bidding Limit" price={`$${biddingLimit.toLocaleString('en-US')}`} icon="/images/dashboard/icons/revenue.png" infotext={"Your bidding limit"}/>
              <DashboardMoneyCard text="Used" price={`$${usedSum.toLocaleString('en-Us')}`} icon="/images/dashboard/icons/dollar.png" infotext={"Your used bidding limit"}/>
              <DashboardMoneyCard text="Available" price={`$${availableSum.toLocaleString('en-US')}`}  icon="/images/dashboard/icons/give-money.png" infotext={"Your available bidding limit"}/>
            </Container>
          </div>
      </div>
    </>
  )
}

export default page
