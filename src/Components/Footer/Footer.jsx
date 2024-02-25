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
import { isMobile } from "../../Helpers/mobileResponsive";

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
      {linkName === "/DPM" ? null : linkName === "/IMGTweet" ? null :(
        <div
          className={
            linkName === "/Geopoint" ||
            linkName === "/Geopoint/Navigacity" ||
            linkName === "/Geopoint/Ceremony"
              ? containerGeopoint
              : container
          }
          style={linkName === "/Pemilu" ? { background: "#FF4A01" } : null}

        >
          <div
            className={containertopcontact}
            style={
              linkName === "/Geopoint" ||
              linkName === "/Geopoint/Navigacity" ||
              linkName === "/Geopoint/Ceremony"
                ? { background: "#211954" }
                : linkName === "/Pemilu"
                  ? { background: " #EC3700" }
                  : null
            }
          >
            <div className={detail}>
              <div className={detailAddress}>
                <div
                  className={contactLogoContainer}
                  style={
                    linkName === "/Geopoint" ||
                    linkName === "/Geopoint/Navigacity" ||
                    linkName === "/Geopoint/Ceremony"
                      ? { background: "#281F64" }
                      : linkName === "/Pemilu"
                        ? { background: " #FF4A01" }
                        : null
                  }
                >
                  <img src={phone}></img>
                </div>
                <div
                  style={isMobile ? null : { width: "220px" }}
                  onClick={() =>
                    window.open("https://wa.me/6281316262145", "_blank")
                  }
                >
                  Hubungan Luar ITB : 081316262145 (Monica Andini)
                </div>
              </div>

              <div className={detailAddress}>
                <div
                  className={contactLogoContainer}
                  style={
                    linkName === "/Geopoint" ||
                    linkName === "/Geopoint/Navigacity" ||
                    linkName === "/Geopoint/Ceremony"
                      ? { background: " #281F64" }
                      : linkName === "/Pemilu"
                        ? { background: " #FF4A01" }
                        : null
                  }
                >
                  <img src={map}></img>
                </div>
                <div
                  style={isMobile ? null : { width: "220px" }}
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/place/Ikatan+Mahasiswa+Geodesi+ITB/@-6.8913318,107.6101316,17z/data=!3m1!4b1!4m5!3m4!1s0x2e68e65725dd09cb:0xbec9541178968548!8m2!3d-6.8913371!4d107.6123206?shorturl=1&hl=id",
                      "_blank"
                    )
                  }
                >
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
                <h1 style={isMobile ? { fontSize: "1rem" } : null}>
                  Kunjungi media sosial resmi himpunan kami di sini!
                </h1>
                <div className={imageContainer}>
                  <img
                    src={instagram}
                    onClick={() =>
                      window.open("https://instagram.com/imgitb", "_blank")
                    }
                  ></img>
                  <img
                    src={twitter}
                    onClick={() =>
                      window.open("https://twitter.com/imgitb", "_blank")
                    }
                  ></img>
                  <img
                    src={tiktok}
                    onClick={() =>
                      window.open("https://www.tiktok.com/@imgitb", "_blank")
                    }
                  ></img>
                  <img
                    src={email}
                    onClick={() =>
                      window.open("imgitb1952@gmail.com", "_blank")
                    }
                  ></img>
                  <img
                    src={youtube}
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/channel/UC2VxpgaGmMF-d9wuubo4Jew",
                        "_blank"
                      )
                    }
                  ></img>
                </div>
              </div>
              <div style={{ display: "flex" }}>
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
                  <a href="/InternalEvents">Internal</a>
                  <a href="/ParadeWisuda">Wisuda IMG</a>
                  <a href="/Geopoint">Geopoint</a>
                  {/* <h3>Student Chapter</h3> */}
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
                  {/* <h3>Georeference</h3> */}
                  <a href="/Locus">Locus</a>
                  <a href="/Geosphere">Geosphere</a>
                  <a href="/IMGx">IMG-X</a>
                </div>
              </div>
            </div>

            <div className={bottom}>
              <h1>© 2022 IMG-ITB | All rights reserved.</h1>
              <h1>#SuarPengembangan</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
