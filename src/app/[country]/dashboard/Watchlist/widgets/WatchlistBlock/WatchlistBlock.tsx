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
    <Container className={"tw-flex tw-flex-col tw-justify-center tw-items-center tw-static"}>
        <div className='tw-grid tw-grid-cols-4 tw-gap-[20px] tw-justify-center max-xl:tw-grid-cols-3 max-mindesk:tw-grid-cols-2 max-minilaptop:tw-grid-cols-1 tw-static'>
            {Cards.map((card) => <WatchListCard card={card}/> )}
        </div>

        <div className='tw-flex tw-justify-center tw-items-center tw-my-[35px]'>
            <PaginationBlock currentBids={{
                array: [],
                pages: 1,
                results: 1,
            }}/>
        </div>
    </Container>
  )
}

export default WatchlistBlock