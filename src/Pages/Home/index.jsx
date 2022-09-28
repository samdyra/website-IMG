import React from "react";
import style from "./style.module.scss";
import earth from "../../assets/images/earth.png";
import diagram from "../../assets/images/diagram.png";
import background from "../../assets/images/background.png";
import { SliderData } from "../../assets/object/SliderData";
import Carousel from "../../Components/Carousel/Carousel";
import Gallery from "../../Components/Slider";

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
    organogram,
    containerSectionTop,
    containerSectionKegiatan,
    containerSection2,
  } = style;
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
          <h1>Asas, Sifat, dan Tujuan IMG-ITB</h1>
        </div>
        <div className={descSection2}>
          <div className={nilai}>
            <img src={earth} />
            <h2>Asas</h2>
            <p>blablablabla</p>
          </div>
          <div className={nilai}>
            <img src={earth} />
            <h2>Sifat</h2>
            <p>blablablabla</p>
          </div>
          <div className={nilai}>
            <img src={earth} />
            <h2>Tujuan</h2>
            <p>blablablabla</p>
          </div>
        </div>
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
        <div className={judulSection3}>
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
        <div className={judulSection3}>
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
