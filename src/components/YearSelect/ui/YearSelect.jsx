"use client";

import React, { useState, useEffect, useRef } from "react";

import "../styles/select-year.scss";

const YearSelector = ({ fromOptions, toOptions, onChange, label }) => {
  const [isOpenFrom, setIsOpenFrom] = useState(false);
  const [isOpenTo, setIsOpenTo] = useState(false);
  const [selectedFrom, setSelectedFrom] = useState("");
  const [selectedTo, setSelectedTo] = useState("");

  const dropdownRefFrom = useRef(null);
  const dropdownRefTo = useRef(null);

  const toggleDropdownFrom = () => setIsOpenFrom(!isOpenFrom);
  const toggleDropdownTo = () => setIsOpenTo(!isOpenTo);

  const handleSelectFrom = option => {
    setSelectedFrom(option);
    setIsOpenFrom(false);
    if (onChange) {
      onChange("from", option);
    }
  };

  const handleSelectTo = option => {
    setSelectedTo(option);
    setIsOpenTo(false);
    if (onChange) {
      onChange("to", option);
    }
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRefFrom.current && !dropdownRefFrom.current.contains(event.target)) {
        setIsOpenFrom(false);
      }
      if (dropdownRefTo.current && !dropdownRefTo.current.contains(event.target)) {
        setIsOpenTo(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="">
      <h2 className="tw-text-[18px] tw-mb-[14px]">{label}</h2>
      <div className="year-selector-container">
        <div className="year-selector-dropdown" ref={dropdownRefFrom}>
          <div className="year-selector-header" onClick={toggleDropdownFrom}>
            {selectedFrom || "From"}
            <div className={`year-selector-arrow ${isOpenFrom ? "open" : ""}`}></div>
          </div>
          {isOpenFrom && (
            <ul className="year-selector-list">
              {fromOptions.map(option => (
                <li key={option} className="year-selector-item" onClick={() => handleSelectFrom(option)}>
                  {option}
                </li>
              ))}
            </ul>
          )}
          <input type="hidden" name="from" value={selectedFrom} />
        </div>

        <div className="year-selector-divider" />

        <div className="year-selector-dropdown" ref={dropdownRefTo}>
          <div className="year-selector-header" onClick={toggleDropdownTo}>
            {selectedTo || "To"}
            <div className={`year-selector-arrow ${isOpenTo ? "open" : ""}`}></div>
          </div>
          {isOpenTo && (
            <ul className="year-selector-list">
              {toOptions.map(option => (
                <li key={option} className="year-selector-item" onClick={() => handleSelectTo(option)}>
                  {option}
                </li>
              ))}
            </ul>
          )}
          <input type="hidden" name="to" value={selectedTo} />
        </div>
      </div>
    </div>
  );
};

export default YearSelector;
