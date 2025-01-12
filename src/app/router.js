const generateRouter = (paths) => {
  const prefix = null

  let router = {}

  for (const [key, value] of Object.entries(paths)) {
    router[key] = prefix ? ['/', prefix, value].join('') : value
  }

  return router
}

export const ROUTER = generateRouter({
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  LISTINGS: '/listings',
  LISTING: '/listing',
  CATEGORIES: '/c',
  MAKES: '/make',
  CITIES: '/cities',
  CITY: '/city',
  BLOG: '/blog',
  FAQ: '/faq',
  ABOUT: '/about-us',
  CONTACT: '/contact-us',
  PRIVACY: '/privacy',
  TERMS: '/terms',
  USER: '/user',
  USER_LISTINGS: '/user/listings',
  USER_LISTINGS_CREATE: '/user/listings/create',
  USER_FAVOURITES: '/user/favourites',
  USER_SETTINGS: '/user/settings',
  USER_PROFILE: '/user/profile',
  USER_PROFILE_EDIT: '/user/profile/edit',
  DASHBOARD: '/dashboard',
  DASHBOARD_LISTINGS: '/dashboard/listings',
  DASHBOARD_BLOG_POSTS: '/dashboard/blog',
  DASHBOARD_BLOG_POSTS_CREATE: '/dashboard/blog/create',
  DASHBOARD_USERS: '/dashboard/users',
  DASHBOARD_REVIEWS: '/dashboard/reviews',
})

export const API_ROUTER = {
  LOGIN: '/api/login',
  REGISTER: '/api/register',
  REVIEWS: '/api/reviews',
  LISTINGS: '/api/listings',
  CATEGORIES: '/api/categories',
  SUBSCRIPTIONS: '/api/subscriptions',
  EMAIL: '/api/email',
}
