import prisma from '@/libs/prismadb'

export const getCountryList = async () => {
  try {
    const data = await prisma.country
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
