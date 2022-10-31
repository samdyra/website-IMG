import React from "react";
import style from "./style.module.scss";
import Header from "../../Components/HeaderPage";
import Gallery from "../../Components/Slider";
import DoubleSlider from "../../Components/DoubleSlider";
import { isMobile } from "../../Helpers/mobileResponsive";

const paradeWisuda = () => {
  const { container, containerSection, box1, box2 } = style;

  return (
    <div>
      <Header />
      <div style={{ marginTop: "100px" }}>
        <DoubleSlider sliderName="paradewisuda" />
      </div>

      <div className={containerSection}>
        <h1>Dokumentasi Parade Wisuda IMG-ITB</h1>
        <Gallery sliderName={isMobile ? "modalimg" : "gallery"} />
      </div>
    </div>
  );
};

export default paradeWisuda;
