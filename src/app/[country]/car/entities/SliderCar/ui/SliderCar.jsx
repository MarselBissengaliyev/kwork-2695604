import React from "react";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import rrrr from "../../../shared/img/arrow-down.svg";

const SliderCar = () => {
  return (
    <div>
      {/* Фото */}
      <a data-fancybox="gallery" href="/path/to/image1.jpg">
        <img src={rrrr} alt="Image 1" style={{ width: "150px", height: "auto" }} />
      </a>

      {/* Видео */}
      <a data-fancybox="gallery" href="https://www.example.com/video.mp4" data-caption="Video Example">
        <img src={rrrr} alt="Video Thumbnail" style={{ width: "150px", height: "auto" }} />
      </a>

      {/* Iframe */}
      <a data-fancybox="gallery" data-type="iframe" href="https://example.com/panorama" data-caption="Panorama Example">
        <img src={rrrr} alt="Iframe Thumbnail" style={{ width: "150px", height: "auto" }} />
      </a>
    </div>
  );
};

export default SliderCar;
