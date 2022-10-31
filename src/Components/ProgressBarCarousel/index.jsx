import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import style from "./style.module.scss";
import { GeopointSlider } from "../../assets/object/GeopointSlider.js";
import { isMobile } from "../../Helpers/mobileResponsive";

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
            margin: "0 auto",
            // alignItems: "center",
            listStyle: "none",
            fontFamily: "jakarta",
            width: isMobile ? "375px" : "1100px",
            marginRight: isMobile ? 471 : 135,
          }}
        >
          {dots}
        </ul>
        <div
          style={{
            position: "relative",
            zIndex: "-1",
            top: "40px",
            left: isMobile ? "475px" : "100px",
            fontFamily: "jakarta",
            backgroundColor: "#D5A33B",
            width: isMobile ? "375" : "1080px",
            height: "6px",
          }}
        ></div>
      </div>
    ),
    customPaging: (i) => (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            width: isMobile ? 58 : 120,
            height: 30,

            // marginBottom: 30
          }}
        >
          <h1
            style={{
              color: "#f5fcb5",
              fontSize: isMobile ? 8 : 12,
            }}
          >
            {GeopointSlider[i].date}
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: isMobile ? 60 : 120,
            fontSize: 13,
            alignContent: "center",
          }}
        >
          <div
            className={i === state.currentSlide ? dotsactive : dots}
            ref={i === 1 ? image : null}
          ></div>
        </div>
        <div>
          <h1
            style={{
              color: "#f5fcb5",
              marginTop: "20px",
              width: isMobile ? 60 : 120,
              fontSize: isMobile ? 8 : 13,
              alignContent: "center",
            }}
          >
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
