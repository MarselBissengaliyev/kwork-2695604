import React from 'react';

const ButtonMain = ({ children, className, onClick, fullWidth = false, variant = "solid", color = "blue" }) => {
  // Цветовые значения
  const colorMap = {
    blue: '#3E73CF',
    green: '#3ECF5C',
    red: '#E3433A',
  };

  const currentColor = colorMap[color] || '#3E73CF'; // По умолчанию синий

  // Базовые классы
  const baseClasses = `tw-py-[10px] tw-px-[25px] tw-rounded-[26px] tw-font-medium`;
  const widthClass = fullWidth ? 'tw-w-full' : 'tw-inline-block';

  // Варианты кнопки
  const variantStyles =
    variant === 'solid'
      ? { backgroundColor: currentColor, color: 'white' }
      : { border: `2px solid ${currentColor}`, color: currentColor, backgroundColor: 'transparent' };

  return (
    <button
      className={`${baseClasses} ${widthClass} ${className}`}
      style={variantStyles}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonMain;
