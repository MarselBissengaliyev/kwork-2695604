'use client'

import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Breadcrumbs = ({ breadcrumbs, classNames }) =>
  breadcrumbs?.length ? (
    <ul className="tw-list-none tw-flex tw-justify-start tw-items-center tw-flex-row tw-gap-3 tw-px-0">
      {breadcrumbs?.map(({ label, href }, key) => (
        <React.Fragment key={key}>
          <li
            key={key}
            className={twMerge(classNames?.item, 'last:tw-text-red-600')}
          >
            {key === breadcrumbs?.length - 1 ? (
              <span>{label}</span>
            ) : (
              <Link
                href={href}
                className={twMerge(classNames?.item, 'hover:tw-text-red-600')}
              >
                {label}
              </Link>
            )}
          </li>
          {key !== breadcrumbs?.length - 1 && (
            <span className="tw-inline-block tw-w-[6px] tw-h-[6px] tw-rounded-full tw-bg-yellow-500"></span>
          )}
        </React.Fragment>
      ))}
    </ul>
  ) : (
    <></>
  )
