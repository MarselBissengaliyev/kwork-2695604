import ButtonMain from '@/components/button/ButtonMain'
import PageDirect from '@/components/Common/PageDirect'
import { Container } from '@/components/Container'
import React from 'react'
import DashboardTable from '../entities/myBidsTable/DashboardTable'

const page = () => {
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
        <DashboardTable/>
    </Container>
  )
}

export default page