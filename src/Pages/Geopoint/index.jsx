import React from "react";
import { SliderData } from "../../assets/object/SliderData";
import { Carousel3D, ProgressBarCarousel } from "../../Components";
import style from "./style.module.scss";

const Geopoint = () => {
  const { container, carouselcontainer, pageBackground, title } = style;
  return (
    <div className={pageBackground}>
      <div className={title}>
        <h1>Geopoint IMG-ITB 2023</h1>
        <h2>Spread The Joy in Our Journey</h2>
      </div>
      <div className={container}>
        <Carousel3D />
      </div>
      <div className={container}></div>
      <div className={container}>
        <ProgressBarCarousel />
      </div>
      <div className={container}></div>
      <div className={container}></div>
    </div>
  );
};

export default Geopoint;
