import { NextResponse } from 'next/server'
import { getCurrentUser } from '@/actions/users'
import prisma from '@/libs/prismadb'

export async function PUT(req, { params }) {
  const currentUser = await getCurrentUser()
  if (!currentUser) {
    return NextResponse.error()
  }

  const { review_id } = params || {}
  const body = await req.json()

  const { reviewId, published } = {
    ...body,
    reviewId: review_id ? parseInt(review_id) : null,
  }

  await prisma.review.update({
    where: { id: reviewId },
    data: { published },
  })

  return new Response(null, { status: 200 })
}

export async function DELETE(req, { params }) {
  const currentUser = await getCurrentUser()
  if (!currentUser) {
    return NextResponse.error()
  }
  const { review_id } = params

  const { reviewId } = {
    reviewId: review_id ? parseInt(review_id) : null,
  }

  await prisma.review.update({
    where: { id: parseInt(reviewId) },
    data: { deleted_at: new Date() },
  })

  return new Response(null, { status: 200 })
}
