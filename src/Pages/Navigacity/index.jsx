import React, { useEffect, useState } from "react";
import { SliderData } from "../../assets/object/SliderData";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";

import {
  Carousel3D,
  ProgressBarCarousel,
  Modal,
  VideoEmbed,
} from "../../Components";
import style from "./style.module.scss";
import { CountDown, ProgressBar } from "./Components";
import { GegepNavi1, rundown } from "../../assets";
import Aos from "aos";
import "aos/dist/aos.css";

const Navigacity = () => {
  const navigate = useNavigate();

  const [petaRute, setPetaRute] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const {
    container,
    carouselcontainer,
    pageBackground,
    title,
    containerModal,
    containerMascot,
    buttonMascot,
    mascotText,
    titleText,
    titleTextH2,
    teaser,
    fasilitasContainer,
    rutePetaContainer,
    rutePetaButton,
    rutePetaButtonContainer,
    containerTop,
    countDownContainer,
    countDownTitle,
    gegepHeader,
  } = style;

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    openModal
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [openModal]);

  return (
    <>
      <Modal open={openModal} onClose={() => setOpenModal(false)}></Modal>
      {/* Geopoint IMG-ITB 2023 */}

      <div className={pageBackground}>
        <div style={{ zIndex: 100 }}></div>
        <div className={containerTop}>
          <div className={gegepHeader}>
            <img src={GegepNavi1} alt="gegepnavi1" />
          </div>
          <div className={title}>
            <div className={titleTextH2}>
              <h2>Navigacity:</h2>
            </div>
            <div className={titleText}>
              <h1>FUN RUN</h1>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className={titleTextH2}>
                <h2 style={{ fontSize: "35px" }}>Sabtu, 4 Februari 2023</h2>
              </div>
              <div className={buttonMascot}>Daftar Sekarang!</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "45px",
              }}
            >
              <div className={countDownContainer}>
                <div className={countDownTitle}>
                  <h3>Pendaftaran ditutup dalam:</h3>
                </div>
                <CountDown />
              </div>
            </div>
          </div>
        </div>
        <div className={containerMascot}>
          <div>
            <div className={mascotText}>
              <div
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-offset="300"
              >
                <h2>Navigacity:</h2>
                <h1>FUN RUN</h1>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-offset="300"
              >
                <p>
                  Navigacity merupakan salah satu rangkaian acara pada kegiatan
                  Geopoint IMG-ITB 2023: Spread the Joy in Our Journey yang
                  bertujuan untuk memperkenalkan keilmuan Teknik Geodesi dan
                  Geomatika serta peranannya di dalam industri, pembangunan,
                  permasalahan lingkungan, kebencanaan, dan lain-lain kepada
                  masyarakat umum. Navigacity dikemas dalam kegiatan fun run
                  yang diberi nama “Navigacity: “Geospatial Run”.
                </p>
                <p>
                  Navigacity merupakan sebuah konsep fun run dengan titik-titik
                  rahasia disajikan dalam acara ini. Navigacity memberikan 2
                  pilihan kategori yang dapat dipilih oleh peserta, yaitu Fun
                  Run 5 km dan Geotagging Run 5km dengan teknis yang dijelaskan
                  pada Guidebook Fun Run Geopoint IMG-ITB 2023. Konsep ini
                  dikemas sebagai upaya kami untuk memperkenalkan Teknik Geodesi
                  dan Geomatika dengan metode yang dapat diterima di masyarakat
                  secara luas. Harapannya, Navigacity dapat menjadi ajang
                  masyarakat untuk lebih mengenal Teknik Geodesi dan Geomatika.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={container}>
          {petaRute === false ? (
            <div
              data-aos="fade-right"
              data-aos-duration="600"
              data-aos-offset="300"
            >
              <div className={rutePetaButtonContainer}>
                <div className={rutePetaButton}>Rute</div>
                <div
                  className={rutePetaButton}
                  style={{ background: "#4A777E", color: "#F5FCB5" }}
                  onClick={() => setPetaRute(true)}
                >
                  Peta
                </div>
              </div>
              <div className={rutePetaContainer}></div>
            </div>
          ) : (
            <div
              data-aos="fade-right"
              data-aos-duration="600"
              data-aos-offset="300"
            >
              <div className={rutePetaButtonContainer}>
                <div
                  className={rutePetaButton}
                  style={{ background: "#4A777E", color: "#F5FCB5" }}
                  onClick={() => setPetaRute(false)}
                >
                  Rute
                </div>
                <div className={rutePetaButton}>Peta</div>
              </div>
              <div className={rutePetaContainer}>
                <iframe
                  src="https://www.google.com/maps/d/u/0/embed?mid=1SQn2DlLSLLhichXo1RGfh50IAlTKjlY&ehbc=2E312F"
                  width="600"
                  height="400"
                ></iframe>
              </div>
            </div>
          )}

          <div
            className={fasilitasContainer}
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-offset="300"
          ></div>
        </div>
        <div className={container}>
          <ProgressBar />
        </div>
        <div
          className={container}
          style={{
            paddingBottom: "170px",
            marginTop: "103px",
          }}
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-offset="300"
        >
          <div className={container} style={{ gap: "45px" }}>
            <img src={rundown} alt="rundown" />
            <div style={{ paddingTop: "120px" }}>
              <Link
                to={{
                  pathname:
                    "https://drive.google.com/file/d/1Vdf3tKSgP05bMI5uMoIpMXB-mLe-TWRm/view?usp=sharing",
                }}
                target="_blank"
              >
                <div className={buttonMascot}>Race Guidelines</div>
              </Link>

              <div className={buttonMascot} style={{ marginTop: "32px" }}>
                Twibbon
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigacity;
