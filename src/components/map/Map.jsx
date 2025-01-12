'use client'

import 'leaflet/dist/leaflet.css'
import { MapContainer as Container, TileLayer } from 'react-leaflet'

export const Map = ({ lat, lon, zoom }) => {
  return (
    <div className="tw-w-full tw-min-h-[50vh] tw-z-10 tw-overflow-hidden tw-bg-gray-200 tw-rounded-lg">
      <Container
        center={[lat, lon]}
        zoom={zoom || 20}
        scrollWheelZoom={false}
        style={{ height: '50vh' }}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Container>
    </div>
  )
}

export default Map
