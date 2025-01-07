import React, { useRef, useCallback } from "react";
import "./Carousel3D.css";

import { useEffect } from "react";
import {
  slidergts,
  slidergeospasial,
  slidergemas,
  sliderseminar,
} from "../../assets";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import { isMobile } from "../../Helpers/mobileResponsive";
const Carousel3D = () => {
  const navigate = useNavigate();
  // const checkboxref = useRef();
  // const handleOnClick = useCallback(() => {
  //   const node = checkboxref.current.checked;
  //   node ? navigate("/") : null;
  // }, []);
  const image = useRef();

  useEffect(() => {
    setTimeout(() => {
      image.current.click();
    }, 300);
  }, []);
  return (
    <div className="container">
      <section id="slider3D">
        <input type="radio" name="slider3D" id="s1" />
        <input type="radio" name="slider3D" id="s2" />
        <input type="radio" name="slider3D" id="s3" />
        <input type="radio" name="slider3D" id="s4" />

        <label for="s1" id="slide1">
          <img src={sliderseminar} />
        </label>

        <label for="s2" id="slide2">
          <img
            src={slidergemas}
            onDoubleClick={() => navigate("/Geopoint/Gemas")}
          />
        </label>
        <label for="s3" id="slide3">
          <img src={slidergeospasial} />
        </label>
        <label className="gts" for="s4" id="slide4">
          <img src={slidergts} />
        </label>
      </section>
    </div>
  );
};

export default Carousel3D;
