'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import bannerBg from './../../public/images/banner/banner-bg.png'
import shape1 from './../../public/images/banner/shape-1.png'
import shape2 from './../../public/images/banner/shape-2.png'
import shape3 from './../../public/images/banner/shape-3.png'

import { SearchForm } from '@/containers/search'

import Link from 'next/link'
import { ROUTER } from '@/app/router'

const Banner = ({ categories, country }) => {
  const router = useRouter()
  return (
    <div className="banner-area bg-1">
      <div className="container-fluid">
        <div className="banner-content ptb-100">
          <h1>Find by vin or lot number</h1>

          <SearchForm country={country} />

          <ul className="tw-mt-10 src-tag">
            <li>
              <span>Popular Search:</span>
            </li>
            {categories?.slice(0, 7).map(({ id, slug, name, href }, key) => (
              <li key={key}>
                <Link href={href}>{name}</Link>,
              </li>
            ))}
            <li>
              <Link href={ROUTER.CATEGORIES} className="read-more active">
                View all
              </Link>
            </li>
          </ul>

          <Image
            src={shape1}
            width={122}
            height={96}
            className="shape shape-1"
            alt="shape"
          />
          <Image
            src={shape2}
            width={122}
            height={96}
            className="shape shape-2"
            alt="shape"
          />
          <Image
            src={shape3}
            width={122}
            height={96}
            className="shape shape-3"
            alt="shape"
          />
        </div>

        <div className="banner-img">
          <Image src={bannerBg} width={1920} height={821} alt="banner" />
        </div>
      </div>
    </div>
  )
}

export default Banner
