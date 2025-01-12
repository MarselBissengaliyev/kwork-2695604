'use client'

const MapContainer = dynamic(() => import('@/components/map/MapContainer'), {
  ssr: false,
})

export const MapSection = ({ location }) => {
  const { lan, lon } = location || {}

  return <MapContainer lan={lan} lon={lon} />
}
