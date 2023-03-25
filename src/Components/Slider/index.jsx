import React, { useState, useEffect } from "react";
import style from "./style.module.scss";
import Slider from "react-slick";
import { Modal } from "../../Components";
import Aos from "aos";
import "aos/dist/aos.css";

const Gallery = (props) => {
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
    slidecontainer,
    modalImgContainer,
    modalImgSlider,
    verticalTitle
  } = style;

  const [openModal, setOpenModal] = useState(false);

  const sliderData = props?.data || [];
  const sliderImage = props?.dataImage || [];
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
    speed: 1500,
    slidesToShow: screenWidth <= 420 ? 1 : screenWidth <= 1280 ? 3 : 4,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    swipeToSlide: true,
    dots: true,
  };


  const modalImgSettings = {
    // infinite: true,
    // speed: 1000,
    // swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    // arrows: false,
    // dots: true,
    // centerMode: true,
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const verticalcardSettings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
  };

  const gallerySettings2 = {
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    rtl: true,
    centerMode: true,
    arrows: false,
    centerPadding: "200px",
  };

  useEffect(() => {
    openModal
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [openModal]);

  return (
    <div>
      <Modal
        ModalName="slider"
        open={openModal}
        onClose={() => setOpenModal(false)}
      ></Modal>
      <div>
        {sliderName == "gallery" ? (
          <div className={galleryWrapper}>
            <div className={galleryCarousel}>
              <div
                className={slidecontainer}
                data-aos="slide-left"
                data-aos-duration="1200"
                data-aos-offset="100"
              >
                <Slider {...gallerySettings} className={wrapperGallery}>
                  {sliderImage.map((slide) => (
                    <div className={galleryElementContainer}>
                      <img src={slide.image}></img>
                    </div>
                  ))}
                </Slider>
              </div>
              <div
                className={slidecontainer}
                data-aos="slide-right"
                data-aos-duration="1000"
                data-aos-offset="10"
              >
                <Slider {...gallerySettings2} className={wrapperGallery}>
                  {sliderImage?.map((slide) => (
                    <div className={galleryElementContainer}>
                      <img src={slide.image}></img>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        ) : sliderName == "card" ? (
          <div className={madeElementWrapper}>
            <Slider {...cardSettings} className={wrapperCard}>
              {sliderData.map((slide) => (
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
                    <p dangerouslySetInnerHTML={{ __html: slide?.redaksi }} />
                    <div
                      className={madeElementButton}
                      onClick={() => handlePressItem(slide)}
                    >
                      Lihat Selengkapnya
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ) : sliderName == "verticalcard" ? (
          <div>
            <Slider {...verticalcardSettings} className={wrapperVerticalCard}>
              {sliderData.map((slide) => (
                <div className={verticalCardContainer}>
                  <div className={verticalCardImage}>
                    <img src={slide.image}></img>
                    <div className={verticalCardContent}>
                      <div className={verticalTitle}>{slide.judul}</div>
                      <p>
                        {slide.desc}
                      </p>
                      <div className={verticalCardButton}
                        onClick={() => handlePressItem(slide)}
                      >
                        Read More
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ) : sliderName == "curhatan" ? (
          <div>
            <Slider {...verticalcardSettings} className={wrapperVerticalCard}>
              {sliderData.map((slide) => (
                <div className={verticalCardContainer}>
                  <div className={verticalCardImage}>
                    <img src={slide.image}></img>
                    <div className={verticalCardContent}>
                      <div className={verticalTitle}>{slide.judul}</div>
                      <p>
                        {slide.desc}
                      </p>
                      <div className={verticalCardButton}
                        onClick={() => handlePressItem(slide)}
                      >
                        Read More
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ) : sliderName == "modalimg" ? (
          <div

          // data-aos="slide-left"
          // data-aos-duration="1200"
          // data-aos-offset="300"
          >
            <Slider {...modalImgSettings} dots={true} className={modalImgSlider}>
              {sliderImage.map((slide) => (
                <div className={modalImgContainer}>
                  <img src={slide.image}></img>
                </div>
              ))}
            </Slider>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Gallery;
