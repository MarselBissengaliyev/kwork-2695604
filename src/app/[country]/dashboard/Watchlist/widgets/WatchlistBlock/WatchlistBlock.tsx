import React from 'react'
import Container from '@/components/Container/ui/Container'
import WatchListCard from '../../entities/WatchlistCard/WatchlistCard'
import PaginationBlock from '../../../entities/paginationBlock/PaginationBlock'

const WatchlistBlock = () => {

    const Cards = [

        {
            title: "2013 Chevrolet Impala Ls 3.6L",
            Lot: "#30874242",
            Vin: "1D7RB1GP6AS109178",
            List: [
                {label: "Mileage", value: "198,239"},
                {label: "Damage", value: "frontend"},
                {label: "Location", value: "PA-Harrisburg"},
                {label: "Sale Date", value: "06/13/2022"},
                {label: "Doc. Type", value: "Clean Title"},
            ],
            CurrentBid: "131",
            BuyBid: "2,850",
            imgs: [
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
            ],
        },
        {
            title: "2013 Chevrolet Impala Ls 3.6L",
            Lot: "#30874242",
            Vin: "1D7RB1GP6AS109178",
            List: [
                {label: "Mileage", value: "198,239"},
                {label: "Damage", value: "frontend"},
                {label: "Location", value: "PA-Harrisburg"},
                {label: "Sale Date", value: "06/13/2022"},
                {label: "Doc. Type", value: "Clean Title"},
            ],
            CurrentBid: "131",
            BuyBid: "2,850",
            imgs: [
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
            ],
        },
        {
            title: "2013 Chevrolet Impala Ls 3.6L",
            Lot: "#30874242",
            Vin: "1D7RB1GP6AS109178",
            List: [
                {label: "Mileage", value: "198,239"},
                {label: "Damage", value: "frontend"},
                {label: "Location", value: "PA-Harrisburg"},
                {label: "Sale Date", value: "06/13/2022"},
                {label: "Doc. Type", value: "Clean Title"},
            ],
            CurrentBid: "131",
            BuyBid: "2,850",
            imgs: [
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
            ],
        },
        {
            title: "2013 Chevrolet Impala Ls 3.6L",
            Lot: "#30874242",
            Vin: "1D7RB1GP6AS109178",
            List: [
                {label: "Mileage", value: "198,239"},
                {label: "Damage", value: "frontend"},
                {label: "Location", value: "PA-Harrisburg"},
                {label: "Sale Date", value: "06/13/2022"},
                {label: "Doc. Type", value: "Clean Title"},
            ],
            CurrentBid: "131",
            BuyBid: "2,850",
            imgs: [
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
            ],
        },
    ]

  return (
    <Container className={""}>
        <div className='tw-grid tw-grid-cols-4 tw-gap-[20px]'>
            {Cards.map((card) => <WatchListCard card={card}/> )}
            
        </div>

        <div className='tw-flex tw-justify-center tw-items-center tw-my-[35px]'>
            <PaginationBlock currentPage={1} totalPages={10}/>
        </div>
    </Container>
  )
}

export default WatchlistBlock