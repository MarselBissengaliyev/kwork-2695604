import { NextResponse } from 'next/server'
import { getCurrentUser } from '@/actions/users'
import prisma from '@/libs/prismadb'

export async function POST(request, { params }) {
  const currentUser = await getCurrentUser()
  if (!currentUser) {
    return NextResponse.error()
  }

  const { listing_id } = params || {}
  const body = await request.json()

  const { listingId, rating, comment } = {
    ...body,
    listingId: listing_id ? parseInt(listing_id) : null,
    rating: body?.rating ? parseInt(body?.rating.value) : 0,
  }

  const review = await prisma.review.create({
    data: {
      listing_id: listingId,
      user_id: currentUser.id,
      rating,
      comment,
      published: false,
    },
  })

  return NextResponse.json(review)
}
