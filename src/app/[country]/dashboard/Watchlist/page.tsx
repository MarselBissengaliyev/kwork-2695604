import { getUserFavouriteListings } from "@/actions/listings"
import Watchlist from "./widgets/Watchlist/Watchlist"

const page = async () => {
  const favourites = await getUserFavouriteListings()
  return (
    <Watchlist />
  )

}

export default page