import CarCardsSlider from '@/components/Sliders/CarCardsSlider/CarCardsSlider'
import React from 'react'

const WatchListCard = () => {
    const imgs = [
        {
            alt: "watch",
            src: "/images/dashboard/icons/car1.png"
        },
        {
            alt: "watch",
            src: "/images/dashboard/icons/car2.png"
        },
        {
            alt: "watch",
            src: "/images/dashboard/icons/car3.png"
        }
    ]
  return (
    <div className='tw-max-w-370px tw-w-full'>
        <CarCardsSlider width='370px' height='260px' imglinks={imgs}/>

    </div>
  )
}

export default WatchListCard