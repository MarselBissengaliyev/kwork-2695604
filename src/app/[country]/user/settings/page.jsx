import { getCurrentUser } from '@/actions/users'
import PageBanner from '@/components/Common/PageBanner'

import SettingsForm from '@/components/Profile/SettingsForm'

export const dynamic = 'force-dynamic'

const page = async () => {
  const user = await getCurrentUser()
  return (
    <>
      <PageBanner pageTitle="Settings" />
      <SettingsForm currentUser={user} />
    </>
  )
}

export default page
