'use client'

import Image from 'next/image'
import Link from 'next/link'

export const CityCard = ({ slug, href, title, picture, country }) => {
  return (
    <div className="single-featured box-shadow tw-rounded-lg tw-overflow-hidden">
      <Link href={href} className="feature-img">
        <Image
          src={picture || ''}
          alt={title}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          width={860}
          height={590}
        />
      </Link>
      <div className="featured-content">
        <div className="tw-flex tw-flex-col tw-gap-2">
          <h3>
            <Link href={href}>{title}</Link>
          </h3>
          {country && <span>{country?.name}</span>}
        </div>
      </div>
    </div>
  )
}
