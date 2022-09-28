import React from "react";
import style from "./style.module.scss";
import Slider from "react-slick";
import { SliderData } from "../../assets/object/SliderData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = (props) => {
  const {
    galleryElementContainer,
    galleryWrapper,
    galleryCarousel,
    madeElementContainer,
    madeElementImage,
    madeElementTitle,
    madeElementContent,
    madeElementButton,
    madeElementWrapper,
    madeElementCard,
  } = style;

  const sliderName = props.sliderName;

  const gallerySettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
  };

  const cardSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const gallerySettings2 = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    centerMode: true,
    arrows: false,
  };

  const ReversedData = SliderData.slice(0).reverse();

  return (
    <>
      {sliderName == "gallery" ? (
        <div className={galleryWrapper}>
          <div className={galleryCarousel}>
            <Slider {...gallerySettings}>
              {SliderData.map((slide) => {
                return (
                  <div className={galleryElementContainer}>
                    <img src={slide.image}></img>
                  </div>
                );
              })}
            </Slider>
            <Slider {...gallerySettings2}>
              {ReversedData.map((slide) => {
                return (
                  <div className={galleryElementContainer}>
                    <img src={slide.image}></img>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      ) : sliderName == "card" ? (
        <div className={madeElementWrapper}>
          <Slider {...cardSettings}>
            {SliderData.map((slide) => {
              return (
                <div className={madeElementContainer}>
                  <div className={madeElementImage}>
                    <img src={slide.image}></img>
                    <div className={madeElementContent}>
                      <h1>WEBGIS</h1>
                      <h3>10 september 2021</h3>
                      <p>
                        Web based GIS (Geographic Information System) of ITB
                        Kampus Jatinangor. We hope this feature would contribute
                        to realized a continuous monitoring and sustainable
                        development of ITB Kampus Jatinangor.
                      </p>
                    </div>
                    <a href="/WebGIS">
                      <div className={madeElementButton}>
                        <p>View</p>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      ) : null}
    </>
  );
};

export default Gallery;
