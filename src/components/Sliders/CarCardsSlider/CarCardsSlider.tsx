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
  handleDelete?: () => Promise<void>;
}

interface IImgLinks {
  src: string;
  alt?: string;
}

const CarCardsSlider = ({ width = "100%", height = "100%", imglinks, deletes = false, handleDelete }: ICarSlider) => {
  const handleClick = async () => {
    const confirm = window.confirm(
      'Are you sure you want to delete this user?'
    )
    if (confirm) {
      try {
        await handleDelete();
      } catch (error) {
        console.error('Failed to delete the item:', error);
      }
    }
  }
  return (
    <div className='' style={{ width: width, height: height }}>
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
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {deletes ? <button onClick={() => handleClick()} className='tw-absolute tw-top-0 tw-right-0 tw-p-[10px] tw-bg-[#FFFFFF] tw-h-[34px] tw-w-[34px] tw-m-[20px] tw-text-center tw-items-center tw-flex tw-justify-center tw-rounded-full'><img className=' tw-w-[16px] tw-h-[16px]' src="/images/dashboard/icons/trash.png" /></button> : null}
            </div>
            {/* {deletes ? <img className=' tw-w-full tw-h-full' src="/public/images/dashboard/icons/trash.png"/> : <>hello</> } */}

          </SwiperSlide>
        )}

      </Swiper>

    </div>
  )
}

export default CarCardsSlider