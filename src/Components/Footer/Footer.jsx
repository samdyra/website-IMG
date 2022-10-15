import React from "react";
import style from "./style.module.scss";
import LogoIMG from "../../assets/images/LogoIMG.png";
import {
  instagram,
  email,
  map,
  phone,
  tiktok,
  twitter,
  youtube,
} from "../../assets";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const linkName = location.pathname;
  const {
    container,
    content,
    logo,
    logotext,
    bottom,
    karya,
    contenttop,
    container2,
    imageContainer,
    detail,
    detailAddress,
    connect,
    containerGeopoint,
    containertopcontact,
    contactLogoContainer,
  } = style;
  return (
    <div>
      {linkName === "/DPM" ? null : (
        <div
          className={
            linkName === "/Geopoint" || linkName === "/Geopoint/Navigacity"
              ? containerGeopoint
              : container
          }
        >
          <div
            className={containertopcontact}
            style={
              linkName === "/Geopoint" || linkName === "/Geopoint/Navigacity"
                ? { background: "#211954" }
                : null
            }
          >
            <div className={detail}>
              <div className={detailAddress}>
                <div
                  className={contactLogoContainer}
                  style={
                    linkName === "/Geopoint" ||
                    linkName === "/Geopoint/Navigacity"
                      ? { background: "#281F64" }
                      : null
                  }
                >
                  <img src={phone}></img>
                </div>
                <div style={{ width: "220px" }}>
                  Hubungan Luar ITB : 085641010317 (Afnan)
                </div>
              </div>

              <div className={detailAddress}>
                <div
                  className={contactLogoContainer}
                  style={
                    linkName === "/Geopoint" ||
                    linkName === "/Geopoint/Navigacity"
                      ? { background: " #281F64" }
                      : null
                  }
                >
                  <img src={map}></img>
                </div>
                <div style={{ width: "220px" }}>
                  Jl. Ganesha No. 10, Coblong Bandung, Jawa Barat, Indonesia
                </div>
              </div>
            </div>
          </div>
          <div className={container2}>
            <div className={content}>
              <div className={connect}>
                <div>
                  <div className={logo} style={{ marginBlock: 20 }}>
                    <img src={LogoIMG} />
                    <div className={logotext}>
                      <h1 style={{ fontFamily: "jakartaBold" }}>
                        IKATAN MAHASISWA GEODESI
                      </h1>
                      <h1>INSTITUT TEKNOLOGI BANDUNG</h1>
                    </div>
                  </div>
                </div>
                <h1>Kunjungi media sosial resmi himpunan kami di sini!</h1>
                <div className={imageContainer}>
                  <img src={instagram}></img>
                  <img src={twitter}></img>
                  <img src={tiktok}></img>
                  <img src={email}></img>
                  <img src={youtube}></img>
                </div>
              </div>
              <div className={karya}>
                <h1
                  style={{
                    fontFamily: "jakartaBold",
                    fontSize: 20,
                    marginBottom: 15,
                  }}
                >
                  Aktivitas
                </h1>
                <h3>Internal</h3>
                <h3>Wisuda IMG</h3>
                <h3>Geopoint</h3>
                <h3>Student Chapter</h3>
              </div>
              <div className={karya}>
                <h1
                  style={{
                    fontFamily: "jakartaBold",
                    fontSize: 20,
                    marginBottom: 15,
                  }}
                >
                  Karya
                </h1>
                <h3>Georeference</h3>
                <h3>Locus</h3>
                <h3>Geosphere</h3>
                <h3>IMG-X</h3>
              </div>
            </div>

            <div className={bottom}>
              <h1>© 2022 IMG-ITB | All rights reserved.</h1>
              <h1>#EratBerdampak</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
