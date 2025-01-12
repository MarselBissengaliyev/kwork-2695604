import React from 'react'

import { getCurrentUser } from '@/actions/users'
import { PageHeader } from '@/components/page'
import { ROUTER } from '@/app/router'
import { Cities } from '@/components/city'
import { getCities } from '@/actions/cities'
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
    canonical: `https://${config.domain}/cities`,
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

  const cities = await getCities({ country, page, take: 20 })
  const currentUser = await getCurrentUser()

  return (
    <>
      <PageHeader
        title="Cities"
        breadcrumbs={[
          { href: ROUTER.HOME, label: 'Home' },
          { label: 'Cities' },
        ]}
      />
      <Cities
        currentUser={currentUser}
        data={
          cities?.data?.map((city) => ({
            ...city,
            href: city?.slug ? `${ROUTER.CITY}/${city?.slug}` : '#',
          })) || []
        }
        results={cities?.results}
        pagination={cities?.pagination}
      />
    </>
  )
}

export default page
