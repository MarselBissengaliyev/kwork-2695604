import React from 'react'
import { redirect } from 'next/navigation'
import { getTranslations } from 'next-intl/server'

import PageBanner from '@/components/Common/PageBanner'

import { getCurrentUser } from '@/actions/users'
import { LoginForm } from '@/containers/login'

const page = async () => {
  const t = await getTranslations()

  const currentUser = await getCurrentUser()
  if (currentUser) {
    redirect('/')
  }
  return (
    <>
      <PageBanner pageTitle={t('pages.login.title')} />
      <LoginForm />
    </>
  )
}

export default page
