import React from 'react'
import Link from 'next/link'
import { ROUTER } from '@/app/router'
import { useTranslations } from 'next-intl'

const PageBanner = ({ pageTitle }) => {
  const t = useTranslations()

  return (
    <div className="page-banner-area overly bg-10 ptb-100">
      <div className="container">
        <div className="page-banner-content white-title">
          <ul>
            <li>
              <Link href={ROUTER.HOME}>{t('links.home')}</Link>
            </li>
            <li>
              <span>{pageTitle}</span>
            </li>
          </ul>
          <h2>{pageTitle}</h2>
        </div>
      </div>
    </div>
  )
}

export default PageBanner
