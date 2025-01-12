'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ROUTER } from '@/app/router'

const links = [
  {
    label: 'Dashboard',
    href: ROUTER.DASHBOARD,
  },
  {
    label: 'Users',
    href: ROUTER.DASHBOARD_USERS,
  },
  {
    label: 'Listings',
    href: ROUTER.DASHBOARD_LISTINGS,
  },
  {
    label: 'Reviews',
    href: ROUTER.DASHBOARD_REVIEWS,
  },
  {
    label: 'Create a blog post',
    href: ROUTER.DASHBOARD_BLOG_POSTS_CREATE,
  },
]

const LeftSidebar = () => {
  const currentRoute = usePathname()

  return (
    <>
      <div className="db-sidebar">
        <ul>
          {links?.map(({ href, label }, key) => (
            <li key={key}>
              <Link
                href={href}
                className={`db-link ${
                  currentRoute === href ? 'active' : 'non-active'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default LeftSidebar
