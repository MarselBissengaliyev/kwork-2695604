import React from 'react'
import Image from 'next/image'

import { RatingStars } from '@/components/rating'
import { formatDateWithMonth } from '@/utils/formatDate'

export const ReviewPublicCard = ({ id, rating, comment, created_at, user }) => {
  return (
    <div className="tw-flex tw-flex-col">
      <RatingStars rating={rating} />
      <div className="tw-w-8 tw-h-8 tw-rounded-full">
        <Image
          src={user?.image ? user.image : '/images/blog/comment-1.jpg'}
          alt=""
          width={80}
          height={80}
        />
      </div>
      <h4 className="tw-text-base tw-fond-medium">
        {user?.name} <span>{formatDateWithMonth(created_at)}</span>
      </h4>
      <p>{comment}</p>
    </div>
  )
}
