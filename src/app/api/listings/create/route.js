import crypto from 'node:crypto'

import { NextResponse } from 'next/server'
import prisma from '@/libs/prismadb'
import { getCurrentUser } from '@/actions/users'
import { slugify } from '@/utils/slugify'

export async function POST(request) {
  const currentUser = await getCurrentUser()
  if (!currentUser) {
    return NextResponse.json(
      { message: 'Authentication faild!' },
      { status: 401 }
    )
  }

  const body = await request.json()
  const {
    title,
    description,
    picture,
    address,
    features,
    category,
    country,
    city,
    // price,
  } = body

  let slug = slugify(title)

  const slugExist = await prisma.blogPost.findFirst({
    where: { slug },
  })

  if (slugExist) {
    const hash = crypto.randomBytes(12).toString('base64url')
    slug = `${slug}-${hash}`
  }

  Object.keys(body).forEach((value) => {
    if (!body[value]) {
      NextResponse.json(
        {
          message: 'One or more fileds are empty!',
        },
        { status: 404 }
      )
    }
  })

  const listing = await prisma.listing.create({
    data: {
      slug,
      title,
      description,
      picture,
      address,
      features,
      country_id: country ? parseInt(country) : undefined,
      city_id: city ? parseInt(city) : undefined,
      // price: parseInt(price, 10),
      latitude: 0,
      longitude: 0,
      published: true,
      user_id: currentUser.id,
    },
    include: {
      categories: true,
      country: true,
      city: true,
    },
  })

  if (category) {
    const listing_id = listing.id
    const category_id = parseInt(category)

    await await prisma.listingCategory.create({
      data: {
        listing_id,
        category_id,
      },
    })
  }

  return NextResponse.json(listing)
}
