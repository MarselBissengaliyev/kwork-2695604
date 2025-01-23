'use client'
import BackButton from '@/components/button/BackButton'
import ButtonMain from '@/components/button/ButtonMain'
import PageDirect from '@/components/Common/PageDirect'
import { Container } from '@/components/Container'
import Input from '@/components/Input'
import InputPhone from '@/components/InputPhone'
import React, { useState } from 'react'
import "./styles.scss"
import DashboardModal from '../../entities/Modal/DashboardModal'

const EditSetting = () => {
    const [activeButton, setActiveButton] = useState('Edit Your Profile');
    const [click, setClick] = useState(false)
    const handleClick = () =>{
        setClick((prev) => !prev)
    }
  return (
    <div>
        <PageDirect pageTitle={"Edit Settings"} className={'tw-justify-between tw-gap-5 max-mindesk:tw-flex-col max-mindesk:tw-justify-start'}>
            <div className='tw-flex tw-gap-[15px] tw-overflow-x-auto tw-w-full no-scrollbar max-mindesk:tw-gap-2'>
                <BackButton/>
                <ButtonMain classNames={'tw-w-[176px] tw-flex-shrink-0'}  onClick={() => setActiveButton("Edit Your Profile")} text='Edit Your Profile' color={activeButton === "Edit Your Profile" ? "blue" : "grey"} variant='outline'/>
                <ButtonMain classNames={'tw-w-[240px] tw-flex-shrink-0'}  onClick={() => setActiveButton("Change Your Password")} text='Change Your Password' color={activeButton === "Change Your Password" ? "blue" : "grey"} variant='outline'/>
            </div>
        </PageDirect>
        <Container className={""}>
            {click ? <DashboardModal closeModal={()=> handleClick()} >

                        <div className='tw-flex tw-gap-[20px] tw-justify-center'>
                            <img src='/images/dashboard/icons/tick.png' className='tw-h-[40px] tw-w-[40px]'/>
                            <h2>Profile updated</h2>
                        </div>
                    </DashboardModal> : <div></div>}
            {activeButton === "Edit Your Profile" ? 
            <div className={"tw-grid tw-grid-cols-3 tw-mt-[40px] tw-mb-[70px] tw-border-solid tw-border-[1px] tw-border-[#ECECEC] tw-p-[40px] tw-gap-[30px] tw-rounded-[10px] max-mindesk:tw-grid-cols-1 "}>
            <div className='tw-flex tw-flex-col tw-gap-[20px]'>
                <span>
                    <div className='tw-flex'>
                        <p className='tw-text-[#191919]'>Name</p>
                        <p className='tw-text-red-500'>*</p>
                    </div>
                    <Input value={"Andrey Fadion"} className="!tw-bg-[#F9F9F9] tw-h-[64px] !tw-pl-[30px]" disabled={true} type={undefined} name={undefined} onChange={undefined} placeholder={undefined} pattern={undefined} maxLength={undefined}/>
                </span>
                <span>
                    <div className='tw-flex'>
                        <p className='tw-text-[#191919]'>Country</p>
                        <p className='tw-text-red-500'>*</p>
                    </div>
                    <div className="tw-relative tw-w-full">
                        <select className="tw-w-full tw-h-[64px] tw-px-[30px] tw-border tw-border-gray-300 tw-rounded-full tw-text-base tw-bg-white tw-appearance-none tw-pr-10">
                            <option value="Ukraine" selected>Ukraine</option>
                            <option value="Russia">Russia</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="USA">USA</option>
                        </select>
                        <div className="tw-absolute tw-inset-y-0 tw-right-3 tw-flex tw-items-center tw-pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="tw-h-4 tw-w-4 tw-text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    {/* <Input className=" tw-h-[64px] !tw-pl-[30px]"/> */}
                </span>
                <span>
                    <div className='tw-flex'>
                        <p className='tw-text-[#191919]'>Address</p>
                        
                    </div>
                    <Input className=" tw-h-[64px] !tw-pl-[30px]" value={undefined} type={undefined} name={undefined} onChange={undefined} placeholder={undefined} pattern={undefined} maxLength={undefined} disabled={undefined} />
                </span>
                <span>
                    <div className='tw-flex'>
                        <p className='tw-text-[#191919]'>Timezone</p>
                        {/* <p className='tw-text-red-500'>*</p> */}
                    </div>
                    <div className="tw-relative tw-w-full">
                        <select className="tw-w-full tw-h-[64px] tw-px-[30px] tw-border tw-border-gray-300 tw-rounded-full tw-text-base tw-bg-white tw-appearance-none tw-pr-10">
                            <option value="Ukraine" selected>Eastern European Time</option>
                            <option value="Russia">Eastern Asian Time</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="USA">USA</option>
                        </select>
                        <div className="tw-absolute tw-inset-y-0 tw-right-3 tw-flex tw-items-center tw-pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="tw-h-4 tw-w-4 tw-text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    {/* <Input className=" tw-h-[64px] !tw-pl-[30px]"/> */}
                </span>
            </div>
            <div className='tw-flex tw-flex-col tw-gap-[20px]'>
                <span>
                    <div className='tw-flex'>
                        <p className='tw-text-[#191919]'>Phone</p>
                        <p className='tw-text-red-500'>*</p>
                    </div>
                    <InputPhone className={"phoneEdit"}/>
                </span>
                <span>
                    <div className='tw-flex'>
                        <p className='tw-text-[#191919]'>State</p>
                        <p className='tw-text-red-500'>*</p>
                    </div>
                    <Input value={"Andrey Fadion"} className=" tw-h-[64px] !tw-pl-[30px]" disabled={true} type={undefined} name={undefined} onChange={undefined} placeholder={undefined} pattern={undefined} maxLength={undefined}/>
                </span>
                <span>
                    <div className='tw-flex'>
                        <p className='tw-text-[#191919]'>Zip Code</p>
                        {/* <p className='tw-text-red-500'>*</p> */}
                    </div>
                    <Input value={"Andrey Fadion"} className=" tw-h-[64px] !tw-pl-[30px]" disabled={true} type={undefined} name={undefined} onChange={undefined} placeholder={undefined} pattern={undefined} maxLength={undefined}/>
                </span>
                <span className='tw-flex tw-justify-end tw-items-center tw-text-center tw-h-[97px] max-mindesk:tw-hidden'>
                   <div className='tw-flex tw-mt-[25px]'> <p className='tw-text-red-500'>*</p>  Required fields</div>
                </span>
            </div>
            <div className='tw-flex tw-flex-col tw-gap-[20px]'>
                <span>
                    <div className='tw-flex'>
                        <p className='tw-text-[#191919]'>Email</p>
                        <p className='tw-text-red-500'>*</p>
                    </div>
                    <Input value={"Andrey Fadion"} className=" tw-h-[64px] !tw-pl-[30px]" disabled={true} type={undefined} name={undefined} onChange={undefined} placeholder={undefined} pattern={undefined} maxLength={undefined}/>
                </span>
                <span>
                    <div className='tw-flex'>
                        <p className='tw-text-[#191919]'>City</p>
                        <p className='tw-text-red-500'>*</p>
                    </div>
                    <Input value={"Andrey Fadion"} className=" tw-h-[64px] !tw-pl-[30px]" disabled={true} type={undefined} name={undefined} onChange={undefined} placeholder={undefined} pattern={undefined} maxLength={undefined}/>
                </span>
                <span>
                    <div className='tw-flex'>
                        <p className='tw-text-[#191919]'>Company</p>
                        {/* <p className='tw-text-red-500'>*</p> */}
                    </div>
                    <Input value={"Andrey Fadion"} className=" tw-h-[64px] !tw-pl-[30px]" disabled={true} type={undefined} name={undefined} onChange={undefined} placeholder={undefined} pattern={undefined} maxLength={undefined}/>
                </span>
                <span className='tw-hidden max-mindesk:tw-block tw-justify-end tw-items-center tw-text-center'>
                    <div className='tw-flex tw-mt-[25px]'> <p className='tw-text-red-500'>*</p>  Required fields</div>
                </span>
                <span className='tw-h-[97px] tw-flex-col tw-flex tw-justify-end'>
                    <ButtonMain text='Upload Profile' fullWidth={true} classNames='tw-h-[64px] tw-gap-[10px]' icon='/images/dashboard/icons/update.png' onClick={() => handleClick()}/>
                </span>
            </div>
        </div>
        : 
        <div className='tw-grid tw-grid-cols-3 tw-mt-[40px] tw-mb-[70px] tw-border-solid tw-border-[1px] tw-border-[#ECECEC] tw-p-[40px] tw-gap-[30px] tw-rounded-[10px] max-mindesk:tw-grid-cols-1'>
            <div>
                <span>
                    <div className='tw-flex'>
                        <p className='tw-text-[#191919]'>Current Password</p>
                        <p className='tw-text-red-500'>*</p>
                    </div>
                    <Input className="tw-h-[64px] !tw-pl-[30px]" value={undefined} type={undefined} name={undefined} onChange={undefined} placeholder={undefined} pattern={undefined} maxLength={undefined} disabled={undefined}/>
                </span>
            </div>
            <div>
                <span>
                    <div className='tw-flex'>
                        <p className='tw-text-[#191919]'>New Password</p>
                        <p className='tw-text-red-500'>*</p>
                    </div>
                    <Input className="tw-h-[64px] !tw-pl-[30px]" value={undefined} type={undefined} name={undefined} onChange={undefined} placeholder={undefined} pattern={undefined} maxLength={undefined} disabled={undefined}/>
                </span>
                <span className='tw-flex tw-justify-end tw-items-center tw-text-center tw-h-[97px] max-mindesk:tw-hidden'>
                   <div className='tw-flex tw-mt-[25px]'> <p className='tw-text-red-500'>*</p>  Required fields</div>
                </span>
            </div>
            <div>
                <span>
                    <div className='tw-flex'>
                        <p className='tw-text-[#191919]'>Confirm New Password</p>
                        <p className='tw-text-red-500'>*</p>
                    </div>
                    <Input  className="tw-h-[64px] !tw-pl-[30px]" value={undefined} type={undefined} name={undefined} onChange={undefined} placeholder={undefined} pattern={undefined} maxLength={undefined} disabled={undefined}/>
                </span>
                <span className='tw-hidden max-mindesk:tw-block tw-justify-end tw-items-center tw-text-center'>
                    <div className='tw-flex tw-mt-[25px]'> <p className='tw-text-red-500'>*</p>  Required fields</div>
                </span>
                <span className='tw-h-[97px] tw-flex-col tw-flex tw-justify-end'>
                    <ButtonMain text='Upload Profile' fullWidth={true} classNames='tw-h-[64px] tw-gap-[10px]' icon='/images/dashboard/icons/update.png' onClick={() => handleClick()}/>
                </span>
            </div>
        </div>}
        </Container>
    </div>
  )
}

export default EditSetting