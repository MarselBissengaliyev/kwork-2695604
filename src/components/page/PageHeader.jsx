'use client'

import { Breadcrumbs } from './../breadcrumbs'

export const PageHeader = ({ children, title, breadcrumbs }) => {
  return (
    <div className="page-banner-area pt-70 pb-70">
      <div className="container">
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-4 tw-text-white">
          <Breadcrumbs
            breadcrumbs={breadcrumbs}
            classNames={{
              item: 'tw-text-black',
            }}
          />
          <h2 className="text-center">{title}</h2>
        </div>
        {children && (
          <div className="tw-mt-10 tw-flex tw-flex-col">{children}</div>
        )}
      </div>
    </div>
  )
}
