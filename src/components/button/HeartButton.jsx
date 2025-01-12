'use client'

import useFavourite from '@/hooks/useFavorite'

export const HeartButton = ({ currentUser, listingId }) => {
  const { hasFauvorited, toggleFavourite } = useFavourite({
    listingId,
    currentUser,
  })

  return (
    <button type="submit" className="wish-btn" onClick={toggleFavourite}>
      {hasFauvorited ? (
        <i className="ri-heart-fill"></i>
      ) : (
        <i className="ri-heart-line"></i>
      )}
    </button>
  )
}
