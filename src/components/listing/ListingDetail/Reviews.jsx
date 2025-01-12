'use client'
import React from 'react'

import { ReviewCard, ReviewList } from '@/components/review'

const Reviews = ({ reviews }) => {
  return (
    <div className="review-wrap">
      <h3>
        Reviews <span>({reviews.length})</span>
      </h3>
      <ReviewList reviews={reviews} isPublic={true} />
    </div>
  )
}

export default Reviews
