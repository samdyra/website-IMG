import React from "react";
import style from "./style.module.scss";
import LogoIMG from "../../assets/images/LogoIMG.png";

const Footer = () => {
  const { container, content, logo, logotext, bottom, karya } = style;
  return (
    <div className={container}>
      <div className={content}>
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
          <h3>Connect With Us</h3>
        </div>
        <div>
          <h3>Aktivitas</h3>
        </div>
        <div className={karya}>
          <h3>Karya</h3>
        </div>
      </div>

      <div className={bottom}>
        <h1>Copyright © 2022 IMG-ITB | All rights reserved.</h1>
      </div>
    </div>
  );
};

export default Footer;
