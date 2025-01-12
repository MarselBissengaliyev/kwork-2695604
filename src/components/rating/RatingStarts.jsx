'use client'

import { PiStarFill } from 'react-icons/pi'

export const RatingStars = ({ rating = 0 }) => {
  const stars = Array.from({ length: 5 }).map((v, key) => ({
    active: key + 1 <= rating,
  }))

  return (
    <div className="tw-flex tw-flex-row tw-gap-1 tw-text-base">
      {stars?.map(({ active }, index) => (
        <span key={index}>
          <PiStarFill
            className={active ? 'tw-text-black' : 'tw-text-gray-200'}
          />
        </span>
      ))}
    </div>
  )
}
