import dynamic from 'next/dynamic'

import PageBanner from '@/components/Common/PageBanner'
import ContactForm from '@/components/Common/ContactForm'
import ContactInfo from '@/components/Contact/ContactInfo'

const { Map } = {
  Map: dynamic(() => import('@/components/map/Map'), {
    ssr: false,
  }),
}

const page = () => {
  return (
    <>
      <PageBanner pageTitle={'Contact Us'} />
      <ContactInfo />
      <ContactForm />
      <div className="container">
        <Map lat={1.3737331} lon={103.7627613} zoom={13} />
      </div>
    </>
  )
}

export default page
