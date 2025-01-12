import { NextResponse } from 'next/server'
import prisma from '@/libs/prismadb'
import { getCurrentUser } from '@/actions/users'

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
    bio,
    gender,
    address,
    phone,
    website,
    twitter,
    facebook,
    linkedin,
    youtube,
  } = body

  const infoExist = await prisma.profile.findFirst({
    where: {
      user_id: currentUser.id,
    },
  })

  let profile

  if (infoExist) {
    profile = await prisma.profile.update({
      where: {
        user_id: currentUser.id,
      },
      data: {
        bio,
        gender,
        address,
        phone,
        website,
        twitter,
        facebook,
        linkedin,
        youtube,
      },
    })
  } else {
    profile = await prisma.profile.create({
      data: {
        bio,
        gender,
        address,
        phone,
        website,
        twitter,
        facebook,
        linkedin,
        youtube,
        user_id: currentUser.id,
      },
    })
  }

  return NextResponse.json(profile)
}
