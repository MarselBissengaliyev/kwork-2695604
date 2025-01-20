"use client";
import ButtonMain from "@/components/button/ButtonMain";
import PageDirect from "@/components/Common/PageDirect";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import WatchlistBlock from "./widgets/WatchlistBlock/WatchlistBlock";

const page = () => {
  const router = useRouter();

  const goBack = () => {
    router.back(); // Возвращает на предыдущую страницу
  };

  const [activeButton, setActiveButton] = useState("Current Wathclist"); // Начальная активная кнопка

  const handleButtonClick = buttonName => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <PageDirect
        pageTitle={"Watchlist"}
        className={"tw-justify-between tw-gap-5 max-mindesk:tw-flex-col max-mindesk:tw-justify-start"}
      >
        <div className="tw-flex tw-gap-10 tw-overflow-x-auto tw-w-full no-scrollbar max-mindesk:tw-gap-2">
          <div className="tw-flex tw-gap-2">
            <ButtonMain
              key={"Back"}
              classNames={"tw-w-[117px] tw-flex-shrink-0"}
              variant="outlined"
              color="grey"
              text={
                <div className="tw-flex tw-gap-2 tw-text-center tw-items-center">
                  <img src="/images/dashboard/icons/larrow.png" />
                  Back
                </div>
              }
              onClick={() => goBack()}
            />

            <ButtonMain
              classNames={"tw-w-[220px] tw-flex-shrink-0"}
              color={activeButton === "Current Wathclist" ? "blue" : "grey"}
              variant="outlined"
              text="Current Wathclist"
              onClick={() => handleButtonClick("Current Wathclist")}
            />

            <ButtonMain
              classNames={"tw-w-[220px] tw-flex-shrink-0"}
              color={activeButton === "Completed Watchlist" ? "blue" : "grey"}
              variant="outlined"
              text="Completed Watchlist"
              onClick={() => handleButtonClick("Completed Watchlist")}
            />
          </div>
          <div className="tw-flex tw-gap-2">
            <a href="../EditSettings">
              <ButtonMain
                classNames={"tw-w-[170px] tw-flex-shrink-0 tw-flex tw-gap-2"}
                color="grey"
                variant="outlined"
                text="Edit Profile"
                icon="/images/dashboard/icons/editing.png"
              />
            </a>
          </div>
        </div>
        <div></div>
      </PageDirect>
      <WatchlistBlock />
    </>
  );
};

export default page;
