import prisma from "@/libs/prismadb";
import { getPagination } from "@/utils";

export const getMakesWithLotCount = async () => {
  try {
    // Получаем список марок
    const makesData = await prisma.make.findMany({
      select: {
        id: true,
        name: true,
      },
      orderBy: { name: "asc" },
    });

    // Для каждой марки получаем количество активных лотов
    const makesWithLotCount = await Promise.all(
      makesData.map(async make => {
        const lotCount = await prisma.listing.count({
          where: {
            make_id: make.id,
            published: true, // Учитываем только опубликованные лоты
            deleted_at: null, // Исключаем удаленные лоты
          },
        });

        return {
          id: make.id,
          name: make.name,
          lotCount,
        };
      }),
    );

    return {
      data: makesWithLotCount,
    };
  } catch (error) {
    throw new Error(error);
  }
};

export const getMakes = async isSticky => {
  try {
    const filter = isSticky !== undefined ? { is_sticky: isSticky } : {};

    const data = await prisma.make
      .findMany({
        where: filter,
        select: { id: true, name: true, is_sticky: true },
        orderBy: { name: "asc" },
      })
      .catch(() => []);

    return {
      data,
    };
  } catch (error) {
    throw new Error(error);
  }
};

export const getMakeById = async id => {
  try {
    if (!id) {
      throw new Error("The 'id' parameter is required.");
    }

    const data = await prisma.make.findUnique({
      where: { id },
      include: {
        lots: true,
        marketInfo: true,
      }
    });

    if (!data) {
      throw new Error(`Make with id ${id} not found.`);
    }

    return {
      data,
    };
  } catch (error) {
    throw new Error(error.message || "An error occurred while retrieving the make.");
  }
};
export const getMarketInfoById = async (id) => {
  try {
    if (!id) {
      throw new Error("The 'id' parameter is required.");
    }

    // Получаем данные о конкретном рыночном объекте и информацию о модели
    const data = await prisma.marketInfo.findUnique({
      where: { id },
      include: {
        make: true, // Получаем также информацию о марке
      },
    });

    if (!data) {
      throw new Error(`MarketInfo with id ${id} not found.`);
    }

    return {
      data,
    };
  } catch (error) {
    throw new Error(error.message || "An error occurred while retrieving the marketInfo.");
  }
};

export const getMakesAndModels = async () => {
  try {
    const makesData = await prisma.make.findMany({
      select: { id: true, name: true },
      orderBy: { name: "asc" },
    });

    const modelsData = {};

    for (const make of makesData) {
      const models = await prisma.model.findMany({
        where: { make_id: make.id },
        select: { name: true },
        orderBy: { name: "asc" },
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

export const getCityCategories = async query => {
  try {
    const { page = 1, take = 10, city, sticky } = query || {};

    let pagination = getPagination({ page, take });

    const where = {
      cities: {
        some: {
          city: {
            slug: city,
          },
        },
      },
      is_sticky: typeof sticky === "boolean" ? sticky : undefined,
    };

    const results = await prisma.category.count({ where });
    const data = await prisma.category.findMany({
      where,
      take: pagination.take,
      skip: pagination.skip,
      orderBy: { name: "asc" },
    });

    pagination = getPagination({ ...pagination, results });

    return {
      data,
      results,
      pagination,
    };
  } catch (error) {
    throw new Error(error);
  }
};

export const getCategoryBySlug = async (slug, query) => {
  try {
    const { city } = query || {};

    const where = {
      slug,
      cities: {
        some: {
          city: {
            slug: city,
          },
        },
      },
    };

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
    });

    return {
      ...category,
      seo_title: city ? category?.cities?.[0]?.seo_title : undefined,
      seo_description: city ? category?.cities?.[0]?.seo_description : undefined,
      cities: undefined,
    };
  } catch (error) {
    throw new Error(error);
  }
};

export const getCategoryList = async () => {
  try {
    const data = await prisma.category
      .findMany({
        select: { id: true, name: true },
        orderBy: { name: "asc" },
      })
      .catch(() => []);

    return { data };
  } catch (error) {
    throw new Error(error);
  }
};
