import React from "react";
import { SliderData } from "../../assets/object/SliderData";
import { Carousel3D, ProgressBarCarousel } from "../../Components";
import style from "./style.module.scss";

const Geopoint = () => {
  const { container, carouselcontainer } = style;
  return (
    <div>
      <div className={container}>
        <Carousel3D />
      </div>
      <div className={container}>
        <ProgressBarCarousel />
      </div>
    </div>
  );
};

export default Geopoint;
