'use client'

import { CategoryCard } from './CategoryCard'
import { Pagination } from '../pagination'

export const Categories = ({ currentUser, data, results, pagination }) => {
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
          data?.map((category, key) => (
            <CategoryCard
              key={key}
              href={category?.href || '#'}
              currentUser={currentUser}
              title={category?.name}
              picture={category?.picture}
              {...category}
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
