'use client'
import { useForm } from 'react-hook-form'

import { useState } from 'react'

import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { API_ROUTER, ROUTER } from '@/app/router'
import { useTranslations } from 'next-intl'
import { GoogleAuthButton } from '@/components/button'
import { Button, TextInput } from '@mantine/core'

export const RegisterForm = () => {
  const t = useTranslations()
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const handlers = {
    onSubmit: handleSubmit(async (data) => {
      try {
        setLoading(true)

        await axios.post(API_ROUTER.REGISTER, data)

        toast.success(`You've bee successfully registered`)

        router.push(ROUTER.LOGIN)
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
        <div className="tw-w-full authentication-content">
          <h3>{t('pages.register.heading')}</h3>
          <form onSubmit={handlers.onSubmit}>
            <div className="tw-flex tw-flex-col tw-gap-4">
              <TextInput
                type="text"
                placeholder={t('pages.register.form.fields.name.placeholder')}
                errors={errors}
                required
                {...register('name')}
              />
              <TextInput
                type="email"
                placeholder={t('pages.register.form.fields.email.placeholder')}
                errors={errors}
                required
                {...register('email')}
              />

              <TextInput
                type="password"
                placeholder={t(
                  'pages.register.form.fields.password.placeholder'
                )}
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
                {t('pages.register.form.button.label')}
              </Button>
              <GoogleAuthButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
