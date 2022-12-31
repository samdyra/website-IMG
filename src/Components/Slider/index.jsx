import React, { useState, useEffect } from "react";
import style from "./style.module.scss";
import Slider from "react-slick";
import { SliderData } from "../../assets/object/SliderData";
import { Modal } from "../../Components";
import { isMobile } from "../../Helpers/mobileResponsive";

import Aos from "aos";
import "aos/dist/aos.css";

const Gallery = (props) => {
  const [currentText, setCurrenText] = useState(0);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const screenWidth = window.innerWidth;

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
    modalImgContainer,
    modalImgSlider,
  } = style;

  const sliderData = props?.data || []
  const sliderName = props.sliderName;
  const handlePressItem = props.pressItem;
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
    slidesToShow: screenWidth <= 420 ? 1 : screenWidth <= 1280 ? 3 : 4,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    swipeToSlide: true,
  };

  const modalImgSettings = {
    // infinite: true,
    // speed: 1000,
    // swipeToSlide: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // arrows: false,
    // dots: true,
    // centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const verticalcardSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
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
              data-aos-duration="1200"
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
            {sliderData.map((slide) => {
              return (
                <div className={madeElementContainer}>
                  <div className={madeElementImage}>
                    <img src={slide.image}></img>
                  </div>
                  <div className={madeElementContent}>
                    <div
                      style={{
                        display: "flex",
                        marginTop: "20px",
                        marginBottom: "5px",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <h1>{slide.judul}</h1>
                      <h3>{slide.date}</h3>
                    </div>
                    <p>
                      {slide.redaksi}
                    </p>
                    <div
                      className={madeElementButton}
                      onClick={handlePressItem}
                    >
                      Lihat Selengkapnya
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
      ) : sliderName == "modalimg" ? (
        <div

        // data-aos="slide-left"
        // data-aos-duration="1200"
        // data-aos-offset="300"
        >
          <Slider {...modalImgSettings} className={modalImgSlider}>
            {SliderData.map((slide) => {
              return (
                <div className={modalImgContainer}>
                  <img src={slide.image}></img>
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
