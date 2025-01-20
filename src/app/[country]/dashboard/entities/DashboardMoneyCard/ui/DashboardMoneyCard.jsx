import React from 'react'

const DashboardMoneyCard = ({text, price, icon, infotext, secInfoText}) => {
  return (
    <div className='tw-max-w-[370px] tw-w-full tw-h-[230px] tw-bg-[#FFFFFF] tw-p-[30px] tw-flex tw-flex-col max-laptop:tw-max-w-full'>
        <div>
            <div className='tw-flex tw-justify-between'>
                <p className='tw-text-black'>{text}</p>
                <img src={icon} alt="" className='tw-max-w-[24px] tw-h-[24px]' />
            </div>
            <p className={`tw-text-[36px] ${text === "Available" ? 'tw-text-[#3ECF5C]' : text === 'Your Deposite' ? 'tw-text-blue-500' : 'tw-text-[#191919]' } `}>{price}</p>
        </div>
        <div className='tw-mt-auto'>
            <p className='tw-m-0 text-[16px] tw-leading-3 tw-h-[15px]'>{infotext}</p>
            <p className='tw-h-[15px]'>{secInfoText}</p>
        </div>
    </div>
  )
}

export default DashboardMoneyCard
