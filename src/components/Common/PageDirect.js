import React from 'react'
import Link from 'next/link'
import { ROUTER } from '@/app/router'
import { useTranslations } from 'next-intl'

const PageDirect= ({ pageTitle }) => {
  const t = useTranslations()

  return (
    <div className=" overly bg-10 ptb-100 tw-text-[#8C8C8C]">
      <div className="container">
        <div className="">
          <ul className='tw-pl-0 tw-flex tw-gap-3 tw-list-none tw-text-[#8C8C8C]'>
            <li className=''>
              <Link href={ROUTER.HOME}>{t('links.home')}</Link>
            </li>
            <li>
                <span>-</span>
            </li>
            <li className=''>
              <span className=''>{pageTitle}</span>
            </li>
          </ul>
          <h2>{pageTitle}</h2>
        </div>
      </div>
    </div>
  )
}

export default PageDirect
