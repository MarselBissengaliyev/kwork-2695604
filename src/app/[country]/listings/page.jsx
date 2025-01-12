import { Listings } from '@/components/listing'
import { getListings } from '@/actions/listings'
import { getCurrentUser } from '@/actions/users'
import { ROUTER } from '@/app/router'

import { SearchForm } from '@/containers/search'
import Head from 'next/head'
import { PageHeader } from '@/components/page'
import { getCategoryBySlug } from '@/actions/categories'
import { getRegionConfiguration } from '@/actions/region-configurations'

export const dynamic = 'force-dynamic'

export const generateMetadata = async ({ params }) => {
  const { country } = params?.country

  let metadata = {}

  const config = await getRegionConfiguration({ country }).catch(() => null)

  if (config) {
    metadata.title = config.seo_title
    metadata.description = config.seo_description
    metadata.canonical = `https://${config.domain}/listings`
  }

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: metadata.canonical,
    },
  }
}

const page = async ({ params, searchParams }) => {
  const countryCode = params?.country
  const { category: category_slug } = searchParams || {}
  const page = parseInt(searchParams?.page) || 1

  const { listings, results, pagination } = await getListings({
    published: true,
    country: countryCode,
    category: category_slug ? category_slug : undefined,
    page,
  })
  const category = category_slug
    ? await getCategoryBySlug(category_slug)
    : category_slug
  const currentUser = await getCurrentUser()

  return (
    <>
      <PageHeader
        title="Search"
        breadcrumbs={[
          { href: ROUTER.HOME, label: 'Home' },
          { label: 'Search' },
        ]}
      >
        <SearchForm
          query={{
            label: category?.name,
            value: category?.slug,
          }}
          searchParams={searchParams}
        />
      </PageHeader>
      <Listings
        currentUser={currentUser}
        listings={
          listings?.map((listing) => ({
            ...listing,
            href: listing?.slug ? `${ROUTER.LISTING}/${listing?.slug}` : '#',
          })) || []
        }
        results={results}
        pagination={pagination}
      />
    </>
  )
}

export default page
