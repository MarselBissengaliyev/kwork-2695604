"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // Основные стили
import "react-date-range/dist/theme/default.css"; // Тема
import { addYears } from "date-fns";

import css from "./Banner.module.scss";
import LawIcon from "./icons/LawIcon";
import SportsCarIcon from "./icons/SportsCarIcon";
import RatingIcon from "./icons/RatingIcon";

const Banner = ({ categories, makes, models }) => {
  const router = useRouter();
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [cleanTitle, setCleanTitle] = useState(false);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(1990, 0, 1),
    endDate: new Date(2021, 11, 31),
    key: "selection",
  });
  const dateRangeRef = useRef();
  const [showPicker, setShowPicker] = useState(false);
  const [availableModels, setAvailableModels] = useState([]);

  const handleSearch = () => {
    const query = {
      make: selectedMake,
      model: selectedModel,
      fromYear: dateRange.startDate.getFullYear(),
      toYear: dateRange.endDate.getFullYear(),
      cleanTitle,
    };
    router.push({ pathname: "/listings", query });
  };

  useEffect(() => {
    if (selectedMake) {
      const modelsForMake = models[selectedMake] || []; // Получаем модели для выбранной марки
      setAvailableModels(modelsForMake);
      setSelectedModel(""); // Сбрасываем модель при изменении марки
    }
  }, [selectedMake, models]);

  return (
    <div className={css.section}>
      <div className={"tw-container " + css.card}>
        <h4 className={"mb-4 " + css.title}>Buy Vehicles from USA Auto Auctions</h4>
        <div className={css.row + " row gy-3"}>
          <div className={css.item + " col-md-2"}>
            <select
              id="make"
              className={css.select + " form-select"}
              value={selectedMake}
              onChange={e => setSelectedMake(e.target.value)}
            >
              <option value="">Makes</option>
              {makes.map(make => (
                <option key={make.id} value={make.id}>
                  {make.name}
                </option>
              ))}
            </select>
          </div>

          <div className={css.item + " col-md-2"}>
            <select
              id="model"
              className={css.select + " form-select"}
              value={selectedModel}
              onChange={e => setSelectedModel(e.target.value)}
              disabled={!selectedMake}
            >
              <option value="">Models</option>
              {availableModels.map(model => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>

          <div className={css.item + " col-md-4"}>
            <div className={css.rangePicker} onClick={() => setShowPicker(!showPicker)}>
              <span>
                From <strong>{dateRange.startDate.getFullYear()}</strong> to{" "}
                <strong>{dateRange.endDate.getFullYear()}</strong>
              </span>
            </div>
            {showPicker && (
              <div className={css.range} ref={dateRangeRef}>
                <DateRange
                  ranges={[dateRange]}
                  onChange={ranges => setDateRange(ranges.selection)}
                  minDate={new Date(1930, 0, 1)}
                  maxDate={addYears(new Date(), 0)}
                />
              </div>
            )}
          </div>
          <div className={css.item + " col-md-2"}>
            <div className={css.toggleWrapper} onClick={() => setCleanTitle(!cleanTitle)}>
              <i className={cleanTitle ? "ri-toggle-fill" : "ri-toggle-line"}></i>
              <label htmlFor="cleanTitle" className={css.toggleLabel}>
                Clean Title
              </label>
            </div>
          </div>

          <a
            href={`/listings?from=${dateRange.startDate}&to=${dateRange.endDate}&model=${selectedModel}&make=${selectedMake}`}
            className={css.btn}
            onClick={handleSearch}
          >
            <span>Search</span>
            <i className="ri-search-line"></i>
          </a>
        </div>
        <div className={css.advantages}>
          <div className={css.item}>
            <SportsCarIcon />
            <span>
              Over 100,000+ used, wholesale, <br /> salvage and repairable cars in the catalog
            </span>
          </div>
          <div className={css.item}>
            <RatingIcon />
            <span>
              190+ satisfied <br /> customers
            </span>
          </div>
          <div className={css.item}>
            <LawIcon />
            <span>
              Real time bidding on the <br /> Auto4Export website
            </span>
          </div>
        </div>
        {/* Остальной код */}
      </div>
    </div>
  );
};

export default Banner;
