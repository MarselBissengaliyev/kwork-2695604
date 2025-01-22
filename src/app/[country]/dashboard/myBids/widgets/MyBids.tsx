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
    { header: " ", accessor: " ", render: (value: string) => <ButtonMain text={'Increase Bid'} icon="/images/dashboard/icons/auction.png" classNames={"tw-gap-2"} fullWidth={true} /> },
    { header: 'Sale Type', accessor: 'saleType' },
  ];


  const wonColums = [
    { header: "Sale Date", accessor: "date" },
    { header: "Lot", accessor: "orderId" },
    { header: "VIN", accessor: "vin" },
    { header: "Vehicle", accessor: "model" },
    { header: "Final Bid", accessor: "price" },
    { header: "Invoice", accessor: "shippingStatus" },
    { header: "Due Date", accessor: "duedate" },
    { header: "Status", accessor: "paymentStatus" },
    {
      header: "Shipping",
      accessor: "shippingAdded",
      render: (value: string, row) => value == "" ?
        <div className='tw-leading-3'>
          <p className='tw-text-[#3E73CF] tw-cursor-pointer tw-m-0' onClick={() => handleAddShippingClick(row.orderId)}>Add Shipping</p>
          <p className='tw-cursor-pointer hover:tw-text-[#3E73CF]' onClick={() => handleShippingClick(row.orderId)}>I don't need shipping</p>
          {row.orderId === shipping && (
            <div className='tw-absolute tw-top-[150px] tw-z-10 tw-max-w-[270px] tw-w-full tw-bg-white tw-shadow-lg tw-p-[30px] tw-flex tw-flex-col tw-gap-[15px]'>
              <p className='tw-leading-4  '>Are you sure don't need shipping?</p>
              <ButtonMain text={"Yes, i don't need"} fullWidth={true} />
              <ButtonMain text={"Cancel"} fullWidth={true} color="grey" variant='outline' onClick={() => handleShippingClick(row.orderId)} />
            </div>
          )}
          {row.orderId === addShipping && (
            <DashboardModal closeModal={() => handleAddShippingClick(row.orderId)}>
              <h2>Add Shipping</h2>
              <p>Your Vehicle will be delivered</p>
              <div className='tw-flex tw-flex-col tw-gap-[20px]'>
                <span>
                  <div className='tw-flex'>
                    <p className='tw-text-[#191919]'>From</p>
                    <p className='tw-text-red-500'>*</p>
                  </div>
                  <Input value={"CLEVLAND WEST, OH"} className="!tw-bg-[#F9F9F9] tw-h-[64px] !tw-pl-[30px]" disabled={true} />
                </span>
                <span>
                  <div className='tw-flex'>
                    <p className='tw-text-[#191919]'>To</p>
                    {/* <p className='tw-text-red-500'>*</p> */}
                  </div>
                  <div className="tw-relative tw-w-full">
                    <select className="tw-w-full tw-h-[64px] tw-px-[30px] tw-border tw-border-gray-300 tw-rounded-full tw-text-base tw-bg-white tw-appearance-none tw-pr-10">
                      <option value="Ukraine" selected>Ukraine</option>
                      <option value="Russia">Amerika</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="USA">USA</option>
                    </select>
                    <div className="tw-absolute tw-inset-y-0 tw-right-3 tw-flex tw-items-center tw-pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="tw-h-4 tw-w-4 tw-text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  {/* <Input className=" tw-h-[64px] !tw-pl-[30px]"/> */}
                </span>
                <span>
                  <div className='tw-flex'>
                    <p className='tw-text-[#191919]'>Port</p>
                    {/* <p className='tw-text-red-500'>*</p> */}
                  </div>
                  <div className="tw-relative tw-w-full">
                    <select className="tw-w-full tw-h-[64px] tw-px-[30px] tw-border tw-border-gray-300 tw-rounded-full tw-text-base tw-bg-white tw-appearance-none tw-pr-10">
                      <option value="Ukraine" selected>0000</option>
                      <option value="Russia">2025</option>
                      <option value="Kazakhstan">6000</option>
                      <option value="USA">2500</option>
                    </select>
                    <div className="tw-absolute tw-inset-y-0 tw-right-3 tw-flex tw-items-center tw-pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="tw-h-4 tw-w-4 tw-text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  {/* <Input className=" tw-h-[64px] !tw-pl-[30px]"/> */}
                </span>
                <span>
                  <p className='tw-text-[16px]'>Cleveland - Odessa</p>
                </span>
                <span>
                  <ButtonMain text='Send Request' icon='/images/dashboard/icons/send.png' fullWidth={true} classNames='tw-gap-[10px] tw-h-[64px]' />
                </span>
              </div>
            </DashboardModal>
          )}
        </div>
        : value
    },
    { header: "Shipping Price", accessor: "shippingCost" },
    { header: "Shipping Status", accessor: "deliveryStatus" },
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
    { header: 'Final Bid', accessor: 'finalBid' },
    { header: 'Comments', accessor: 'comments' },
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
        <DashBoardTable data={activeButton === "Current Bids" ? { ...currentBids, array: currentBids.bids } : activeButton === "Won Bids" ? { ...wonBids, array: wonBids.bids } : activeButton === "Lost Bids" ? { ...lostBids, array: lostBids.bids } : { array: [], pages: 0, results: 0 } } columns={activeButton === "Current Bids" ? columns : activeButton === "Won Bids" ? wonColums : activeButton === "Lost Bids" ? lostColumns : []} rowKey="vin" />;
      </div>
      <div className='mindesk:tw-hidden'>
        <DashBoardTableMoblie data={activeButton === "Current Bids" ? currentBids : activeButton === "Won Bids" ? wonBids : activeButton === "Lost Bids" ? lostBids : []} columns={activeButton === "Current Bids" ? columns : activeButton === "Won Bids" ? wonColums : activeButton === "Lost Bids" ? lostColumns : []} rowKey="vin" />
      </div>
    </Container>
  )
}

export default MyBids