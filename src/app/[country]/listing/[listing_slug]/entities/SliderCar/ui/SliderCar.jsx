import React, { useState, useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Image from "next/image";

import "../styles/slidercar.scss";

import arrow from "../../../shared/img/arrow-slide.svg";

const SliderCar = ({ media }) => {
  console.log(media);
  // Объект с картинками

  // Состояние активного изображения
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = React.useRef(null);

  // Инициализация Fancybox для всех изображений
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      Toolbar: true,
      Thumbs: false,
      dragToClose: true,
      Image: {
        fit: "contain",
      },
    });
  }, []);

  // Обработчик клика на миниатюры
  const handleThumbnailClick = index => {
    setActiveImageIndex(index);
  };

  const scrollRight = () => {
    const container = containerRef.current;
    if (container) {
      const itemWidth = container.querySelector("a").offsetWidth + 10; // Ширина одной миниатюры + отступ
      const maxScrollPosition = container.scrollWidth - container.clientWidth;
      const newPosition = Math.min(scrollPosition + itemWidth, maxScrollPosition);
      setScrollPosition(newPosition);
      container.style.transform = `translateX(-${newPosition}px)`;
    }
  };

  return (
    <div className="tw-mb-[40px] laptop:tw-mb-0">
      {/* Основной блок (вывод через map) */}
      <div className="main-image-container">
        {images.map((image, index) => (
          <a
            key={index}
            data-fancybox="gallery"
            href={image.src}
            className={`${index === activeImageIndex ? "active" : ""} slider-href`}
          >
            {index === activeImageIndex && <img src={image.src} alt={image.alt} className="main-img " />}
          </a>
        ))}
      </div>

      {/* Контейнер с миниатюрами и стрелками */}
      <div className="thumbnails-container-wrapper">
        <div
          className="thumbnails-container"
          ref={containerRef}
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          {images.map((image, index) => (
            <a key={index} onClick={() => handleThumbnailClick(index)}>
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  cursor: "pointer",
                  border: index === activeImageIndex ? "2px solid blue" : "none",
                  borderRadius: 10,
                  width: 101,
                  height: 72,
                }}
              />
            </a>
          ))}
        </div>

        <button className="arrow-right" onClick={scrollRight}>
          <Image src={arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default SliderCar;
