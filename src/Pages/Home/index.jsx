import React from "react";
import style from "./style.module.scss";
import earth from '../../assets/images/earth.png';
import diagram from '../../assets/images/diagram.png';


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
    organogram 
  } = style;
  return (
    <div className={container}>
      
      <div className={containerSection}>
      <div className={welcome}>
        <h2>Welcome to IMG-ITB Official Website</h2>
      </div>
      <div className={logo}>
        <div className={desc}>
        <h1>IKATAN MAHASISWA GEODESI-ITB</h1>
        <p>blablablablablablabalbalbalbalbablal</p>
        </div>
        <img src={earth}/>
      </div>
      </div>

      <div className={containerSection}>
        <div className={judulSection2}>
          <h1>Asas, Sifat, dan Tujuan IMG-ITB</h1>
        </div>
        <div className={descSection2} >
          <div className={nilai} >
            <img src={earth}/>
            <h2>Asas</h2>
            <p>blablablabla</p>
          </div>
          <div className={nilai} >
            <img src={earth}/>
            <h2>Sifat</h2>
            <p>blablablabla</p>
          </div>
          <div className={nilai} >
            <img src={earth}/>
            <h2>Tujuan</h2>
            <p>blablablabla</p>
          </div>
        </div>
      </div>

      <div className={containerSection}>
        <div className={judulSection3} >
          <h1>ORGANOGRAM BPH IMG-ITB GACOR</h1>
        </div>
        <div className={organogram}>
          <img src={diagram}/>
        </div>
      </div>

      <div className={containerSection}>
        <div className={judulSection2}>
          <h1>What's on IMG-ITB</h1>
        </div>
        <div>

        </div>
      </div>

      <div className={containerSection}>
        <div className={judulSection2}>
          <h1>Our Delightful Moments</h1>
        </div>
      </div>

    </div>
  );
};

export default HomeScreen;
