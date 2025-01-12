import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import locationSvg from './../../public/images/icon/location-pin.svg'
import clockSvg from './../../public/images/icon/clock.svg'
import profileSvg from './../../public/images/icon/profile.svg'
import { formattedPrice } from '@/utils/formattedPrice'
import { formatDate } from '@/utils/formatDate'

import { HeartButton } from '@/components/button'

const FeaturedItem = ({
  id,
  title,
  slug,
  imageSrc,
  category,
  user,
  // price,
  location_value,
  created_at,
  currentUser,
}) => {
  return (
    <div className="single-featured">
      <Link href={`/listing/${id}/${slug}`} className="feature-img">
        <Image src={imageSrc || ''} width={860} height={590} alt="features" />
      </Link>

      <div className="featured-content">
        <div className="d-flex justify-content-between align-items-center">
          <h3>
            <Link href={`/listing/${id}/${slug}`}>{title}</Link>
          </h3>
          <HeartButton currentUser={currentUser} listingId={id} />
        </div>

        <ul className="featured-info">
          <li>
            <Image src={locationSvg} width="18" height="18" alt="features" />
            {location_value}
          </li>
          <li>
            <Image src={clockSvg} width="18" height="18" alt="features" />
            {formatDate(created_at)}
          </li>
          <li>
            <Image src={profileSvg} width="18" height="18" alt="features" />
            {user?.name}
          </li>
        </ul>

        <ul className="priceing d-flex justify-content-between align-items-center">
          <li>
            <Link href={`/listings/?category=${category}`} className="tag">
              {category}
            </Link>
          </li>
          {/* <li>
            <span className="price">{formattedPrice(price)}</span>
          </li> */}
        </ul>
      </div>
    </div>
  )
}

export default FeaturedItem
