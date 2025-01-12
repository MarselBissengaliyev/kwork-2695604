'use client'

import Image from 'next/image'
import Link from 'next/link'

export const CategoryCard = ({ slug, href, title, picture }) => {
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
        <div className="d-flex justify-content-between align-items-center">
          <h3>
            <Link href={href}>{title}</Link>
          </h3>
        </div>
      </div>
    </div>
  )
}
