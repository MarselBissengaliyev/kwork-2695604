import Image from 'next/image'
import Link from 'next/link'

import { Logo } from '@/components/logo'

import { ROUTER } from '@/app/router'

import phoneCell from '../../../public/images/icon/phone-call.svg'
import locationPin from '../../../public/images/icon/location-pin.svg'
import emailIco from '../../../public/images/icon/email.svg'
import menuActive from '../../../public/images/menu-active.png'
import css from './Footer.module.scss';
import { PiMapPin, PiPhoneCall } from 'react-icons/pi'

const links = [
  { label: 'About', href: ROUTER.ABOUT },
  { label: 'Contact us', href: ROUTER.CONTACT },
  { label: 'FAQ', href: ROUTER.FAQ },
  { label: 'Privacy', href: ROUTER.PRIVACY },
  { label: 'Terms', href: ROUTER.TERMS },
]

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.menu + " tw-container tw-px-4"}>
        <div className={css.section + " " + css.finder}>
          <h3>Vehicle Finder</h3>
          <div className={css.list__wrapper}>
            <div className={css.list}>
              <Link href="/" className={css.item}>Cars</Link>
              <Link href="/" className={css.item}>Trucks</Link>
              <Link href="/" className={css.item}>ATV</Link>
              <Link href="/" className={css.item}>Motorcycle</Link>
              <Link href="/" className={css.item}>Boats</Link>
              <Link href="/" className={css.item}>RV</Link>
            </div>
            <div className={css.list}>
              <Link href="/" className={css.item}>Construction Equipment</Link>
              <Link href="/" className={css.item}>Buses</Link>
              <Link href="/" className={css.item}>Snowmobiles</Link>
              <Link href="/" className={css.item}>Trailers</Link>
              <Link href="/" className={css.item}>Jet Ski</Link>
              <Link href="/" className={css.item}>Other</Link>
            </div>
          </div>
        </div>
        <div className={css.section + " " + css.live}>
          <h3>Live Auctions</h3>
          <div className={css.list}>
            <Link href="/" className={css.item}>By Locations</Link>
            <Link href="/" className={css.item}><span className={css.live}>Live</span>Auctions</Link>
            <Link href="/" className={css.item}>Auctions Calendar</Link>
          </div>
        </div>
        <div className={css.section + " " + css.support}>
          <h3>Support</h3>
          <div className={css.list}>
            <Link href="/" className={css.item}>How to Buy</Link>
            <Link href="/" className={css.item}>Shipping</Link>
            <Link href="/" className={css.item}>Fee Calculator</Link>
            <Link href="/" className={css.item}>Faqs</Link>
            <Link href="/blog" className={css.item}>Blogs</Link>
            <Link href="/" className={css.item}>Contact Us</Link>
          </div>
        </div>
        <div className={css.about}>
          <h3>About Us</h3>
          <div className={css.social}>
            <a href="/"><i className="ri-facebook-line"></i></a>
            <a href="/"><i className="ri-instagram-line"></i></a>
            <a href="/"><i className="ri-youtube-line"></i></a>
          </div>
        </div>
        <div className={css.section + " " + css.contacts}>
          <h3>Contacts</h3>
          <div className={css.phone}><PiPhoneCall />+1 (770) 544-70-03</div>
          <div className={css.phone}><PiPhoneCall /> +1 (850) 319-34-67</div>
          <div className={css.address}><div className="icon">
            <PiMapPin /></div> <span>Bid N Drive Inc. <br />
              2305 Fourth st., <br />
              Tucker, GA 30084</span></div>
          <div className={css.email}>sales@auto4export.com</div>
        </div>
      </div>
      <div className={css.copy + " tw-container tw-px-4"}>
        <span>Copyrights © 2021. All Rights Reserved</span>
      </div>
    </footer>
  )
}
