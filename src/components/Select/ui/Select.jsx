/* eslint-disable react/prop-types */
"use client";

import React, { useState, useEffect, useRef } from "react";

import "../styles/select.scss";

// eslint-disable-next-line react/prop-types
const Select = ({ options, name, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = option => {
    setSelected(option);
    setIsOpen(false);
    if (onChange) {
      onChange(name, option); // Передаем имя и выбранное значение в форму
    }
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <div className="custom-dropdown-header tw-text-[16px]" tabIndex="0" onClick={toggleDropdown}>
        {selected || name}
        <div className={`arrow ${isOpen ? "open" : ""}`}></div>
      </div>
      {isOpen && (
        <ul className="custom-dropdown-list">
          {options.map((option, idx) => {
            return (
              <li key={idx} className="custom-dropdown-item" onClick={() => handleSelect(option)}>
                {option}
              </li>
            );
          })}
        </ul>
      )}
      <input type="hidden" name={name} value={selected} /> {/* Скрытое поле для передачи значения */}
    </div>
  );
};

export default Select;
