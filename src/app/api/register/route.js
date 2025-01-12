import { NextResponse } from 'next/server'
import prisma from '@/libs/prismadb'
import { hashPassword } from '@/utils'

export async function POST(request) {
  const body = await request.json()
  const { name, email, password } = body

  const existingUser = await prisma.user.findUnique({
    where: { email },
  })

  if (existingUser) {
    return NextResponse.json({ message: 'User with this email already exists' })
  }

  const passwordHash = await hashPassword(password)

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: passwordHash,
    },
  })

  return NextResponse.json(user)
}
