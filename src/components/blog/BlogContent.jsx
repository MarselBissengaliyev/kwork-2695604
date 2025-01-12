'use client'

import { Pagination } from '@/components/pagination'

import { BlogCard } from './BlogCard'

export const BlogContent = ({ posts, results, pagination }) => {
  return (
    <div className="blog-area ptb-100">
      <div className="container">
        <div className="section-title">
          <h2>Blog Posts</h2>
        </div>
        <div className="tw-grid tw-grid-cols-3 tw-gap-4">
          {posts?.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
        {pagination?.pages > 1 && (
          <div className="container tw-mt-10">
            <Pagination {...pagination} />
          </div>
        )}
      </div>
    </div>
  )
}
