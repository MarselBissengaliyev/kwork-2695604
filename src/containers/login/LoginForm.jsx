'use client'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

import { useTranslations } from 'next-intl'
import { ROUTER } from '@/app/router'
import { Button, TextInput } from '@mantine/core'
import { GoogleAuthButton } from '@/components/button'

export const LoginForm = () => {
  const router = useRouter()
  const t = useTranslations()

  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const handlers = {
    onSubmit: handleSubmit(async (data) => {
      try {
        setLoading(true)

        const response = await signIn('credentials', {
          ...data,
          redirect: false,
        })

        if (response.ok) {
          router.refresh()
          router.push(ROUTER.DASHBOARD)
        } else {
          toast.error('Something went wrong!')
        }
      } catch (e) {
        setLoading(false)
        toast.error('Something went wrong!')
      } finally {
        setLoading(false)
      }
    }),
  }

  return (
    <div className="authentication-area ptb-100 bg-color-fff5e1">
      <div className="container">
        <div className="authentication-content">
          <h3>{t('pages.login.heading')}</h3>
          <form onSubmit={handlers.onSubmit}>
            <div className="tw-flex tw-flex-col tw-gap-4">
              <TextInput
                type="email"
                placeholder={t('pages.login.form.fields.email.placeholder')}
                errors={errors}
                required
                {...register('email')}
              />

              <TextInput
                type="password"
                placeholder={t('pages.login.form.fields.password.placeholder')}
                errors={errors}
                required
                {...register('password')}
              />
            </div>
            <div className="tw-mt-4 tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center gap-2">
              <Button
                type="submit"
                className="button button-primary !tw-w-full"
                disabled={loading}
              >
                {t('pages.login.form.button.label')}
              </Button>
              <GoogleAuthButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
