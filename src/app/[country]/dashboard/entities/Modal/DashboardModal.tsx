import ButtonMain from '@/components/button/ButtonMain'
import React from 'react'

const DashboardModal = ({children}) => {
  return (
    <div className='tw-fixed tw-top-0 tw-left-0 tw-w-screen tw-h-screen tw-bg-[#051B25CC] tw-z-50 tw-flex tw-items-center tw-justify-center'>
        <div className='tw-max-w-[630px] tw-w-full tw-bg-white tw-p-[50px] tw-rounded-[10px]'>
            <ButtonMain text={"X"} color='grey' variant='outlined'/> 
            {children}
        </div>
    </div>
  )
}

export default DashboardModal