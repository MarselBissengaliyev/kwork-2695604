'use client'

import { ROUTER } from '@/app/router'

import { CityCard } from './CityCard'
import { Pagination } from '../pagination'

export const Cities = ({ currentUser, data, results, pagination }) => {
  return (
    <div className="featured-area for-dark-mode ptb-100">
      <div className="container">
        <div className="section-title-wrap for-mobile d-flex justify-content-between align-items-center">
          <div className="section-title left-title">
            <p>
              <span>{results || 0}</span> Results Found
            </p>
          </div>
        </div>
      </div>
      <div className="container tw-grid tw-grid-cols-3 tw-gap-6">
        {results >= 1 ? (
          data?.map(({ slug, name, picture, href, ...city }, key) => (
            <CityCard
              key={key}
              href={href}
              currentUser={currentUser}
              title={name}
              picture={picture || ''}
              {...city}
            />
          ))
        ) : (
          <></>
        )}
      </div>
      {pagination?.pages > 1 && (
        <div className="container tw-mt-10">
          <Pagination {...pagination} />
        </div>
      )}
    </div>
  )
}
