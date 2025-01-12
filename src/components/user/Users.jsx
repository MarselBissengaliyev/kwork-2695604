'use client'

import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Pagination } from '../pagination'

export const Users = ({ currentUser, data, results, pagination }) => {
  const router = useRouter()

  const onDelete = async (userId) => {
    const shouldDelete = window.confirm(
      'Are you sure you want to delete this user?'
    )

    if (parseInt(userId) === currentUser.id) {
      return toast.error("You can't delete your own ID!")
    }

    if (shouldDelete) {
      await axios
        .delete(`/api/users/${userId}`)
        .then((response) => {
          toast.success('Success')
          router.refresh()
        })
        .catch((error) => {
          toast.error('Something went wrong!')
        })
    }
  }

  return (
    <div className="row">
      {results >= 1 ? (
        data?.map(({ id, name, email, image }, key) => (
          <div className="col-md-6 mb-3" key={key}>
            <div className="d-flex a border-bottom pb-3">
              <div style={{ width: '100px' }}>
                <Image
                  src={image ? image : 'https://via.placeholder.com/150'}
                  className="card-img-top"
                  alt="User Image"
                  width={1185}
                  height={990}
                />
              </div>
              <div className="ms-3">
                <h6 className="card-title">{name}</h6>
                <p className="card-text mb-2 fs-14">Email: {email}</p>
                <button
                  className="btn btn-primary btn-sm btn-view"
                  onClick={() => onDelete(id)}
                >
                  View
                </button>
                <button
                  className="btn btn-danger btn-sm btn-delete ms-2"
                  onClick={() => onDelete(id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
      {pagination?.pages > 1 && (
        <div className="container tw-mt-10">
          <Pagination {...pagination} />
        </div>
      )}
    </div>
  )
}
