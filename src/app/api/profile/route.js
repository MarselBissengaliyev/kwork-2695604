import { NextResponse } from 'next/server'
import prisma from '@/libs/prismadb'

export async function GET(req) {
  const { searchParams } = new URL(req.url)

  const query = {
    country: searchParams.get('country'),
    limit: searchParams.get('limit'),
  }
  const country = query?.country
  const limit =
    typeof query?.limit === 'number'
      ? query?.limit
      : typeof query?.limit === 'string'
        ? parseInt(query?.limit)
        : undefined

  const where = {
    country: country ? { code: country } : undefined,
  }

  const categories = await prisma.category.findMany({
    where,
    select: {
      slug: true,
      name: true,
    },
    take: limit ? limit : 50,
  })

  const response = NextResponse.json({ data: categories })

  return response
}
