import React from 'react'
import PageBanner from '@/components/Common/PageBanner'

import { getCountryList } from '@/actions/countries'
import { getCategoryList } from '@/actions/categories'
import { ListingCreateForm } from '@/containers/listing'
import { getCityList } from '@/actions/cities'

const page = async () => {
  const [countries, categories, cities] = await Promise.all([
    getCountryList(),
    getCategoryList(),
    getCityList(),
  ])

  return (
    <>
      <PageBanner pageTitle="Add Listing" />
      <ListingCreateForm
        metadata={{
          countries: countries?.data || [],
          categories: categories?.data || [],
          cities: cities?.data || [],
        }}
      />
    </>
  )
}

export default page
