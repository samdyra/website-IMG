import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import style from "./style.module.scss";
import { SliderData } from "../../assets/object/SliderData";

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
          <h1 style={{ color: "white" }}>click</h1>
        </div>
        <div
          className={i === state.currentSlide ? dotsactive : dots}
          ref={i === 1 ? image : null}
        ></div>
        <div>
          <h1 style={{ color: "white", marginTop: "10px" }}>click</h1>
        </div>
      </div>
    ),
  };

  return (
    <div className={madeElementWrapper}>
      <Slider {...settings} className={wrapperCard}>
        {SliderData.map((slide) => {
          return (
            <div className={madeElementContainer}>
              <img src={slide.image}></img>
              <h1>Webgis</h1>
              <p>
                Web based GIS (Geographic Information System) of ITB Kampus
                Jatinangor. We hope this feature would contribute to realized a
                continuous monitoring and sustainable development of ITB Kampus
                Jatinangor.
              </p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProgressBarCarousel;
