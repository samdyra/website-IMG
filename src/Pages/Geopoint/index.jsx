import React from "react";
import { SliderData } from "../../assets/object/SliderData";
import { Carousel3D } from "../../Components";
import style from "./style.module.scss";

const Geopoint = () => {
  const { container, carouselcontainer } = style;
  return (
    <div className={container}>
      <Carousel3D />
    </div>
  );
};

export default Geopoint;
