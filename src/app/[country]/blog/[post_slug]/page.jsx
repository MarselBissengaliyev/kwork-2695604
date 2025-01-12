import { getBlogPostBySlug } from '@/actions/blog-posts'

import { BlogDetails } from '@/components/blog'
import PageBanner from '@/components/Common/PageBanner'

export const generateMetadata = async ({ params }) => {
  const post_slug = params?.post_slug?.toLowerCase()

  const post = post_slug
    ? await getBlogPostBySlug(post_slug).catch(() => null)
    : null

  return {
    title: post?.seo_title,
    description: post?.seo_description,
  }
}

const page = async ({ params }) => {
  const post_slug = params?.post_slug

  const post = post_slug
    ? await getBlogPostBySlug(post_slug).catch(() => null)
    : null

  return post ? (
    <>
      <PageBanner pageTitle={post?.title} />
      <BlogDetails post={post} />
    </>
  ) : (
    <></>
  )
}

export default page
