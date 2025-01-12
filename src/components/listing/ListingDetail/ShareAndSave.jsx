'use client'

import Image from 'next/image'

import {
  FacebookShareButton,
  TwitterShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstapaperIcon,
  WhatsappIcon,
} from 'react-share'

import { HeartButton } from '@/components/button'

export const ShareAndSave = ({ currentUser, listingId }) => {
  const shareUrl = '#'
  const title =
    'x-template- Classified Ads & Directory Listing Next.js Template'

  return (
    <ul className="share-save">
      <li>
        <div className="share-link">
          <span>
            <Image
              src="/images/icon/share.svg"
              alt="Image"
              width="20"
              height="20"
              className="me-1"
            />
            Share
          </span>

          <ul className="social-icon">
            <li>
              <FacebookShareButton url={shareUrl} quote={title}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
            </li>
            <li>
              <InstapaperShareButton url={shareUrl} quote={title}>
                <InstapaperIcon size={32} round />
              </InstapaperShareButton>
            </li>
            <li>
              <LinkedinShareButton url={shareUrl} quote={title}>
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
            </li>
            <li>
              <TwitterShareButton url={shareUrl} quote={title}>
                <TwitterIcon size={32} round />
              </TwitterShareButton>
            </li>
            <li>
              <WhatsappShareButton url={shareUrl} quote={title}>
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </li>
          </ul>
        </div>
      </li>
      <li className="save-list">
        <HeartButton currentUser={currentUser} listingId={listingId} />
      </li>
    </ul>
  )
}
