import React from 'react'
import { redirect } from 'next/navigation'
import PageBanner from '@/components/Common/PageBanner'
import { getCurrentUser } from '@/actions/users'
import { RegisterForm } from '@/containers/register'
import { getTranslations } from 'next-intl/server'

const page = async () => {
  const t = await getTranslations()

  const currentUser = await getCurrentUser()
  if (currentUser) {
    redirect('/')
  }
  return (
    <>
      <PageBanner pageTitle={t('pages.register.title')} />
      <RegisterForm />
    </>
  )
}

export default page
