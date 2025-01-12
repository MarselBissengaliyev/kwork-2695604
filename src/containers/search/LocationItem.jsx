import React from 'react'
import Image from 'next/image'

const LocationItem = ({ location_value, onSelect }) => {
  return (
    <li onClick={onSelect}>
      <Image
        src="/images/icon/location.svg"
        alt="globalSearch"
        width="18"
        height="18"
      />
      {location_value}
    </li>
  )
}

export default LocationItem
