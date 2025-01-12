'use client'

import Image from 'next/image'
import Link from 'next/link'

import { formatDateWithMonth } from '@/utils/formatDate'
import { Button, Switch } from '@mantine/core'
import { useState } from 'react'

export const ListingAdminCard = ({
  id,
  title,
  slug,
  href,
  picture,
  user,
  created_at,
  category,
  onVisibilityChange,
  onDelete,
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
    <div className="tw-flex tw-w-full tw-p-6 tw-border-solid tw-border-gray-200 tw-border tw-rounded-xl">
      <div className="tw-flex tw-w-full tw-flex-col tw-overflow-hidden">
        <div className="tw-w-full tw-aspect-video tw-bg-gray-100 tw-flex tw-items-start tw-justify-center tw-overflow-hidden tw-rounded-lg">
          <Link href={href}>
            {picture && (
              <Image
                src={picture || ''}
                alt=""
                width={400}
                height={300}
                className="tw-w-full tw-h-auto"
              />
            )}
          </Link>
        </div>
        <div className="tw-mt-6">
          <div className="tw-flex tw-flex-col">
            <Link href={href}>
              <h6 className="tw-h-[48px] tw-text-base tw-font-semibold tw-overflow-hidden">
                {title}
              </h6>
            </Link>
            <ul className="tw-mt-2 tw-list-none tw-p-0">
              <li>Author: {user?.name}</li>
              <li>Date: {formatDateWithMonth(created_at)}</li>
              {category && <li>Category: {category?.name}</li>}
            </ul>
          </div>
          <div className="tw-flex tw-flex-col sm:tw-items-center sm:tw-justify-between sm:tw-flex-row tw-gap-6 tw-mt-4">
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
        </div>
      </div>
    </div>
  )
}
