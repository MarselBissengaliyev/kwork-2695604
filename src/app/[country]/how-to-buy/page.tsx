import ButtonMain from '@/components/button/ButtonMain'
import PageDirect from '@/components/Common/PageDirect'
import { Container } from '@/components/Container'
import React from 'react'

const page = () => {
  return (
    <>
        <PageDirect pageTitle={"How to Buy"} className={""}>
            <></>
        </PageDirect>
        <Container className={""}>
            <h3>4 Easy Steps to Purchase Your Car</h3>
            <div className='tw-flex tw-gap-[100px] tw-mt-[30px]'>
                <p>
                    If you’re buying a car for the first time, it can be intimidating, to be sure. 
                    You want to make the best decision possible because you’re going to be spending ample time in this vehicle, 
                    not to mention the obvious financial investment you’re making. 
                    But after this 5-minute read, you’ll see the process of buying a car doesn’t have to be so stressful.
                </p>
                <ButtonMain text="Watch Video Instruction" icon='/images/about-us/play-button.png' classNames='tw-gap-[5px] tw-h-[64px] tw-max-w-[310px] tw-w-full'/>
            </div>
            <div className='tw-mt-[50px] tw-flex tw-flex-col tw-gap-[20px]'>
                <div className='tw-max-w-[1490px] tw-p-[40px] tw-rounded-[10px] tw-border-solid tw-border-[1px] tw-border-[#ECECEC] tw-flex tw-gap-[100px]'>
                    <p className='tw-text-[#3E73CF] tw-text-[30px]'>01</p>
                    <div>
                        <div className='tw-flex tw-gap-[16px]'>
                            <img src='/images/how-to-buy/verified-user.png' className='tw-max-w-[33px] tw-h-[40px]'/>
                            <p className='tw-text-[30px] tw-text-[#191919]'>Sign Up</p> 
                        </div>
                        <div className='tw-mt-[70px] tw-flex tw-flex-col tw-gap-[30px]'>
                            <div>
                                <h5 className=' tw-text-[18px] tw-text-[#3E73CF] tw-mb-[20px]'>Register</h5>
                                <p className=' tw-text-[18px] tw-text-[#191919]'>After registering, you will receive an automated message with a link to complete registration. To ensure that your registration is approved, it is important that you provide us with a valid email address and correct phone numbers. By registering at www.Auto4Export.com, you are agreeing with our Terms of Use.</p>
                            </div>
                            <div>
                                <h5 className=' tw-text-[18px] tw-text-[#3E73CF] tw-mb-[20px]'>Deposit</h5>
                                <p className=' tw-text-[18px] tw-text-[#191919]'>You must make a REFUNDABLE deposit on your account at www.Auto4Export.com before you are able to use the BID or BUY NOW functions to purchase vehicles. The minimum deposit amount required to get started is greater than $600.00 or 10% of the transaction amount (BID/BUY NOW price).</p>
                            </div>
                            <div>
                                <p>Read more </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className='tw-max-w-[1490px] tw-p-[40px] tw-rounded-[10px] tw-border-solid tw-border-[1px] tw-border-[#ECECEC] tw-flex tw-gap-[100px]'>
                    <p className='tw-text-[#3E73CF] tw-text-[30px]'>02</p>
                    <div>
                        <div className='tw-flex tw-gap-[16px]'>
                            <img src='/images/how-to-buy/auction.png' className='tw-max-w-[40px] tw-h-[40px]'/>
                            <p className='tw-text-[30px] tw-text-[#191919] '>Bid</p> 
                        </div>
                        <div className='tw-mt-[70px] tw-flex tw-flex-col tw-gap-[30px]'>
                            <div>
                                <h5 className=' tw-text-[18px] tw-text-[#3E73CF] tw-mb-[20px]'>Search</h5>
                                <p className=' tw-text-[18px] tw-text-[#191919]'>
                                    We provide an extensive listing of vehicles available for sale in the US, featuring a wide variety of vehicles, including cars, vans, bikes, ATVs, trucks, and more. Thousands of cars are added to our database every day. You can search through the wide variety of vehicles that we offer to find exactly what you are looking for. Whether you are looking for your dream car, a van that will be perfect for your family, a heavy-duty truck, or something to add excitement to your life, searching through our database is the first step in connecting you with the vehicle you desire.
                                </p>
                            </div>
                            <div>
                                <h5 className=' tw-text-[18px] tw-text-[#3E73CF] tw-mb-[20px]'>Bidding</h5>
                                <p className=' tw-text-[18px] tw-text-[#191919]'>
                                When you are interested in purchasing a vehicle, you will submit a pre-bid. The highest bid for a vehicle in the pre-bidding round will be transferred to the live auction. For example, you can place your maximum bid at $9,000 and if your bid was the highest bid of the pre-bidding round, it will be submitted at the live auction. 
                                </p>
                            </div>
                            <div>
                                <p>Read more </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className='tw-max-w-[1490px] tw-p-[40px] tw-rounded-[10px] tw-border-solid tw-border-[1px] tw-border-[#ECECEC] tw-flex tw-gap-[100px]'>
                    <p className='tw-text-[#3E73CF] tw-text-[30px]'>03</p>
                    <div>
                        <div className='tw-flex tw-gap-[16px]'>
                            <img src='/images/how-to-buy/trophy.png' className='tw-max-w-[40px] tw-h-[40px]'/>
                            <p className='tw-text-[30px] tw-text-[#191919]'>Win</p> 
                        </div>
                        <div className='tw-mt-[70px] tw-flex tw-flex-col tw-gap-[30px]'>
                            <div>
                                <h5 className=' tw-text-[18px] tw-text-[#3E73CF] tw-mb-[20px]'>Payment</h5>
                                <p className=' tw-text-[18px] tw-text-[#191919]'>
                                    Once you have been named the highest bid on a vehicle and the sale is confirmed, you will receive a notification containing the invoice for your purchase.
                                </p>
                                <p className=' tw-text-[18px] tw-text-[#191919]'>The invoice will include the following:</p>                                   
                                <ul className='tw-ml-[20px] marker:tw-text-[#3E73CF]'>
                                    <li className=' tw-text-[18px] tw-text-[#191919]'>Final bid price</li>
                                    <li className=' tw-text-[18px] tw-text-[#191919]'>Auction fees</li>
                                    <li className=' tw-text-[18px] tw-text-[#191919]'>Domestic and export transportation fees</li>
                                    <li className=' tw-text-[18px] tw-text-[#191919]'>Service fee</li>
                                    <li className=' tw-text-[18px] tw-text-[#191919]'>Mailing fee</li>
                                </ul>
                                <p className=' tw-text-[18px] tw-text-[#191919]'>
                                    Our fee is $245 for vehicles under $2500, $295 for vehicles over $2000 to $15000, and 2% for vehicles above $15000, but no more than $700.
                                </p>
                            </div>
                            <div>
                                <p>Read more </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className='tw-max-w-[1490px] tw-p-[40px] tw-rounded-[10px] tw-border-solid tw-border-[1px] tw-border-[#ECECEC] tw-flex tw-gap-[100px]'>
                    <p className='tw-text-[#3E73CF] tw-text-[30px]'>04</p>
                    <div>
                        <div className='tw-flex tw-gap-[16px]'>
                            <img src='/images/how-to-buy/cruise.png' className='tw-max-w-[32px] tw-h-[40px]'/>
                            <p className='tw-text-[30px] tw-text-[#191919]'>Export</p> 
                        </div>
                        <div className='tw-mt-[70px] tw-flex tw-flex-col tw-gap-[30px]'>
                            <div>
                                <h5 className=' tw-text-[18px] tw-text-[#3E73CF] tw-mb-[20px]'>Shipping</h5>
                                <p className=' tw-text-[18px] tw-text-[#191919]'>
                                    The shipping process will begin once the full payment for the purchased vehicle is cleared on our bank account. Many buyers choose to take advantage of the affordable transportation service we offer, which has proven to be reliable and efficient. You can calculate and compare service costs by visiting Shipping Calculator.
                                </p>
                                <p className=' tw-text-[18px] tw-text-[#191919]'>It is typically advisable to take the vehicle to the closest shipment port; however, many prefer for the vehicle to be taken to the busiest port for shipments as the transportation costs can be significantly lower.</p>                                   
                                <p className=' tw-text-[18px] tw-text-[#191919]'>
                                The total delivery time varies anywhere from a day to a week, depending on the location of the dealer or auction site. After the vehicle has been successfully delivered to our warehouse, you will receive additional information and pictures of your car.
                                </p>
                            </div>
                            <div>
                                <p>Read more </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default page