import prisma from '@/libs/prismadb'
import { getPagination } from '@/utils'

export const getCategories = async (query) => {
  try {
    const { page = 1, take = 10, country, sticky } = query || {}

    let pagination = getPagination({ page, take })

    const where = {
      country: country
        ? {
            code: country,
          }
        : undefined,
      is_sticky: typeof sticky === 'boolean' ? sticky : undefined,
    }

    const results = await prisma.category.count({ where })
    const data = await prisma.category.findMany({
      where,
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

export const getCityCategories = async (query) => {
  try {
    const { page = 1, take = 10, city, sticky } = query || {}

    let pagination = getPagination({ page, take })

    const where = {
      cities: {
        some: {
          city: {
            slug: city,
          },
        },
      },
      is_sticky: typeof sticky === 'boolean' ? sticky : undefined,
    }

    const results = await prisma.category.count({ where })
    const data = await prisma.category.findMany({
      where,
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

export const getCategoryBySlug = async (slug, query) => {
  try {
    const { city } = query || {}

    const where = {
      slug,
      cities: {
        some: {
          city: {
            slug: city,
          },
        },
      },
    }

    const category = await prisma.category.findFirst({
      where,
      include: {
        cities: city
          ? {
              select: {
                seo_title: true,
                seo_description: true,
              },
            }
          : undefined,
      },
    })

    return {
      ...category,
      seo_title: city ? category?.cities?.[0]?.seo_title : undefined,
      seo_description: city
        ? category?.cities?.[0]?.seo_description
        : undefined,
      cities: undefined,
    }
  } catch (error) {
    throw new Error(error)
  }
}

export const getCategoryList = async () => {
  try {
    const data = await prisma.category
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
