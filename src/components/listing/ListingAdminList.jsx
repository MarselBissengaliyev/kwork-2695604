'use client'

import axios from 'axios'
import { API_ROUTER } from '@/app/router'

import { Pagination } from '@/components/pagination'
import { ListingAdminCard } from './ListingAdminCard'

export const ListingAdminList = ({ data, results, pagination }) => {
  const handlers = {
    onVisibilityChange: async (id, visible) => {
      await axios.put(`${API_ROUTER.LISTINGS}/${id}`, { published: visible })
    },
    onDelete: async (id) => {
      const confirmed = window.confirm('Are you sure?')

      if (confirmed) {
        await axios.delete(`${API_ROUTER.LISTINGS}/${id}`)
      }
    },
  }
  return (
    <div className="tw-w-full tw-flex tw-flex-col tw-gap-10">
      <div className="tw-w-full tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-4">
        {data?.map((review, key) => (
          <ListingAdminCard
            key={key}
            visible={review?.published}
            onVisibilityChange={handlers.onVisibilityChange}
            onDelete={handlers.onDelete}
            {...review}
          />
        ))}
      </div>
      {pagination?.pages > 1 && (
        <div className="tw-mt-10">
          <Pagination {...pagination} />
        </div>
      )}
    </div>
  )
}
