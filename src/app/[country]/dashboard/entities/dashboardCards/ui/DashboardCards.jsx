import React from 'react';

const DashboardCards = () => {
  return (
    <div
      style={{ border: "2px solid #ECECEC", borderRadius: "10px" }}
      className="tw-max-w-[292px] tw-w-full tw-h-[236px] tw-px-[30px] tw-py-[30px] tw-flex tw-flex-col "
    >
      <div className="tw-flex tw-justify-between">
        <h2 className='tw-text-blue-500 tw-text-[50px]'>3</h2>
        <img
          src="/images/dashboard/icons/bidding.png"
          alt="icon"
          className="tw-max-w-[30px] tw-h-[40px]"
        />
      </div>
      <p className='tw-text-[18px] tw-text-[#191919]'>Outbidded Bids</p>
      {/* Добавляем flex-grow для распределения пространства */}
      <div className="tw-flex-grow"></div>
      <div className="tw-mt-auto tw-flex tw-items-center">
        <p className='tw-text-[16px] tw-text-[#191919]'>Please, raise your bids</p>
        <img src='/images/dashboard/icons/rarrow.png' alt='right arrow' className='tw-max-w-[14px] tw-h-[11px] tw-mb-[15px] tw-ml-[10px]'/>
      </div>
    </div>
  );
};

export default DashboardCards;
