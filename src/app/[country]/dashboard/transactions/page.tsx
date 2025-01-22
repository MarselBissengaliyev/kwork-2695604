import { getCurrentUser, getUserTransactions } from "@/actions/users"
import Transactions from "./widgets/Transactions"

const page = async () => {
  const currentUser = await getCurrentUser();
  const paidTransactions = await getUserTransactions(currentUser.id, { status: "PAID" });
  const requestARefundTransactions = await getUserTransactions(currentUser.id, { status: "REQUEST_A_REFUND" });
  const refundTransactions = await getUserTransactions(currentUser.id, { status: "REFUND" });
  return (
    <Transactions refundTransactions={refundTransactions} paidTransactions={paidTransactions} requestARefundTransactions={requestARefundTransactions}/>
  )
}

export default page