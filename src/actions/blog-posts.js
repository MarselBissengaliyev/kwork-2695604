import prisma from '@/libs/prismadb'

export const getBlogPosts = async (query) => {
  try {
    const { page = 1, take = 10, country } = query || {}

    const pagination = {
      page: page > 1 ? page : 1,
      pages: 0,
      take,
      skip: page > 1 ? take * (page - 1) : 0,
    }

    const where = {
      country: country
        ? {
            code: country,
          }
        : undefined,
      published: true,
      deleted_at: null,
    }

    const results = await prisma.blogPost.count({ where })

    const posts = await prisma.blogPost.findMany({
      where,
      select: {
        id: true,
        slug: true,
        title: true,
        picture: true,
        published: true,
        seo_title: true,
        seo_description: true,
        created_at: true,
      },
      take: pagination.take,
      skip: pagination.skip,
      orderBy: {
        created_at: 'desc',
      },
    })

    pagination.pages = Math.ceil(results / pagination.take)

    return {
      posts,
      results,
      pages: pagination.pages,
    }
  } catch (error) {
    throw new Error(error)
  }
}

export const getBlogPostBySlug = async (slug) => {
  try {
    const result = await prisma.blogPost.findFirst({ where: { slug } })
    return result
  } catch (error) {
    throw new Error(error)
  }
}
