import React from 'react'

import { getCurrentUser } from '@/actions/users'
import { getCategories } from '@/actions/categories'
import { Categories } from '@/components/category'
import { PageHeader } from '@/components/page'
import { ROUTER } from '@/app/router'
import { getRegionConfiguration } from '@/actions/region-configurations'

export const dynamic = 'force-dynamic'

export const generateMetadata = async ({ params }) => {
  const slugs = {
    country: params?.country?.toLowerCase(),
  }

  const config = slugs.country
    ? await getRegionConfiguration({ country: slugs.country }).catch(() => null)
    : null

  let metadata = {
    canonical: `https://${config.domain}/c`,
  }

  return {
    alternates: {
      canonical: metadata.canonical,
    },
  }
}

const page = async ({ params, searchParams }) => {
  const country = params?.country
  const page = parseInt(searchParams?.page) || 1

  const categories = await getCategories({ country, page, take: 20 })
  const currentUser = await getCurrentUser()

  return (
    <>
      <PageHeader
        title="Categories"
        breadcrumbs={[
          { href: ROUTER.HOME, label: 'Home' },
          { label: 'Categories' },
        ]}
      />
      <Categories
        currentUser={currentUser}
        data={
          categories?.data?.map((category) => ({
            ...category,
            href: category?.slug
              ? `${ROUTER.CATEGORIES}/${category?.slug}`
              : '#',
          })) || []
        }
        results={categories?.results}
        pagination={categories?.pagination}
      />
    </>
  )
}

export default page
