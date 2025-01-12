import { NextResponse } from 'next/server'
import { getCurrentUser } from '@/actions/users'
import prisma from '@/libs/prismadb'

export async function POST(request, { params }) {
  const currentUser = await getCurrentUser()
  if (!currentUser) {
    return NextResponse.error()
  }
  const { listingId } = params

  if (!listingId) {
    throw new Error('Invalid ID')
  }

  const favExist = await prisma.favourite.findFirst({
    where: {
      user_id: currentUser.id,
      listing_id: parseInt(listingId),
    },
  })

  if (favExist) {
    throw new Error('Already exist!')
  }

  const fav = await prisma.favourite.create({
    data: {
      user_id: currentUser.id,
      listing_id: parseInt(listingId),
    },
  })

  return NextResponse.json(fav)
}

export async function DELETE(request, { params }) {
  const currentUser = await getCurrentUser()
  if (!currentUser) {
    return NextResponse.error()
  }
  const { listingId } = params
  if (!listingId) {
    throw new Error('Invalid ID')
  }

  const findFavorite = await prisma.favourite.findFirst({
    where: {
      user_id: currentUser.id,
      listing_id: parseInt(listingId),
    },
  })
  if (!findFavorite) {
    throw new Error('Not found!')
  }
  const deletedFavorite = await prisma.favourite.delete({
    where: {
      id: findFavorite.id,
    },
  })

  return NextResponse.json(deletedFavorite)
}
