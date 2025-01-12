import { NextResponse } from 'next/server'
import { getCurrentUser } from '@/actions/users'
import prisma from '@/libs/prismadb'

export async function DELETE(request, { params }) {
  const currentUser = await getCurrentUser()
  if (!currentUser) {
    return NextResponse.error()
  }
  const { user_id } = params
  if (!user_id) {
    throw new Error('Invalid ID')
  }
  if (parseInt(user_id) === currentUser.id) {
    return NextResponse.error()
  }

  const deletedUser = await prisma.user.delete({
    where: {
      id: parseInt(user_id),
    },
  })

  return NextResponse.json(deletedUser)
}
