import React, { Component } from "react";
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
  } = style;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
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
          {" "}
          {dots}{" "}
        </ul>
        <div
          style={{
            position: "relative",
            zIndex: "-1",
            top: "12px",
            left: "10px",

            backgroundColor: "#D5A33B",
            width: "1270px",
            height: "7px",
          }}
        ></div>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "25px",
          height: "25px",
          color: "blue",
          border: "2px blue solid",
          backgroundColor: "white",
          borderRadius: "100%",
          marginTop: "20px",
        }}
      ></div>
    ),
  };
  return (
    <div className={madeElementWrapper}>
      <Slider {...settings} className={wrapperCard}>
        {SliderData.map((slide) => {
          return (
            <div className={madeElementContainer}>
              <div className={madeElementImage}>
                <img src={slide.image}></img>
                <div className={madeElementContent}>
                  <h1>Webgis</h1>
                  <h3>10 september 2021</h3>
                  <p>
                    Web based GIS (Geographic Information System) of ITB Kampus
                    Jatinangor. We hope this feature would contribute to
                    realized a continuous monitoring and sustainable development
                    of ITB Kampus Jatinangor.
                  </p>
                </div>
                <div href="/WebGIS" className={madeElementButton}>
                  <p>Lihat Selengkapnya</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProgressBarCarousel;
