'use client'

import { CategoryCard } from './CategoryCard'

export const Makes = ({ currentUser, data }) => {
  return (
    <div className="featured-area for-dark-mode ptb-100">
      <div className="container tw-grid tw-grid-cols-3 tw-gap-6">
        {data >= 1 ? (
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
    </div>
  )
}
