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

const MyBids = ({ wonBids, currentBids, lostBids }) => {
  const [hoveredPage, setHoveredPage] = useState<string | null>("grey");

  const [shipping, setShipping] = useState({})
  const [addShipping, setAddShipping] = useState({})
 
  const [activeButton, setActiveButton] = useState('Current Bids'); // Начальная активная кнопка

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
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
    { header: 'Vehicle', accessor: 'vehicle' },
    { header: 'Sale Date', accessor: 'saleDate' },
    { header: 'State', accessor: 'state' },
    { header: 'Bid Status', accessor: 'bidStatus', style: { color: 'red' } },
    {
      header: 'My Max Bid',
      accessor: 'myMaxBid',
      render: (value: string) => <strong>{value}</strong>,
    },
    { header: " ", accessor: " ", render: (value: string) => <ButtonMain text={'Increase Bid'} icon="/images/dashboard/icons/auction.png" classNames={"tw-gap-2"} fullWidth={true}/>},
    { header: 'Sale Type', accessor: 'saleType' },
  ];


  const wonColums = [
    {header: "Sale Date", accessor: "date"},
    {header: "Lot", accessor: "orderId"},
    {header: "VIN", accessor: "vin"},
    {header: "Vehicle", accessor: "model"},
    {header: "Final Bid", accessor: "price"},
    {header: "Invoice", accessor: "shippingStatus"},
    {header: "Due Date", accessor: "duedate"},
    {header: "Status", accessor: "paymentStatus"},
    {
      header: "Shipping", 
      accessor: "shippingAdded" , 
      render: (value: string,row) => value == "" ? 
      <div className='tw-leading-3'>
        <p className='tw-text-[#3E73CF] tw-cursor-pointer tw-m-0' onClick={()=> handleAddShippingClick(row.orderId)}>Add Shipping</p>
        <p className='tw-cursor-pointer hover:tw-text-[#3E73CF]' onClick={()=> handleShippingClick(row.orderId)}>I don't need shipping</p>
        {row.orderId === shipping && (
          <div className='tw-absolute tw-top-[150px] tw-z-10 tw-max-w-[270px] tw-w-full tw-bg-white tw-shadow-lg tw-p-[30px] tw-flex tw-flex-col tw-gap-[15px]'>
            <p className='tw-leading-4  '>Are you sure don't need shipping?</p>
            <ButtonMain text={"Yes, i don't need"} fullWidth={true}/>
            <ButtonMain text={"Cancel"} fullWidth={true} color="grey" variant='outlined' onClick={()=> handleShippingClick(row.orderId)}/>
          </div>
        )}
        {row.orderId === addShipping && (
         <DashboardModal closeModal={()=> handleAddShippingClick(row.orderId)}>
          <h2>Add Shipping</h2>
          <p>Your Vehicle will be delivered</p>

         </DashboardModal>
        )}
        </div> 
        : value
      },
    {header: "Shipping Price", accessor: "shippingCost"},
    {header: "Shipping Status", accessor: "deliveryStatus"},
  ]

  const lostColumns = [
    { header: 'Sale Date', accessor: 'saleDate' },
    { header: 'Lot', accessor: 'lot' },
    { header: 'VIN', accessor: 'vin' },
    { header: 'Vehicle', accessor: 'vehicle' },
    {
      header: 'My Max Bid',
      accessor: 'myMaxBid',
      render: (value: string) => <strong>{value}</strong>,
    },
    { header: 'Final Bid', accessor: 'finalBid'},
    { header: 'Comments', accessor: 'comment' },
  ];


  return (
    <Container>
        <PageDirect
        pageTitle={"My Bids"}
        className={'tw-justify-between tw-gap-5 max-mindesk:tw-flex-col max-mindesk:tw-justify-start'}
        >
        <div className='tw-flex tw-gap-10 tw-overflow-x-auto tw-w-full no-scrollbar max-mindesk:tw-gap-2'>
            <div className='tw-flex tw-gap-2'>
              <BackButton/>

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
            <a href="../EditSettings">
          <ButtonMain classNames={'tw-w-[170px] tw-flex-shrink-0 tw-flex tw-gap-2'} color='grey' variant='outlined' text="Edit Profile" icon="/images/dashboard/icons/editing.png" />
        </a>    
            </div>
        </div>
        </PageDirect>
        <div className='max-mindesk:tw-hidden'>
          <DashBoardTable data={activeButton === "Current Bids" ? currentBids : activeButton === "Won Bids" ? wonBids : activeButton === "Lost Bids" ? lostBids : [] } columns={ activeButton === "Current Bids" ? columns : activeButton === "Won Bids" ? wonColums : activeButton === "Lost Bids" ? lostColumns : [] } rowKey="vin" />;
        </div>
        <div className='mindesk:tw-hidden'>
          <DashBoardTableMoblie data={activeButton === "Current Bids" ? currentBids : activeButton === "Won Bids" ? wonBids : activeButton === "Lost Bids" ? lostBids : [] } columns={ activeButton === "Current Bids" ? columns : activeButton === "Won Bids" ? wonColums : activeButton === "Lost Bids" ? lostColumns : [] }  rowKey="vin" />
        </div>
    </Container>
  )
}

export default MyBids