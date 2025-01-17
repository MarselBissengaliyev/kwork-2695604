import React from "react";
import css from "./Advantages.module.scss";
import FreeIcon from "./icons/FreeIcon";
import LicenseIcon from "./icons/LicenseIcon";
import MoneyBack from "./icons/MoneyBack";
import GuaranteIcon from "./icons/GuaranteIcon.jsx";
import VehicleIcon from "./icons/VehicleIcon";
import UsaIcon from "./icons/UsaIcon";

const Advantages = () => {
  return (
    <div className={css.section}>
      <div className={css.row + " tw-container"}>
        <div className={css.card}>
          <div className={css.icon}>
            <FreeIcon />
          </div>
          <span>Free membership</span>
        </div>
        <div className={css.card}>
          <div className={css.icon}>
            <LicenseIcon />
          </div>
          <span>No business license required</span>
        </div>
        <div className={css.card}>
          <div className={css.icon}>
            <MoneyBack />
          </div>
          <span>100% Refundable deposit</span>
        </div>
        <div className={css.card}>
          <div className={css.icon}>
            <GuaranteIcon />
          </div>
          <span>Lowest fees guaranteed</span>
        </div>
        <div className={css.card}>
          <div className={css.icon}>
            <VehicleIcon />
          </div>
          <span>Transportation assistance</span>
        </div>
        <div className={css.card}>
          <div className={css.icon}>
            <UsaIcon />
          </div>
          <span>200+ locations nationwide</span>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
