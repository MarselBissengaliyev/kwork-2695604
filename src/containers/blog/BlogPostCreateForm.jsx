'use client'

import React, { useState } from 'react'

import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'

import { useForm, useController, Controller } from 'react-hook-form'
import { toast } from 'react-hot-toast'

import { TextInput, Button, Textarea, Select } from '@mantine/core'

const RichTextEditor = dynamic(() => import('@mantine/rte'), {
  ssr: false,
  loading: () => null,
})

import RTEControls from '@/utils/RTEControls'
import { UploadButton } from '../../components/button'
import Image from 'next/image'
import axios from 'axios'

export const BlogPostCreateForm = ({ metadata }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const { countries = [] } = metadata || {}

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
    setError,
    watch,
    formState: { errors, isValid },
    reset,
    control,
  } = useForm({
    defaultValues: {
      title: '',
      country_id: '',
      content: '',
      picture: '',
      seo_title: '',
      seo_description: '',
    },
  })

  const picture = watch('picture')

  const handlers = {
    onSubmit: handleSubmit((data) => {
      console.log({ data })

      try {
        setLoading(true)

        axios
          .post('/api/blog/create', data)
          .then(() => {
            toast.success('Post created')
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
    <div className="submit-property-area">
      <form className="submit-property-form" onSubmit={handlers.onSubmit}>
        <div className="row">
          <div className="tw-flex tw-flex-col tw-gap-4">
            <TextInput
              label="Title"
              type="text"
              required
              {...register('title')}
            />
            <Select
              label="Country"
              data={
                countries?.map(({ id: value, name: label }) => ({
                  value,
                  label,
                })) || []
              }
              {...register('country_id')}
              onChange={(value) => setCustomValue('country_id', value)}
              required
            />
            <Controller
              control={control}
              render={({ field }) => (
                <RichTextEditor
                  controls={RTEControls}
                  {...field}
                  placeholder="Details Content"
                />
              )}
              {...register('content')}
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
            <div className="tw-mt-4">
              <h4 className="tw-text-base">SEO</h4>
              <div className="tw-flex tw-flex-col tw-gap-4">
                <TextInput
                  label="Title"
                  type="text"
                  {...register('seo_title')}
                />
                <Textarea
                  label="Description"
                  type="text"
                  {...register('seo_description')}
                />
              </div>
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
          </div>
        </div>
      </form>
    </div>
  )
}
