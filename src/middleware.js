import { NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'

import { COUNTRIES } from '@/enums'

export default createMiddleware({
  locales: Object.values(COUNTRIES),
  defaultLocale: COUNTRIES.US,
})

export const config = {
  matcher: [
    '/:country/',
    '/((?!api|_next/static|_next/image|images|favicon.ico).*)',
  ],
}
