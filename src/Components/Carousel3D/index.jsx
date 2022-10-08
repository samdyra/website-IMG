import React from "react";
import "./Carousel3D.css";
import { SliderData } from "../../assets/object/SliderData";
import { useEffect } from "react";
import { useRef } from "react";

const Carousel3D = () => {
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
          <img src={SliderData[1].image} />
        </label>
        <label for="s2" id="slide2">
          <img src={SliderData[2].image} />
        </label>
        <label for="s3" id="slide3">
          <img src={SliderData[3].image} />
        </label>
        <label for="s4" id="slide4">
          <img src={SliderData[4].image} />
        </label>
        <label for="s5" id="slide5">
          <img src={SliderData[5].image} />
        </label>
      </section>
    </div>
  );
};

export default Carousel3D;
