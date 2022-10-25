import React, { useState } from "react";
import { SliderData } from "../../assets/object/SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./Carousel.css";
import { isMobile } from "../../Helpers/mobileResponsive";

const Carousel = ({ slides, props }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="sliderWin">
      <FaArrowAltCircleLeft
        className={isMobile ? "left-arrow-mobile" : "left-arrow"}
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        className={isMobile ? "right-arrow-mobile" : "right-arrow"}
        onClick={nextSlide}
      />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slideWin active" : "slideWin"}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="travel image"
                className={isMobile ? "imageSliderMobile" : "imageSlider"}
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;
