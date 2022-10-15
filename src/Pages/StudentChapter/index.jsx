import React from "react";
import style from "./style.module.scss";
import { Header } from "../../Components";
import Gallery from "../../Components/Slider";

const studentChapter = () => {
  const { container, containerSection, box1, box2 } = style;
  return (
    <div className={container}>
      <Header />

      <div style={{ height: "1300px", marginTop: "100px" }}>
        <Gallery sliderName="verticalcard" />
      </div>
    </div>
  );
};

export default studentChapter;
