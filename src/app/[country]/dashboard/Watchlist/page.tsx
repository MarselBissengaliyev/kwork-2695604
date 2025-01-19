'use client'
import ButtonMain from '@/components/button/ButtonMain';
import PageDirect from '@/components/Common/PageDirect'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const page = () => {

    const router = useRouter();

    const goBack = () => {
        router.back(); // Возвращает на предыдущую страницу
    };

      const [activeButton, setActiveButton] = useState('Current Bids'); // Начальная активная кнопка
    
      const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
      }

  return (
    <>
        <PageDirect
        pageTitle={"Watchlist"}
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
                onClick={() => goBack()}
              />

              <ButtonMain 
                classNames={'tw-w-[170px] tw-flex-shrink-0'} 
                color={activeButton === 'Current Bids' ? 'blue' : 'grey'} 
                variant='outlined' 
                text="Current Bids" 
                onClick={() => handleButtonClick('Current Wathclist')}
              />

              <ButtonMain 
                classNames={'tw-w-[170px] tw-flex-shrink-0'} 
                color={activeButton === 'Won Bids' ? 'blue' : 'grey'} 
                variant='outlined' 
                text="Won Bids" 
                onClick={() => handleButtonClick('Completed Watchlist')}
              />
            </div>
            <div className='tw-flex tw-gap-2'>
                <ButtonMain classNames={'tw-w-[170px] tw-flex-shrink-0 tw-flex tw-gap-2'} color='grey' variant='outlined' text="Edit Profile" icon="/images/dashboard/icons/editing.png" />
            </div>
        </div>
        </PageDirect>
    </>
  )
}

export default page