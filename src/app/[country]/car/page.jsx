"use client";

import React from "react";
import { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./car.scss";

import HeroCar from "./widgets/HeroCar";

const page = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min"); // Подключаем JS Bootstrap
  }, []);
  return (
    <>
      <HeroCar />
    </>
  );
};

export default page;
