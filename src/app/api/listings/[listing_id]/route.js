import { NextResponse } from 'next/server'
import { getCurrentUser } from '@/actions/users'
import prisma from '@/libs/prismadb'

export async function PUT(req, { params }) {
  const currentUser = await getCurrentUser()
  if (!currentUser) {
    return NextResponse.error()
  }

  const { listing_id } = params || {}
  const body = await req.json()

  const { listingId, published } = {
    ...body,
    listingId: listing_id ? parseInt(listing_id) : null,
  }

  await prisma.listing.update({
    where: { id: listingId },
    data: { published },
  })

  return new Response(null, { status: 200 })
}

export async function DELETE(req, { params }) {
  const currentUser = await getCurrentUser()
  if (!currentUser) {
    return NextResponse.error()
  }

  const { listing_id } = params || {}
  const { listingId } = {
    listingId: listing_id ? parseInt(listing_id) : null,
  }

  await prisma.listing.delete({
    where: { id: listingId },
  })

  return NextResponse.json(deletedListing)
}
