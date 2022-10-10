import React, { useRef, useCallback } from "react";
import "./Carousel3D.css";
import { SliderData } from "../../assets/object/SliderData";
import { useEffect } from "react";

import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";

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
        <input type="radio" name="slider3D" id="s5" ref={image} />

        <label for="s1" id="slide1">
          <img src={SliderData[3].image} />
        </label>

        <label for="s2" id="slide2">
          <img src={SliderData[1].image} />
        </label>
        <label for="s3" id="slide3">
          <img src={SliderData[1].image} />
        </label>
        <label for="s4" id="slide4">
          <img src={SliderData[1].image} />
        </label>
        <label for="s5" id="slide5">
          <img src={SliderData[1].image} onDoubleClick={() => navigate("/")} />
        </label>
      </section>
    </div>
  );
};

export default Carousel3D;
