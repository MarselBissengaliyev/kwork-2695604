'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

export const Pagination = ({ url, onPageChange, next, prev, ...props }) => {
  const router = useRouter()

  const page = parseInt(props?.page) || 1
  const pages = parseInt(props?.pages) || 1

  const pagesMap = Array.from({ length: pages })

  const isActive = (n) => (n ? page === n : false)

  const styles = {
    button:
      'tw-w-10 tw-h-10 tw-flex tw-justify-center tw-items-center tw-rounded-full tw-cursor-pointer disabled:tw-cursor-not-allowed',
    number:
      'tw-w-10 tw-h-10 tw-flex tw-justify-center tw-items-center tw-rounded-full tw-cursor-pointer hover:tw-bg-gray-100',
    number_active: 'tw-bg-gray-200 hover:tw-bg-gray-200',
  }

  return (
    <div className="tw-w-full tw-flex tw-flex-row">
      <div className="tw-flex tw-flex-row tw-gap-4">
        <button
          className={styles.button}
          disabled={!prev}
          onClick={() => {
            const n = page - 1
            router.push([url, `page=${n}`].join('?'))
            if (onPageChange) {
              onPageChange(n)
            }
          }}
        >
          <i className="ri-arrow-left-line"></i>
        </button>
        <div className="tw-flex tw-flex-row tw-gap-2">
          {pagesMap
            .slice(0, pagesMap?.length > 12 ? 12 : pagesMap.length)
            .map((_page, key) => key + 1)
            .map((n) => {
              const key = n
              const href = [url, `page=${n}`].join('?')
              const className = isActive(n)
                ? twMerge(
                    styles.number,
                    styles.number_active,
                    'tw-cursor-not-allowed'
                  )
                : styles.number
              const disabled = isActive(n)

              return disabled ? (
                <span key={key} className={className}>
                  {n}
                </span>
              ) : (
                <Link key={key} href={href} className={className}>
                  {n}
                </Link>
              )
            })}
        </div>
        <button
          className={styles.button}
          disabled={!next}
          onClick={() => {
            const n = page + 1
            router.push([url, `page=${n}`].join('?'))
            if (onPageChange) {
              onPageChange(n)
            }
          }}
        >
          <i className="ri-arrow-right-line"></i>
        </button>
      </div>
    </div>
  )
}
