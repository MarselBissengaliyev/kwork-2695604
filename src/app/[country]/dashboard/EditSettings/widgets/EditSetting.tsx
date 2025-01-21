'use client'
import BackButton from '@/components/button/BackButton'
import ButtonMain from '@/components/button/ButtonMain'
import PageDirect from '@/components/Common/PageDirect'
import { Container } from '@/components/Container'
import Input from '@/components/Input'
import InputPhone from '@/components/InputPhone'
import React, { useState } from 'react'
import "./styles.scss"

const EditSetting = () => {
    const [activeButton, setActiveButton] = useState('Edit Your Profile');
  return (
    <div>
        <PageDirect pageTitle={"Edit Settings"} className={'tw-justify-between tw-gap-5 max-mindesk:tw-flex-col max-mindesk:tw-justify-start'}>
            <div className='tw-flex tw-gap-[15px] tw-overflow-x-auto tw-w-full no-scrollbar max-mindesk:tw-gap-2'>
                <BackButton/>
                <ButtonMain classNames={'tw-w-[176px] tw-flex-shrink-0'}  onClick={() => setActiveButton("Edit Your Profile")} text='Edit Your Profile' color={activeButton === "Edit Your Profile" ? "blue" : "grey"} variant='outlined'/>
                <ButtonMain classNames={'tw-w-[240px] tw-flex-shrink-0'}  onClick={() => setActiveButton("Change Your Password")} text='Change Your Password' color={activeButton === "Change Your Password" ? "blue" : "grey"} variant='outlined'/>
            </div>
        </PageDirect>
        <Container className={""}>
            <div className={"tw-grid tw-grid-cols-3 tw-mt-[40px] tw-mb-[70px] tw-border-solid tw-border-[1px] tw-border-[#ECECEC] tw-p-[40px] tw-gap-[30px] tw-rounded-[10px] max-mindesk:tw-grid-cols-1    "}>
                <div className='tw-flex tw-flex-col tw-gap-[20px]'>
                    <span>
                        <div className='tw-flex'>
                            <p className='tw-text-[#191919]'>Name</p>
                            <p className='tw-text-red-500'>*</p>
                        </div>
                        <Input value={"Andrey Fadion"} className="!tw-bg-[#F9F9F9] tw-h-[64px] !tw-pl-[30px]" disabled={true}/>
                    </span>
                    <span>
                        <div className='tw-flex'>
                            <p className='tw-text-[#191919]'>Country</p>
                            <p className='tw-text-red-500'>*</p>
                        </div>
                        <Input className="!tw-bg-[#F9F9F9] tw-h-[64px] !tw-pl-[30px]"/>
                    </span>
                    <span>
                        <div className='tw-flex'>
                            <p className='tw-text-[#191919]'>Address</p>
                            
                        </div>
                        <Input className="!tw-bg-[#F9F9F9] tw-h-[64px] !tw-pl-[30px]" />
                    </span>
                    <span>
                        <div className='tw-flex'>
                            <p className='tw-text-[#191919]'>Timezone</p>
                            {/* <p className='tw-text-red-500'>*</p> */}
                        </div>
                        <Input className="!tw-bg-[#F9F9F9] tw-h-[64px] !tw-pl-[30px]"/>
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
                        <Input value={"Andrey Fadion"} className=" tw-h-[64px] !tw-pl-[30px]" disabled={true}/>
                    </span>
                    <span>
                        <div className='tw-flex'>
                            <p className='tw-text-[#191919]'>Zip Code</p>
                            {/* <p className='tw-text-red-500'>*</p> */}
                        </div>
                        <Input value={"Andrey Fadion"} className=" tw-h-[64px] !tw-pl-[30px]" disabled={true}/>
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
                        <Input value={"Andrey Fadion"} className=" tw-h-[64px] !tw-pl-[30px]" disabled={true}/>
                    </span>
                    <span>
                        <div className='tw-flex'>
                            <p className='tw-text-[#191919]'>City</p>
                            <p className='tw-text-red-500'>*</p>
                        </div>
                        <Input value={"Andrey Fadion"} className=" tw-h-[64px] !tw-pl-[30px]" disabled={true}/>
                    </span>
                    <span>
                        <div className='tw-flex'>
                            <p className='tw-text-[#191919]'>Company</p>
                            {/* <p className='tw-text-red-500'>*</p> */}
                        </div>
                        <Input value={"Andrey Fadion"} className=" tw-h-[64px] !tw-pl-[30px]" disabled={true}/>
                    </span>
                    <span className='tw-hidden max-mindesk:tw-block tw-justify-end tw-items-center tw-text-center'>
                        <div className='tw-flex tw-mt-[25px]'> <p className='tw-text-red-500'>*</p>  Required fields</div>
                    </span>
                    <span className='tw-h-[97px] tw-flex-col tw-flex tw-justify-end'>
                        <ButtonMain text='Upload Profile' fullWidth={true} classNames='tw-h-[64px] tw-gap-[10px]' icon='/images/dashboard/icons/update.png'/>
                    </span>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default EditSetting