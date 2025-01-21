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
  const currentUser = await getCurrentUser({
    bids: true,
  });

    const biddingLimit = (currentUser?.balance || 0) <= 1000 
  ? 10000 
  : currentUser.balance <= 2500 
  ? 50000 
  : 200000;
  
  const usedSum = currentUser.bids
  .filter(bid => bid.status === 'CURRENT')  // фильтруем по статусу "CURRENT"
  .reduce((sum, bid) => sum + bid.amount, 0);


  const wonBids = currentUser.bids.filter(bid => bid.status === "WON");
  const wonBidsCount = wonBids.length;

  const currentBids = currentUser.bids.filter(bid => bid.status === "CURRENT");
  const outbiddedBidsCount = currentBids.filter(bid => bid.Current_bid > bid.amount).length;

  const availableSum = biddingLimit - usedSum;
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
              <DashboardMoneyCard text={"Your Deposite"} price={`$${Number(currentUser.balance).toLocaleString('en-US')}`} icon="/images/dashboard/icons/wallet.png" infotext={"Need More? Please, add your deposit"} secInfoText={"Also you can refund your deposit here."}/>
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
