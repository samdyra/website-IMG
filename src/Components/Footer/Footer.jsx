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
  } = style;
  return (
    <div>
      {linkName === "/Geopoint" || linkName === "/Geopoint/Navigacity" ? (
        <div className={containerGeopoint}>
          <div className={container2}>
            <div className={contenttop}>
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

              <div className={logotext}>
                <h1 style={{ fontFamily: "jakartaBold", fontStyle: "italic" }}>
                  #EratBerdampak
                </h1>
              </div>
            </div>

            <div className={content}>
              <div className={connect}>
                <h1>Connect With Us</h1>
                <div className={imageContainer}>
                  <img src={instagram}></img>
                  <img src={twitter}></img>
                  <img src={tiktok}></img>
                  <img src={email}></img>
                  <img src={youtube}></img>
                </div>
                <div className={detail}>
                  <div className={detailAddress}>
                    <img src={map}></img>
                    <div>
                      Jl. Ganesha No. 10, Coblong Bandung, Jawa Barat, Indonesia
                    </div>
                  </div>
                  <div className={detailAddress}>
                    <img src={phone}></img>
                    <div>Hubungan Luar ITB : 085641010317 (Afnan)</div>
                  </div>
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
              <h1>Copyright © 2022 IMG-ITB | All rights reserved.</h1>
            </div>
          </div>
        </div>
      ) : linkName === "/dpm" ? null : (
        <div className={container}>
          <div className={container2}>
            <div className={contenttop}>
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

              <div className={logotext}>
                <h1 style={{ fontFamily: "jakartaBold", fontStyle: "italic" }}>
                  #EratBerdampak
                </h1>
              </div>
            </div>

            <div className={content}>
              <div className={connect}>
                <h1>Connect With Us</h1>
                <div className={imageContainer}>
                  <img src={instagram}></img>
                  <img src={twitter}></img>
                  <img src={tiktok}></img>
                  <img src={email}></img>
                  <img src={youtube}></img>
                </div>
                <div className={detail}>
                  <div className={detailAddress}>
                    <img src={map}></img>
                    <div>
                      Jl. Ganesha No. 10, Coblong Bandung, Jawa Barat, Indonesia
                    </div>
                  </div>
                  <div className={detailAddress}>
                    <img src={phone}></img>
                    <div>Hubungan Luar ITB : 085641010317 (Afnan)</div>
                  </div>
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
              <h1>Copyright © 2022 IMG-ITB | All rights reserved.</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
