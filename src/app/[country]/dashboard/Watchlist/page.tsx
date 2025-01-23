import { getCurrentUser, getUserFavourites } from "@/actions/users"
import Watchlist from "./widgets/Watchlist/Watchlist"

const page = async () => {
  const { id: userId } = await getCurrentUser();
  const currentWatchList = await getUserFavourites(userId, { auction_at: "current" });
  const completdWatchList = await getUserFavourites(userId, { auction_at: "completed" });
  return (
    <Watchlist currentWatchList={currentWatchList} completdWatchList={completdWatchList}/>
  )

}

export default page