'use client'
import ButtonMain from '@/components/button/ButtonMain'
import PageDirect from '@/components/Common/PageDirect'
import { Container } from '@/components/Container'
import React, { useState } from 'react'

import { useRouter } from 'next/navigation'
import BackButton from '@/components/button/BackButton'
import DashBoardTable from '../../entities/myBidsTable/DashboardTable'
import DashBoardTableMoblie from '../../entities/myBidsTable/DashboardTableMobile'
import DashboardModal from '../../entities/Modal/DashboardModal'
import Input from '@/components/Input'

const MyBids = ({ wonBids, currentBids, lostBids }) => {
  const [hoveredPage, setHoveredPage] = useState<string | null>("grey");

  const [shipping, setShipping] = useState({})
  const [addShipping, setAddShipping] = useState({})

  const [activeButton, setActiveButton] = useState('Current Bids'); // Начальная активная кнопка

  const handleButtonClick = (buttonName) => {
    if (['Current Bids', 'Won Bids', 'Lost Bids'].includes(buttonName)) {
      setActiveButton(buttonName);
    }
  }
  const handleShippingClick = (rowOrderId) => {
    setShipping((prevShipping) => (prevShipping === rowOrderId ? null : rowOrderId));
  };

  const handleAddShippingClick = (rowOrderId) => {
    setAddShipping((prevShipping) => (prevShipping === rowOrderId ? null : rowOrderId));
  }

  const columns = [
    { header: 'Lot', accessor: 'lot' },
    { header: 'VIN', accessor: 'vin' },
    { header: 'Year', accessor: 'year' },
    { header: 'Auction at', accessor: 'auction_at' },
    { header: 'Current bid', accessor: 'current_bid' },
    { header: 'Bid Status', accessor: 'bidStatus', style: { color: 'red' } },
    {
      header: 'My Max Bid',
      accessor: 'amount',
      render: (value: string) => <strong>{value}</strong>,
    },
    { header: " ", accessor: "slug", render: (slug: any) => <ButtonMain href={'/listing/' +slug} text={'Increase Bid'} icon="/images/dashboard/icons/auction.png" classNames={"tw-gap-2"} fullWidth={true} /> },
  ];


  const wonColums = [
    { header: 'Lot', accessor: 'lot' },
    { header: 'VIN', accessor: 'vin' },
    { header: 'Year', accessor: 'year' },
    { header: 'Auction at', accessor: 'auction_at' },
    { header: 'Current bid', accessor: 'current_bid' },
    { header: 'Bid Status', accessor: 'bidStatus', style: { color: 'red' } },
    {
      header: 'My Max Bid',
      accessor: 'amount',
      render: (value: string) => <strong>{value}</strong>,
    },
  ]

  const lostColumns = [
    { header: 'Lot', accessor: 'lot' },
    { header: 'VIN', accessor: 'vin' },
    { header: 'Year', accessor: 'year' },
    { header: 'Auction at', accessor: 'auction_at' },
    { header: 'Current bid', accessor: 'current_bid' },
    { header: 'Bid Status', accessor: 'bidStatus', style: { color: 'red' } },
    {
      header: 'My Max Bid',
      accessor: 'amount',
      render: (value: string) => <strong>{value}</strong>,
    },
  ];


  return (
    <Container className={""}>
      <PageDirect
        pageTitle={"My Bids"}
        className={'tw-justify-between tw-gap-5 max-mindesk:tw-flex-col max-mindesk:tw-justify-start'}
      >
        <div className='tw-flex tw-gap-10 tw-overflow-x-auto tw-w-full no-scrollbar max-mindesk:tw-gap-2'>
          <div className='tw-flex tw-gap-2'>
            <BackButton />

            <ButtonMain
              classNames={'tw-w-[170px] tw-flex-shrink-0'}
              color={activeButton === 'Current Bids' ? 'blue' : 'grey'}
              variant='outline'
              text="Current Bids"
              onClick={() => handleButtonClick('Current Bids')}
            />

            <ButtonMain
              classNames={'tw-w-[170px] tw-flex-shrink-0'}
              color={activeButton === 'Won Bids' ? 'blue' : 'grey'}
              variant='outline'
              text="Won Bids"
              onClick={() => handleButtonClick('Won Bids')}
            />

            <ButtonMain
              classNames={'tw-w-[170px] tw-flex-shrink-0'}
              color={activeButton === 'Lost Bids' ? 'blue' : 'grey'}
              variant='outline'
              text="Lost Bids"
              onClick={() => handleButtonClick('Lost Bids')}
            />
          </div>
          <div className='tw-flex tw-gap-2'>
            <a href="../EditSettings">
              <ButtonMain classNames={'tw-w-[170px] tw-flex-shrink-0 tw-flex tw-gap-2'} color='grey' variant='outline' text="Edit Profile" icon="/images/dashboard/icons/editing.png" />
            </a>
          </div>
        </div>
      </PageDirect>
      <div className='max-mindesk:tw-hidden'>
        <DashBoardTable data={activeButton === "Current Bids" ? { ...currentBids, array: currentBids.bids } : activeButton === "Won Bids" ? { ...wonBids, array: wonBids.bids } : activeButton === "Lost Bids" ? { ...lostBids, array: lostBids.bids } : { array: [], pages: 0, results: 0 }} columns={activeButton === "Current Bids" ? columns : activeButton === "Won Bids" ? wonColums : activeButton === "Lost Bids" ? lostColumns : []}  />;
      </div>
      <div className='mindesk:tw-hidden'>
        <DashBoardTableMoblie data={activeButton === "Current Bids" ? { ...currentBids, array: currentBids.bids } : activeButton === "Won Bids" ? { ...wonBids, array: wonBids.bids } : activeButton === "Lost Bids" ? { ...lostBids, array: lostBids.bids } : { array: [], pages: 0, results: 0 }} columns={activeButton === "Current Bids" ? columns : activeButton === "Won Bids" ? wonColums : activeButton === "Lost Bids" ? lostColumns : []}  />
      </div>
    </Container>
  )
}

export default MyBids