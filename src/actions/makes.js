import prisma from '@/libs/prismadb'
import { getPagination } from '@/utils'

export const getMakes = async () => {
  try {
    const data = await prisma.make.findMany({
      select: { id: true, name: true },
      orderBy: { name: 'asc' },
    })
    .catch(() => [])
    
    return {
      data
    }
  } catch (error) {
    throw new Error(error)
  }
}

export const getMakesAndModels = async () => {
  try {
    const makesData = await prisma.make.findMany({
      select: { id: true, name: true },
      orderBy: { name: 'asc' },
    });

    const modelsData = {};

    for (const make of makesData) {
      const models = await prisma.model.findMany({
        where: { make_id: make.id },
        select: { name: true },
        orderBy: { name: 'asc' },
      });

      modelsData[make.id] = models.map(model => model.name);
    }

    return {
      makes: makesData,
      models: modelsData,
    };
  } catch (error) {
    throw new Error(error);
  }
};


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
