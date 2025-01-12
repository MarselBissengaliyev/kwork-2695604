'use client'
import React, { useState } from 'react'

import { formatDateWithMonth } from '@/utils/formatDate'
import { Button, Switch } from '@mantine/core'
import Link from 'next/link'
import { ROUTER } from '@/app/router'

export const ReviewCard = ({
  id,
  comment,
  user,
  listing,
  created_at,
  onVisibilityChange,
  onDelete,
  isPublic,
  ...props
}) => {
  const [visible, setVisible] = useState(props?.visible || false)
  const [loading, setLoading] = useState(false)

  const handlers = {
    onDelete: () => {
      onDelete(id)
    },
    onVisibilityChange: () => {
      setVisible((visible) => {
        if (onVisibilityChange) {
          onVisibilityChange(id, !visible)
          return !visible
        }
      })
    },
  }

  return (
    <div className="tw-relative tw-w-full tw-border-gray-200 tw-border-solid tw-border tw-rounded-lg">
      <div className="tw-p-6">
        <p className="card-title">{comment}</p>
        <ul>
          <li>Author: {user?.name}</li>
          <li>Date: {formatDateWithMonth(created_at)}</li>
          <li>
            Listing:{' '}
            <Link
              href={listing?.slug ? `${ROUTER.LISTING}/${listing?.slug}` : '#'}
            >
              {listing?.title}
            </Link>
          </li>
        </ul>
        {!isPublic && (
          <div className="tw-flex tw-flex-col sm:tw-items-center sm:tw-justify-between sm:tw-flex-row tw-gap-6 tw-mt-10">
            <Button
              className="button button-secondary"
              onClick={handlers.onDelete}
            >
              Delete
            </Button>
            <Switch
              label={visible ? `Visible` : 'Hidden'}
              labelPosition="left"
              checked={visible}
              disabled={loading}
              onClick={handlers.onVisibilityChange}
            />
          </div>
        )}
      </div>
    </div>
  )
}
