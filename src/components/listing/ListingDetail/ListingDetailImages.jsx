'use client'

import React from 'react'
import Image from 'next/image'

export const ListingDetailImages = ({ picture }) => {
  return (
    <div className="tw-w-full">
      <div className="tw-w-full tw-h-auto tw-aspect-video tw-overflow-hidden tw-rounded-xl">
        <Image src={picture || ''} alt="" width={1200} height={900} />
      </div>
    </div>
  )
}
