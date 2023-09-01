import React, { useState } from "react";
import { SliderData } from "../components/SliderData";
import Image from "next/image";

const Slider = (slides) => {
  const [current, setCurrent] = useState(0);
  

  return (
    <div id="gallery">
      <h1>Gallery</h1>
      <div>
        {SliderData.map((slide, index) => {
          return;
          <div className="" key={index}>
            <Image
              src={slide.image}
              alt="/"
              width="1440"
              height="600"
              objectFit="cover"
            />
            ;
          </div>;
        })}
      </div>
    </div>
  );
};

export default Slider;
