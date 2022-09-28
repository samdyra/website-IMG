import React from "react";
import style from "./style.module.scss";
import earth from "../../assets/images/earth.png";
import diagram from "../../assets/images/diagram.png";
import background from "../../assets/images/background.png";
import { SliderData, SliderText } from "../../assets/object/SliderData";
import Carousel from "../../Components/Carousel/Carousel";
import Gallery from "../../Components/Slider";
import { useState } from "react";

const HomeScreen = () => {
  const {
    container,
    desc,
    logo,
    welcome,
    containerSection,
    judulSection2,
    descSection2,
    nilai,
    judulSection3,
    judulSection4,
    judulSection5,
    organogram,
    containerSectionTop,
    containerSectionKegiatan,
    containerSection2,
    carouselWrapper,
    desctujuan,
    descsifat,
    linetujuan,
  } = style;

  const [index, setIndex] = useState(0);

  return (
    <div className={container}>
      <div className={containerSectionTop}>
        <div className={logo}>
          <div className={desc}>
            <h2>Welcome to IMG-ITB Official Website</h2>
            <h1>IKATAN MAHASISWA GEODESI-ITB</h1>
            <p>blablablablablablabalbalbalbalbablal</p>
          </div>
          <img src={earth} />
        </div>
      </div>

      <div className={containerSection2}>
        <div className={judulSection2}>
          <h1 onClick={() => setIndex(0)}>Asas,</h1>
          <h1 onClick={() => setIndex(1)}>Sifat,</h1>
          <h1>dan</h1>
          <h1 onClick={() => setIndex(2)}>Tujuan</h1>
          <h1>IMG-ITB</h1>
        </div>
        {index === 0 && (
          <>
            <div className={descSection2}>
              <h1>{SliderText[0].title}</h1>
              <p>{SliderText[0].desc}</p>
            </div>
          </>
        )}
        ;
        {index === 1 && (
          <>
            <div className={descSection2}>
              <h1>{SliderText[1].title}</h1>
              <div className={descsifat}>
                <p>{SliderText[1].desc[0]}</p>
                <p>{SliderText[1].desc[1]}</p>
              </div>
            </div>
          </>
        )}
        ;
        {index === 2 && (
          <>
            <div className={descSection2}>
              <h1>{SliderText[2].title}</h1>
              <div className={desctujuan}>
                <p>{SliderText[2].desc[0]}</p>
                <div className={linetujuan}></div>
                <p>{SliderText[2].desc[1]}</p>
                <div className={linetujuan}></div>
                <p>{SliderText[2].desc[2]}</p>
              </div>
            </div>
          </>
        )}
      </div>

      <div className={containerSection}>
        <div className={judulSection3}>
          <h1>Kepengurusan IMG-ITB 2022/2023</h1>
        </div>
        <div className={organogram}>
          <Carousel slides={SliderData} />
        </div>
      </div>

      <div className={containerSectionKegiatan}>
        <div className={judulSection4}>
          <div>
            <h1>Kegiatan IMG-ITB</h1>
          </div>
          <div>
            <h3>Ketinggalan Informasi</h3>
            <h3>Berikut Redaksi Acara IMG-ITB yang dapat kamu baca kembali!</h3>
          </div>
        </div>
        <Gallery sliderName="card" />
      </div>

      <div className={containerSection}>
        <div className={judulSection5}>
          <h1>Our Delightful Moments</h1>
        </div>
        <div>
          <Gallery sliderName="gallery" />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
