import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import style from "./style.module.scss";

// import images
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";

const images = [img1, img2, img3, img4];

function Carousel() {
  const [slideIndex, setSlideIndex] = useState(0);

  const { container, header, slide, slider } = style;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: true,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (current, next) => (
      <div className={current === slideIndex ? "dot dot-active" : "dot"}></div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className={container}>
      <h2 className={header}>Modern React Carusel</h2>
      <div className={slider}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div className={slideIndex === index ? { slide } : { slide }}>
              <img src={image} alt="img" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
