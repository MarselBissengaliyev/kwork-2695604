import React from 'react'
import Image from 'next/image'

const CategoryItem = ({ category, onSelect }) => {
  return (
    <li onClick={onSelect}>
      <Image
        src="/images/global-search.png"
        alt="globalSearch"
        width="18"
        height="18"
      />{' '}
      {category}
    </li>
  )
}

export default CategoryItem
