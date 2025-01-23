import { getCurrentUser, getUserBids, getUserFavourites } from "@/actions/users";
import ButtonMain from "@/components/button/ButtonMain";
import PageDirect from "@/components/Common/PageDirect";
import { Container } from "@/components/Container";
import { redirect } from "next/navigation";
import { DashBoardCards } from "./entities/dashboardCards";
import { DashboardMoneyCard } from "./entities/DashboardMoneyCard";
import "./page.scss";

const page = async () => {
  const currentUser = await getCurrentUser();
  console.log(currentUser)
  // Redirect to home page if the user is not authenticated
  if (!currentUser) {
    redirect("/");
  }

  const biddingLimit = (currentUser?.balance || 0) <= 1000 ? 10000 : currentUser.balance <= 2500 ? 50000 : 200000;
  const wonBids = await getUserBids(currentUser.id, { status: "WON" });
  const wonBidsCount = wonBids.results;
  const currentBids = await getUserBids(currentUser.id, { status: "CURRENT" });
  const usedSum = currentBids.usedSum;
  const outbiddedBids = await getUserBids(currentUser.id, { status: "LOST" });
  const outbiddedBidsCount = outbiddedBids.results;
  const favourites = await getUserFavourites(currentUser.id, {});
  const favouritesCount = favourites.results;
  const availableSum = biddingLimit - usedSum;

  return (
    <>
      <PageDirect
        pageTitle={"Dashboard"}
        className={"tw-justify-between tw-gap-5 max-mindesk:tw-flex-col max-mindesk:tw-justify-start"}
      >
        <div className="tw-flex tw-gap-10 tw-overflow-x-auto tw-w-full no-scrollbar max-mindesk:tw-gap-2">
          <div className="tw-flex tw-gap-2">
            <ButtonMain classNames={"tw-w-[170px] tw-flex-shrink-0"} variant="outline" text={"Dashboard"} />
            <a href="./myBids">
              <ButtonMain classNames={"tw-w-[170px] tw-flex-shrink-0"} color="grey" variant="outline" text="My Bids" />
            </a>
            <a href="./transactions">
              <ButtonMain
                classNames={"tw-w-[170px] tw-flex-shrink-0"}
                text="Transactions"
                color="grey"
                variant="outline"
              />
            </a>
            <a href="./Watchlist">
              <ButtonMain
                classNames={"tw-w-[170px] tw-flex-shrink-0"}
                color="grey"
                variant="outline"
                text="Watchlist"
              />
            </a>
          </div>
          <div className="tw-flex tw-gap-2">
            <ButtonMain
              classNames={"tw-w-[170px] tw-flex-shrink-0"}
              color="grey"
              variant="outline"
              text="Request refund"
            />
            <a href="./EditSettings">
              <ButtonMain
                classNames={"tw-w-[170px] tw-flex-shrink-0 tw-flex tw-gap-2"}
                color="grey"
                variant="outline"
                text="Edit Profile"
                icon="/images/dashboard/icons/editing.png"
              />
            </a>
          </div>
        </div>
      </PageDirect>

      <div className="">
        <Container className={""}>
          <div className="tw-grid tw-grid-cols-5 tw-gap-[20px] max-laptop:tw-grid-cols-2 max-tablet:tw-grid-cols-1">
            <DashBoardCards
              number={outbiddedBidsCount}
              icon="/images/dashboard/icons/bidding.png"
              text="Outbidded Bids"
              linkText="Please, raise your bids"
            />
            <DashBoardCards
              number={wonBidsCount}
              text="Wons Bids"
              icon="/images/dashboard/icons/carok.png"
              linkText="Learn more"
            />
            <DashBoardCards
              number={favouritesCount}
              text="Vehicles from your Watchlist starts soon"
              icon="/images/dashboard/icons/cartime.png"
              linkText="Learn more"
            />
          </div>
        </Container>
        <div className=" tw-bg-[#F9F9F9] tw-mt-[50px] tw-py-[70px]">
          <Container className="tw-grid tw-grid-cols-4 tw-gap-[20px] max-laptop:tw-grid-cols-2 max-tablet:tw-grid-cols-1">
            <DashboardMoneyCard
              text={"Your Deposite"}
              price={`$${Number(currentUser.balance).toLocaleString("en-US")}`}
              icon="/images/dashboard/icons/wallet.png"
              infotext={"Need More? Please, add your deposit"}
              secInfoText={"Also you can refund your deposit here."}
            />
            <DashboardMoneyCard
              text="Bidding Limit"
              price={`$${biddingLimit.toLocaleString("en-US")}`}
              icon="/images/dashboard/icons/revenue.png"
              infotext={"Your bidding limit"} secInfoText={undefined} />
            <DashboardMoneyCard
              text="Used"
              price={`$${usedSum.toLocaleString("en-Us")}`}
              icon="/images/dashboard/icons/dollar.png"
              infotext={"Your used bidding limit"} secInfoText={undefined} />
            <DashboardMoneyCard
              text="Available"
              price={`$${availableSum.toLocaleString("en-US")}`}
              icon="/images/dashboard/icons/give-money.png"
              infotext={"Your available bidding limit"} secInfoText={undefined} />
          </Container>
        </div>
      </div>
    </>
  );
};

export default page;
