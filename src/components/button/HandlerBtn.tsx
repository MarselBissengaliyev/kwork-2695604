"use client";
import React, { useState } from 'react'
import ButtonMain from './ButtonMain';

const HandlerBtn = ({classNames, variant, text, handleText}) => {

    const [activeButton, setActiveButton] = useState('Current Bids');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
      }
  return (
    <ButtonMain
        classNames={classNames} 
        color={activeButton === handleText ? 'blue' : 'grey'} 
        variant={variant} 
        text={text}
        onClick={() => handleButtonClick({handleText})}
    />
  )
}

export default HandlerBtn