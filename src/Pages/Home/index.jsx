import React from "react";
import style from "./style.module.scss";
import earth from '../../assets/images/earth.png';


const HomeScreen = () => {
  const { container, desc, logo, welcome } = style;
  return (
    <div className={container}>
      <div className={welcome}>
        <h2>Welcome to IMG-ITB Official Website</h2>
      </div>
      <div className={logo}>
        <div className={desc}>
        <h1>IKATAN MAHASISWA</h1> 
        <h1>GEODESI-ITB</h1>
        <p>blablablablablablabalbalbalbalbablal</p>
        </div>
        <img src={earth}/>
      </div>
    </div>
  );
};

export default HomeScreen;
