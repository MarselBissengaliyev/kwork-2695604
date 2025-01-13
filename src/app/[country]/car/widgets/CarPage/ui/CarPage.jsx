import React from "react";
import SliderCar from "../../../entities/SliderCar";

const CarPage = () => {
  return (
    <section className="tw-container">
      <div className="">
        <h1>
          2013 Chevrolet Impala <span>Ls 3.6L</span>
        </h1>
        <div className=""></div>
      </div>
      <div className="">
        <SliderCar />
      </div>
    </section>
  );
};

export default CarPage;
