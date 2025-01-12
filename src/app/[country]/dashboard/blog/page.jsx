import React from 'react'
import { redirect } from 'next/navigation'

import { getBlogPosts } from '@/actions/blog-posts'
import { getCurrentUser } from '@/actions/users'

import { BlogContent } from '@/components/blog'
import PageBanner from '@/components/Common/PageBanner'

const page = async () => {
  const { posts } = await getBlogPosts()
  const currentUser = await getCurrentUser()

  const isAdmin = currentUser?.role === 'ADMIN'
  if (!isAdmin) {
    redirect('/')
  }
  return (
    <>
      <PageBanner pageTitle="Blog" />
      <BlogContent blogPosts={posts} />
    </>
  )
}

export default page
