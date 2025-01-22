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
      label: "LOT:",
      value: <CopyText text={truncateText(listing?.lot)} />,
    },
    {
      label: "VIN:",
      value: <CopyText text={truncateText(listing?.vin)} />,
    },
    {
      label: "Mileage:",
      value: truncateText(listing?.mileage),
    },
    {
      label: "Keys:",
      value: truncateText(listing?.keys),
    },
    {
      label: "Damage:",
      value: truncateText(listing?.damage),
    },
    {
      label: "Engine:",
      value: truncateText(listing?.engine),
    },
    {
      label: "Fuel:",
      value: truncateText(listing?.fuel),
    },
    {
      label: "Transmission:",
      value: truncateText(listing?.transmission),
    },
    {
      label: "Lot Quality:",
      value: truncateText(listing?.lot),
    },
    {
      label: "Color:",
      value: truncateText(listing?.color),
    },
    {
      label: "Drive:",
      value: truncateText(listing?.drive),
    },
    {
      label: "Title:",
      value: truncateText(listing?.title),
    },
    {
      label: "Cycinder:",
      value: extractCylinders(listing?.engine),
    },
    {
      label: "Loss:",
      value: truncateText(listing?.loss),
    },
    {
      label: "Key:",
      value: truncateText(listing.key || "No Notes for this Lot"),
    },
    {
      label: "Start Date:",
      value: truncateText(listing.start_date || "No Notes for this Lot"),
    },
    {
      label: "ACV:",
      value: truncateText(listing.acv || "No Notes for this Lot"),
    },
    {
      label: "Sale Document:",
      value: truncateText(listing.document || "No Notes for this Lot"),
    },
    {
      label: "Restraint System:",
      value: truncateText(listing.restraint_system || "No Notes for this Lot"),
    },
    {
      label: "Air Bags:",
      value: truncateText(listing.air_bags || "No Notes for this Lot"),
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
        <div className="tw-w-full ">
          {children}
          <hr className="tw-mt-[40px] hidden laptop:block  tw-mb-[30px]" />
          <ul>
            <h2 className="text-title tw-mt-[40px] tw-mb-[30px] tw-font-semibold">Status Report</h2>
            <ListItem label={"Condition Grade:"} value={listing.condition} icon={""} />
          </ul>
          <hr className="tw-my-[30px] " />
          <ul>
            <h2 className="text-title tw-mb-[30px] tw-font-semibold">Options</h2>
            <ListItem label={"Dual, Side"} value={"Hard Roof Top"} icon={""} />
            <ListItem label={"Cloth"} value={"FM Radio"} icon={""} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Vehicleinfo;
