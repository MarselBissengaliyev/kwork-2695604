import React from 'react';

const ButtonMain = ({
  text,
  className,
  onClick,
  fullWidth = false,
  variant = "solid",
  color = "blue",
  icon, // добавляем поддержку иконки
  number,
}) => {
  // Цветовые значения
  const colorMap = {
    blue: '#3E73CF',
    green: '#3ECF5C',
    red: '#E3433A',
    grey: '#DBDBDB',
  };

  const currentColor = colorMap[color] || '#3E73CF'; // По умолчанию синий

  // Базовые классы
  const baseClasses = `tw-py-[10px] tw-px-[25px] tw-rounded-[26px] tw-font-medium`;
  const widthClass = fullWidth ? 'tw-w-full' : 'tw-inline-block';

  // Варианты кнопки
  const variantStyles =
    variant === 'solid'
      ? { backgroundColor: currentColor, color: 'white' }
      : { border: `2px solid ${currentColor}`, color: color === 'grey' ? '#191919' : currentColor, backgroundColor: 'transparent' };

  // Стили для числа
  const numberStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '4px 10px',
    borderRadius: '50%',
    backgroundColor: 'white',
    border: `2px solid ${
      variant === 'solid' ? 'white' : currentColor
    }`,
    color: currentColor,
    fontSize: '12px',
    fontWeight: 'bold',
    marginLeft: '12px',
  };

  // Стили для иконки
  const iconStyles = {
    width: '16px',
    height: '16px', 
    // marginLeft: number !== undefined ? '8px' : '0', // Если есть число, добавить отступ
  };

  return (
    <button
      className={`${baseClasses} ${widthClass} ${className} tw-flex tw-justify-center tw-items-center`}
      style={variantStyles}
      onClick={onClick}
    >
      {text}

      {/* Если есть number, отображаем его */}
      {number !== undefined && (
        <div style={numberStyles}>
          {number}
        </div>
      )}

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
