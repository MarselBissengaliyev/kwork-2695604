"use client";

import React, { useState } from "react";
import { Range } from "@alifd/next";

import "@alifd/next/dist/next.css";

const RangeSlider = () => {
  const [rangeValue, setRangeValue] = useState([10, 80]);

  const handleRangeChange = value => {
    setRangeValue(value);
    console.log("Current range: ", value);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h3>Choose a Range:</h3>
      <Range slider="double" defaultValue={rangeValue} value={rangeValue} onChange={handleRangeChange} />
      <p>Selected Range: {rangeValue.join(" - ")}</p>
    </div>
  );
};

export default RangeSlider;
