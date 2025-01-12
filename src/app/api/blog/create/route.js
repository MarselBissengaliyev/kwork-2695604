import crypto from 'node:crypto'

import { NextResponse } from 'next/server'
import prisma from '@/libs/prismadb'
import { getCurrentUser } from '@/actions/users'
import { slugify } from '@/utils/slugify'

export async function POST(request) {
  const currentUser = await getCurrentUser()
  if (!currentUser) {
    return NextResponse.json(
      { message: 'Authentication faild!' },
      { status: 401 }
    )
  }

  const body = await request.json()
  const { title, content, picture, seo_title, seo_description, country_id } =
    body

  let slug = slugify(title)

  const slugExist = await prisma.blogPost.findFirst({
    where: { slug },
  })

  if (slugExist) {
    const hash = crypto.randomBytes(12).toString('base64url')
    slug = `${slug}-${hash}`
  }

  Object.keys(body).forEach((value) => {
    if (!body[value]) {
      NextResponse.json(
        {
          message: 'One or more fileds are empty!',
        },
        { status: 404 }
      )
    }
  })

  const blog = await prisma.blogPost.create({
    data: {
      title,
      slug,
      content,
      picture,
      seo_title,
      seo_description,
      published: true,
      user_id: currentUser.id,
      country_id,
    },
  })

  return NextResponse.json(blog)
}
