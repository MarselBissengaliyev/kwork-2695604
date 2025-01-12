'use client'

import axios from 'axios'
import { API_ROUTER } from '@/app/router'

import { ReviewCard } from './ReviewCard'
import { ReviewPublicCard } from './ReviewPublicCard'

export const ReviewList = ({ reviews, isPublic }) => {
  const handlers = {
    onVisibilityChange: async (id, visible) => {
      await axios.put(`${API_ROUTER.REVIEWS}/${id}`, { published: visible })
    },
    onDelete: async (id) => {
      const confirmed = window.confirm('Are you sure?')

      if (confirmed) {
        await axios.delete(`${API_ROUTER.REVIEWS}/${id}`)
      }
    },
  }
  return (
    <div className="tw-w-full tw-flex tw-flex-col tw-gap-4">
      {reviews?.map((review, key) =>
        isPublic ? (
          <ReviewPublicCard key={key} {...review} />
        ) : (
          <ReviewCard
            key={key}
            visible={review?.published}
            onVisibilityChange={handlers.onVisibilityChange}
            onDelete={handlers.onDelete}
            isPublic={isPublic}
            {...review}
          />
        )
      )}
    </div>
  )
}
