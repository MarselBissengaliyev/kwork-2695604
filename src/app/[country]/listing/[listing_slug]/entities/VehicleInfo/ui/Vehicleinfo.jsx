/* eslint-disable react/prop-types */
import React from "react";

import ListItem from "@/components/ListItem/index";

import CopyText from "@/components/ListItem/models/CopyText";

const truncateText = (text, maxLength = 21) => {
  if (!text || typeof text !== "string") return text; // Возвращаем оригинал, если это не строка
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

const Vehicleinfo = ({ children, listing }) => {
  function extractCylinders(engineStr) {
    if (!engineStr) return null; // Если строка отсутствует, вернуть null
    const match = engineStr.match(/([VvIi])\d+/); // Ищем шаблон V6, I4 и т.п.
    return match ? parseInt(match[0].slice(1), 10) : null; // Возвращаем число цилиндров или null
  }

  const vehicleinfo = [
    {
      label: "Vin:",
      value: <CopyText text={truncateText(listing?.vin)} />,
    },
    {
      label: "Make:",
      value: truncateText(listing.make?.name),
    },
    {
      label: "Model:",
      value: truncateText(listing.model?.name),
    },
    {
      label: "Year:",
      value: truncateText(listing?.year),
    },
    {
      label: "Mileage:",
      value: truncateText(listing?.mileage),
    },
    {
      label: "Damage:",
      value: truncateText(listing?.damage),
    },
    {
      label: "damageSecondary:",
      value: truncateText(listing?.damageSecondary),
    },
    {
      label: "Auction:",
      value: truncateText(listing?.auction),
    },
    {
      label: "Loss:",
      value: truncateText(listing?.loss),
    },
    {
      label: "Run and drive:",
      value: listing.run_and_drive ? "YES" : "NO",
    },
    {
      label: "State:",
      value: truncateText(listing?.state),
    },
    {
      label: "Location:",
      value: truncateText(listing?.location),
    },
    {
      label: "Document:",
      value: truncateText(listing?.document),
    },
    {
      label: "Clean_title:",
      value: listing.clean_title ? "YES" : "NO",
    },
    {
      label: "Registred_pl:",
      value: listing.registred_pl ? "YES" : "NO",
    },
    {
      label: "Seller:",
      value: truncateText(listing?.seller),
    },
    {
      label: "Color:",
      value: truncateText(listing.color),
    },
    {
      label: "Engine:",
      value: truncateText(listing.engine),
    },
    {
      label: "Fuel :",
      value: truncateText(listing.fuel),
    },
    {
      label: "Condition :",
      value: truncateText(listing.condition),
    },
    {
      label: "Transmission:",
      value: truncateText(listing.transmission),
    },
    {
      label: "Drive:",
      value: truncateText(listing.drive),
    },
    {
      label: "Auction at:",
      value: truncateText(new Date(listing.auction_at).toDateString()),
    },
    {
      label: "Status:",
      value: truncateText(listing.status),
    },
    {
      label: "Lot:",
      value: truncateText(listing.lot),
    },
  ];

  return (
    <div className="case-border tw-px-[15px] tablet:tw-px-[30px] tw-pt-[30px] tw-pb-[13px] !tw-w-full desktop:tw-max-w-[708px] ">
      <div className="tablet:tw-block minilaptop:tw-flex  tw-gap-[28px] laptop:tw-block">
        <div className="">
          <h2 className="text-title tw-mb-[30px] tw-font-semibold">Venicle Information</h2>
          <ul className="tw-flex tw-flex-col tw-gap-[16px]">
            {vehicleinfo.map((item, idx) => {
              return <ListItem key={idx} label={item.label} value={item.value} />;
            })}
          </ul>
        </div>
        <div className="tw-w-full ">{children}</div>
      </div>
    </div>
  );
};

export default Vehicleinfo;
