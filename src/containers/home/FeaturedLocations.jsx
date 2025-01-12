'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { RatingStars } from '@/components/rating'
import { ROUTER } from '@/app/router'

export const FeaturedLocations = ({ locations }) => {
  return (
    <div className="location-area ptb-100">
      <div className="container for-shape">
        <div className="section-title">
          <h2>Most Popular Location</h2>
        </div>

        <div className="row justify-content-center">
          {locations?.map(({ name, description, picture, href }, key) => (
            <div key={key} className="col-lg-4 col-sm-6 tw-transition-all">
              <div className="single-location d-flex justify-content-start align-items-center !tw-bg-gray-50 hover:!tw-bg-gray-100 lg:!tw-h-[200px] tw-overflow-hidden">
                <Image
                  src={picture}
                  width={115}
                  height={115}
                  className="tw-aspect-square"
                  alt="locations"
                />
                <div className="location-content ">
                  <h4 className="tw-text-base">
                    {name
                      ? name?.length > 20
                        ? [name.slice(0, 20), '..']
                        : name
                      : ''}
                  </h4>
                  <span className="tw-text-sm">
                    {description
                      ? description?.length > 40
                        ? [description.slice(0, 40), '..']
                        : description
                      : ''}
                  </span>
                  <RatingStars rating={5} />
                </div>
                <Link href={href} className="map-link"></Link>
              </div>
            </div>
          ))}
          <div className="col-lg-12">
            <p className="all-categories mt-20">
              Browse All Different{' '}
              <Link href={ROUTER.CITIES} className="read-more active">
                Cities <i className="ri-arrow-right-line"></i>
              </Link>
            </p>
          </div>
        </div>
        <Image
          src="/images/shape-1.png"
          width={136}
          height={125}
          className="shape shape-1"
          alt="locations"
        />
        <Image
          src="/images/shape-2.png"
          width={159}
          height={177}
          className="shape shape-2"
          alt="locations"
        />
      </div>
    </div>
  )
}
