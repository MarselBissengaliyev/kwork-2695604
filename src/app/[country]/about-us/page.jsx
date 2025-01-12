import React from 'react'
import PageBanner from '@/components/Common/PageBanner'
import Image from 'next/image'

import Link from 'next/link'
import WorkArea from '@/containers/WorkArea'
import Testimony from '@/containers/Testimony'
import Favour from '@/containers/Favour'
import Partner from '@/containers/Partner'
import {Subscribe} from '@/containers/Subscribe'
import Blog from '@/containers/Blog'
import aboutImg from './../../../../public/images/about-img.png'

import { getBlogPosts } from '@/actions/blog-posts'

const page = async () => {
  const { posts } = await getBlogPosts()
  return (
    <>
      <PageBanner pageTitle="About Us" />
      <div className="about-us-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <h2>
                  We Are Top #1 classNameified Ads Site Where 5 Millions User
                  Trust Us
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum aenean aliquam eu non dignissim quam. Justo, turpis
                  tincidunt eget in tellus orci lobortis. Turpis adipiscing
                  purus et mauris sed commodo sit. Nisi ultrices in mauris magna
                  nulla donec felis purus et mauris sed commodo sit. Nisi
                  ultrices in mauris.
                </p>

                <Link href="/authors" className="default-btn active">
                  Be A Trusted User
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-img">
                <Image
                  src={aboutImg}
                  width={'auto'}
                  height={'auto'}
                  alt="about"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <WorkArea />
      <Testimony />
      <Favour />
      <Partner />
      <Subscribe />
      <Blog blogPosts={posts} />
    </>
  )
}

export default page
