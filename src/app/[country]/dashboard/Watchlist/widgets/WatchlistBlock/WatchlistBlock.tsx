import React from 'react'
import Container from '@/components/Container/ui/Container'
import CarCardsSlider from '../../../../../../components/Sliders/CarCardsSlider/CarCardsSlider'
import WatchListCard from '../../entities/WatchlistCard/WatchListCard'

const WatchlistBlock = () => {
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
    <Container>
        <WatchListCard/>
    </Container>
  )
}

export default WatchlistBlock