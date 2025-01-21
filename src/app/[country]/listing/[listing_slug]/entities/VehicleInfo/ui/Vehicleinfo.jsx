import React from "react";

import ListItem from "@/components/ListItem/index";

import CopyText from "@/components/ListItem/models/CopyText";

const vehicleinfo = [
  {
    label: "LOT:",
    value: <CopyText text={"30874242"} />,
  },
  {
    label: "VIN:",
    value: <CopyText text={"1FALP6536WK134349"} />,
  },
  {
    label: "Mileage:",
    value: "138,412",
  },  
  {
    label: "Keys:",
    value: "46 861 Actual",
  },
  {
    label: "Damage:",
    value: "Run and Drive ",
  },
  {
    label: "Engine:",
    value: "NORMAL WEAR",
  },
  {
    label: "Fuel:",
    value: "NORMAL WEAR",
  },
  {
    label: "Transmission:",
    value: "$28,190 USD",
  },
  {
    label: "Lot Quality:",
    value: "SEDAN 4DR",
  },
  {
    label: "Color:",
    value: "CAR WHITE 2.5L 4",
  },
  {
    label: "Run and Drive:",
    value: "4",
  },
  {
    label: "Title:",
    value: "AUTOMATIC",
  },
  {
    label: "Cycinder:",
    value: "Front-wheel Drive",
  },
  {
    label: "Loss:",
    value: "YES",
  },
  {
    label: "Key:",
    value: "No Notes for this Lot",
  },
  {
    label: "Start Date:",
    value: "No Notes for this Lot",
  },
  {
    label: "ACV:",
    value: "No Notes for this Lot",
  },
  {
    label: "Sale Document:",
    value: "No Notes for this Lot",
  },
  {
    label: "Restraint System:",
    value: "No Notes for this Lot",
  },
  {
    label: "Air Bags:",
    value: "No Notes for this Lot",
  },
  {
    label: "Driver AirBag:",
    value: "YES",
  },
];

const Vehicleinfo = ({ children, listing }) => {
  console.log("Listing=", listing?.slug);
  const vehicleinfo = [
    {
      label: "LOT:",
      value: <CopyText text={listing?.lot} />,
    },
    {
      label: "VIN:",
      value: <CopyText text={listing?.vin} />,
    },
    {
      label: "Mileage:",
      value: listing?.mileage,
    },
    {
      label: "Keys:",
      value: listing?.keys,
    },
    {
      label: "Damage:",
      value: listing?.damage,
    },
    {
      label: "Engine:",
      value: listing?.engine,
    },
    {
      label: "Fuel:",
      value: listing?.fuel,
    },
    {
      label: "Transmission:",
      value: listing?.transmission,
    },
    {
      label: "Lot Quality:",
      value: listing?.lot,
    },
    {
      label: "Color:",
      value: listing?.color,
    },
    {
      label: "Drive:",
      value: listing?.drive,
    },
    {
      label: "Title:",
      value: listing?.title,
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
            <ListItem label={"Condition Grade:"} value={"3 - Average"} icon={""} />
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
