import { getServerSession } from 'next-auth/next'
import { authHandler } from '@/app/api/auth/[...nextauth]/route'

import prisma from '@/libs/prismadb'
import { getPagination } from '@/utils'

export async function getCurrentSession() {
  return await getServerSession(authHandler)
}

export async function getCurrentUser() {
  try {
    const session = await getCurrentSession()

    if (!session?.user?.email) {
      return null
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        email_verified: true,
        image: true,
        role: true,
        created_at: true,
        updated_at: true,
        profile: true,
        bids: true,
      },
    })

    if (!currentUser) {
      return null
    }

    return {
      ...currentUser,
      created_at: currentUser.created_at.toISOString(),
      updated_at: currentUser.created_at.toISOString(),
      email_verified: true,
    }
  } catch (error) {
    return null
  }
}

export const getUsers = async (query) => {
  try {
    const { page = 1, take = 10 } = query || {}

    let pagination = getPagination({ page, take })

    const where = {}
    const results = await prisma.user.count({ where })
    const data = await prisma.user.findMany({
      where,
      take: pagination.take,
      skip: pagination.skip,
      orderBy: {
        created_at: 'desc',
      },
    })

    pagination = getPagination({ ...pagination, results })

    return { data, results, pagination }
  } catch (error) {
    throw new Error(error)
  }
}

export const getUserById = async (id) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        profile: true,
        listings: {
          take: 6,
        },
        // favourites: true,
      },
      // take: 6,
    })

    if (!user) {
      return null
    }

    return user
  } catch (error) {
    return null
  }
}
