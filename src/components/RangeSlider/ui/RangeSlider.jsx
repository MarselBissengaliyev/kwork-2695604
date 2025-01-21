"use client";

import React, { useState, useEffect } from "react";
import ReactSlider from "react-slider";

import "../styles/range-slider.scss";

// eslint-disable-next-line react/prop-types
const RangeSlider = ({ title, initialRange }) => {
  const [minValue, setMinValue] = useState(initialRange ? initialRange[0] : 100);
  const [maxValue, setMaxValue] = useState(initialRange ? initialRange[1] : 17000);

  const handleRangeChange = value => {
    const [newMinValue, newMaxValue] = value;
    if (newMinValue <= newMaxValue) {
      setMinValue(newMinValue);
      setMaxValue(newMaxValue);
    }
    console.log("Current range: ", value);
  };

  useEffect(() => {
    if (initialRange) {
      setMinValue(initialRange[0]);
      setMaxValue(initialRange[1]);
    }
  }, [initialRange]);

  return (
    <div style={{ maxWidth: "400px" }}>
      <h2 className="tw-text-[18px] tw-mb-[14px]">Current Bid Price Range {title}</h2>
      <ReactSlider
        min={100}
        max={17000}
        value={[minValue, maxValue]}
        onChange={handleRangeChange}
        renderTrack={(props, state) => <div {...props} className="track" />}
        renderThumb={(props, state) => <div {...props} className="thumb" />}
      />
      <p className="tw-flex tw-justify-between">
        <span> {`$${minValue}`}</span>
        <span> {`$${maxValue}`}</span>
      </p>
    </div>
  );
};

export default RangeSlider;
