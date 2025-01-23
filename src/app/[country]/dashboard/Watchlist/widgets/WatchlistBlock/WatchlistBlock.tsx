import React from 'react'
import Container from '@/components/Container/ui/Container'
import WatchListCard from '../../entities/WatchlistCard/WatchlistCard'
import PaginationBlock from '../../../entities/paginationBlock/PaginationBlock'

const formattedDate = (dateString) => {
    const date = new Date(dateString); // Создаем объект Date из строки
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяц (нужно +1, т.к. getMonth() возвращает от 0 до 11)
    const day = String(date.getDate()).padStart(2, '0'); // День
    const year = date.getFullYear(); // Год

    return `${month}/${day}/${year}`;
};

const WatchlistBlock = ({ favourites }) => {
    const cards = favourites.favourites.map((f) => ({
        title: f.listing.title,
        Lot: "#" + f.listing.id,
        Vin: f.listing.vin,
        List: [
            { label: "Mileage", value: f.listing.mileage },
            { label: "Damage", value: truncateText(f.listing.damage) },
            { label: "Location", value: f.listing.location },
            { label: "Sale Date", value: formattedDate(f.listing.auction_at) },
            { label: "Doc. Type", value: f.listing.clean_title === true ? "Clean Title" : "Not Clean Title" },
        ],
        rating: f.listing.rating || "N\\A",
        CurrentBid: f.listing.current_bid || "N\\A",
        BuyBid: f.listing.buy_now,
        imgs: f.listing.media.map((m) => (
            {
                alt: f.listing.title,
                src: m.url
            }
        )),
        slug: f.listing.slug,
        id: f.id
    }))

    return (
        <Container className={"tw-flex tw-flex-col tw-justify-center tw-items-center tw-static"}>
            <div className='tw-grid tw-grid-cols-4 tw-gap-[20px] tw-justify-center max-xl:tw-grid-cols-3 max-mindesk:tw-grid-cols-2 max-minilaptop:tw-grid-cols-1 tw-static'>
                {cards.map((card) => <WatchListCard card={card} />)}
            </div>

            <div className='tw-flex tw-justify-center tw-items-center tw-my-[35px]'>
                <PaginationBlock currentBids={{
                    ...favourites,
                    array: favourites.favourites,
                }} />
            </div>
        </Container>
    )
}

const truncateText = (text, maxLength = 21) => {
    if (!text || typeof text !== "string") return text; // Возвращаем оригинал, если это не строка
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

export default WatchlistBlock