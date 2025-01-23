import { createBid } from "@/actions/listings";

export async function POST(req) {
  try {
    const { amount, lot_id, buy_now } = await req.json();
    const bid = await createBid({ amount, lot_id, buy_now, status: "CURRENT" });
    return new Response(JSON.stringify(bid), { status: 200 });
  } catch (error) {
    console.error("Error in API route:", error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
