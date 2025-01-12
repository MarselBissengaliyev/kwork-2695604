import prisma from '@/libs/prismadb'
import { average } from '@/utils/common'
import { getCurrentUser } from './users'
import { getPagination } from '@/utils'

export const getListings = async (query) => {
  try {
    const {
      page = 1,
      take = 10,
      published,
      category,
      country,
      city,
    } = query || {}

    let pagination = getPagination({ page, take })

    const where = {
      published,
      deleted_at: null,
      country: country
        ? {
            code: country,
          }
        : undefined,
      categories: category
        ? {
            some: {
              category: {
                slug: category,
              },
            },
          }
        : undefined,
      city: city
        ? {
            slug: city,
          }
        : undefined,
    }

    const results = await prisma.listing.count({ where })
    const listings = await prisma.listing.findMany({
      where,
      select: {
        id: true,
        slug: true,
        title: true,
        picture: true,
        country: {
          select: {
            slug: true,
            name: true,
          },
        },
        categories: {
          select: {
            category: {
              select: {
                name: true,
                slug: true,
              },
            },
          },
        },
        reviews: {
          select: {
            rating: true,
          },
        },
        user: {
          select: {
            name: true,
          },
        },
        published: true,
        created_at: true,
      },
      take: pagination.take,
      skip: pagination.skip,
      orderBy: {
        created_at: 'desc',
      },
    })

    pagination = getPagination({ ...pagination, results })

    return {
      listings:
        listings?.map((listing) => ({
          ...listing,
          categories:
            listing?.categories?.map(({ category }) => category) || [],
          rating: average(listing?.reviews?.map(({ rating }) => rating) || []),
          price: 0,
        })) || [],
      results,
      pages: pagination.pages,
      pagination,
    }
  } catch (error) {
    throw new Error(error)
  }
}

export const getListingBySlug = async (slug) => {
  try {
    const listing = await prisma.listing.findFirst({
      where: { slug },
      include: {
        categories: {
          select: {
            category: {
              select: {
                name: true,
                slug: true,
              },
            },
          },
        },
        city: {
          select: {
            slug: true,
            name: true,
          },
        },
        reviews: { select: { rating: true } },
      },
    })

    const categories =
      listing?.categories?.map(({ category }) => ({ ...category })) || []
    const rating =
      average(listing?.reviews?.map(({ rating }) => rating) || []) || 0

    return {
      ...listing,
      rating,
      categories,
      price: 0,
    }
  } catch (error) {
    throw new Error(error)
  }
}

export const getUserListings = async () => {
  try {
    const { id: userId } = await getCurrentUser()

    const listings = await prisma.listing.findMany({
      where: { user_id: userId },
      orderBy: {
        created_at: 'desc',
      },
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    })

    return listings
  } catch (error) {
    throw new Error(error)
  }
}

export const getUserFavouriteListings = async () => {
  try {
    const { id: userId } = await getCurrentUser()

    const favourites = await prisma.favourite.findMany({
      where: { user_id: userId },
      orderBy: {
        created_at: 'desc',
      },
      include: {
        listing: {
          include: {
            user: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    })

    return favourites
  } catch (error) {
    throw new Error(error)
  }
}
