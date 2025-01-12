'use client'

import React, { useState } from 'react'

import { twMerge } from 'tailwind-merge'

import CategorySearch from '@/components/Listings/CategorySearch'

import { ListingCard } from './ListingCard'
import { Pagination } from '@/components/pagination'

export const Listings = ({ currentUser, listings, results, pagination }) => {
  const [displayType, setDisplayType] = useState('grid')

  const styles = {
    content: '',
  }

  switch (displayType) {
    case 'grid':
      styles.content = twMerge(
        styles.content,
        'tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4'
      )
      break
    case 'list':
      styles.content = twMerge(
        styles.content,
        'tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-4'
      )
      break
  }

  return (
    <div className="featured-area for-dark-mode ptb-100">
      <div className="container">
        <div className="section-title-wrap for-mobile d-flex justify-content-between align-items-center">
          <div className="section-title left-title">
            <p>
              <span>{results || 0}</span> Results Found
            </p>
          </div>
          <CategorySearch listStyle={displayType} onStyle={setDisplayType} />
        </div>
      </div>
      <div className="container">
        <div className={styles.content}>
          {listings?.length > 0 ? (
            listings.map((listing) => (
              <ListingCard
                key={listing?.id}
                currentUser={currentUser}
                variant={displayType}
                {...listing}
              />
            ))
          ) : (
            <div className="col-lg-12">
              <div className="border p-4 text-center">Empty</div>
            </div>
          )}
        </div>
      </div>
      {pagination?.pages > 1 && (
        <div className="container tw-mt-10">
          <Pagination {...pagination} />
        </div>
      )}
    </div>
  )
}
