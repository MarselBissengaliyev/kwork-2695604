import prisma from '@/libs/prismadb'
import { getPagination } from '@/utils'

export const getReviews = async (query) => {
  try {
    const { page = 1, take = 10 } = query || {}

    let pagination = getPagination({ page, take })

    const where = { deleted_at: null }

    const results = await prisma.review.count({ where })
    const data = await prisma.review
      .findMany({
        where,
        orderBy: {
          created_at: 'desc',
        },
        include: {
          user: {
            select: {
              name: true,
            },
          },
          listing: {
            select: {
              id: true,
              slug: true,
              title: true,
            },
          },
        },
        skip: pagination.skip,
        take: pagination.take,
      })
      .catch(() => [])

    pagination = getPagination({ ...pagination, results })

    return { data, results, pagination }
  } catch (error) {
    throw new Error(error)
  }
}

export const getReviewByListingId = async (params) => {
  try {
    const { listingId } = params

    const reviews = await prisma.review.findMany({
      where: {
        listing_id: parseInt(listingId),
        published: true,
        deleted_at: null,
      },
      orderBy: {
        created_at: 'desc',
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    })

    if (!reviews) {
      return []
    }

    return reviews
  } catch (error) {
    throw new Error(error)
  }
}

export const updateReviewById = async (id, data) => {
  try {
    const { published } = data

    await prisma.review.update({
      where: { id },
      data: { published },
    })
  } catch (error) {
    throw new Error(error)
  }
}
