import PageBanner from '@/components/Common/PageBanner'

import { BlogContent } from '@/components/blog'
import { getBlogPosts } from '@/actions/blog-posts'
import { ROUTER } from '@/app/router'
import PageDirect from "@/components/Common/PageDirect";

export const metadata = { title: 'Blog', description: '' }

const page = async ({ searchParams, params }) => {
  const pagination = {
    page: parseInt(searchParams?.page) || 1,
  }

  const countryCode = params?.country

  const { posts, results, pages } = await getBlogPosts({
    page: pagination.page,
    take: 10,
    country: countryCode,
  })

  return (
    <>
      <PageDirect pageTitle={"Blog"}/>
      <BlogContent
        posts={posts?.map(
          ((post) => ({
            ...post,
            href: post?.slug ? `${ROUTER.BLOG}/${post?.slug}` : '#',
          })) || []
        )}
        results={results}
        pagination={{ page: pagination.page, pages }}
      />
    </>
  )
}

export default page
