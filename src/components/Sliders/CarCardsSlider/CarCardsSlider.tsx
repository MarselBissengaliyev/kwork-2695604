import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import "./style.scss"
import ButtonMain from '@/components/button/ButtonMain';

interface ICarSlider {
  width?: string;
  height?: string;
  imglinks: IImgLinks[];
  deletes?: boolean;
}

interface IImgLinks {
  src: string;
  alt?: string;
}

const CarCardsSlider = ({width = "100%",height = "100%",imglinks, deletes = false}: ICarSlider) => {
  const [click, setClick] = useState(false)
  const handleClick = () => {
    setClick((prev) => !prev)
  }
  return (
    <div className='' style={{width: width, height: height}}>
        <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            parallax={true}
            scrollbar={{ draggable: true }}
            pagination={{
                clickable: true,
              }}
              style={{ width: '100%', height: '100%' }}
            >
            {imglinks.map((img) =>
              <SwiperSlide key={img.src}>
                <div>
                  <img
                    src={img.src}
                    alt={img.alt ?? "car"}
                    style={{ width: '100%', height: '100%',objectFit: 'cover' }}
                  />
                  {deletes ? <button onClick={() => handleClick()} className='tw-absolute tw-top-0 tw-right-0 tw-p-[10px] tw-bg-[#FFFFFF] tw-h-[34px] tw-w-[34px] tw-m-[20px] tw-text-center tw-items-center tw-flex tw-justify-center tw-rounded-full'><img className=' tw-w-[16px] tw-h-[16px]' src="/images/dashboard/icons/trash.png"/></button> : null}
                  {click ? <div className='tw-absolute tw-top-[60px] tw-right-[20px] tw-max-w-[270px] tw-w-full tw-p-[30px] tw-bg-[#FFFFFF] tw-rounded-[10px] tw-text-center tw-flex tw-justify-center tw-flex-col tw-gap-[10px]' style={{zIndex: '9999'}}> 
                    <p>Are you sure want to remove the item from the list?</p>
                    <ButtonMain text='Yes'/>
                    <ButtonMain text='Cancel' color='grey' />
                  </div> : null}
                </div>
                {/* {deletes ? <img className=' tw-w-full tw-h-full' src="/public/images/dashboard/icons/trash.png"/> : <>hello</> } */}
                
            </SwiperSlide>
            )}
            
        </Swiper>

    </div>
  )
}

export default CarCardsSlider