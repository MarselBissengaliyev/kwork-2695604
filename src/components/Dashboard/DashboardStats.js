import React from 'react'
import Link from 'next/link'
import { ROUTER } from '@/app/router'

const DashboardStats = ({ listings, blogPosts, users, reviews }) => {
  return (
    <div className="row">
      <div className="col-lg-6 col-md-6 mb-4">
        <Link href={ROUTER.DASHBOARD_LISTINGS}>
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Listings</h6>
              <p className="card-text ">Number of listings: {listings}</p>
            </div>
          </div>
        </Link>
      </div>

      <div className="col-lg-6 col-md-6 mb-4">
        <Link href={ROUTER.DASHBOARD_BLOG_POSTS}>
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Blog Posts</h6>
              <p className="card-text ">Number of blog posts: {blogPosts}</p>
            </div>
          </div>
        </Link>
      </div>

      <div className="col-lg-6 col-md-6 mb-4">
        <Link href={ROUTER.DASHBOARD_REVIEWS}>
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Reviews</h6>
              <p className="card-text ">Number of reviews: {reviews}</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-lg-6 col-md-6 mb-4">
        <Link href={ROUTER.DASHBOARD_USERS}>
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Users</h6>
              <p className="card-text ">Number of users: {users}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default DashboardStats
