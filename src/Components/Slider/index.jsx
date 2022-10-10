import React, { useState, useEffect } from "react";
import style from "./style.module.scss";
import Slider from "react-slick";
import { SliderData } from "../../assets/object/SliderData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Gallery = (props) => {
  const [currentText, setCurrenText] = useState(0);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const {
    wrapperCard,
    wrapperGallery,
    wrapperVerticalCard,
    galleryElementContainer,
    galleryWrapper,
    galleryCarousel,
    madeElementContainer,
    madeElementImage,
    madeElementContent,
    madeElementButton,
    madeElementWrapper,
    verticalCardContainer,
    verticalCardImage,
    verticalCardContent,
    verticalCardButton,
    verticalCardWrapper,
    slidecontainer,
  } = style;

  const sliderName = props.sliderName;

  const gallerySettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: "200px",
  };

  const cardSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    swipeToSlide: true,
  };

  const verticalcardSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
  };

  const gallerySettings2 = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    centerMode: true,
    arrows: false,
    centerPadding: "200px",
  };

  const ReversedData = SliderData.slice(0).reverse();

  return (
    <div>
      {sliderName == "gallery" ? (
        <div className={galleryWrapper}>
          <div className={galleryCarousel}>
            <div
              className={slidecontainer}
              data-aos="slide-left"
              data-aos-duration="1000"
              data-aos-offset="300"
            >
              <Slider {...gallerySettings} className={wrapperGallery}>
                {SliderData.map((slide) => {
                  return (
                    <div className={galleryElementContainer}>
                      <img src={slide.image}></img>
                    </div>
                  );
                })}
              </Slider>
            </div>
            <div
              className={slidecontainer}
              data-aos="slide-right"
              data-aos-duration="1000"
              data-aos-offset="250"
            >
              <Slider {...gallerySettings2} className={wrapperGallery}>
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
        </div>
      ) : sliderName == "card" ? (
        <div className={madeElementWrapper}>
          <Slider {...cardSettings} className={wrapperCard}>
            {SliderData.map((slide) => {
              return (
                <div className={madeElementContainer}>
                  <div className={madeElementImage}>
                    <img src={slide.image}></img>
                    <div className={madeElementContent}>
                      <h1>Webgis</h1>
                      <h3>10 september 2021</h3>
                      <p>
                        Web based GIS (Geographic Information System) of ITB
                        Kampus Jatinangor. We hope this feature would contribute
                        to realized a continuous monitoring and sustainable
                        development of ITB Kampus Jatinangor.
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
      ) : sliderName == "verticalcard" ? (
        <div>
          <Slider {...verticalcardSettings} className={wrapperVerticalCard}>
            {SliderData.map((slide) => {
              return (
                <div className={verticalCardContainer}>
                  <div className={verticalCardImage}>
                    <img src={slide.image}></img>
                    <div className={verticalCardContent}>
                      <h1>WEBGIS</h1>
                      <p>
                        Web based GIS (Geographic Information System) of ITB
                        Kampus Jatinangor. We hope this feature would contribute
                        to realized a continuous monitoring and sustainable
                        development of ITB Kampus Jatinangor.
                      </p>
                      <button className={verticalCardButton}>Click Here</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      ) : null}
    </div>
  );
};

export default Gallery;
