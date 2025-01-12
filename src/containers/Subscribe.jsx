'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'react-hot-toast'

import shp1 from './../../public/images/shape-1.png'
import shp2 from './../../public/images/shape-2.png'
import Input from '../components/FormHelpers/Input'
import { API_ROUTER } from '@/app/router'
import { Button } from '@mantine/core'

export const Subscribe = () => {
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: '',
    },
  })

  const handlers = {
    onSubmit: handleSubmit(async (data) => {
      try {
        const { email } = data || {}

        setLoading(true)

        await axios.post(API_ROUTER.SUBSCRIPTIONS, data)

        toast.success('You have successfully subscribed')
        reset()
        setLoading(false)

        await axios.post(API_ROUTER.EMAIL, { to: email }).catch(() => {})
      } catch (e) {
        const message = e?.response?.data?.message
        toast.error(message ? message : 'Something went wrong')
      } finally {
        setLoading(false)
      }
    }),
  }

  return (
    <div className="subscribe-area">
      <div className="container">
        <div className="subscribe-bg">
          <div className="subscribe-content">
            <h2>Sign Up To Get Special Offer Everyday Through Mail</h2>
            <div className="newsletter-wrap">
              <form
                className="newsletter-form"
                method="POST"
                onSubmit={handlers.onSubmit}
              >
                <Input
                  id="email"
                  placeholder="Your email address"
                  disabled={loading}
                  register={register}
                  errors={errors}
                  type="email"
                  required
                />
                <Button className="default-btn" type="submit" loading={loading}>
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          <Image
            src={shp1}
            className="shape shape-1"
            alt="shp"
            width={136}
            height={125}
          />
          <Image
            src={shp2}
            className="shape shape-2"
            alt="shp"
            width={159}
            height={177}
          />
        </div>
      </div>
    </div>
  )
}

export default Subscribe
