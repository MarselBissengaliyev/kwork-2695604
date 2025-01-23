import prisma from "@/libs/prismadb";
import { average } from "@/utils/common";
import { getCurrentUser } from "./users";
import { getPagination } from "@/utils";

export const getNearestLots = async (limit = 5) => {
  try {
    const now = new Date();

    const lots = await prisma.listing.findMany({
      where: {
        auction_at: {
          gte: now,
        },
      },
      orderBy: {
        auction_at: "asc",
      },
      take: limit,
      include: {
        media: {
          select: {
            url: true, // Matches your schema for Media
          },
        },
        bids: {
          select: {
            amount: true, // Corrected from `bid_amount` to `amount`
          },
        },
      },
    });

    return lots.map(lot => ({
      ...lot,
      firstImage: lot.media?.[0]?.url || null,
      avgPrice: lot.final_bid || 0, // Adjust if needed
      currentBid: Math.max(...lot.bids.map(bid => bid.amount), 0),
    }));
  } catch (error) {
    throw new Error(error);
  }
};

export const getListings = async query => {
  try {
    const { page = 1, take = 10, published, category, country, city } = query || {};

    let pagination = getPagination({ page, take });

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
    };

    const results = await prisma.listing.count({ where });
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
        created_at: "desc",
      },
    });

    pagination = getPagination({ ...pagination, results });

    return {
      listings:
        listings?.map(listing => ({
          ...listing,
          categories: listing?.categories?.map(({ category }) => category) || [],
          rating: average(listing?.reviews?.map(({ rating }) => rating) || []),
          price: 0,
        })) || [],
      results,
      pages: pagination.pages,
      pagination,
    };
  } catch (error) {
    throw new Error(error);
  }
};

export const getListingBySlug = async slug => {
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
        media: { select: { url: true } }, // Добавляем media
        make: {
          include: {
            marketInfo: true,
            lots: true,
          },
        },
        model: true,
        bids: true
      },
    });

    const categories = listing?.categories?.map(({ category }) => ({ ...category })) || [];

    return {
      ...listing,
      categories,
      price: 0,
    };
  } catch (error) {
    throw new Error(error);
  }
};

export const getOtherLotsAndSoldCars = async slug => {
  try {
    const listing = await prisma.listing.findFirst({
      where: { slug },
      take: 5,
      include: {
        make: {
          include: {
            models: true,
          },
        },
        media: { select: { url: true } },
        bids: true,
      },
    });

    if (!listing) {
      throw new Error('NOT_FOUND'); // Специальная ошибка для редиректа
    }

    const { make, model_id } = listing;

    const activeListings = await prisma.listing.findMany({
      where: {
        make_id: make.id,
        model_id: model_id,
        slug: { not: slug },
      },
      include: {
        media: { select: { url: true } },
        bids: {
          take: 1,
          orderBy: { amount: "desc" },
          select: { amount: true },
        },
      },
    });

    return {
      activeListings: activeListings.map(l => ({
        ...l,
        avgPrice: l.final_bid || 0,
        currentBid: Math.max(...l.bids.map(bid => bid.amount), 0),
      })),
    };
  } catch (error) {
    if (error.message === 'NOT_FOUND') {
      throw error; // Пробрасываем ошибку для обработки в компоненте
    }
    throw new Error(`Failed to fetch listings: ${error.message}`);
  }
};



export const getUserListings = async () => {
  try {
    const { id: userId } = await getCurrentUser();

    const listings = await prisma.listing.findMany({
      where: { user_id: userId },
      orderBy: {
        created_at: "desc",
      },
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });

    return listings;
  } catch (error) {
    throw new Error(error);
  }
};

export const getUserFavouriteListings = async () => {
  try {
    const { id: userId } = await getCurrentUser();

    const favourites = await prisma.favourite.findMany({
      where: { user_id: userId },
      orderBy: {
        created_at: "desc",
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
    });

    return favourites;
  } catch (error) {
    throw new Error(error);
  }
};
