import React from "react";
import { SliderData } from "../../assets/object/SliderData";
import Carousel from "../../Components/Carousel/Carousel";
import "./style.module.scss";

const Geopoint = () => {
  return (
    <>
      <Carousel slides={SliderData} />
    </>
  );
};

export default Geopoint;
