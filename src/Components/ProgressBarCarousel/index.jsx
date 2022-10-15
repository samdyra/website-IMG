import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import style from "./style.module.scss";
import { GeopointSlider } from "../../assets/object/GeopointSlider.js";

const ProgressBarCarousel = () => {
  const {
    madeElementWrapper,
    wrapperCard,
    madeElementContainer,
    madeElementImage,
    madeElementButton,
    madeElementContent,
    dots,
    dotsactive,
  } = style;

  const [state, setState] = useState(0);
  const image = useRef();
  useEffect(() => {
    image.current.click();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    beforeChange: (prev, next) => {
      setState({ currentSlide: next });
    },

    appendDots: (dots) => (
      <div style={{ marginTop: "30px" }}>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            listStyle: "none",
            padding: "0",
            margin: "0px",
            fontFamily: "jakarta",

            rowGap: "10px",
          }}
        >
          {dots}
        </ul>
        <div
          style={{
            position: "relative",
            zIndex: "-1",
            top: "25px",
            left: "10px",
            fontFamily: "jakarta",

            backgroundColor: "#D5A33B",
            width: "1270px",
            height: "6px",
          }}
        ></div>
      </div>
    ),
    customPaging: (i) => (
      <div>
        <div>
          <h1 style={{ color: "white" }}>{GeopointSlider[i].date}</h1>
        </div>
        <div
          className={i === state.currentSlide ? dotsactive : dots}
          ref={i === 1 ? image : null}
        ></div>
        <div>
          <h1 style={{ color: "white", marginTop: "10px" }}>
            {GeopointSlider[i].title}
          </h1>
        </div>
      </div>
    ),
  };

  return (
    <div className={madeElementWrapper}>
      <Slider {...settings} className={wrapperCard}>
        {GeopointSlider.map((slide) => {
          return (
            <div className={madeElementContainer}>
              <img src={slide.image}></img>
              <h1>{slide.title}</h1>
              <p>{slide.desc}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProgressBarCarousel;
