import prisma from '@/libs/prismadb'

export const getRegionConfiguration = async ({ country }) => {
  try {
    const result = await prisma.regionConfiguration.findFirst({
      where: { country_code: country },
    })
    return result
  } catch (error) {
    throw new Error(error)
  }
}
