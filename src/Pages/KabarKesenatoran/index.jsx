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
        <h1>Inkubasi Isu Kampus</h1>
        <Gallery sliderName="verticalcard" />
      </div>
      <div className={containerSection}>
        <h1> Media Kesenatoran</h1>
      </div>
    </div>
  );
};

export default kabarKesenatoran;
