import React from 'react'

import PageBanner from '@/components/Common/PageBanner'
import LeftSidebar from '@/components/Dashboard/LeftSidebar'

import { BlogPostCreateForm } from '@/components/blog'
import { getCountryList } from '@/actions/countries'

export const metadata = { title: 'New blog post' }

const page = async () => {
  const [countries] = await Promise.all([getCountryList()])

  return (
    <>
      <PageBanner pageTitle="New blog post" />
      <div className="ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <LeftSidebar />
            </div>
            <div className="col-lg-8">
              <BlogPostCreateForm
                metadata={{
                  countries: countries?.data || [],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
