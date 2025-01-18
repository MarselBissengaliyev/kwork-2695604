'use client'
import ButtonMain from '@/components/button/ButtonMain'
import PageDirect from '@/components/Common/PageDirect'
import { Container } from '@/components/Container'
import React from 'react'
import DashboardTable from '../entities/myBidsTable/DashboardTable'

const page = () => {

const mockData =  [
    {
    "id": 1,
    "amount": 4500,
    "lot_id": 3,
    "user_id": 7,
    "created_at": "2025-01-18T10:00:00.000Z",
    "status": "CURRENT"
  },
  {
    "id": 2,
    "amount": 3200,
    "lot_id": 5,
    "user_id": 12,
    "created_at": "2025-01-17T15:30:00.000Z",
    "status": "WINNER"
  },
  {
    "id": 3,
    "amount": 7000,
    "lot_id": 2,
    "user_id": 9,
    "created_at": "2025-01-16T09:45:00.000Z",
    "status": "LOST"
  },
  {
    "id": 4,
    "amount": 1500,
    "lot_id": 8,
    "user_id": 4,
    "created_at": "2025-01-15T14:20:00.000Z",
    "status": "CURRENT"
  },
  {
    "id": 5,
    "amount": 2800,
    "lot_id": 10,
    "user_id": 15,
    "created_at": "2025-01-14T11:00:00.000Z",
    "status": "WINNER"
  }
]

  return (
    <Container>
        <PageDirect
        pageTitle={"My Bids"}
        className={'tw-justify-between tw-gap-5 max-mindesk:tw-flex-col max-mindesk:tw-justify-start'}
        >
        <div className='tw-flex tw-gap-10 tw-overflow-x-auto tw-w-full no-scrollbar max-mindesk:tw-gap-2'>
            <div className='tw-flex tw-gap-2'>
                <ButtonMain classNames={'tw-w-[170px] tw-flex-shrink-0'} variant='outlined' text={<div className='tw-flex tw-gap-2 tw-text-center tw-items-center'><img src='/images/dashboard/icons/larrow.png'/> Back</div>}/>

                <ButtonMain classNames={'tw-w-[170px] tw-flex-shrink-0'} color='grey' variant='outlined' text="Current Bids" />

                <ButtonMain classNames={'tw-w-[170px] tw-flex-shrink-0'} text="Won Bids" color="grey" variant='outlined' />
                <ButtonMain classNames={'tw-w-[170px] tw-flex-shrink-0'} color='grey' variant='outlined' text="Lost Bids" />
            </div>
            <div className='tw-flex tw-gap-2'>
                <ButtonMain classNames={'tw-w-[170px] tw-flex-shrink-0 tw-flex tw-gap-2'} color='grey' variant='outlined' text="Edit Profile" icon="/images/dashboard/icons/editing.png" />
            </div>
        </div>
        </PageDirect>
        <DashboardTable 
          titles={["Lot", "Vin", "Vehicle", "Sale Date", "State", "Bid Status", "My Max Bid", "", "Sale Type"]}
          variables={mockData}
        />
        {/* <DashboardTable
          titles={['Name', 'Age', 'Action']}
          variables={[
            ['Alice', 25, 'Edit'],
            ['Bob', 30, 'Edit'],
            ['Charlie', 22, 'Edit'],
          ]}
          renderValue={(value, rowIndex, colIndex) => {
            if (colIndex === 2) {
              return <button className="tw-text-red-500">{value}</button>;
            }
            return value;
          }}
          onEdit={(value, rowIndex, colIndex) => {
            console.log(`Editing value at row ${rowIndex}, col ${colIndex}:`, value);
          }}
        /> */}
    </Container>
  )
}

export default page