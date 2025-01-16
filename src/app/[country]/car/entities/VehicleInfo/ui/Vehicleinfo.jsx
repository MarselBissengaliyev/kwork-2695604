import React from "react";

import ListItem from "@/components/ListItem/index";
import ButtonMain from "@/components/button/ButtonMain";

const vehicleinfo = [
  {
    label: "LOT:",
    value: "30874242",
  },
  {
    label: "VIN:",
    value: "1FALP6536WK134349",
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

const Vehicleinfo = () => {
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
          <ButtonMain
            className={
              "tw-px-[100px] tw-w-full tw-py-[21.5px] tw-rounded-[32px] hidden laptop:block tw-text-[18px] tw-leading-[21px] tw-mt-[45px]"
            }
          >
            <span className="!tw-w-[82px]">Get report</span>
          </ButtonMain>

          <hr className="tw-mt-[40px] hidden laptop:block  tw-mb-[30px]" />
          <ul>
            <h2 className="text-title tw-mb-[30px] tw-font-semibold">Status Report</h2>
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
