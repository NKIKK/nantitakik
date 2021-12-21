import React, { useState } from "react";
import { images } from "./imageSources";

const ImageSlider = () => {
  const [currImg, setCurrImg] = useState(0);

  const changeImage = (event, indexChange) => {
    let targetIndex = (currImg + indexChange) % images.length;
    if (targetIndex < 0) targetIndex += images.length;
    setTimeout(() => {
      event.target.parentNode.parentNode.classList.add("opacity-0");
      setTimeout(() => setCurrImg(targetIndex), 150);
      setTimeout(() => {
        event.target.parentNode.parentNode.classList.remove("opacity-0");
      }, 150);
    }, 0);
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${images[currImg].img})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "400px",
          width: "500px",
        }}
        className="relative flex justify-between transition-opacity"
      >
        <div
          className="image-prev opacity-0 hover:opacity-100"
          onClick={(e) => changeImage(e, -1)}
        >
          <div className="w-full top-0 left-0 h-full"></div>
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div
          className="image-next opacity-0 hover:opacity-100"
          onClick={(e) => changeImage(e, 1)}
        >
          <div className="w-full top-0 left-0 h-full"></div>
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;