import React from 'react'
import PageBanner from '@/components/Common/PageBanner'
import InfoUpdateForm from '@/components/Profile/InfoUpdateForm'
import { getCurrentUser } from '@/actions/users'

const page = async () => {
  const currentUser = await getCurrentUser()
  return (
    <>
      <PageBanner pageTitle="Edit my info" />
      <InfoUpdateForm currentUser={currentUser?.profile} />
    </>
  )
}

export default page
