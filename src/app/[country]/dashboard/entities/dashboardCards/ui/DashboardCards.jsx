import React from 'react';

const DashboardCards = ({number = 0, text = "Text ", icon, linkText = "Text", link = "#"}) => {
  return (
    <div
      style={{ border: "2px solid #ECECEC", borderRadius: "10px" }}
      className="tw-max-w-[292px] tw-w-full tw-h-[236px] tw-px-[30px] tw-py-[30px] tw-flex tw-flex-col max-laptop:tw-max-w-full">
      <div className="tw-flex tw-justify-between">
        <h2 className={`${number <= 0 ? 'tw-text-[#8C8C8C]' : 'tw-text-blue-500'} tw-text-[50px]`}>{number}</h2>
        <img
          src={icon}
          alt="icon"
          className="tw-max-w-[30px] tw-h-full tw-object-contain"
        />
      </div>
      <p className='tw-text-[18px] tw-text-[#191919]'>{text}</p>
      {/* Добавляем flex-grow для распределения пространства */}
      <div className="tw-flex-grow"></div>
      <div className="tw-mt-auto tw-flex tw-items-center tw-text-center">
        <a className='tw-text-[16px] tw-text-[#191919]' href={link}>{linkText}</a>
        <img src='/images/dashboard/icons/rarrow.png' alt='right arrow' className='tw-max-w-[14px] tw-h-[11px] tw-ml-[10px]'/>
      </div>
    </div>
  );
};

export default DashboardCards;
