'use client'

import React from 'react'
import Image from 'next/image'
import locationPin from './../../../../public/images/icon/location-pin.svg'
import clock from './../../../../public/images/icon/clock.svg'
import informationLine from './../../../../public/images/icon/information-line.svg'
import { formatDateWithMonth } from '@/utils/formatDate'
import { formattedPrice } from '@/utils/formattedPrice'
import { getAverageRating } from '@/utils/getAverageRating'

import { RatingStars } from '@/components/rating'

export const ListingDetailHead = ({ id, title, country, rating }) => {
  return (
    <div className="tw-flex tw-flex-col tw-justify-start tw-items-start">
      <div className="tw-flex tw-flex-row">
        <h1 className="tw-text-4xl tw-font-semibold">{title}</h1>
      </div>
      <div className="tw-mt-4 tw-flex">
        <RatingStars rating={rating} />
      </div>
    </div>
  )
}
