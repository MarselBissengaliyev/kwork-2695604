import React from 'react'

import { Breadcrumbs } from '../breadcrumbs'
import Image from 'next/image'

export const PageBanner = ({ title, breadcrumbs }) => {
  return (
    <div className="tw-w-full tw-relative tw-bg-black tw-overflow-hidden">
      <div className="tw-z-20 tw-absolute tw-top-0 tw-flex tw-flex-row tw-items-center tw-justify-center">
        <Image
          className="tw-w-full tw-brightness-50"
          src="/images/page-banner.jpg"
          width={400}
          height={200}
          alt=""
        />
      </div>
      <div className="container tw-z-50 tw-relative tw-py-20 tw-overflow-hidden">
        <div className="tw-flex tw-w-full tw-flex-col tw-justify-start tw-items-start tw-text-base tw-gap-4">
          <Breadcrumbs
            breadcrumbs={breadcrumbs}
            classNames={{
              item: 'tw-text-white',
            }}
          />
          <h2 className="tw-text-4xl tw-text-white">{title}</h2>
        </div>
      </div>
    </div>
  )
}
