import Rating1 from '@/app/[country]/listing/[listing_slug]/shared/img/Rating';
import Rating2 from '@/app/[country]/listing/[listing_slug]/shared/img/Rating2';
import Rating3 from '@/app/[country]/listing/[listing_slug]/shared/img/Rating3';
import ButtonMain from '@/components/button/ButtonMain';
import ListItem from '@/components/ListItem'
import CopyText from "@/components/ListItem/models/CopyText";
import CarCardsSlider from '@/components/Sliders/CarCardsSlider/CarCardsSlider'
import React, { useState } from 'react'

interface ICard {
    card: IWatchListCard;
}

interface IWatchListCard {
    title: string;
    Lot: string;
    Vin: string;
    List: IList[];
    CurrentBid: string;
    BuyBid: string;
    imgs: IImg[];
}

interface IList {
    label: string;
    value:string;
}

interface IImg {
    alt: string;
    src: string;
}

const WatchListCard = ({card}: ICard) => {
    const [isClick, setClick] = useState(false);
    const handleClick = (e) => {
        // setClick((prev) => (prev === e ? null : e))
        // console.log(isClick)
        // Navigate to listing page
        // window.location.href = `/[country]/listing/${card.listing_slug}`
    }

  return (
    <div className='tw-max-w-[370px] tw-w-full tw-static' style={{border: "1px solid #ECECEC", borderRadius: "10px"}}>
        <CarCardsSlider height='260px' imglinks={card.imgs} deletes={true}/>
        <div className='tw-flex tw-flex-col tw-gap-[20px] tw-p-[30px]'>
            <div className='tw-flex tw-gap-[70px]'>
                <p className='tw-text-[18px] tw-text-[#3E73CF] tw-leading-5 tw-font-medium'>{card.title}</p>
                <div className="tw-flex">
                    <Rating1 className={"tw-z-30 tw-mr-[-4px]"} />
                    <Rating2 className={"tw-z-20 tw-mr-[-4px]"} />
                    <Rating3 className={"tw-z-10 tw-rounded-full"} />
                </div>
            </div>
            <div>
                <ListItem label={"Lot"} value={<CopyText text={card.Lot}/>} icon=""/>
                <ListItem label={"Vin"} value={<CopyText text={card.Vin}/>} icon=""/>
            </div>
            <div>
                {card.List.map((list) => <ListItem label={list.label} value={list.value} icon=""/> )}
                
            </div>
            <div className='tw-flex tw-gap-[60px] tw-mt-[20px]'>
                <div>
                    <p className='tw-m-0'>Current Bid</p>
                    <p className='tw-text-[#3E73CF] tw-font-medium tw-text-[20px]'>${card.CurrentBid}</p>
                </div>
                <div>
                    <p className='tw-m-0'>Buy it Now</p>
                    <p className='tw-text-[#E3433A] tw-font-medium tw-text-[20px]'>${card.BuyBid}</p>
                </div>
            </div>
            <ButtonMain text={"Bid Now"} icon={"/images/dashboard/icons/auction.png"} classNames={"tw-gap-2"} onClick={() => setClick((e) => !e)} color={isClick ? "grey" : "blue"}/>
        </div>
    </div>
  )
}

export default WatchListCard