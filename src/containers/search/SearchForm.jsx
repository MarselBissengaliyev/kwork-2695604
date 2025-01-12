/* eslint-disable react/display-name */

'use client'

import React, { useState, useEffect, forwardRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Autocomplete, Button } from '@mantine/core'
import { useDebouncedState } from '@mantine/hooks'

import { API_ROUTER, ROUTER } from '@/app/router'


export const SearchForm = ({ query: initialQuery, country }) => {
  const router = useRouter()

  const [search, setSearch] = useState({
    query: initialQuery?.label,
    results: 0,
  })

  const [query, setQuery] = useDebouncedState(initialQuery?.value, 250)
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState([])

  const handlers = {
    onSearch: (query) => {
      setSearch((search) => ({ ...search, query }))
      setQuery(query)
    },
    onSelect: ({ label, value }) => {
      setSearch((search) => ({ ...search, query: label }))
      setQuery(value)
    },
    onSubmit: (e) => {
      e?.preventDefault()

      if (loading) return
      if (!query) return

      const category = query

      setLoading(true)

      router.push(`${ROUTER.LISTINGS}/?category=${category}`)
    },
  }

  const api = {
    getCategories: async () => {
      let url = `${API_ROUTER.CATEGORIES}`

      if (country) {
        url = `${API_ROUTER.CATEGORIES}?country=${country}&limit=100`
      }

      const response = await fetch(url)
      const data = await response.json()
      return data
    },
  }

  useEffect(() => {
    setLoading(true)
    api.getCategories().then(({ data }) => {
      setCategories(() => data)
    })
    setLoading(false)
  }, [])

  return (
    <form onSubmit={handlers.onSubmit}>
      <div className="tw-w-full tw-flex tw-flex-row tw-justify-between tw-gap-4 tw-bg-gray-100 tw-p-2 tw-rounded-xl">
        <div className="tw-w-full tw-flex tw-flex-row tw-items-center tw-gap-2">
          <div className="tw-ml-2">
            <Image
              src="/images/icon/global.svg"
              width={28}
              height={28}
              alt=""
            />
          </div>
          <Autocomplete
            placeholder="Pick value or enter anything"
            classNames={{
              dropdown: 'tw-bg-white tw-rounded-xl tw-text-lg tw-mt-2',
              root: 'tw-w-full tw-h-[60px]',
              input:
                'tw-full tw-h-[60px] tw-border-none tw-bg-transparent utline-none tw-px-4 tw-py-6 tw-text-lg',
            }}
            value={search.query}
            itemComponent={AutoCompleteItem}
            initiallyOpened={false}
            maxDropdownHeight={280}
            data={
              categories
                ? categories?.map(({ slug: value, name: label }) => ({
                    label,
                    value,
                  })) || []
                : []
            }
            limit={20}
            onItemSubmit={handlers.onSelect}
            onChange={handlers.onSearch}
            // dropdownOpened={dropdownOpened}
          />
        </div>
        <Button
          type="submit"
          loading={loading}
          className="button button-primary button-lg !tw-h-[60px] tw-min-w-[160px]"
        >
          {loading ? '' : 'Search'}
        </Button>
      </div>
    </form>
  )
}

const AutoCompleteItem = forwardRef(({ label, value, ...props }, ref) => (
  <div ref={ref} {...props}>
    <div>{label}</div>
  </div>
))
