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
      ...(status ? { status } : {}), // Фильтр по статусу, если указан
    };

    const results = await prisma.bid.count({ where });

    const bids = await prisma.bid.findMany({
      where,
      include: {
        lot: true, // Включаем связь с таблицей "lot"
      },
      take: pagination.take,
      skip: pagination.skip,
      orderBy: {
        created_at: "desc",
      },
    });

    pagination.pages = Math.ceil(results / pagination.take);

    // Формируем результаты в зависимости от статуса
    const formattedBids = bids.map(bid => {
      if (bid.status === "CURRENT") {
        return {
          lot: bid.lot.id,
          vin: bid.lot.vin,
          vehicle: bid.lot.title,
          saleDate: new Date(bid.created_at).toUTCString(),
          state: bid.lot.state,
          bidStatus: bid.status,
          myMaxBid: bid.amount,
          saleType: bid.lot.sale_type,
        };
      } else if (bid.status === "WON") {
        return {
          date: bid.lot.sale_date,
          orderId: bid.lot.id,
          vin: bid.lot.vin,
          model: bid.lot.title,
          price: bid.amount,
          shippingStatus: "",
          saledate: new Date(bid.created_at).toUTCString(),
          paymentStatus: "Not paid",
          shippingAdded: "",
          deliveryStatus: "-",
        };
      } else if (bid.status === "LOST") {
        return {
          lot: bid.lot.id,
          vin: bid.lot.vin,
          vehicle: bid.lot.title,
          saleDate: new Date(bid.created_at).toUTCString(),
          finalBid: bid.amount,
          state: bid.lot.state,
          myMaxBid: bid.amount,
          comment: "High price",
        };
      }
    });

    return {
      bids: formattedBids,
      results,
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
        user: {
          select: {
            id: true,
            _count: {
              select: {
                reviews: true, // Количество комментариев пользователя
              },
            },
          },
        },
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
      comments: transaction.user?._count?.comments || 0, // Добавляем количество комментариев
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
