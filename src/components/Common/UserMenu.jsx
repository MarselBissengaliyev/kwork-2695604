'use client'

import React, { useTransition } from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import userImg from '../../../public/images/authors/author-1.jpg'
import { ROUTER } from '@/app/router'
import { useTranslations } from 'next-intl'

const UserMenu = ({ currentUser }) => {
  const t = useTranslations()

  const links = [
    {
      label: t('links.dashboard'),
      href: ROUTER.DASHBOARD,
      icon: () => <i className="ri-dashboard-line"></i>,
      admin: false,
    },
    {
      label: t('links.listings'),
      href: ROUTER.USER_LISTINGS,
      icon: () => <i className="ri-list-check"></i>,
      admin: false,
    },
    {
      label: t('links.favourites'),
      href: ROUTER.USER_FAVOURITES,
      icon: () => <i className="ri-bookmark-3-line"></i>,
      admin: false,
    },
    {
      label: t('links.settings'),
      href: ROUTER.USER_SETTINGS,
      icon: () => <i className="ri-settings-line"></i>,
      admin: false,
    },
  ]

  const isAdmin = currentUser?.role === 'ADMIN'
  const currentRoute = usePathname()

  return (
    <>
      {!currentUser && (
        <li className="register">
          <Link href={ROUTER.REGISTER} className="read-more">
            {t('links.register')}
          </Link>
        </li>
      )}
      <li>
        {currentUser ? (
          <>
            <div className="user-menu-dropdown">
              <div className="user-img d-flex align-items-center">
                <Image
                  src={currentUser?.image ? currentUser.image : userImg}
                  width={30}
                  height={30}
                  alt="user"
                  className="rounded-circle"
                />
                <h6 className="m-0 ms-2">{currentUser.name}</h6>
              </div>

              <div className="dropdown">
                <ul>
                  {links?.map(({ label, href, admin, icon: Icon }, key) =>
                    admin ? (
                      isAdmin ? (
                        <li key={key}>
                          <Link
                            href={href}
                            className={`user-nav-link ${
                              currentRoute === href ? 'active' : 'non-active'
                            }`}
                          >
                            <Icon /> {label}
                          </Link>
                        </li>
                      ) : (
                        <></>
                      )
                    ) : (
                      <li key={key}>
                        <Link
                          href={href}
                          className={`user-nav-link ${
                            currentRoute === href ? 'active' : 'non-active'
                          }`}
                        >
                          <Icon /> {label}
                        </Link>
                      </li>
                    )
                  )}

                  {/* <li>
                    <Link
                      href="/listings/my-listings"
                      className={`user-nav-link ${
                        currentRoute === '/listings/my-listings'
                          ? 'active'
                          : 'non-active'
                      }`}
                    >
                      <i className="ri-list-check"></i> My Listings
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link
                      href="/listings/new"
                      className={`user-nav-link ${
                        currentRoute === '/listings/new'
                          ? 'active'
                          : 'non-active'
                      }`}
                    >
                      <i className="ri-menu-add-line"></i> Add Listings
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link
                      href="/listings/favourites"
                      className={`user-nav-link ${
                        currentRoute === '/listings/favourites'
                          ? 'active'
                          : 'non-active'
                      }`}
                    >
                      <i className="ri-bookmark-3-line"></i> Favourites
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link
                      href="/user/profile/edit"
                      className={`user-nav-link ${
                        currentRoute === '/user/profile/edit'
                          ? 'active'
                          : 'non-active'
                      }`}
                    >
                      <i className="ri-user-add-line"></i> Update Profile Info
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link
                      href="/user/settings"
                      className={`user-nav-link ${
                        currentRoute === '/user/settings'
                          ? 'active'
                          : 'non-active'
                      }`}
                    >
                      <i className="ri-settings-line"></i> Settings
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link
                      href={`/author/${currentUser.id}`}
                      className={`user-nav-link ${
                        currentRoute === `/author/${currentUser.id}`
                          ? 'active'
                          : 'non-active'
                      }`}
                    >
                      <i className="ri-focus-3-line"></i> View My Profile
                    </Link>
                  </li> */}
                  <hr />
                  <li>
                    <button onClick={() => signOut()} className="read-more">
                      <i className="ri-logout-box-r-line"></i>{' '}
                      {t('links.logout')}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <Link href={ROUTER.LOGIN} className="read-more">
            {t('links.login')}
          </Link>
        )}
      </li>
    </>
  )
}

export default UserMenu
