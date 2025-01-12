'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Mousewheel } from 'swiper'
import { formatDateBlog } from '@/utils/formatDate'
import { BlogCard } from '@/components/blog'
import { ROUTER } from '@/app/router'

const Blog = ({ blogPosts }) => {
  return (
    <div className="blog-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h2>Blog Posts</h2>
        </div>
        <Swiper
          spaceBetween={30}
          navigation={true}
          mousewheel={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
          modules={[Navigation, Mousewheel]}
          className="blog-slide owl-carousel owl-theme"
        >
          {blogPosts?.map((post, key) => (
            <SwiperSlide key={key}>
              <BlogCard
                href={post?.slug ? `${ROUTER.BLOG}/${post?.slug}` : '#'}
                {...post}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Blog
