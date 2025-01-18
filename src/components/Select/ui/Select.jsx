import React, { useState, useEffect, useRef } from "react";

import "../styles/select.scss";

const Select = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select Type");
  const dropdownRef = useRef(null); // Ссылка на корневой элемент селекта

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = option => {
    setSelected(option);
    setIsOpen(false);
  };

  // Закрытие выпадающего списка при клике вне селекта
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
      <div className="custom-dropdown-header" tabIndex="0" onClick={toggleDropdown}>
        {selected}
        <div className={`arrow ${isOpen ? "open" : ""}`}></div>
      </div>
      {isOpen && (
        <ul className="custom-dropdown-list">
          {options.map(option => (
            <li key={option} className="custom-dropdown-item" onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
