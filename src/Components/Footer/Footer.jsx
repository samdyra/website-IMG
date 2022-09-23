import React from "react";
import style from "./style.module.scss";
import LogoIMG from "../../assets/images/LogoIMG.png";

const Footer = () => {
  const {
    container,
    content,
    logo,
    logotext,
    bottom,
    karya,
    contenttop,
    container2,
  } = style;
  return (
    <div className={container}>
      <div className={container2}>
        <div className={contenttop}>
          <div>
            <div className={logo}>
              <img src={LogoIMG} />
              <div className={logotext}>
                <h1>Ikatan Mahasiswa Geodesi</h1>
                <h1>Institut Teknologi Bandung</h1>
              </div>
            </div>
          </div>

          <div className={logotext}>
            <h1>#ERATBERDAMPAK</h1>
          </div>
        </div>

        <div className={content}>
          <div>
            <h2>Connect With Us</h2>
          </div>
          <div>
            <h2>Aktivitas</h2>
            <h3>Internal</h3>
            <h3>Wisuda IMG</h3>
            <h3>Geopoint</h3>
            <h3>Student Chapter</h3>
          </div>
          <div className={karya}>
            <h2>Karya</h2>
            <h3>Georeference</h3>
            <h3>Locus</h3>
            <h3>Geosphere</h3>
            <h3>IMG-X</h3>
          </div>
        </div>

        <div className={bottom}>
          <h1>Copyright © 2022 IMG-ITB | All rights reserved.</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
