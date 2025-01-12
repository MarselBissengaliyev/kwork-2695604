'use client'

import Image from 'next/image'
import { formatDateWithMonth } from '@/utils/formatDate'

export const BlogDetails = ({ post }) => {
  return (
    <div className="blog-details-area ptb-100">
      <div className="container">
        <div className="blog-details-content">
          <h2 className="title">{post?.title}</h2>
          <div className="tw-mt-4 tw-flex tw-flex-row tw-justify-start">
            <span className="tw-text-base">
              {formatDateWithMonth(post?.created_at)}
            </span>
          </div>
          <div className="tw-mt-6 tw-flex-col tw-flex">
            {post?.picture && (
              <div className="tw-mt-12 tw-rounded-2xl tw-overflow-hidden tw-w-full tw-aspect-video tw-flex tw-justify-center tw-items-start">
                <Image
                  src={post?.picture || ''}
                  width={900}
                  height={600}
                  alt=""
                />
              </div>
            )}
            <div
              dangerouslySetInnerHTML={{ __html: post?.content }}
              className="tw-mt-10 blog-details-content-box"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
