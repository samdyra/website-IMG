import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import kontur1 from "../../assets/images/kontur1.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { isMobile } from "../../Helpers/mobileResponsive";

export default function DoubleSlider(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const {
    descContainer,
    galleryElementContainer2,
    containerSection,
    halfpage,
    slider1,
    slider2,
    title,
    madeElementButton,
    descContainer2,
    kontur,
  } = style;
  const [ dataMajalah, setDataMajalah ] = useState([ {
    judul: "", desc: "", pdf: "", image: "" 
  } ])

  useEffect(() => {
    setDataMajalah(props?.data)
  }, [ props ])


  const [ nav1, setNav1 ] = useState();
  const [ nav2, setNav2 ] = useState();

  return (
    <div className={containerSection}>
      <img src={kontur1} className={kontur} />
      <div
        className={halfpage}
        data-aos="fade-right"
        data-aos-duration="1200"
        data-aos-offset="100"
      >
        <div className={title}>
          {isMobile ? null : 
            <div style={style.titleContainer}>
            <h2>MAJALAH</h2>
            <h1>{props.title}</h1>
          </div>
          }
        </div>

        <div>
          <Slider
            asNavFor={nav2}
            ref={(slider1) => setNav1(slider1)}
            className={slider1}
            arrows={true}
            dots={true}
          >
            {dataMajalah.map((text) => (
              <div>
                <div className={descContainer}>
                  <h1 >{text?.judul}</h1>
                  <div className={descContainer2}>
                    {!isMobile && <p>{text?.desc}</p>}
                  </div>
                  <div className={madeElementButton}>
                    <p onClick={() => window.open(text?.pdf)}>READ MORE</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div data-aos="fade-left" data-aos-duration="1200" data-aos-offset="100">
        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          slidesToShow={1}
          swipeToSlide={true}
          focusOnSelect={true}
          className={slider2}
          arrows={true}
        >
          {dataMajalah.map((data) => (
            <div className={galleryElementContainer2}>
              <img src={data?.image} alt="gallery" />
            </div>
          ))}
        </Slider>
      </div>

      {isMobile ? (
        <div className={title}>
          <h1>{props.title}</h1>
        </div>
      ) : null}
    </div>
  );
}
