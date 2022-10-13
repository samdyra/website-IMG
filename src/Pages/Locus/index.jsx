import React from "react";
import style from "./style.module.scss";
import { Header, DoubleSlider } from "../../Components";

const Locus = () => {
  return (
    <div style={{ paddingTop: "100px" }}>
      <DoubleSlider sliderName="locus" />
    </div>
  );
};

export default Locus;
