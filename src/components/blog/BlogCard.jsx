'use client'

import Link from 'next/link'
import Image from 'next/image'
import { formatDateBlog } from '@/utils/formatDate'

export const BlogCard = ({
  id,
  slug,
  title,
  category,
  created_at,
  picture,
  href,
}) => {
  return (
    <div className="tw-w-full">
      <div className="single-blog">
        <Link href={href} className="blog-img">
          <div className="tw-w-full tw-aspect-video tw-bg-gray-200 overflow-hidden">
            <Image src={picture || ''} alt={title} width={936} height={672} />
          </div>
          <span className="date">
            <div
              dangerouslySetInnerHTML={{
                __html: formatDateBlog(created_at),
              }}
            />
          </span>
        </Link>

        <div className="blog-content">
          {category && (
            <Link href="/blog" className="tag">
              {category}
            </Link>
          )}
          <h3 className="tw-h-[40px] tw-font-medium tw-text-sm tw-overflow-hidden">
            <Link href={href}>{title}</Link>
          </h3>
          <Link href={href} className="read-more">
            Read More
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
