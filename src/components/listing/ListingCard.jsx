'use client'

import Image from 'next/image'
import Link from 'next/link'

import { ROUTER } from '@/app/router'

import { formattedPrice } from '@/utils/formattedPrice'

import { HeartButton } from '@/components/button'

import { PiMapPinFill, PiStarFill } from 'react-icons/pi'

export const ListingCard = ({ variant, ...props }) => {
  switch (variant) {
    case 'grid':
      return <GridCard {...props} />
    case 'list':
      return <ListCard {...props} />
    default:
      return <GridCard {...props} />
  }
}

const GridCard = ({
  id,
  title,
  href,
  picture,
  categories,
  // price,
  rating,
  currentUser,
  country,
}) => {
  return (
    <div className="tw-flex tw-w-full">
      <div className="tw-w-full single-featured box-shadow tw-overflow-hidden">
        <div className="tw-flex tw-overflow-hidden tw-w-full tw-aspect-video tw-bg-gray-200">
          <Link href={href} className="feature-img">
            {picture && (
              <Image
                src={picture || ''}
                alt={title}
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                width={860}
                height={590}
              />
            )}
          </Link>
        </div>

        <div className="featured-content">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="tw-h-[50px] tw-overflow-hidden tw-text-lg">
              <Link href={href}>{title}</Link>
            </h3>
            <HeartButton currentUser={currentUser} listingId={id} />
          </div>
          <ul className="tw-mt-6 tw-flex tw-flex-col tw-gap-2 tw-text-black tw-text-base">
            <li className="tw-flex tw-flex-row tw-justify-start tw-items-center tw-gap-2">
              <PiStarFill />
              <span>{rating ? rating.toFixed(1) : 'New listing'}</span>
            </li>
            <li className="tw-flex tw-flex-row tw-justify-start tw-items-center tw-gap-2">
              <PiMapPinFill />
              <span> {country?.name || '-'}</span>
            </li>
          </ul>
          <ul className="tw-mt-6 priceing d-flex justify-content-between align-items-center">
            {categories?.length ? (
              categories?.slice(0, 1)?.map((category, key) => (
                <li key={key}>
                  <Link
                    href={
                      category
                        ? [ROUTER.CATEGORIES, category?.slug].join('/')
                        : '#'
                    }
                    className="tag"
                  >
                    {category?.name}
                  </Link>
                </li>
              ))
            ) : (
              <></>
            )}
            {/* <li>
              <span className="price">{formattedPrice(price)}</span>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  )
}

const ListCard = ({
  id,
  title,
  href,
  slug,
  rating,
  picture,
  user,
  categories,
  country,
  // price,
  created_at,
  currentUser,
}) => {
  return (
    <div className="tw-flex tw-w-full">
      <div className="tw-w-full single-featured style-two box-shadow">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="tw-relative tw-w-full tw-aspect-square tw-bg-gray-200 tw-rounded-lg tw-overflow-hidden tw-flex tw-justify-center tw-items-center">
              <Link href={href} className="bg-img tw-w-full tw-h-full">
                {picture && (
                  <Image
                    src={picture || ''}
                    alt={title}
                    className="tw-min-w-[150%] tw-h-auto"
                    width={400}
                    height={400}
                  />
                )}
              </Link>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="featured-content">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="tw-h-[50px] tw-overflow-hidden tw-text-lg">
                  <Link href={href}>{title}</Link>
                </h3>
                <HeartButton currentUser={currentUser} listingId={id} />
              </div>

              <ul className="tw-mt-6 tw-flex tw-flex-row tw-gap-4 tw-text-black tw-text-base">
                <li className="tw-flex tw-flex-row tw-justify-start tw-items-center tw-gap-2">
                  <PiStarFill />
                  <span>{rating ? rating.toFixed(1) : 'New listing'}</span>
                </li>
                <li className="tw-flex tw-flex-row tw-justify-start tw-items-center tw-gap-2">
                  <PiMapPinFill />
                  <span> {country?.name || '-'}</span>
                </li>
              </ul>

              <ul className="tw-mt-4 priceing d-flex justify-content-between align-items-center">
                {categories?.length ? (
                  categories?.slice(0, 1)?.map((category, key) => (
                    <li key={key}>
                      <Link
                        href={
                          category
                            ? [ROUTER.CATEGORIES, category?.slug].join('/')
                            : '#'
                        }
                        className="tag"
                      >
                        {category?.name}
                      </Link>
                    </li>
                  ))
                ) : (
                  <></>
                )}
                {/* <li>
                  <span className="price">{formattedPrice(price)}</span>
                </li> */}
              </ul>
              {/* <ul className="priceing d-flex justify-content-between align-items-center">
                <li>
                  <Link
                    href={
                      category
                        ? [ROUTER.CATEGORIES, category?.slug].join('/')
                        : '#'
                    }
                    className="tag"
                  >
                    {category?.name}
                  </Link>
                </li>
                <li>
                  <span className="price">{formattedPrice(price)}</span>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
