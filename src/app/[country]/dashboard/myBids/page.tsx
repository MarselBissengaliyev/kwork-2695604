'use client'
import ButtonMain from '@/components/button/ButtonMain'
import PageDirect from '@/components/Common/PageDirect'
import { Container } from '@/components/Container'
import React, { useState } from 'react'
import DashBoardTable from '../entities/myBidsTable/DashboardTable'
import DashBoardTableMoblie from '../entities/myBidsTable/DashboardTableMobile'

const page = () => {
  const [hoveredPage, setHoveredPage] = useState<string | null>("grey");

  const [activeButton, setActiveButton] = useState('Current Bids'); // Начальная активная кнопка

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  }

  const mockData =  [
    {
      lot: '1425645',
      vin: '5UXZV4C5XD0B14800',
      vehicle: '2021 BMW X3',
      saleDate: '24.03.2022',
      state: '$16,000',
      bidStatus: 'OutBid',
      myMaxBid: '$15,000',
      saleType: 'Pure Sale',
    },
    {
      lot: '1425645',
      vin: '5UXZV4C5XD0B14800',
      vehicle: '2021 BMW X3',
      saleDate: '24.03.2022',
      state: '$16,000',
      bidStatus: 'OutBid',
      myMaxBid: '$15,000',
      saleType: 'Pure Sale',
    },
    {
      lot: '1425645',
      vin: '5UXZV4C5XD0B14800',
      vehicle: '2021 BMW X3',
      saleDate: '24.03.2022',
      state: '$16,000',
      bidStatus: 'OutBid',
      myMaxBid: '$15,000',
      saleType: 'Pure Sale',
    },
    {
      lot: '1425645',
      vin: '5UXZV4C5XD0B14800',
      vehicle: '2021 BMW X3',
      saleDate: '24.03.2022',
      state: '$16,000',
      bidStatus: 'OutBid',
      myMaxBid: '$15,000',
      saleType: 'Pure Sale',
    },
    {
      lot: '1425645',
      vin: '5UXZV4C5XD0B14800',
      vehicle: '2021 BMW X3',
      saleDate: '24.03.2022',
      state: '$16,000',
      bidStatus: 'OutBid',
      myMaxBid: '$15,000',
      saleType: 'Pure Sale',
    },
    {
      lot: '1425645',
      vin: '5UXZV4C5XD0B14800',
      vehicle: '2021 BMW X3',
      saleDate: '24.03.2022',
      state: '$16,000',
      bidStatus: 'OutBid',
      myMaxBid: '$15,000',
      saleType: 'Pure Sale',
    },
    {
      lot: '1425645',
      vin: '5UXZV4C5XD0B14800',
      vehicle: '2021 BMW X3',
      saleDate: '24.03.2022',
      state: '$16,000',
      bidStatus: 'OutBid',
      myMaxBid: '$15,000',
      saleType: 'Pure Sale',
    },
    
  ];

  const columns = [
    { header: 'Lot', accessor: 'lot' },
    { header: 'VIN', accessor: 'vin' },
    { header: 'Vehicle', accessor: 'vehicle' },
    { header: 'Sale Date', accessor: 'saleDate' },
    { header: 'State', accessor: 'state' },
    { header: 'Bid Status', accessor: 'bidStatus', style: { color: 'red' } },
    {
      header: 'My Max Bid',
      accessor: 'myMaxBid',
      render: (value: string) => <strong>{value}</strong>,
    },
    { header: 'Sale Type', accessor: 'saleType' },
    { header: " ", accessor: " ", render: (value: string) => <ButtonMain text={'Increase Bid'} icon="/images/dashboard/icons/auction.png" classNames={"tw-gap-2"} fullWidth={true}/>},
  ];

  const handleMouseOver = () => {
    setHoveredPage("blue");
  };

  const handleMouseOut = () => {
    setHoveredPage("grey");
  };

  return (
    <Container>
        <PageDirect
        pageTitle={"My Bids"}
        className={'tw-justify-between tw-gap-5 max-mindesk:tw-flex-col max-mindesk:tw-justify-start'}
        >
        <div className='tw-flex tw-gap-10 tw-overflow-x-auto tw-w-full no-scrollbar max-mindesk:tw-gap-2'>
            <div className='tw-flex tw-gap-2'>
              <ButtonMain 
                key={"Back"}
                classNames={'tw-w-[170px] tw-flex-shrink-0'} 
                variant='outlined' 
                color="grey" 
                text={
                  <div className='tw-flex tw-gap-2 tw-text-center tw-items-center'>
                    <img src='/images/dashboard/icons/larrow.png'/> 
                    Back
                  </div>
                }
                onClick={() => handleButtonClick('Back')}
              />

              <ButtonMain 
                classNames={'tw-w-[170px] tw-flex-shrink-0'} 
                color={activeButton === 'Current Bids' ? 'blue' : 'grey'} 
                variant='outlined' 
                text="Current Bids" 
                onClick={() => handleButtonClick('Current Bids')}
              />

              <ButtonMain 
                classNames={'tw-w-[170px] tw-flex-shrink-0'} 
                color={activeButton === 'Won Bids' ? 'blue' : 'grey'} 
                variant='outlined' 
                text="Won Bids" 
                onClick={() => handleButtonClick('Won Bids')}
              />

              <ButtonMain 
                classNames={'tw-w-[170px] tw-flex-shrink-0'} 
                color={activeButton === 'Lost Bids' ? 'blue' : 'grey'} 
                variant='outlined' 
                text="Lost Bids" 
                onClick={() => handleButtonClick('Lost Bids')}
              />
            </div>
            <div className='tw-flex tw-gap-2'>
                <ButtonMain classNames={'tw-w-[170px] tw-flex-shrink-0 tw-flex tw-gap-2'} color='grey' variant='outlined' text="Edit Profile" icon="/images/dashboard/icons/editing.png" />
            </div>
        </div>
        </PageDirect>
        <div className='max-mindesk:tw-hidden'>
          <DashBoardTable data={mockData} columns={columns} rowKey="vin" />;
        </div>
        <div className='mindesk:tw-hidden'>
          <DashBoardTableMoblie data={mockData} columns={columns} rowKey="vin" />
        </div>
    </Container>
  )
}

export default page