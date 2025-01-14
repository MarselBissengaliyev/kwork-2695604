import React from 'react'

const DashboardMoneyCard = () => {
  return (
    <div className='tw-max-w-[370px] tw-w-full tw-h-[230px] tw-bg-[#FFFFFF] tw-p-[30px] tw-flex tw-flex-col'>
        <div>
            <div className='tw-flex tw-justify-between'>
                <p className='tw-text-black'>Your Deposite</p>
                <img src="/images/dashboard/icons/wallet.png" alt="" className='tw-max-w-[24px] tw-h-[24px]' />
            </div>
            <p className='tw-text-[36px] tw-text-blue-500'>$10,000</p>
        </div>
        <div className='tw-mt-auto'>
            <p className='tw-m-0 text-[16px] tw-leading-3'>Need More? Please, add your deposit </p>
            <p>Also you can refund your deposit here.</p>
        </div>
    </div>
  )
}

export default DashboardMoneyCard
