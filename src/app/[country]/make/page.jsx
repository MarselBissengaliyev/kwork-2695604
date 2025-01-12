import React from 'react'

import { getCurrentUser } from '@/actions/users'
import { getMakes } from '@/actions/makes'
import { Makes } from '@/components/make'
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

  const categories = await getMakes()
  const currentUser = await getCurrentUser()

  return (
    <>
      <PageHeader
        title="Makes"
        breadcrumbs={[
          { href: ROUTER.HOME, label: 'Home' },
          { label: 'Makes' },
        ]}
      />
      <Makes
        currentUser={currentUser}
        data={
          categories?.data?.map((category) => ({
            ...category,
            href: category?.slug
              ? `${ROUTER.MAKES}/${category?.slug}`
              : '#',
          })) || []
        }
        // results={categories?.results}
        // pagination={categories?.pagination}
      />
    </>
  )
}

export default page