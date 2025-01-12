'use client'

import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import axios from 'axios'
import { toast } from 'react-hot-toast'

import { ROUTER } from '@/app/router'
import { ListingCard } from '@/components/listing'

export const FeaturedListings = ({ currentUser }) => {
  const [listings, setListings] = useState([])
  const [cat, setCat] = useState('all')

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`/api/listings/featured?category=all`)
        .then((response) => {
          setListings(response.data)
        })
        .catch((error) => {
          toast.error('Something went wromg!')
        })
    }

    fetchData()
  }, [])

  const getFeatured = async (cat) => {
    setCat(cat)
    await axios
      .get(`/api/listings/featured?category=${cat}`)
      .then((response) => {
        setListings(response.data)
      })
      .catch((error) => {
        toast.error('Something went wromg!')
      })
  }
  return (
    <div className="featured-area bg-color-fffcf8 ptb-100">
      <div className="container">
        <div className="section-title-wrap">
          <div className="section-title left-title">
            <h2>Featured Ads</h2>
          </div>

          <div className="section-title-right">
            <ul className="nav nav-tabs featured-tabs">
              <li className="nav-item">
                <button
                  className={`nav-link default-btn ${
                    cat === 'all' && 'active'
                  }`}
                  onClick={() => getFeatured('all')}
                >
                  All
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link default-btn ${
                    cat === 'Bar' && 'active'
                  }`}
                  onClick={() => getFeatured('Bar')}
                >
                  Bar
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link default-btn ${
                    cat === 'Restaurant' && 'active'
                  }`}
                  onClick={() => getFeatured('Restaurant')}
                >
                  Restaurant
                </button>
              </li>

              <li className="nav-item">
                <button
                  className={`nav-link default-btn ${
                    cat === 'Modern' && 'active'
                  }`}
                  onClick={() => getFeatured('Modern')}
                >
                  Modern
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link default-btn ${
                    cat === 'Real Estate' && 'active'
                  }`}
                  onClick={() => getFeatured('Real Estate')}
                >
                  Real Estate
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link default-btn ${
                    cat === 'Vehicle' && 'active'
                  }`}
                  onClick={() => getFeatured('Vehicle')}
                >
                  Vehicle
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="tab-content">
          <div className="tab-pane fade show active">
            <Swiper
              spaceBetween={30}
              grabCursor={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="featured-slide"
            >
              {listings.length > 0 &&
                listings.map((listing) => (
                  <SwiperSlide key={listing.id}>
                    <ListingCard
                      href={
                        listing?.slug
                          ? `${ROUTER.LISTING}/${listing.slug}`
                          : '#'
                      }
                      currentUser={currentUser}
                      {...listing}
                    />
                    {/* <FeaturedItem currentUser={currentUser} {...list} /> */}
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}
