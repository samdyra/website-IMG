import React from "react";
import style from "./style.module.scss";
import { Header, DoubleSlider } from "../../Components";

const Geosphere = () => {
  return (
    <div style={{ paddingTop: "100px" }}>
      <DoubleSlider sliderName="geosphere" />
    </div>
  );
};

export default Geosphere;
