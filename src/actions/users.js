import { getServerSession } from "next-auth/next";
import { authHandler } from "@/app/api/auth/[...nextauth]/route";

import prisma from "@/libs/prismadb";
import { getPagination } from "@/utils";

export async function getCurrentSession() {
  return await getServerSession(authHandler);
}

export async function getCurrentUser() {
  try {
    const session = await getCurrentSession();

    if (!session?.user?.email) {
      return null;
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
        balance: true,
        bids: {
          include: {
            lot: true,
          },
        },
      },
    });

    if (!currentUser) {
      return null;
    }

    return {
      ...currentUser,
      created_at: currentUser.created_at.toISOString(),
      updated_at: currentUser.created_at.toISOString(),
      email_verified: true,
    };
  } catch (error) {
    return null;
  }
}

export const getUserBids = async (userId, query) => {
  try {
    const { page = 1, take = 10, status } = query || {};

    const pagination = {
      page: page > 1 ? page : 1,
      pages: 0,
      take,
      skip: page > 1 ? take * (page - 1) : 0,
    };

    const where = {
      user_id: userId,
      ...(status ? { status } : {}),
    };

    // Aggregate to get the count and sum of CURRENT bids
    const [countResult, sumResult] = await prisma.$transaction([
      prisma.bid.count({ where }),
      prisma.bid.aggregate({
        _sum: {
          amount: true,
        },
        where: {
          user_id: userId,
          status: "CURRENT", // Only count CURRENT bids
        },
      }),
    ]);

    const bids = await prisma.bid.findMany({
      where,
      include: {
        lot: true,
      },
      take: pagination.take,
      skip: pagination.skip,
      orderBy: {
        created_at: "desc",
      },
    });

    pagination.pages = Math.ceil(countResult / pagination.take);

    const formattedBids = bids.map(bid => {
      return {
        lot: bid.lot.id,
        vin: bid.lot.vin,
        year: bid.lot.year,
        auction_at: new Date(bid.lot.auction_at).toUTCString(),
        current_bid: bid.lot.current_bid,
        bidStatus: bid.status,
        amount: bid.amount,
        slug: bid.lot.slug,
      };
    });

    return {
      bids: formattedBids,
      results: countResult,
      pages: pagination.pages,
      usedSum: sumResult._sum.amount || 0, // The sum of "CURRENT" bids
    };
  } catch (error) {
    throw new Error(error);
  }
};

export const getUserFavourites = async (userId, query) => {
  try {
    const { page = 1, take = 10, auction_at } = query || {};

    const pagination = {
      page: page > 1 ? page : 1,
      pages: 0,
      take,
      skip: page > 1 ? take * (page - 1) : 0,
    };

    const where = {
      user_id: userId,
      listing: {
        // Убедиться, что auction_at соответствует фильтру
        auction_at:
          auction_at === "current" ? { gte: new Date() } : auction_at === "completed" ? { lt: new Date() } : undefined,
      },
    };

    const results = await prisma.favourite.count({ where });

    const favourites = await prisma.favourite.findMany({
      where: {
        user_id: userId,
        listing: {
          auction_at:
            auction_at === "current" ? { gte: new Date() } :
            auction_at === "completed" ? { lt: new Date() } : undefined,
        },
      },
      take: pagination.take,
      skip: pagination.skip,
      orderBy: {
        created_at: "desc",
      },
      include: {
        listing: {
          include: {
            media: true,
          },
        },
      },
    });
    
    // Фильтрация результатов на уровне кода, чтобы исключить записи без listing
    const validFavourites = favourites.filter(fav => fav.listing !== null);
    
    pagination.pages = Math.ceil(validFavourites.length / pagination.take);
    
    return {
      favourites: validFavourites,
      results: validFavourites.length,
      pages: pagination.pages,
    };
    
  } catch (error) {
    throw new Error(error);
  }
};

export const getUserTransactions = async (userId, query) => {
  try {
    const { page = 1, take = 20, status } = query || {};

    const pagination = {
      page: page > 1 ? page : 1,
      pages: 0,
      take,
      skip: page > 1 ? take * (page - 1) : 0,
    };

    const where = {
      user_id: userId,
      ...(status ? { status } : {}), // Фильтр по статусу, если указан
    };

    // Подсчитываем общее количество транзакций
    const totalTransactions = await prisma.transaction.count({ where });

    // Получаем список транзакций с количеством комментариев
    const transactions = await prisma.transaction.findMany({
      where,
      take: pagination.take,
      skip: pagination.skip,
      orderBy: {
        date: "desc",
      },
      include: {
        user: true,
      },
    });

    // Обновляем количество страниц
    pagination.pages = Math.ceil(totalTransactions / pagination.take);

    // Форматируем транзакции для фронтенда
    const formattedTransactions = transactions.map(transaction => ({
      id: transaction.id,
      date: transaction.date.toISOString(),
      balance: transaction.balance,
      status: transaction.status,
    }));

    return {
      transactions: formattedTransactions,
      total: totalTransactions,
      pages: pagination.pages,
    };
  } catch (error) {
    throw new Error(error.message || "An error occurred while fetching transactions.");
  }
};

export const getUsers = async query => {
  try {
    const { page = 1, take = 10 } = query || {};

    let pagination = getPagination({ page, take });

    const where = {};
    const results = await prisma.user.count({ where });
    const data = await prisma.user.findMany({
      where,
      take: pagination.take,
      skip: pagination.skip,
      orderBy: {
        created_at: "desc",
      },
    });

    pagination = getPagination({ ...pagination, results });

    return { data, results, pagination };
  } catch (error) {
    throw new Error(error);
  }
};

export const getUserById = async id => {
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
    });

    if (!user) {
      return null;
    }

    return user;
  } catch (error) {
    return null;
  }
};
