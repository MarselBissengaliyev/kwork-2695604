import prisma from '@/libs/prismadb'
import { getPagination } from '@/utils'

export const getCities = async (query) => {
  try {
    const { page = 1, take = 10, sticky, country } = query || {}

    let pagination = getPagination({ page, take })

    const where = {
      country: country
        ? {
            code: country,
          }
        : undefined,
      is_sticky: typeof sticky === 'boolean' ? sticky : undefined,
    }

    const results = await prisma.city.count({ where })
    const data = await prisma.city.findMany({
      where,
      include: {
        country: {
          select: {
            slug: true,
            name: true,
          },
        },
      },
      take: pagination.take,
      skip: pagination.skip,
      orderBy: { name: 'asc' },
    })

    pagination = getPagination({ ...pagination, results })

    return {
      data,
      results,
      pagination,
    }
  } catch (error) {
    throw new Error(error)
  }
}

export const getCityBySlug = async (slug) => {
  try {
    const result = await prisma.city.findFirst({ where: { slug } })
    return result
  } catch (error) {
    throw new Error(error)
  }
}

export const getCityList = async () => {
  try {
    const data = await prisma.city
      .findMany({
        select: { id: true, name: true },
        orderBy: { name: 'asc' },
      })
      .catch(() => [])

    return { data }
  } catch (error) {
    throw new Error(error)
  }
}
