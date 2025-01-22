import ButtonMain from '@/components/button/ButtonMain'
import React from 'react'

interface IDashboardModal {
    children: React.ReactNode;
    closeModal: () => void;
}

const DashboardModal = ({children,closeModal}: IDashboardModal) => {
  return (
    <div className='tw-fixed tw-top-0 tw-left-0 tw-w-screen tw-h-screen tw-bg-[#051B25CC] tw-z-50 tw-flex tw-items-center tw-justify-center'>
        <div className='tw-max-w-[630px] tw-w-full tw-bg-white tw-p-[50px] tw-rounded-[10px] tw-relative'>
            <ButtonMain text={"X"} color='grey' variant='outline' classNames={'tw-absolute tw-top-0 tw-right-0 tw-mt-[20px] tw-mr-[20px] !tw-p-[10px]'} onClick={closeModal}/> 
            {children}
        </div>
    </div>
  )
}

export default DashboardModal