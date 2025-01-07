import React, { useRef } from "react";
import "./Carousel3DMobile.css";
import { useEffect } from "react";
import {
  slidergts,
  slidergeospasial,
  slidergemas,
  sliderseminar,
} from "../../assets";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import { isMobile } from "../../Helpers/mobileResponsive";
const Carousel3DMobile = () => {
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
    <div className="containerMobile">
      <section id="slider3DMobile">
        <input type="radio" name="slider3DMobile" id="s1Mobile" />
        <input type="radio" name="slider3DMobile" id="s2Mobile" />
        <input type="radio" name="slider3DMobile" id="s3Mobile" />
        <input type="radio" name="slider3DMobile" id="s4Mobile" />

        <label for="s1Mobile" id="slide1Mobile">
          <img src={sliderseminar} />
        </label>

        <label for="s2Mobile" id="slide2Mobile">
          <img
            src={slidergemas}
            onDoubleClick={() => navigate("/Geopoint/Gemas")}
          />
        </label>
        <label for="s3Mobile" id="slide3Mobile">
          <img src={slidergeospasial} />
        </label>
        <label className="gts" for="s4Mobile" id="slide4Mobile">
          <img src={slidergts} />
        </label>

      </section>
    </div>
  );
};

export default Carousel3DMobile;
