import React from "react";
import style from "./style.module.scss";
import Header from "../../Components/HeaderPage";
import Gallery from "../../Components/Slider";

const kabarKesenatoran = () => {
  const { container, containerSection, box1, box2 } = style;

  return (
    <div>
      <Header />
      <div className={containerSection}>
        <Gallery sliderName="verticalcard" />
      </div>
      <div className={containerSection}>Media Kesenatoran</div>
    </div>
  );
};

export default kabarKesenatoran;
