'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'

import axios from 'axios'

import { toast } from 'react-hot-toast'
import { useForm, useController, Controller } from 'react-hook-form'

const RichTextEditor = dynamic(() => import('@mantine/rte'), {
  ssr: false,
  loading: () => null,
})

import RTEControls from '@/utils/RTEControls'
import { Button, Select, TextInput } from '@mantine/core'
import { UploadButton } from '@/components/button'
import Image from 'next/image'

export const ListingCreateForm = ({ metadata }) => {
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const { countries, categories, cities } = metadata || {}

  const setCustomValue = (id, value) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    })
  }

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    setError,
    formState: { errors },
    reset,
    control,
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
      picture: '',
      address: '',
      features: '',
      category: '',
      city: '',
      country: '',
      // price: 1,
    },
  })

  const {
    field: { value: catValue, onChange: catOnChange, ...restCategoryField },
  } = useController({ name: 'category', control })

  const { picture, country, category, city } = {
    country: watch('country'),
    city: watch('city'),
    category: watch('category'),
    picture: watch('picture'),
  }

  const handlers = {
    onSubmit: handleSubmit((data) => {
      try {
        setLoading(true)

        axios
          .post('/api/listings/create', data)
          .then(() => {
            toast.success('Listing created')
            router.refresh()
            reset()
          })
          .catch(() => {
            toast.error('Something went wrong')
          })
          .finally(() => {
            setLoading(false)
          })
      } catch (e) {
        setLoading(false)
      }
    }),
  }

  return (
    <div className="submit-property-area ptb-100">
      <div className="container">
        <form className="submit-property-form" onSubmit={handlers.onSubmit}>
          <div className="tw-flex tw-flex-col tw-gap-4">
            <TextInput
              label="Title"
              type="text"
              required
              {...register('title')}
            />
            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <RichTextEditor
                  controls={RTEControls}
                  {...field}
                  placeholder="Description"
                />
              )}
            />
            <UploadButton
              value={picture || ''}
              onChange={(value) => setCustomValue('picture', value)}
            />
            {picture && (
              <div className="tw-mt-4 tw-rounded-lg tw-w-full tw-aspect-video tw-overflow-hidden">
                <Image
                  src={picture || ''}
                  alt=""
                  width={400}
                  height={300}
                  className="tw-w-full tw-h-auto"
                />
              </div>
            )}
            <Select
              label="Category"
              value={category}
              data={categories?.map(({ id: value, name: label }) => ({
                value,
                label,
              }))}
              onChange={(value) => setCustomValue('category', value)}
            />
            <Select
              label="Country"
              value={country}
              data={countries?.map(({ id: value, name: label }) => ({
                value,
                label,
              }))}
              onChange={(value) => setCustomValue('country', value)}
            />
            <Select
              label="City"
              value={city}
              data={cities?.map(({ id: value, name: label }) => ({
                value,
                label,
              }))}
              onChange={(value) => setCustomValue('city', value)}
            />
            <TextInput
              label="Address"
              type="text"
              required
              {...register('address')}
            />
            {/* <TextInput
              label="Price"
              type="number"
              required
              {...register('price')}
            /> */}
            <TextInput
              label="Features"
              type="text"
              required
              {...register('features')}
            />
          </div>
          <div className="tw-flex tw-flex-col tw-mt-4">
            <Button
              onClick={handlers.onSubmit}
              disabled={loading}
              className="button button-primary"
            >
              Create
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
