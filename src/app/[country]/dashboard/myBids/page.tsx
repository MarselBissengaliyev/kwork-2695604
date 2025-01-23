import { getCurrentUser, getUserBids } from "@/actions/users";
import MyBids from "./widgets/MyBids"

const page = async () => {
  const currentUser = await getCurrentUser();
  const wonBids = await getUserBids(currentUser.id, { page: 1, take: 10, status: 'WON' });
  const currentBids = await getUserBids(currentUser.id, { page: 1, take: 10, status: 'CURRENT' });
  const lostBids = await getUserBids(currentUser.id, { page: 1, take: 10, status: 'LOST' });

  console.log("wonBids=", wonBids)
  console.log("currentBids=", currentBids)
  console.log("lostBids=", lostBids)
  return (
    <MyBids wonBids={wonBids} currentBids={currentBids} lostBids={lostBids}/>
  )
}

export default page