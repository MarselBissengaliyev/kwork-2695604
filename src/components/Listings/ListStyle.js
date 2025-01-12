import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/utils/formatDate'
import { formattedPrice } from '@/utils/formattedPrice'

import { HeartButton } from '@/components/button'

const ListStyle = ({
  id,
  title,
  slug,
  picture,
  user,
  location_value,
  category,
  // price,
  created_at,
  currentUser,
}) => {
  return (
    <div className="col-lg-6">
      <div className="single-featured style-two box-shadow">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <Link href={`/listing/${id}/${slug}`} className="bg-img">
              <Image
                src={picture || ''}
                alt={title}
                className="mv-none"
                width={860}
                height={590}
              />
            </Link>
          </div>

          <div className="col-lg-8">
            <div className="featured-content">
              <div className="d-flex justify-content-between align-items-center">
                <h3>
                  <Link href={`/listing/${id}/${slug}`}>{title}</Link>
                </h3>
                <HeartButton currentUser={currentUser} listingId={id} />
              </div>

              <ul className="featured-info">
                <li>
                  <i className="ri-map-pin-line"></i>
                  {location_value}
                </li>
                <li>
                  <i className="ri-time-line"></i>
                  {formatDate(created_at)}
                </li>
                <li>
                  <i className="ri-user-line"></i>
                  {user?.name}
                </li>
              </ul>

              <ul className="priceing d-flex justify-content-between align-items-center">
                <li>
                  <Link
                    href={`/listings/?category=${category}`}
                    className="tag"
                  >
                    {category}
                  </Link>
                </li>
                {/* <li>
                  <span className="price">{formattedPrice(price)}</span>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListStyle
