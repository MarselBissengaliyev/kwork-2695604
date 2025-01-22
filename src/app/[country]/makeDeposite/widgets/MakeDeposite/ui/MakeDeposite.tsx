'use client'
import PageDirect from '@/components/Common/PageDirect'
import { Container } from '@/components/Container'
import React, { useState } from 'react'
import Input from '@/components/Input'
import "./style.scss"
import ButtonMain from '@/components/button/ButtonMain'

const MakeDeposite = () => {
  const [value, setValue] = useState(10000); // Начальное значение
  const [deposit, setDeposit] = useState(4000); 
  const [position, setPosition] = useState(50); // Начальная позиция (в %)
  const balance = 10000;

  const handleSliderChange = (newValue) => {
    setValue(newValue);

    if (newValue <= 10000) {
      setDeposit(4000);
    } else if (newValue > 10000 && newValue <= 50000) {
      setDeposit(2500);
    } else if (newValue > 50000) {
      setDeposit(5000);
    }
  };

  // Расчет Total Due
  const totalDue = Math.max(0, deposit - balance);

  const handleChange = (e) => {
    handleSliderChange(e.target.value)
    const newValue = e.target.value;
    setValue(newValue);

    // Рассчитать позицию маркера на основе значения
    const min = e.target.min;
    const max = e.target.max;
    const percent = ((newValue - min) / (max - min)) * 100;
    setPosition(percent);
    console.log(value)
  };

  // Форматирование в долларах
  const formatCurrency = (amount) => `$${parseInt(amount).toLocaleString()}`;
  
  return (
    <>
    <PageDirect className={""} pageTitle={"Make Deposite"}>
      <></>
    </PageDirect>
    <Container className={"tw-flex tw-justify-between tw-gap-[60px] tw-mb-[50px] max-largeDesk:tw-flex-col max-largeDesk:tw-justify-center max-largeDesk:tw-items-center "}>
      <div className='tw-max-w-[330px] tw-w-full'></div>
      <div className='tw-max-w-[760px] tw-w-full tw-border-[1px] tw-border-[#ECECEC] tw-border-solid tw-rounded-[10px]'>
        <div className='tw-bg-[#F9F9F9] tw-p-[40px]'>
          <h3 className='tw-text-[#191919] tw-text-center'>Move slider to set your Buying Power</h3>
          <div className='range-container'>
            <input type="range" id="volume" name="volume" min="0" max="200000" step="10000" className='tw-w-full tw-mt-[40px] rangeer range-slider' value={value} onChange={handleChange}/>
            <span
                className="range-value"
                style={{
                  left: `${position}%`,
                  transform: "translateX(-50%)",
                }}
              >
                {value == 0 || value == 200000 ? "" : formatCurrency(value)}
              </span>
            <div className='tw-w-full tw-flex tw-justify-between'>
              <span id="rangeValue">$0</span> 
              <span id='rangeValue'>$200,000</span>
            </div>

          </div>
        </div>
        <div className='tw-p-[40px]'>
          <div className='tw-flex tw-justify-between max-minilaptop:tw-flex-col'>
            <p> Number of vehicles to bid</p>
            <div className="tw-flex tw-gap-[10px] tw-max-w-[350px] tw-flex-wrap">
              {/* Логика отображения синих иконок */}
              {value <= 10000 &&
                [...Array(5)].map((_, index) => (
                  <img
                    key={`blue-${index}`}
                    className="tw-max-w-[30px] tw-w-full tw-h-[20px]"
                    src="/images/makedeposite/icons/carb.png"
                    alt="Blue"
                  />
                ))}
              {value > 10000 && value <= 50000 &&
                [...Array(10)].map((_, index) => (
                  <img
                    key={`blue-${index}`}
                    className="tw-max-w-[30px] tw-w-full tw-h-[20px]"
                    src="/images/makedeposite/icons/carb.png"
                    alt="Blue"
                  />
                ))}
              {value > 50000 &&
                [...Array(20)].map((_, index) => (
                  <img
                    key={`blue-${index}`}
                    className="tw-max-w-[30px] tw-w-full tw-h-[20px]"
                    src="/images/makedeposite/icons/carb.png"
                    alt="Blue"
                  />
                ))}

              {/* Логика отображения серых иконок (если требуется) */}
              {value <= 10000 &&
                [...Array(4)].map((_, index) => (
                  <img
                    key={`gray-${index}`}
                    className="tw-max-w-[30px] tw-w-full tw-h-[20px]"
                    src="/images/makedeposite/icons/carg.png"
                    alt="Gray"
                  />
                ))}
            </div>
          </div>
        </div>
        <div className='tw-p-[40px]'>
          <p>Secruty Deposit</p>
          <Input placeholder={"$0"} value={deposit} className={"tw-text-center tw-h-[64px] tw-text-[26px]"} type={"number"}/>
        </div>
        <div className='tw-p-[40px] tw-text-center tw-items-center tw-flex tw-flex-col tw-justify-center tw-gap-[35px]'>
          <h3>Payment Options</h3>
          <ButtonMain variant='outlined' text='Bank Wire Transfer' icon='/images/makedeposite/icons/bank.png' classNames='tw-gap-[10px]'/>
          <div className='tw-flex tw-flex-col tw-justify-center tw-items-center tw-text-center tw-gap-[20px]'>
            <ButtonMain variant='outlined' color='grey' text={<img src='/images/makedeposite/icons/email.png' alt=""/>} classNames='tw-h-[54px] tw-w-[54px] !tw-p-0'/>
            <p className='tw-max-w-[534px] tw-w-full tw-text-[18px] tw-m-0'>
              You can also choose to pay the registration fee and security deposit by wire transfer. Just click the "Send me Invoice to Email" button below and we’ll send the invoice along with instructions for the bank wire transfer to you at <b>izakinwot@mail.ru.</b>
            </p>
            <p className='tw-text-[14px] tw-max-w-[385px] tw-w-full'>We’ll immediately apply your payment to your account once we receive and process your payment.</p>
          </div>
        </div>
        <div className='tw-p-[40px] tw-flex tw-justify-between tw-mt-[65px]'>
          <p className='tw-m-0 tw-text-[18px] tw-text-[#191919]'>Total Due</p>
          <p className='tw-m-0 tw-text-[#3E73CF] tw-text-[20px]'>$ {totalDue.toLocaleString()}</p>
        </div>
        <div className='tw-p-[40px]'>
          <ButtonMain text='Send me Invoice to Email' fullWidth={true} classNames='tw-h-[64px]'/> 
        </div>
      </div>
      <div>
        <ul className='tw-max-w-[310px] tw-w-full max-largeDesk:tw-max-w-full'>
          <li>If you don’t have any outstanding fees or pending purchases, you can release your deposit below</li>
          <li>If you win an auction and don't complete the purchase, you forfeit your deposit and we apply it towards auction relist fees</li>
          <li>More questions? Take a look at our help center</li>
        </ul>
      </div>
    </Container>
    </>
  )
}

export default MakeDeposite