import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Carousel3D,
  ProgressBarCarousel,
  Modal,
  VideoEmbed,
} from "../../Components";
import style from "./style.module.scss";
import { CountDown, ProgressBar } from "./Components";
import { GegepNavi1, rundown, medal, jersey, bib } from "../../assets";
import Aos from "aos";
import "aos/dist/aos.css";
import { isMobile } from "../../Helpers/mobileResponsive";

const Navigacity = () => {
  const navigate = useNavigate();
  const [petaRute, setPetaRute] = useState(false);
  // useEffect(() => {
  //   window.open("https://www.google.com", "_blank");
  // }, []);

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
    titleTextH3,
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
              <h1>Navigacity:</h1>
            </div>
            <div className={titleText}>
              <div>FUN RUN</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                // marginTop: 20
              }}
            >
              <div className={titleTextH3}>
                <h2>Sabtu, 4 Februari 2023</h2>
              </div>
              {isMobile ? null : (
                <div
                  className={buttonMascot}
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSfcwaxn3v5iwfw6tSZjugCLMr3HaAB94PH4IwsMStXRiL5D-w/viewform",
                      "_blank"
                    )
                  }
                >
                  Pendaftaran Disini
                </div>
              )}
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
                <CountDown month={12} day={15} />
                {!isMobile ? null : (
                  <div
                    className={buttonMascot}
                    onClick={() =>
                      window.open(
                        "https://docs.google.com/forms/d/e/1FAIpQLSfcwaxn3v5iwfw6tSZjugCLMr3HaAB94PH4IwsMStXRiL5D-w/viewform",
                        "_blank"
                      )
                    }
                  >
                    Pendaftaran Disini
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={containerMascot}>
          <div>
            <div className={mascotText}>
              <div
              // data-aos="fade-right"
              // data-aos-duration="600"
              // data-aos-offset="300"
              >
                <h2>Navigacity:</h2>
                <h1>FUN RUN</h1>
              </div>
              <div
              // data-aos="fade-left"
              // data-aos-duration="600"
              // data-aos-offset="300"
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
              <div className={rutePetaContainer}>
                <iframe
                  src="https://www.google.com/maps/d/u/0/embed?mid=1SQn2DlLSLLhichXo1RGfh50IAlTKjlY&ehbc=2E312F"
                  width={isMobile ? "350" : "600"}
                  height={isMobile ? "300" : "400"}
                ></iframe>
              </div>
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
                  width={isMobile ? "350" : "600"}
                  height={isMobile ? "300" : "400"}
                ></iframe>
              </div>
            </div>
          )}

          <div
            className={fasilitasContainer}
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-offset={isMobile ? "150" : "300"}
          >
            <h1>Fasilitas</h1>
            <img src={jersey} style={{ width: 250, height: 67 }}></img>
            <img src={medal} style={{ width: 307, height: 52 }}></img>
            <img src={bib} style={{ width: 147, height: 42 }}></img>
          </div>
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
              <div
                className={buttonMascot}
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1VAOV2XiST6jQgpCigRDgaUaeE8MhRUaQ/view?usp=sharing",
                    "_blank"
                  )
                }
              >
                Race Guidelines
              </div>

              <div
                className={buttonMascot}
                style={{ marginTop: "32px" }}
                onClick={() =>
                  window.open("https://www.twibbonize.com/navigacity", "_blank")
                }
              >
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
