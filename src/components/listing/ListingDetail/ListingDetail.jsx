'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'

import { ListingDetailHead } from './ListingDetailHead'
import { ListingDetailImages } from './ListingDetailImages'

import FeedbackForm from './FeedbackForm'
import Reviews from './Reviews'
import Features from './Features'
import { ROUTER } from '@/app/router'
import { formatOpeningHours } from '@/utils/format'
import { useTranslations } from 'next-intl'

const { Map } = {
  Map: dynamic(() => import('@/components/map/Map'), {
    ssr: false,
  }),
}

export const ListingDetail = ({ currentUser, listing, reviews }) => {
  const t = useTranslations()

  const openingHours = listing?.opening_hours
    ? formatOpeningHours(listing?.opening_hours)
    : []
  const location =
    listing?.latitude && listing?.longitude
      ? { lat: listing?.latitude, lon: listing?.longitude }
      : null

  return (
    <div className="tw-w-full tw-py-14">
      <div className="container tw-w-full">
        <div className="tw-w-full tw-flex tw-flex-col lg:tw-flex-row tw-gap-8">
          <div className="lg:tw-basis-5/12 tw-flex tw-flex-col tw-gap-12 tw-break-all">
            <div className="tw-flex tw-flex-col tw-gap-8">
              <ListingDetailHead {...listing} />
              <ListingDetailImages {...listing} />
              <div className="tw-my-2 tw-flex tw-flex-row">
                {listing?.categories?.map(({ slug, name }, key) => (
                  <Link key={key} href={`${ROUTER.CATEGORIES}/${slug}`}>
                    <span className="tw-w-auto tw-text-base tw-px-4 tw-py-2 tw-bg-gray-200 tw-text-gray-900 tw-rounded-full hover:tw-bg-gray-300">
                      {name}
                    </span>
                  </Link>
                ))}
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: listing.description,
                }}
              />
            </div>

            <div className="tw-flex tw-flex-col tw-gap-16">
              <Features {...listing} />
              {location && (
                <div className="tw-w-full tw-flex tw-flex-col">
                  <h3>Location</h3>
                  <div className="tw-mt-6 tw-w-full tw-flex tw-flex-col">
                    <Map lat={location.lat} lon={location.lon} />
                  </div>
                </div>
              )}
              <Reviews reviews={reviews} />
              <FeedbackForm currentUser={currentUser} listingId={listing.id} />
            </div>
          </div>

          <div className="lg:tw-basis-4/12">
            <div className="tw-w-full tw-h-auto tw-flex tw-flex-col tw-bg-gray-100 tw-rounded-xl tw-p-6">
              <h4 className="tw-text-base tw-font-semibold">Venicle Information</h4>
              <p>vin: {listing.vin}</p>
                <p>Make: {listing.make_id}</p>
                <p>Model: {listing.model_id}</p>
                <p>Year: {listing.year}</p>
                <p>Mileage: {listing.mileage}</p>
                <p>Damage: {listing.damage}</p>
                <p>Final Bid: {listing.final_bid}</p>
                <p>Auction: {listing.auction}</p>
                <p>Loss: {listing.loss}</p>
                <p>Secondary Damage: {listing.damageSecondary}</p>
                <p>State: {listing.state}</p>
                <p>Listing: {listing.listing}</p>
                <p>Document: {listing.document}</p>
                <p>Seller: {listing.seller}</p>
                <p>Color: {listing.color}</p>
                <p>Engine: {listing.engine}</p>
                <p>Fuel: {listing.fuel}</p>
                <p>Condition: {listing.condition}</p>
                <p>Transmission: {listing.transmission}</p>
                <p>Auction Date: {listing.auction_at ? new Date(listing.auction_at).toLocaleDateString() : 'N/A'}</p>
                <p>Winner ID: {listing.winner_id}</p>
            </div>
          </div>

          <div className="lg:tw-basis-3/12">
            <div className="tw-w-full tw-h-auto tw-flex tw-flex-col tw-bg-gray-100 tw-rounded-xl tw-p-6">
              <h4 className="tw-text-base tw-font-semibold">Opening hours</h4>
              <ul className="tw-mt-4 tw-flex tw-flex-col tw-gap-2 tw-list-inside tw-p-0 tw-m-0">
                {openingHours?.map(({ day, opens, closes, closed }, key) => (
                  <li
                    key={key}
                    className="tw-flex tw-flex-row tw-items-center tw-justify-between tw-text-base tw-text-gray-800 tw-py-1 tw-border-0 tw-border-b tw-border-gray-200 tw-border-solid last:tw-border-0"
                  >
                    <span className="tw-capitalize">{day}</span>
                    {closed ? (
                      <span>
                        {t('pages.listing.sections.opening_hours.closed')}
                      </span>
                    ) : (
                      <span>
                        {opens}-{closes}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
