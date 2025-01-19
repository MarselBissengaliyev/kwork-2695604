"use client";

import "../styles/input.scss";

export default function Input({ value, type, name, onChange, className, placeholder, pattern, maxLength }) {
  return (
    <input
      id={name}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`${className} tw-outline-none custom-input`}
      placeholder={placeholder}
      pattern={pattern}
      maxLength={maxLength}
    />
  );
}
