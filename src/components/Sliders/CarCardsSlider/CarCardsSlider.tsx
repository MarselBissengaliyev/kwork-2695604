import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import "./style.scss"

interface ICarSlider {
  width?: string;
  height?: string;
  imglinks: IImgLinks[];
}

interface IImgLinks {
  src: string;
  alt?: string;
}

const CarCardsSlider = ({width = "100%",height = "100%",imglinks}: ICarSlider) => {
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
              <img
                src={img.src}
                alt={img.alt ?? "car"}
                style={{ width: '100%', height: 'auto' }}
              />
            </SwiperSlide>
            )}
            
        </Swiper>
    </div>
  )
}

export default CarCardsSlider