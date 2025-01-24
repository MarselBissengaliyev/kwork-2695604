'use client'

import React from 'react';

interface IBtnMain {
  text: React.ReactNode | string;
  classNames?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  variant?: 'solid' | 'outline';
  color?: 'blue' | 'green' |'red' | 'grey';
  icon?: string;
  number?: number;
  hoverEffect?: boolean;
  hoverColor?: string;
  disabled?: boolean;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
}

const ButtonMain = ({
  text = "",
  classNames = "btn",
  onClick = () => {},
  fullWidth = false,
  variant = "solid",
  color = "blue",
  icon = "",
  number=0 ,
  hoverEffect = true, 
  hoverColor = "#FFFFFF",
  disabled = false,
  onMouseOver = () => {},
  onMouseOut = () => {}
}: IBtnMain) => {
  // Цветовые значения
  const colorMap = {
    blue: '#3E73CF',
    green: '#3ECF5C',
    red: '#E3433A',
    grey: '#DBDBDB',
  };

  const currentColor = colorMap[color] || '#3E73CF'; // По умолчанию синий
  const hoverColorValue = hoverColor || currentColor; // Если hoverColor не задан, используем currentColor

  // Базовые классы
  const baseClasses = `tw-py-[10px] tw-px-[25px] tw-rounded-[26px] tw-font-medium tw-flex tw-justify-center tw-items-center`;
  const widthClass = fullWidth ? 'tw-w-full' : 'tw-inline-block';

  // Варианты кнопки
  const variantStyles =
    variant === 'solid'
      ? { backgroundColor: currentColor, color: 'white' }
      : { border: `2px solid ${currentColor}`, color: color === 'grey' ? '#191919' : currentColor, backgroundColor: 'transparent' };

  // Стили для числа
  const numberStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center' as React.CSSProperties['textAlign'], // Явное указание типа
    padding: '4px 10px',
    borderRadius: '50%',
    backgroundColor: 'white',
    border: `2px solid ${variant === 'solid' ? 'white' : currentColor}`,
    color: currentColor,
    fontSize: '12px',
    fontWeight: 'bold',
    marginLeft: '12px',
  };
  

  // Стили для иконки
  const iconStyles = {
    width: '18px',
    height: '18px', 
    // marginLeft: '8px',
    // marginBottom: '3px',
  };

  // Добавляем динамическую поддержку hover-классов
  const hoverClasses = hoverEffect
    ? variant === 'solid'
      ? `hover:tw-bg-${hoverColorValue} hover:tw-text-white`
      : `hover:tw-bg-${hoverColorValue}-light hover:tw-text-white hover:tw-border-${hoverColorValue}-light`
    : ''; // Если hoverEffect = false, убираем hover эффект

  return (
    <button
      className={`${baseClasses} ${widthClass} ${hoverClasses} ${classNames}`} // динамический hover и классы
      style={variantStyles}
      onClick={onClick}
      disabled={disabled}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {text}

      {/* Если есть number, отображаем его */}
      {/* {number !== undefined && (
        <div style={numberStyles}>
          {number}
        </div>
      )} */}

      {/* Если есть icon, отображаем его */}
      {icon && (
        <img
          src={icon}
          alt="icon"
          style={iconStyles}
        />
      )}
    </button>
  );
};

export default ButtonMain;
