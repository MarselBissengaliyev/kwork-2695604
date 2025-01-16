import React, { useState } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Image from "next/image";

import "../styles/slidercar.scss";

import carlider1 from "../../../shared/img/carlider.png";
import carlider2 from "../../../shared/img/carlider2.png";
import carlider3 from "../../../shared/img/carlider3.png";
import arrow from "../../../shared/img/arrow-slide.svg";

const SliderCar = () => {
  // Объект с картинками
  const images = [
    { src: carlider1, alt: "Car Image 1" },
    { src: carlider2, alt: "Car Image 2" },
    { src: carlider3, alt: "Car Image 3" },
    { src: carlider2, alt: "Car Image 2" },
    { src: carlider3, alt: "Car Image 3" },
    { src: carlider2, alt: "Car Image 2" },
    { src: carlider3, alt: "Car Image 3" },
    { src: carlider2, alt: "Car Image 2" },
    { src: carlider3, alt: "Car Image 3" },
  ];

  // Состояние активного изображения
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Инициализация Fancybox для всех изображений
  React.useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      // Настройки Fancybox
    });
  }, []);

  // Обработчик клика на миниатюры
  const handleThumbnailClick = index => {
    setActiveImageIndex(index);
  };

  // Функция для прокрутки миниатюр влево
  const scrollLeft = () => {
    const container = document.querySelector(".thumbnails-container");
    const itemWidth = container.querySelector("a").offsetWidth + 10; // Ширина одной миниатюры + отступ

    // Если прокрутка не на первом элементе, двигаем вправо
    if (scrollPosition - itemWidth >= 0) {
      setScrollPosition(scrollPosition - itemWidth);
    } else {
      // Если достигнут левый конец, переносим в конец
      setScrollPosition(container.scrollWidth - container.clientWidth);
    }
  };

  return (
    <div className="tw-mb-[40px] laptop:tw-mb-0">
      {/* Основной блок (вывод через map) */}
      <div className="main-image-container">
        {images.map((image, index) => (
          <a
            key={index}
            data-fancybox="gallery" // Привязка к галерее Fancybox
            href={image.src} // Указание ссылки для Fancybox
            className={index === activeImageIndex ? "active" : ""}
          >
            {index === activeImageIndex && (
              <Image
                src={image.src}
                alt={image.alt}
                layout="responsive"
                width={1200}
                height={800}
                style={{ width: "100%", height: "auto" }}
              />
            )}
          </a>
        ))}
      </div>

      {/* Контейнер с миниатюрами и стрелками */}
      <div className="thumbnails-container-wrapper">
        <div className="thumbnails-container" style={{ transform: `translateX(${scrollPosition}px)` }}>
          {images.map((image, index) => (
            <a key={index} onClick={() => handleThumbnailClick(index)}>
              <Image
                src={image.src}
                alt={image.alt}
                width={110}
                height={80}
                style={{
                  cursor: "pointer",
                  border: index === activeImageIndex ? "2px solid blue" : "none", // выделяем активное изображение
                  borderRadius: 10,
                }}
              />
            </a>
          ))}
        </div>

        {/* Стрелка вправо */}
        <button className="arrow-right" onClick={scrollLeft}>
          <Image src={arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default SliderCar;
