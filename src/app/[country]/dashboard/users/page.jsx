import { redirect } from 'next/navigation'
import PageBanner from '@/components/Common/PageBanner'

import { Users } from '@/components/user'
import LeftSidebar from '@/components/Dashboard/LeftSidebar'

import { getCurrentUser, getUsers } from '@/actions/users'

const page = async ({ searchParams }) => {
  const page = parseInt(searchParams?.page) || 1

  const currentUser = await getCurrentUser()

  const isAdmin = currentUser?.role === 'ADMIN'
  if (!isAdmin) {
    redirect('/')
  }

  const users = await getUsers({ page, take: 20 })

  return (
    <>
      <PageBanner pageTitle="Users" />
      <div className="ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <LeftSidebar />
            </div>
            <div className="col-lg-8">
              <Users
                currentUser={currentUser}
                {...{
                  data: users?.data || [],
                  results: users?.results || 0,
                  pagination: users?.pagination || null,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
