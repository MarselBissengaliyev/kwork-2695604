import PageBanner from '@/components/Common/PageBanner'
import AuthorDetails from '@/components/Author/AuthorDetails'

import UserListing from '@/components/Author/UserListing'

import { getCurrentUser, getUserById } from '@/actions/users'

const page = async ({ params }) => {
  const { user_id } = params || {}

  const user = await getUserById(user_id)
  const currentUser = await getCurrentUser()

  return (
    <>
      <PageBanner pageTitle="Author's Details" />
      <AuthorDetails user={user} />
      <UserListing
        listings={user?.listings && user.listings}
        user={user?.name}
        currentUser={currentUser}
      />
    </>
  )
}

export default page
